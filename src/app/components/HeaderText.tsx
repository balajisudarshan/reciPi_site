import React from 'react'

const HeaderText = ({ text1, text2, size, center }: { text1: string, text2: string, size?: string, center?: boolean }) => {
    return (
        <h1 className={center ? `text-center ${size ? `${size} font-bold tracking-tight` : "text-7xl font-bold tracking-tight"}` : `text-left ${size ? `${size} font-bold tracking-tight` : "text-7xl font-bold tracking-tight"}`}>
            {text1}
            <br />
            <span className="text-[#ff6b00]">{text2}</span>
        </h1>
    )
}

export default HeaderText