import { skipCSRFCheck } from "@auth/core";
import type {
  DefaultSession,
  NextAuthConfig,
  Session as NextAuthSession,
} from "next-auth";
import Discord from "next-auth/providers/discord";

import { db } from "@com/db";


import { PrismaAdapter } from "@auth/prisma-adapter"; 
import Cognito from "next-auth/providers/cognito";
import { Adapter } from "next-auth/adapters";

declare module "next-auth" {

  interface User {
    id?: string ;
    family_name: string;
    given_name: string;
    image?: string | null;
    roles: string[];
    email?: string | null;
    job_title: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }

}

// const adapter = PrismaAdapter({
//   prisma: db
// });

const adapter = PrismaAdapter(db,) as Adapter;


export const isSecureContext = process.env.NODE_ENV !== "development";

export const authConfig: NextAuthConfig = {
  adapter: adapter,
  secret: process.env.AUTH_SECRET,
  
  providers: [Discord,
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
      checks: ['none'],
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.given_name + ' ' + profile.family_name,
          given_name: profile.given_name,
          family_name: profile.family_name,
          job_title: profile['custom:job_title'],
          username: profile['cognito:username'],
          roles: profile['cognito:groups'],
          image: profile.picture,
          email: profile.email,
        }
      },
    })
  ],
callbacks: {
    session: (opts) => {
      if (!("user" in opts))
        throw new Error("unreachable with session strategy");

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        family_name: opts.user.family_name,
        given_name: opts.user.given_name,
        image: opts.user.image,
        roles: opts.user.roles,
        email: opts.user.email,
        job_title: opts.user.job_title,       

        },
      };
    },
  },
} satisfies NextAuthConfig;

// export const authConfig = {
//   adapter: adapter,
//   // In development, we need to skip checks to allow Expo to work
//   // ...(!isSecureContext
//   //   ? {
//   //       skipCSRFCheck: skipCSRFCheck,
//   //       trustHost: true,
//   //     }
//   //   : {}),
//   secret: process.env.AUTH_SECRET,
//   providers: [Discord,

//     Cognito({
//       clientId: process.env.COGNITO_CLIENT_ID,
//       clientSecret: process.env.COGNITO_CLIENT_SECRET,
//       checks: ['none'],
//       profile(profile, tokens) {
//         console.log('----------profile----------')
//         console.log(profile)
//         return profile;
//         return {
//           id: profile.sub,
//           name: profile.given_name + ' ' + profile.family_name,
//           given_name: profile.given_name,
//           family_name: profile.family_name,
//           job_title: profile['custom:job_title'],
//           username: profile['cognito:username'],
//           roles: profile['cognito:groups'],
//           image: profile.picture,
//           email: profile.email,

//           // ...profile,
//           // ...tokens,
//         }
//       },
//       issuer:
//         'https://cognito-idp.' +
//         process.env.COGNITO_REGION +
//         '.amazonaws.com/' +
//         process.env.COGNITO_USER_POOL_ID,
//     }),


//   ],
//   callbacks: {



//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//         // family_name: user.family_name,
//         // given_name: user.given_name,
//         // image: user.image,
//         // roles: user.roles,
//         // email: user.email,
//         // job_title: user.job_title,
//       },
//     }),
//   },
  
// } satisfies NextAuthConfig;

export const validateToken = async (
  token: string,
): Promise<NextAuthSession | null> => {
  const sessionToken = token.slice("Bearer ".length);
  const session = await adapter.getSessionAndUser?.(sessionToken);
  return session
    ? {
        user: {
          ...session.user,
        },
        expires: session.session.expires.toISOString(),
      }
    : null;
};

export const invalidateSessionToken = async (token: string) => {
  const sessionToken = token.slice("Bearer ".length);
  await adapter.deleteSession?.(sessionToken);
};