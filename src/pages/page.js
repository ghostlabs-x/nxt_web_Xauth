'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("session object is", session);
  }, [session]);
  return (
    <>
      {!session && (
        <>
          Not logged in <br />
          <button onClick={() => signIn()}>Log In</button>
        </>
      )}
      {/*Once user is logged in, check if session is present and do cool stuffs */}
      {session && (
        <>
          Logged in as {session.user.name} <br />
          <button onClick={() => signOut()}>Log out</button>
        </>
      )}
    </>
  );
}