import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from 'next/image'

const rootLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt="Logo" width={38} height={38} />
          <h2 className='text-0primaryt-100'>PrepWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default rootLayout