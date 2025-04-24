import Link from "next/link"

export const LogoDashboard = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center border-b h-20 gap-2 cursor-pointer min-h-20 px-4"
    >
      <h1 className="text-xl font-bold">Face to QR</h1>
    </Link>
  )
}
