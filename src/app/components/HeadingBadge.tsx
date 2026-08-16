import React from 'react'

const HeadingBadge = ({ text }: { text: string }) => {
    return (
        <div className="bg-[#f9c6be54] text-[#ff6b00] mb-5  mx-auto sm:mx-0 rounded-full w-fit px-5 py-2 font-bold text-sm">{text}</div>

    )
}

export default HeadingBadge