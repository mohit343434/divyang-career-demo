import React from 'react'

const LayoutWraper = ({ children }) => {
    return (
        <div className='m-auto max-w-screen-xl'>{children}</div>
    )
}

export default LayoutWraper