import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GerenciarImpostosService {
  constructor(private http: HttpClient) {
  }
  private baseUrl: string = window.location.origin;
}
