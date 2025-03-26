"use client"
import { useRouter } from "next/navigation"

export default function ViewButton({path,children}) {
    const router=useRouter()
    const handleClick=()=>{
        router.push(path)
    }
  return (
    <button onClick={handleClick} className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600">
    {children}  
    </button>
  )
}
