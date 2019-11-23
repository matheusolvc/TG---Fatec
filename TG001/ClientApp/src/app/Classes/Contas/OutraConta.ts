import { Conta } from './Conta';
import { Usuario } from '../Usuario';
import { Fornecedor } from '../Fornecedor';

export class OutraConta extends Conta {
	constructor(
		//Conta
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

		//Outra Conta
		public FornecedorID?: number,
		public Fornecedor?: Fornecedor

	) {
		super(ID, Status, DataCriacao, DataAlteracao, DataEmissao, DataVencimento, DataPagamento, TipoConta, ValorDocumento, Multa, Juros, ValorAPagar, UsuarioID, Usuario);
	}

}
