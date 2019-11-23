import { Lote } from "./Lote"


export class RetornoLote {
	constructor(
		public ID?: number,
		public StatusTransmissao?: string,
		public Mensagem?: string,
		public LoteID?: number,
		public Lote?: Lote
	) { }
}
