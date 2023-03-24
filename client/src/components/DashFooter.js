import React from 'react'
import { Footer } from 'flowbite-react'

const DashFooter = () => {
  const content = (
    <Footer container={true} className="bg-slate-700">
      <Footer.Copyright
      className='text-white'
        href="#"
        by="Flowbite™"
        year={2022}
      />
      <Footer.LinkGroup>
        <Footer.Link href="#" className='text-white'>
          About
        </Footer.Link>
        <Footer.Link href="#" className='text-white'>
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#" className='text-white'>
          Licensing
        </Footer.Link>
        <Footer.Link href="#" className='text-white'>
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )

  return content
}

export default DashFooter