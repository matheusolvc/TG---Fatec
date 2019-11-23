import { Usuario } from "./Usuario"
import { Conta } from "./Contas/Conta"

export class Lote {
	constructor(
		public ID?: number,
		public DataAlteracao?: Date,
		public DataGeracao?: Date,
		public ValorTotalLote?: number,
		public StatusTransmissao?: string,
		public UsuarioID?: string,
		public Usuario?: Usuario,
		public Contas?: Conta[]
	) { }
}
