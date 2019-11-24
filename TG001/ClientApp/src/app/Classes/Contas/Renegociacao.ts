import { Conta } from "./Conta";
import { Usuario } from "../Usuario";

export class Renegociacao extends Conta {
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
		public UsuarioID?: string,
		public NumeroDocumento?: string,
		public Serie?: string,
		public Usuario?: Usuario,


		public DataSolicitacao?: Date,
		public TipoRenegociacao?: string,
		public QuantidadeParcelas?: number,
		public NovaDataVencimento?: Date,
		public NovoValor?: number,
		public Observacao?: string,
		public ContaID?: number,
		public ContaRenegociada?: Conta
	) {
		super(ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, NumeroDocumento, Serie, UsuarioID, Usuario);
	}
}

