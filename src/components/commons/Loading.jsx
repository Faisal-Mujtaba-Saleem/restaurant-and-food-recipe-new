import React from 'react'
import loadingGif from '../../assets/gifs/loading-red.gif';

function Loading() {
    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <img src={loadingGif} alt="Loading..." className='w-[5%]' />
            </div>
            <div className="h-screen"></div>
        </>
    )
}

export default Loading
