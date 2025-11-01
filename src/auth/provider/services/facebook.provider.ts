import { BaseOAuthService } from './base-oauth.service'
import { IFacebookProfile } from './types/facebook-provider.types'
import { IOptionsProvider } from './types/options-provider.types'
import { IUserInfoProvider } from './types/user-info.types'

export class FacebookProvider extends BaseOAuthService {
	public constructor(options: IOptionsProvider) {
		super({
			name: 'facebook',
			authorization_url: 'https://www.facebook.com/v18.0/dialog/oauth',
			access_url: 'https://graph.facebook.com/v18.0/oauth/access_token',
			profile_url: 'https://graph.facebook.com/me?fields=id,email,name,picture',
			scopes: options.scopes,
			client_id: options.client_id,
			client_secret: options.client_secret
		})
	}

	public extractUserInfo(data: IFacebookProfile): Promise<IUserInfoProvider> {
		return super.extractUserInfo({
			id: data.id,
			email: data.email,
			name: data.name,
			picture: data.picture?.data?.url || ''
		})
	}
}
