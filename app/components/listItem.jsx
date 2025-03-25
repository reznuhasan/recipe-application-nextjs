"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ListItem({path,activation,children}) {
    const activePath=usePathname();
  return (
    <li>
      <Link href={path} className={`hover:text-orange-500 ${(activePath===path) && activation? 'text-orange-500':""}`}>{children}</Link>
    </li>
  )
}
