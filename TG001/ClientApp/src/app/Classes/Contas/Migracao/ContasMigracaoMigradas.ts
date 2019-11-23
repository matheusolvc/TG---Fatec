import { ContasMigracao } from "./ContasMigracao"

export class ContasMigracaoMigradas {
	constructor(

		public ID: number,
		public ContasMigracaoID: number,
		public LoteID: number,
		public DataMigracao: Date,
		public ContaMigracao: ContasMigracao,
	) { }
}

