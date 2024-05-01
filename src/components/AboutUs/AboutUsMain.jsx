import LayoutWraper from '@/src/layout/LayoutWraper'
import React from 'react'
import AboutUsBanner from './AboutUsCompo/AboutUsBanner'
import OurMission from './AboutUsCompo/OurMission'
import JoinnUs from './AboutUsCompo/JoinnUs'
import OurCommitment from './AboutUsCompo/OurCommitment'
import WhyWeExist from './AboutUsCompo/WhyWeExist'
import WhatWeDo from './AboutUsCompo/WhatWeDo'
import OurVision from './AboutUsCompo/OurVision'

const AboutUsMain = () => {
  return (
    <div >
      <LayoutWraper>
        <AboutUsBanner/>
        <OurMission/>
        <OurVision/>
        <WhyWeExist/>
        <WhatWeDo/>
        <OurCommitment/>
      </LayoutWraper>
      <JoinnUs/>
    </div>
  )
}

export default AboutUsMain
