import React from 'react'
import { IoHeartSharp } from "react-icons/io5";

export default function Watermark() {
  return (
    <div className="text-zinc-600">
      Made with <IoHeartSharp className="inline" color="red" /> by <a target="_blank" href="https://github.com/kieradog" className="text-sky-600">Long Zhao</a>
    </div>
  )
}
