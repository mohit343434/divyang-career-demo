import React from 'react'
import FounderHead from './FounderNoteCompo/FounderHead'
import LayoutWraper from '@/src/layout/LayoutWraper'
import JoinUs from './FounderNoteCompo/JoinUs'
import FounderNote from './FounderNoteCompo/FounderNote'

const FoundersNoteMain = () => {
  return (
    <div className='flex flex-col'>
        <FounderHead/>
        <LayoutWraper>
            <FounderNote/>
        </LayoutWraper>
        <JoinUs/>
      
    </div>
  )
}

export default FoundersNoteMain
