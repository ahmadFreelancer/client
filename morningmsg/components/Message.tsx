'use client'
import { useEffect } from "react"

export default function Message() {
  const fetchApi = () => {
    console.log('Fetching...')
    alert('fetching')
  }


  return (
    <div className="messageDivWrapper">
      <h1>Morning Messages for BFF</h1>
      <h3>Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by ZenQuotes API.
      </h3>
      
        <button className="btn" onClick={() => fetchApi()}>
          Generate Message
        </button>
      
    </div>
  )
}
