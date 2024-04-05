import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default function Home() {
  const houseCheck = false
  return (
    <>
      {/* {houseCheck ? children : redirect("/notes")} */}
      {houseCheck ? redirect("/dashboard") : redirect("/house")}

    </>
  );
}
