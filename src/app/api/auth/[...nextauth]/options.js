import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  // callbacks: {
  //   async signIn({ account, profile }) {
  //     // Send a request to your backend API with the user's Google profile data
  //     const response = await fetch(
  //       "https://your-backend-api.com/create-account",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(profile),
  //       }
  //     );
  //     // Check the response status and return true or false accordingly
  //     if (response.ok) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  //   async session({ session, user }) {
  //     // Add any additional data to the session object that you want to access from the frontend
  //     session.userId = user.id;
  //     session.role = user.role;
  //     return session;
  //   },
  // },
};
