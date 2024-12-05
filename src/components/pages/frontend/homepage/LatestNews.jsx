import React from 'react'
import { Link } from 'react-router-dom'

const LatestNews = () => {
  return (
    <section className='py-16 border-b border-black'>
        <div className="container">
            <div className="flex justify-between items-center py-10 border-y border-black mb-10">
                <h2 className='uppercase font-[syne] font-normal text-7xl' >Latest News</h2>
                <Link to="/" className='btn-animate' data-text="See All">
                  See All
                </Link>
            </div>

            <div className="grid grid-cols-3 divide-x divide-black">
                <div className="card-news pr-5">
                    <img src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f155fb2692636d3656aa_blog-01-preview-p-800.webp" 
                    alt=""
                    className='w-full rounded-lg h-[300px] object-cover'
                 />
                 <small className='uppercase text-lg font-[syne] block my-3'>
                    Branding
                 </small>
                 <Link to="/" className='text-2xl'>
                 Things to Look for When Comparing Branding Alternatives
                </Link>
                </div>
                <div className="card-news px-5">
                    <img src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f133abcbabd997eaf454_blog-02-preview-p-800.webp" 
                    alt=""
                    className='w-full rounded-lg h-[300px] object-cover'
                 />
                 <small className='uppercase text-lg font-[syne] block my-3'>
                    Branding
                 </small>
                 <Link to="/" className='text-2xl'>
                    5 Stand-out Features of Branding You Should Know
                </Link>
                </div>
                <div className="card-news pl-5">
                    <img src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369f124dae2e954a48e3eef_blog-03-preview-p-800.webp" 
                    alt=""
                    className='w-full rounded-lg h-[300px] object-cover'
                 />
                 <small className='uppercase text-lg font-[syne] block my-3'>
                    Branding
                 </small>
                 <Link to="/" className='text-2xl'>
                   Branding: What Real Customers Have to Say
                </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LatestNews
