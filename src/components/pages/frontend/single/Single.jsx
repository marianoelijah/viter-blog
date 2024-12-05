import React from 'react'
import Header from '../homepage/Header'
import News from '../homepage/News'
import Footer from '../homepage/Footer'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <>
      <Header />
        <section className='py-16'>
          <div className="container">
            <div className="grid grid-cols-[1fr_3fr] gap-5 items-start">
               <Link className='btn-animate justify-selft-start' data-text="Go-Back">
                 Go Back
               </Link>

               <div className='border-r border-black'>
                 <h1 className='text-[clamp(30px,_8vw,_6rem)] font-normal font-[syne]'>
                  Things to Look for When Comparing Branding Alternatives
                 </h1>
                 <p className='max-w-[60%] text-2xl'>
                     Discover essential factors to consider when comparing branding 
                     alternatives and make an informed decision that aligns with your business goals.
                 </p>
               </div>
               
               <div className='pl-10 border-l border-black'>
                 <ul className='uppercase text-base space-y-1 font-black mb-10'>
                   <li className='opacity-70'>
                     Date
                   </li>
                   <li className='font-normal'>
                     Nov 24, 2022
                   </li>
                 </ul>
                 <ul className='uppercase text-base space-y-1 font-black mb-10'>
                   <li className='opacity-70'>
                     Category
                   </li>
                   <li className='font-normal'>
                      Branding
                   </li>
                 </ul>
                 <ul className='uppercase text-base space-y-1 font-black mb-10'>
                   <li className='opacity-70'>
                     Reading Time
                   </li>
                   <li className='font-normal'>
                     12 Min
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </section>

        <section className=''>
           <div className="container">
             <img src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f15b534428222b9f2c16_blog-01-p-2000.webp" 
             alt="" 
             className='w-full rounded-lg'
             />
             <div className='grid grid-cols-[1fr_3fr_1fr] gap-5 items-start my-16'>
               <div></div>
               <div className="blog-content py-10 border-r border-black pr-10">
                 <h2>Understanding Your Branding Needs</h2>
                 <p>
                 When it comes to comparing branding alternatives, it's crucial to start by understanding your 
                 specific needs and goals. Take a deep dive into your brand identity, target audience, and market
                 positioning. Clarify your objectives, whether it's enhancing brand recognition, appealing to a new 
                 demographic, or rebranding for a fresh image.One key aspect to consider is consistency. Your branding
                 should create a cohesive and unified experience across all touchpoints, from your logo and visual 
                 elements to your messaging and tone. Look for alternatives that can effectively communicate your 
                 brand values and resonate with your audience in a consistent and authentic manner.
                 </p>
                 <h2>Evaluating Expertise and Experience</h2>
                 <p>
                 When it comes to comparing branding alternatives, it's crucial to start by understanding your 
                 specific needs and goals. Take a deep dive into your brand identity, target audience, and market
                 positioning. Clarify your objectives, whether it's enhancing brand recognition, appealing to a new 
                 demographic, or rebranding for a fresh image.One key aspect to consider is consistency. Your branding
                 should create a cohesive and unified experience across all touchpoints, from your logo and visual 
                 elements to your messaging and tone. Look for alternatives that can effectively communicate your 
                 brand values and resonate with your audience in a consistent and authentic manner.
                 </p>
                 <h2>Assessing Collaboration and Communication</h2>
                 <p>
                 When it comes to comparing branding alternatives, it's crucial to start by understanding your 
                 specific needs and goals. Take a deep dive into your brand identity, target audience, and market
                 positioning. Clarify your objectives, whether it's enhancing brand recognition, appealing to a new 
                 demographic, or rebranding for a fresh image.One key aspect to consider is consistency. Your branding
                 should create a cohesive and unified experience across all touchpoints, from your logo and visual 
                 elements to your messaging and tone. Look for alternatives that can effectively communicate your 
                 brand values and resonate with your audience in a consistent and authentic manner.
                 </p>
                 <h2>In Conclusion</h2>
                 <p>
                 When it comes to comparing branding alternatives, it's crucial to start by understanding your 
                 specific needs and goals. Take a deep dive into your brand identity, target audience, and market
                 positioning. Clarify your objectives, whether it's enhancing brand recognition, appealing to a new 
                 demographic, or rebranding for a fresh image.One key aspect to consider is consistency. Your branding
                 should create a cohesive and unified experience across all touchpoints, from your logo and visual 
                 elements to your messaging and tone. Look for alternatives that can effectively communicate your 
                 brand values and resonate with your audience in a consistent and authentic manner.
                 </p>
                 
                <div className="blog-author sticky top-5">
                   <small className='uppercase'>Author</small>
                 <h3 className='font-[syne] font-normal mb-3'>
                   Coco Martin
                 </h3>
                 <p className='leading-relaxed'>
                 Jakob Grønberg is an experienced branding strategist with a passion for helping 
                 businesses create impactful brand identities and connect with their audience.
                 </p>
                 <h4 className='font-[syne] font-normal mb-3 mt-14 text-lg uppercase'>
                  Share
                 </h4>
                 <ul className='flex gap-5'>
                         <li className='size-[30px] center-all rounded-full border border-black text-xs'>
                            <a href="">TW</a>
                         </li>
                         <li className='size-[30px] center-all rounded-full border border-black text-xs'>
                            <a href="">IN</a>
                         </li>
                         <li className='size-[30px] center-all rounded-full border border-black text-xs'>
                            <a href="">BE</a>
                         </li>
                    </ul>
                </div>
               </div>
             </div>
           </div>
        </section>
      <News title="Related News" />
      <Footer />
    </>
    
  )
}

export default Single
