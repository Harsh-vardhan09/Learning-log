import { log } from "console";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;
                console.log(username);
                console.log(password);
                
                
                const user = {
                    name: "aarsh",
                    id: "1",
                    email:username
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }