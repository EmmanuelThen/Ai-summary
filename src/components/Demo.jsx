import React from 'react';
import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick} from '../assets';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  {/** making our API request */}
  const handleSubmit = async (e) => {
    alert('Calculating...');
  }


  return (

    <section className='mt-16 w-full max-w-xl'>

      {/**search bar */}
      <div className='flex flex-col w-full gap-2'>
        <form action="" className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5' />
          <input type="url" placeholder='Enter URL here' value={article.url} onChange={(e) => {setArticle({ ...article, url: e.target.value})}} required className='url_input peer' /> {/** we used peer for later on because we want to change the state of our button depending on the url entered */}
          <button type='submit' className='submit_btn peer-focus:border-blue-600 peer-focus:text-blue-600'>{/**when we focus on input the button will be focused as well */}
            <span className='blue_gradient'>Enter</span>
          </button>
        </form>

        {/** URL history */}


      </div>
      {/** Results */}

    </section>

  )
}

export default Demo