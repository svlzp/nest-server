import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator'

import { AuthDto } from '@/auth/dto/auth.dto'

@ValidatorConstraint({ name: 'IsPasswordsMatching', async: false })
export class IsPasswordsMatchingConstraint
	implements ValidatorConstraintInterface
{
	public validate(passwordRepeat: string, args: ValidationArguments) {
		const obj = args.object as AuthDto
		return obj.password === passwordRepeat
	}

	public defaultMessage(validationArguments?: ValidationArguments) {
		return 'Passwords do not match'
	}
}
