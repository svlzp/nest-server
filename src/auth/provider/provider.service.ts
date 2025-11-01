import { IOptions, ProviderOptions } from './provider.constants'
import { BaseOAuthService } from './services/base-oauth.service'
import { Inject, Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class ProviderService implements OnModuleInit {
	public constructor(
		@Inject(ProviderOptions) private readonly options: IOptions
	) {}
	public onModuleInit() {
		for (const provider of this.options.servise) {
			provider.baseUrl = this.options.baseUrl
		}
	}
	public findByService(service: string): BaseOAuthService | null {
		return this.options.servise.find(s => s.name === service) ?? null
	}
}
