"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromTop } from '../../../../utils/motion';
import Image from 'next/image';

type Props = {}

export default function Encryption({}: Props) {
  return (
    <div className='flex flex-row relative item-center justify-center w-full h-full '>
        <div className='absolute w-auto h-auto top-0 z-[5]'>
            <motion.div
                variants={slideInFromTop}
                className='text-[40px] font-medium text-center text-green-200 '
            >
                      Performence
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                          {" "}
                          &{" "}
                      </span>
                      Security
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] h-auto w-auto'>
            <div className='flex flex-col items-center group cursur-pointer w-auto h-auto'>
                <Image 
                    src="/LockTop.png"
                    alt="Lock Top"
                    width={50}
                    height={50}
                    className='translate-y-5 translation-all duration-200 group-hover:translate-y-11'
                />
                <Image
                    src="/LockMain.png"
                    alt="Lock Main"
                    width={50}
                    height={50}
                    className='z-10'
                />
            </div>
            <div className='Welcome-box px-[15px] py-[4px] z-[20] border-[#7042f88b] opacity-[0.9] '>
                <h1 className='Welcome-text text-[12px] '>
                    Encryption
                </h1>
            </div>
        </div>
        <div className='absolte z-[20] bottom-[10px] px-[5px]'>
              <div className='cursive text-[20px] font-medium text-center text-grey-300 '>
                  Secure your data with end-to-end encryption
              </div>
        </div>
        <div className='w-full flex items-center justify-center absolute'>
            <video
                loop
                muted
                autoPlay
                playsInline
                preload='flase'
                className='w-full h-auto'
                src='/encryption.webm' 
            />
        </div>
    </div>
  )
}