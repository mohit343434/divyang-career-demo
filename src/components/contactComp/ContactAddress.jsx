import React from 'react';

const ContactAddress = () => {
  return (
    <div className='w-full md:p-10'>
      <p className='text-xl  font-medium leading-10'>Phone number</p>
      <p className='leading-7 text-slate-500'>+91 877 935 2803</p>
      <p className='text-xl mt-5 font-medium leading-10'>Email address</p>
      <p className='leading-7 text-slate-500'>divyangcareer@gmail.com</p>
      <p className='text-xl mt-5 font-medium leading-10'>Address</p>
      <p className='leading-7 text-slate-500'>1 Ghanshyam Dube Tower, M.G Road, Borivali (E), <br />
        Mumbai – 400 066, Maharashtra, India</p>
      <div className='w-full h-72 border mt-6'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15068.702981685348!2d72.860734!3d19.231171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b16828f59939%3A0xc0d365e39e071ace!2sGirish%20Ghanshyam%20Dube!5e0!3m2!1sen!2sus!4v1711003511708!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactAddress;
