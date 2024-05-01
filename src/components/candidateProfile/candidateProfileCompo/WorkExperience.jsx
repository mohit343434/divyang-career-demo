import React from 'react';
import { LuDot } from "react-icons/lu";


const workExperienceData = [
  {
    "position": "Associate Partner | Trainer",
    "company": "Profitmart Securities Pvt. Ltd",
    "start_date": "06/06/2018",
    "end_date": "11/02/2022",
    "responsibilities": [
      "Leveraged experience to build algorithmic trading systems, effectively increasing profits by 18%."
    ]
  },
  {
    "position": "Content Moderator",
    "company": "Accenture Solutions Pvt Ltd",
    "start_date": "11/02/2022",
    "end_date": "11/05/2022",
    "responsibilities": [
      "Ensured online content compliance with 64+ policies and legal regulations.",
      "Reviewed 150+ daily content pieces for hate speech, plagiarism, copyright issues, ensuring compliance."
    ]
  },
  {
    "position": "Implementation Specialist",
    "company": "TechExped Technology Services Pvt Ltd | Everfi from Blackbaud.inc",
    "start_date": "24/04/2022",
    "end_date": "24/04/2023",
    "responsibilities": [
      "Achieved a 22% increase in productivity by developing and implementing automation software.",
      "Executed the development of 109+ websites and seamlessly integrated them with AWS S3 service using YAML configurations."
    ]
  },
  {
    "position": "Senior UI/UX Developer",
    "company": "TechExped Technology Services Pvt Ltd | Everfi from Blackbaud.inc",
    "start_date": "24/04/2023",
    "end_date": "Present",
    "responsibilities": [
      "Experience in designing and deploying multi-stage, multi-agent pipelines using Jenkins for automated software delivery, contributing to a 19% increase in performance.",
      "Experience in optimized cloud infrastructure configuration, leading to a 10% decrease in monthly cloud costs."
    ]
  }
];

const WorkExperience = () => {
  return (
    <div>
      <h1 className='text-2xl'>Work Experience</h1>
      <div className='flex flex-col item-center justify-center'>
        <section className='w-full'>
          {workExperienceData.map((exp, index) => (
            <div key={index} className=' top-0 bg-white py-3 z-10'>
              <div className='border-l-2 border-dashed border-orange-500 ml-3 mt-3 pb-2'>
                <div className='relative'>
                  <div className='absolute top-0 -left-1.5 bg-white h-3 w-3 rounded-full border-2 border-orange-500'></div>
                  <div className='pl-10'>
                    <div className='flex flex-col gap-3 '>
                      <h1 className='text-lg'>{exp.position}</h1>
                      <div className='md:flex-row flex flex-col'>
                        <span className='text-orange-500'>{exp.company}</span>
                        <LuDot className='mt-1 text-gray-400 text-xl hidden md:block' />
                        <span className='text-gray-500'>{exp.start_date} - {exp.end_date}</span>
                      </div>
                      <ul>
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className='text-gray-500'>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default WorkExperience;
