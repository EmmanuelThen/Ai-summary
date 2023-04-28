import React from 'react';
import logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <header className=' w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className='w-28 object-contain' />

            <button type='button' onClick={() => window.open('link')} className='black_btn'>
                Link
            </button>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            No more reading through a whole article when it could have been summarized with less words. Introducing SummarizeItThen,
            simply just type in or paste the URL for your article and let AI work its magic!
        </h2>
    </header>
  )
}

export default Hero

