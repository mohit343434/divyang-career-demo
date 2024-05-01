import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const RightSideCard = () => {
    return (
        <div className='flex justify-start items-start'>
            <Card className='shadow-md p-5  flex flex-col w-full min-w-52'>
                <Button className="bg-divyang">Apply Now</Button>
            </Card>
        </div>
    )
}

export default RightSideCard