'use client'
import * as React from "react"
import { Button } from "@/components/ui/button";
import { upload } from "@/app/rental/test";

export default function Home() {

  return (
    <Button onClick={() => upload()}/>
  )
}

