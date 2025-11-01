export interface IUserInfoProvider {
	id: string
	email: string
	name: string
	picture: string
	access_token?: string | null
	refresh_token?: string | null
	provider: string
	expires_at?: number
}
