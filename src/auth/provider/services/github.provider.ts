import { BaseOAuthService } from './base-oauth.service'
import { IGitHubProfile } from './types/github-provider.types'
import { IOptionsProvider } from './types/options-provider.types'
import { IUserInfoProvider } from './types/user-info.types'

export class GitHubProvider extends BaseOAuthService {
	private GITHUB_BASE_URL = 'https://api.github.com'

	public constructor(options: IOptionsProvider) {
		super({
			name: 'github',
			authorization_url: 'https://github.com/login/oauth/authorize',
			access_url: 'https://github.com/login/oauth/access_token',
			profile_url: `https://api.github.com/user`,
			scopes: options.scopes,
			client_id: options.client_id,
			client_secret: options.client_secret
		})
	}

	public extractUserInfo(data: IGitHubProfile): Promise<IUserInfoProvider> {
		return super.extractUserInfo({
			id: data.id.toString(), // Конвертируем number в string
			email: data.email || '', // GitHub email может быть null
			name: data.name || data.login || '', // Используем login если name отсутствует
			picture: data.avatar_url || ''
		})
	}
}
