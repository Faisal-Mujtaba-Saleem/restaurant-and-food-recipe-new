import React from 'react'

function Footer({ appName }) {
    return (
        <footer className="bg-gray-100 py-4 font-light tracking-wide leading-relaxed text-sm text-center font-rubic">
            <p className='text-[#999999]'>&copy; Copyright {new Date().getFullYear()}. "{appName}" by Nunforest. All rights reserved.</p>
        </footer>
    )
}

export default Footer
