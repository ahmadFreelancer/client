'use client'
import { useState } from "react"

export default function Footer() {
    const [actions, setActions] = useState(0)

    return (
        <footer>
            <h4>No. of users, generated messages: {actions}</h4>
            {/* <button onClick={() => setActions(actions+1)}>Plus</button>
      <button onClick={() => setActions(actions-1)}>Minus</button> */}
        </footer>
    )
}
