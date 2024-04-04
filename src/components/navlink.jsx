'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({link}) => {
  
    const path = usePathname()
  return (
    <Link className={`rounded p-1 ${path==link.link && "bg-black text-white"}`} href={link.link} key={link.name}>{link.name}</Link>
  )
}

export default Navlink