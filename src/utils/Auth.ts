import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function isAuthenticated() {
    const {
        isAuthenticated
    } = getKindeServerSession();
    return isAuthenticated;
}

export default isAuthenticated
