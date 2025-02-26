import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div style={{display:'flex'}}>
        <Link href={'/'}>Home</Link>
        <Link href={'./about'}>About</Link>
    </div>
  )
}

export default Header