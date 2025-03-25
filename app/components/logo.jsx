import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/"className="text-3xl font-bold">
      <Image
        src="/lws-kitchen.png" 
        alt="Logo"
        width={80} 
        height={10} 
      />
      </Link>
    </div>
  )
}
