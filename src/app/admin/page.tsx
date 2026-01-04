import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";
import { syncUser } from "@/lib/actions/users";

async function AdminPage() {
    const user = await currentUser();

    await syncUser();
    
    // user is not logged in
    if(!user) redirect('/');

    const adminEmail = process.env.ADMIN_EMAIL;
    const userEmail = user.emailAddresses[0]?.emailAddress;

    // user is not the admin
    if(!adminEmail || adminEmail !== userEmail) redirect('/dashboard');
  return <AdminDashboardClient />;
}

export default AdminPage;
