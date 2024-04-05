import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default function Login() {
    return (
        <div className="w-full h-dvh">
            <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
            <RegisterLink postLoginRedirectURL="/dashboard">Sign up</RegisterLink>
        </div>
    )
}