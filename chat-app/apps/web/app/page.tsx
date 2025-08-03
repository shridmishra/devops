"use client"
import React from 'react'
import TextInput from '@repo/ui/text-input'
import { useRouter } from 'next/navigation'

const page = () => {
  const  router = useRouter()
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",

    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        padding: "10px",
      }}>
        <TextInput placeholder='Room Name' />

        <button onClick={()=> router.push("/room/123")} style={{
          margin: "10px",
        }}>Join</button>
      </div>
    </div>
  )
}

export default page