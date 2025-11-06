"use client"
import React from 'react'
import Image from 'next/image'
import { BannerContainer } from './Banner.styles'
import type { BannerProps } from "@/types/BannerTypes";

const Banner: React.FC<BannerProps> = ({ banner ,img, strong, width, p1, p2 }) => {
  return (
    <BannerContainer banner={banner} width={width} p1={p1} p2={p2} strong={strong} img={img}>
        <div>
            <span>
                <p>
                    {p1} <strong>{strong}</strong> {p2}
                </p>
            </span>
            <Image src={img} alt={p1} width={230} height={127} />
        </div>
    </BannerContainer>
  )
}

export default Banner