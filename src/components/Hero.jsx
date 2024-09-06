import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className=' w-full flex justify-between items-center mb-10 pt-3'>
            <img src={logo} alt="logo" className='w-28 object-contain'/>
            <button type='button' onClick={()=>window.open('https://github.com/ikegwuonu')} className='black_btn'>Github</button>
        </nav>
        <h1 className='head_text'>Summarize article with <br className='max-md:hidden'/><span className='orange_gradient'>Open AI GPT-4</span></h1>
        <h2 className='desc'>Simplify your reading with Sumaz. An open source article summarizer</h2>
    </header>
  )
}

export default Hero