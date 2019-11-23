export class ContasMigracao {
	constructor(
		public ID?: number,
		public DataEmissao?: Date,
		public DataVencimento?: Date,
		public DataPagamento?: Date,
		public Tipo?: string,
		public Valor?: number,
		public Multa?: number,
		public Juros?: number
	) { }
}
