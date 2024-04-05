import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default function Home() {

  return (
    <>
      {redirect("/dashboard")}
    </>
  );
}
