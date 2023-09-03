import Link from "next/link";

export default function Menu() {
  return (
    <div className='p-2'>
      <Link href={"/"} className='px-2 font-bold'>
        Home
      </Link>
      <Link href={"/login"} className='px-2 font-bold'>
        Login
      </Link>
      <Link href={"/dashboard"} className='px-2 font-bold'>
        Dashboard
      </Link>
    </div>
  );
}
