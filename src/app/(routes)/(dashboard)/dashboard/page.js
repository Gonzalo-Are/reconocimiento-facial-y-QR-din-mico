import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>

      <SignedOut>
        <div className="p-6 text-center text-gray-600">
          <p>
            Por favor,{" "}
            <Link href="/sign-in" className="text-blue-500 underline">
              inicia sesión
            </Link>{" "}
            para ver tu código QR.
          </p>
        </div>
      </SignedOut>
    </>
  );
}
