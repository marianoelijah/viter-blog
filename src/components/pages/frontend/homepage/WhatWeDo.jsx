import { Circle } from 'lucide-react'
import React from 'react'

const WhatWeDo = () => {
  return (
     <section className='mt-10 py-16 border-b border-black'>
        <div className='container'>
            <div className='grid grid-cols-[1fr_2fr] gap-10'>
                <h5 className='uppercase font-dark'>
                    What We Do
                </h5>
                <div className='border-l border-dark pl-16'>
                    <div className='cards-top grid grid-cols-2 divide-x-2 divide-dark'>
                        <div className='grid grid-cols-[70px_1fr] gap-6 items-start'>
                            <Circle strokeWidth={0.4} size={80}/>
                            <div className='max-w-[450px]'>
                                <h4 className='font-[syne] uppercase text-4xl font-normal mb-5'>
                                    Branding
                                </h4>
                                <p className='w-[90%]'>
                                    We craft compelling brand identities that leave a lasting impression
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-[70px_1fr] gap-6 items-start pl-10'>
                            <Circle strokeWidth={0.4} size={80}/>
                            <div className='max-w-[450px]'>
                                <h4 className='font-[syne] uppercase text-4xl font-normal mb-5'>
                                    Design
                                </h4>
                                <p className='w-[90%]'>
                                    Innovative and aesthetic designs that bring your ideas to life.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards-bottom grid grid-cols-2 mt-16 pt-16 border-t border-dark divide-x-2 divide-dark'>
                        <div className='grid grid-cols-[70px_1fr] gap-6 items-start'>
                            <Circle strokeWidth={0.4} size={80}/>
                            <div className='max-w-[450px]'>
                                <h4 className='font-[syne] uppercase text-4xl font-normal mb-5'>
                                    Video
                                </h4>
                                <p className='w-[90%]'>
                                    Captivating visual storytelling that engages and resonates with your audience.
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-[70px_1fr] gap-6 items-start pl-10'>
                            <Circle strokeWidth={0.4} size={80}/>
                            <div className='max-w-[450px]'>
                                <h4 className='font-[syne] uppercase text-4xl font-normal mb-5'>
                                    Content
                                </h4>
                                <p className='w-[80%]'>
                                    Engaging and persuasive content that captures attention and sparks meaningful connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default WhatWeDo
