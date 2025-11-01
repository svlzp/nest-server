/* eslint-disable @typescript-eslint/require-await */
import { IProvider } from './types/base-provider.types'
import { IUserInfoProvider } from './types/user-info.types'
import {
	BadRequestException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'

@Injectable()
export class BaseOAuthService {
	private BASE_URL: string

	public constructor(private readonly options: IProvider) {}

	protected async extractUserInfo(data: any): Promise<IUserInfoProvider> {
		return {
			...data,
			provider: this.options.name
		} as IUserInfoProvider
	}
	public async getAuthorizationUrl() {
		const redirectUri = this.getRedirectUrl()
		const params = new URLSearchParams({
			client_id: this.options.client_id,
			redirect_uri: redirectUri,
			response_type: 'code',
			scope: (this.options.scopes ?? []).join(' '),
			access_type: 'offline',
			prompt: 'select_account'
		})
		const authUrl = `${this.options.authorization_url}?${params.toString()}`
		console.log(
			`[OAuth Debug] Authorization URL for ${this.options.name}:`,
			authUrl
		)
		console.log(`[OAuth Debug] Redirect URI: ${redirectUri}`)
		return authUrl
	}
	public async findUserByCode(code: string): Promise<IUserInfoProvider> {
		const client_id = this.options.client_id
		const client_secret = this.options.client_secret

		const tokenQuery = new URLSearchParams({
			client_id,
			client_secret,
			code,
			redirect_uri: this.getRedirectUrl(),
			grant_type: 'authorization_code'
		})
		const tokenRequest = await fetch(this.options.access_url, {
			method: 'POST',
			body: tokenQuery.toString(),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			}
		})
		if (!tokenRequest.ok) {
			throw new BadRequestException(
				`Failed to fetch access token: ${this.options.profile_url}`
			)
		}
		const tokenResponse = (await tokenRequest.json()) as {
			access_token?: string
			refresh_token?: string | null
			expires_at?: number
			expires_in?: number
		}

		if (!tokenResponse.access_token) {
			throw new BadRequestException('Access token not found in response')
		}
		const profileRequest = await fetch(this.options.profile_url, {
			headers: {
				Authorization: `Bearer ${tokenResponse.access_token}`
			}
		})
		if (!profileRequest.ok) {
			throw new UnauthorizedException(
				`Failed to fetch user profile: ${this.options.profile_url}`
			)
		}
		const user = (await profileRequest.json()) as Record<string, unknown>
		const userData = await this.extractUserInfo(user)

		return {
			...userData,
			access_token: tokenResponse.access_token,
			refresh_token: tokenResponse.refresh_token || null,
			expires_at: tokenResponse.expires_at || tokenResponse.expires_in,
			provider: this.options.name
		}
	}
	public getRedirectUrl(): string {
		const redirectUrl = `${this.BASE_URL}/auth/oauth/callback/${this.options.name}`
		console.log(
			`[OAuth Debug] Provider: ${this.options.name}, Redirect URL: ${redirectUrl}`
		)
		return redirectUrl
	}

	set baseUrl(url: string) {
		this.BASE_URL = url
	}
	get name(): string {
		return this.options.name
	}
	get accessUrl(): string {
		return this.options.access_url
	}
	get profileUrl(): string {
		return this.options.profile_url
	}
	get scopes(): string[] {
		return this.options.scopes
	}
}
