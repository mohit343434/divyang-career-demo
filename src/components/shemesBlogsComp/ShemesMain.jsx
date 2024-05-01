import React from 'react'
import ShemesBlogProps from './ShemesBlogProps'
import Blog1 from "../../assets/Blog1.jpg"
import Blog2 from "../../assets/Blog2.webp"
import Blog3 from "../../assets/Blog3.webp"
import Blog4 from "../../assets/Blog4.webp"
import SearchBlogAndSchemsCompo from './SearhBlogAndSchemsCompo'

const ShemesMain = () => {
  const Data = [
    {
      img: Blog1,
      blog: "Shemes",
      date: "10/01/2002",
      hadding: "Empowering Lives: Unraveling the Umbrella Scheme for Development of Scheduled Castes",
      subhadding: "Introduction: The Umbrella Scheme for Development of Scheduled Castes stands as a pivotal government initiative…",
      linkToNavigation: "/"
    }, {
      img: Blog2,
      blog: "Shemes",
      date: "10/01/2002",
      hadding: "Empowering Lives: Unraveling the Umbrella Scheme for Development of Scheduled Castes",
      subhadding: "Introduction: The Umbrella Scheme for Development of Scheduled Castes stands as a pivotal government initiative…",
      linkToNavigation: "/"
    },
    {
      img: Blog3,
      blog: "Shemes",
      date: "10/01/2002",
      hadding: "Empowering Lives: Unraveling the Umbrella Scheme for Development of Scheduled Castes",
      subhadding: "Introduction: The Umbrella Scheme for Development of Scheduled Castes stands as a pivotal government initiative…",
      linkToNavigation: "/"
    },
    {
      img: Blog4,
      blog: "Shemes",
      date: "10/01/2002",
      hadding: "Empowering Lives: Unraveling the Umbrella Scheme for Development of Scheduled Castes",
      subhadding: "Introduction: The Umbrella Scheme for Development of Scheduled Castes stands as a pivotal government initiative…",
      linkToNavigation: "/"
    },
  ]
  return (
    <>
      <div className='flex justify-between flex-wrap lg:flex-nowrap md:py-12'>
        <div className='flex flex-wrap justify-center gap-6 px-5' >
          {
            Data.map((item) => {
              return (
                <ShemesBlogProps
                  img={item.img}
                  blog={item.blog}
                  date={item.date}
                  hadding={item.hadding}
                  subhadding={item.subhadding}
                  linkToNavigation={item.linkToNavigation}
                />
              )
            })
          }
        </div>
        <div>
          <SearchBlogAndSchemsCompo />
        </div>
      </div>

    </>
  )
}

export default ShemesMain