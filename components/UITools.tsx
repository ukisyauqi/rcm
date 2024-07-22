"use client"

import Image from "next/image"
import { useState } from "react"

export default function UITools({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string
  width: number
  height: number
}) {
  const [show, setShow] = useState(false)
  return (
    <>
      <div
        className="fixed h-screen w-10 z-50"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      ></div>
      {show && (
        <div className="z-10 absolute w-[calc(100%-5px)] group">
          <div className="-ml-16" style={{ height: height, width: width }}>
            <Image src={imageUrl} alt="" height={height} width={width} />
            <div
              className="bg-[url('/ui-tools/square.svg')] absolute top-0"
              style={{ height: height, width: width }}
            ></div>
          </div>
        </div>
      )}
    </>
  )
}
