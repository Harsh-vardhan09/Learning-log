"use client";

import TextInput from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router=useRouter();
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      background: 'black',
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div>
        <TextInput  placeholder="enter room id" />
        <button onClick={()=>router.push('/chat/123 ')}>join room</button>
      </div>
    </div>
  )
}
