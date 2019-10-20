import { Conta } from './Conta';
import { TimeSpan } from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Imposto extends Conta {
  constructor(
    
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

    
    public LinhaDigitavel?: string,
    public CNPJMatriz?: string,
    public ID?: number,
    public CodigoImposto?: number,
    public PeriodoApuracao?: TimeSpan,
  ) {
    super();
    //super();
  }
  //constructor() {}
}
