import { Conta } from './Conta';
import { Usuario } from '../Usuario';

export class Imposto extends Conta {
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
		public Usuario?: Usuario,

		public PeriodoApuracaoInicio?: Date,
		public PeriodoApuracaoFim?: Date,
		public CodigoImposto?: number,
		public LinhaDigitavel?: string,
		public CNPJMatriz?: string
	) {
		super(ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, UsuarioID, Usuario);

	}
}
