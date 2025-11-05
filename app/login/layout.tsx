import { ReactNode } from "react";

export default function LoginLayout( {children}:{children:ReactNode} ){
    return (
        <h1>Secure Page {children}</h1>
    )
}