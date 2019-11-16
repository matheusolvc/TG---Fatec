import {
	Component,
	Directive,
	NgModule,
	Input,
	ViewContainerRef,
	Compiler,
	ComponentFactory,
	ModuleWithComponentFactories,
	ComponentRef,
	ReflectiveInjector, OnInit, OnDestroy, Inject
} from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import {Http} from "@angular/http";
//import 'rxjs/add/operator/map';

export function createComponentFactory(compiler: Compiler, metadata: Component): Promise<ComponentFactory<any>> {
	const cmpClass = class DynamicComponent { };
	const decoratedCmp = Component(metadata)(cmpClass);

	@NgModule({ imports: [CommonModule, RouterModule], declarations: [decoratedCmp] })
	class DynamicHtmlModule { }

	return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
		.then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
			return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
		});
}

@Directive({ selector: 'mvc-partial' })
export class MvcPartialDirective implements OnInit, OnDestroy {
	html: string = '<p></p>';
	@Input() url: string;
	cmpRef: ComponentRef<any>;

	constructor(private vcRef: ViewContainerRef, private compiler: Compiler, private http: HttpClient) { }

	ngOnInit() {
		this.http.get(this.url)
			.subscribe(
				(html) => {
					this.html = html.toString();
					if (!html) return;

					if (this.cmpRef) {
						this.cmpRef.destroy();
					}

					const compMetadata = new Component({
						selector: 'dynamic-html',
						template: this.html,
					});

					createComponentFactory(this.compiler, compMetadata)
						.then(factory => {
							const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
							this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
						});
				},
				err => console.log(err),
				() => console.log('MvcPartial complete')
			);
	}

	ngOnDestroy() {
		if (this.cmpRef) {
			this.cmpRef.destroy();
		}
	}
}
