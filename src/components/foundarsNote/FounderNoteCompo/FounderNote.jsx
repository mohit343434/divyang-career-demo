import React from 'react'
import Reg1 from '../../../assets/Reg1.avif'
const FounderNote = () => {
  return (
    <div className='md:px-16 px-6'>
    <div className='flex flex-col '>
      <div className='md:flex-row py-6 gap-7 flex flex-col text-justify'>
        <div className='md:w-[60%]'>
          <p className=' text-justify text-gray-600 text-lg'>During my journey towards empowering the Divyangs (PwDs) of our country I have observed that PwDs are very keen to make themselves self reliant and also have a great zeal to fight all odds.  The PwDs who are working in private organisations have also been unable to sustain their jobs due to various compelling reasons. I was pained to see that the PwDs were carrying out various peaceful demonstrations and protests against the government demanding for equal opportunities in the government of India and state bodies. The Rights of Persons with Disabilities (RPWD) Act, 2016, the Government of India has proactively reserved a Quota for people suffering from disabilities from 3% to 4% in government jobs and from 3% to 5% in higher education institute, underscoring it is commitment to inclusion and equal opportunity. Our focus will be on vacancies in the Government bodies at the Centre and in the States since a considerable number of these reserved positions remain unfilled across different levels of governance: Central Government, State Government, PSU’s, Nagar Palika, etc. However, we do not rule out importance of Private Companies and other organizations. It is also seen that there is No integrated data repository with the government bodies where is a person can identify the positions that are vacant or filled. </p>
        </div>
        <div className='md:w-[40%]'>
          <img src={Reg1} className='' />
          <p className='text-justify text-lg font-semibold'>National Award as the "Best Individual working for Empowerment of Persons with Disabilities (Divyangjans)" (Government of India) -World Disability Day by the Ministry of Social Justice & Empowerment.</p>
        </div>
      </div>
      
      <div className=' flex flex-col text-gray-600 gap-4 text-lg text-justify'>
      <p>Hence the need for creating a dedicated platform for Divyangjans has risen to explore all the vacant positions and advise divyangs to apply as per the rules and regulations. We do not claim to give jobs but to keep the PwDs informed about opportunities as per laid down conditions of that authority. I am incredibly humbled and excited to announce our career oriented platform,<b>Divyang Career</b> , dedicated to empowering individuals with disabilities. I am deeply passionate about creating a more inclusive world, where abilities shine brighter than any limitations.</p>
      <p>Our journey began with a simple yet profound realization: talent knows no boundaries, and every individual, regardless of their unique abilities, deserves the opportunity to thrive in the professional world. It is a belief rooted in the idea that diversity is not merely a checkbox but a source of strength and innovation.</p>
      <p><b>Divyang Career</b> is not just another job portal; it’s a manifestation of our commitment to bridging the gap between talent and opportunity. Our vision is clear: to create a more inclusive and equitable workforce for various Government and private organizations. We believe that by providing a platform where individuals with disabilities can showcase their skills, experiences, and unique perspectives, we can connect them with employers who share our commitment to diversity.</p>
      <p>We understand the challenges that job seekers with disabilities often face – from unconscious biases to physical barriers. That’s why we’ve designed our platform to be accessible, user-friendly, and supportive. We offer not only a portal for job listings but also a community that shares resources, encouragement, and guidance. This platform is a labour of love, a mission to create a more inclusive world. We are deeply committed to making a difference.</p>
      <p>Thank you for your support, your trust, and your belief in the power of inclusivity. Together, we can change lives, transform workplaces, to make the divyangs (PwDs) Atma Nirbhar and make the world a better place for all.</p>
      </div>
    </div>
    </div>
  )
}

export default FounderNote
