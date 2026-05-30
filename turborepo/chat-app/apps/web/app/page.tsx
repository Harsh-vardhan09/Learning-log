"use client";

import TextInput from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router=useRouter();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div>
        <TextInput  placeholder="enter room id" />
        <button className="bg-white"  onClick={()=>router.push('/chat/123 ')}>join room</button>
      </div>
    </div>
  )
}
