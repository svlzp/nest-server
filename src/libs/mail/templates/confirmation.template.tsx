import { Body, Heading, Link, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from "react"

interface IProps {
    domain: string
    token: string
}

export const confirmationTemplate = ({ domain, token }: IProps) => {
    const confirmationLink = `${domain}/auth/confirm-email?token=${token}`

    return(
        <Html>
           <Body>    
             <Heading>Confirm your email</Heading>
              <Text>Please confirm your email address by clicking the link below :</Text>
             <Link href={confirmationLink}>Confirm Email</Link>
              <Text>If you did not create an account, no further action is required.</Text>
           </Body>
        </Html>
    )

}