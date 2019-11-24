import { Conta } from "./Conta";
import { Colaborador } from "../Colaborador";
import { Usuario } from "../Usuario";


export class Reembolso extends Conta {
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
		public Usuario?: Usuario,


		public DataRecibo?: Date,
		public Descricao?: string,
		public ColaboradorID?: string,
		public Colaborador?: Colaborador
	) {
		super(ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, NumeroDocumento, Serie, UsuarioID, Usuario);
	}
}
