import { BaseOAuthService } from './services/base-oauth.service'
import { FactoryProvider, ModuleMetadata } from '@nestjs/common'

export const ProviderOptions = Symbol()

export interface IOptions {
	baseUrl: string
	servise: BaseOAuthService[]
}

export type IAsyncOptions = Pick<ModuleMetadata, 'imports'> &
	Pick<FactoryProvider<IOptions>, 'useFactory' | 'inject'>
