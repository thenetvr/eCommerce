import UserInfo from "@/components/auth/UserInfo";
import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  // function to get user session (user login data)
  const session = await getServerSession(authOptions);

  // if there's no session data, go back to login
  if (!session) redirect("/auth/login");

  return (
    <div>
      <UserInfo />
    </div>
  );
}
