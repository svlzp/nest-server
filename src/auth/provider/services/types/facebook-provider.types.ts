export interface IFacebookProfile extends Record<string, any> {
	id: string
	email: string
	name: string
	first_name: string
	last_name: string
	picture?: {
		data: {
			url: string
			width: number
			height: number
		}
	}
	access_token: string
	refresh_token?: string
}
