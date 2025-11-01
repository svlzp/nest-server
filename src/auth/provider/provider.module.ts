import { IAsyncOptions, IOptions, ProviderOptions } from './provider.constants'
import { ProviderService } from './provider.service'
import { DynamicModule, Module } from '@nestjs/common'

@Module({})
export class ProviderModule {
	public static regester(options: IOptions): DynamicModule {
		return {
			module: ProviderModule,
			providers: [
				{
					useValue: options.servise,
					provide: ProviderOptions
				},
				ProviderService
			],
			exports: [ProviderService]
		}
	}
	public static regesterAsync(options: IAsyncOptions): DynamicModule {
		return {
			module: ProviderModule,
			imports: options.imports,
			providers: [
				{
					useFactory: options.useFactory,
					provide: ProviderOptions,
					inject: options.inject
				},
				ProviderService
			],
			exports: [ProviderService]
		}
	}
}
