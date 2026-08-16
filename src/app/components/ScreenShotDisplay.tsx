import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
const ScreenShotDisplay = ({ image, heading, slug, description, rev }: { image: StaticImageData, heading: string, slug: string, description: string, rev?: boolean }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 ${rev ? 'md:flex-row-reverse' : ''}`}>

            <div className="flex justify-center md:w-[40%]">
                <Image
                    src={image}
                    alt="Home screen"
                    width={280}
                    height={580}
                    quality={100}
                    className="w-[230px] h-auto animate-float"
                />
            </div>

            <div className="md:w-[45%]">
                <p className="text-sm tracking-[4px] uppercase text-orange-500 mb-5">
                    {heading}
                </p>

                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 leading-tight">
                    {slug}
                </h2>

                <p className="mt-6 text-base sm:text-lg font-light leading-8 text-gray-500 max-w-md">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ScreenShotDisplay