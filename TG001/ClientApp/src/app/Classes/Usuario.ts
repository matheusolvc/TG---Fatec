import { BaseUsuario } from "./BaseUsuario";



export class Usuario extends BaseUsuario {
	constructor(
		public SecurityStamp?: string,
		public PhoneNumberConfirmed?: boolean,
		public PhoneNumber?: string,
		public PasswordHash?: string,
		public NormalizedUserName?: string,
		public NormalizedEmail?: string,
		public LockoutEnd?: Date,
		public LockoutEnabled?: boolean,
		public Id?: string,
		public EmailConfirmed?: boolean,
		public Email?: string,
		public ConcurrencyStamp?: string,
		public AccessFailedCount?: number,
		public TwoFactorEnabled?: boolean,
		public UserName?: string,

		public Matricula?: string
	) {
		super(SecurityStamp,PhoneNumberConfirmed,PhoneNumber,PasswordHash,NormalizedUserName,NormalizedEmail,LockoutEnd,LockoutEnabled,Id,EmailConfirmed,Email,ConcurrencyStamp,AccessFailedCount,TwoFactorEnabled,UserName);
	}
}
