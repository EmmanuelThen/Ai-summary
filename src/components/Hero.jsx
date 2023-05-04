import React from 'react';
import logo from '../assets/SummitLogoSolo.png';
import logoFull from '../assets/logoFull.png';

const Hero = () => {
  return (
    <header className=' w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="logo" className='w-28 object-contain' />

            <button type='button' onClick={() => window.open('link')} className='black_btn'>
                Link
            </button>
        </nav>

        <img className='' src={logoFull} alt="summit_logo" width={300} height={300} />

        <h1 className="head_text">
            Summarize Anything with <br className='max-md:hidden' />
            <span className='blue_gradient'>Summit AI</span>
        </h1>
        <h2 className="desc">
            No more reading through articles or websites, let Summit do all the work for you!. Introducing Summit, your personal AI summarizer assistant,
            simply just paste the URL below and let AI work its magic!(50 request/mo.)
        </h2>
    </header>
  )
}

export default Hero

