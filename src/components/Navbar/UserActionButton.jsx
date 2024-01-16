import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

const UserActionButton = async () => {
  const user = await getServerSession(authOption);
  const actionlabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "api/auth/signout" : "api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-12"
      >
        {actionlabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
