import { ConfigService } from '@nestjs/config'
import { IOptions } from '../provider/provider.constants'
import { GitHubProvider } from '../provider/services/github.provider'
import { GoogleProvider } from '../provider/services/google.provider'

export const getProvidrsConfig = (configServise: ConfigService): IOptions => ({
	baseUrl:
		configServise.getOrThrow<string>('APPLICATION_URL') ||
		'http://localhost:4000',
	servise: [
		new GoogleProvider({
			client_id: configServise.get<string>('GOOGLE_CLIENT_ID') || '',
			client_secret:
				configServise.get<string>('GOOGLE_CLIENT_SECRET') || '',
			scopes: ['email', 'profile']
		}),
		new GitHubProvider({
			client_id: configServise.get<string>('GITHUB_CLIENT_ID') || '',
			client_secret:
				configServise.get<string>('GITHUB_CLIENT_SECRET') || '',
			scopes: ['user:email', 'read:user']
		})
	]
})
