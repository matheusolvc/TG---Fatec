import { Usuario } from "../Usuario";


export class Conta {

	constructor(
		public ID?: number,
		public Status?: string,
		public DataCriacao?: Date,
		public DataAlteracao?: Date,
		public DataEmissao?: Date,
		public DataVencimento?: Date,
		public DataPagamento?: Date,
		public TipoConta?: number,
		public ValorDocumento?: number,
		public Multa?: number,
		public Juros?: number,
		public ValorAPagar?: number,
		public NumeroDocumento?: string,
		public Serie?: string,

		public UsuarioID?: string,
		public Usuario?: Usuario
	) { }
}
