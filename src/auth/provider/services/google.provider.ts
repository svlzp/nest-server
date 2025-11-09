import { BaseOAuthService } from './base-oauth.service'
import { IGoogleProfile } from './types/google-provider.types'
import { IOptionsProvider } from './types/options-provider.types'
import { IUserInfoProvider } from './types/user-info.types'

export class GoogleProvider extends BaseOAuthService {
	private GOOGLE_BASE_URL = 'https://www.googleapis.com'

	public constructor(options: IOptionsProvider) {
		super({
			name: 'google',
			authorization_url: 'https://accounts.google.com/o/oauth2/auth',
			access_url: 'https://oauth2.googleapis.com/token',
			profile_url: `https://www.googleapis.com/oauth2/v3/userinfo`,
			scopes: options.scopes,
			client_id: options.client_id,
			client_secret: options.client_secret
		})
	}
	public extractUserInfo(data: IGoogleProfile): Promise<IUserInfoProvider> {
		return super.extractUserInfo({
			id: data.sub,
			email: data.email,
			name: data.name,
			picture: data.picture
		})
	}
}
