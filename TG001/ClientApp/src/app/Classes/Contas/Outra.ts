import { Conta } from './Conta';

export class Outra extends Conta {
  constructor(
    //Conta
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
    public Usuario?: number,

    //Boleto
    public ID?: number,
    public IDFornecedor?: string,
    public CNPJ?: string,
    public RazaoSocial?: string,
    public NumDocumento?: string,
    public LinhaDigitavel?: string

    
  )
  {
    super();
  }

}
