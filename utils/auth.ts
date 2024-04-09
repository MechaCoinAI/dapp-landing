import TwitterProvider from 'next-auth/providers/twitter'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: String(process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY),
      clientSecret: String(process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET),
      version: '2.0' // opt-in to Twitter OAuth 2.0
    })
  ],
  callbacks: {
    session: async ({ session, token }: any) => {
      if (session?.user) {
        session.user.id = token.uid
      }
      return session
    },
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.uid = user.id
      }
      return token
    },
    redirect: async ({ url, baseUrl }: any) => {
      return Promise.resolve(url.startsWith(baseUrl) ? url : baseUrl)
    }

    // redirect: async ({ url, baseUrl }: { url: string, baseUrl: string }) => {
    //   console.log('redirect', url, baseUrl)
    //   if (url.startsWith("/")) {
    //     return `${baseUrl}${url}`; }
    //   else if (new URL(url).origin === baseUrl) {
    //     return url; }
    //   return baseUrl;
    // }
  },

  secret: process.env.NEXTAUTH_SECRET
}
