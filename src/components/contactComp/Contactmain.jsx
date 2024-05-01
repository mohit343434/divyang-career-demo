import React from 'react'
import ContactAddress from './ContactAddress'
import ContactFrom from './ContactFrom'

const Contactmain = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full md:mt-14  pb-10">
        <h1 className="text-center text-4xl font-semibold p-4">Contact Us</h1>
        <p className="text-center font-extralight text-xl  text-slate-600 ">Have a question or need more information? <br />
          Just drop us a line!</p>
      </div>
      <div className='md:flex-row flex flex-col md:px-12 px-5 pb-10 gap-5' >
        <ContactAddress />
        <ContactFrom />
      </div>

    </>

  )
}

export default Contactmain
