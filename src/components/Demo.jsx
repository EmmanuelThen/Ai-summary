import React from 'react';
import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';








const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  //?  a new useState field to save history of articles searched
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState('')

  // Our useLazyGetSummaryQuery hook
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  // now we have a function (this hook) to call once a user hits the submit button, which is what we wanted
  // all along in our handleSubmit function.

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])

  {/** making our API request */ }
  const handleSubmit = async (e) => {
    e.preventDefault(); //to stop default behavior of react browser reloading when submit button is clicked.

    const { data } = await getSummary({ articleUrl: article.url })

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
     
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
      
    }

  }

  const handleCopyButton = (copyUrl) => {
      setCopied(copyUrl);
      navigator.clipboard.writeText(copyUrl);

      setTimeout(() => {
        setCopied(false)
      }, 3000);
  }


  return (

    <section className='mt-16 w-full max-w-xl'>

      {/**search bar */}
      <div className='flex flex-col w-full gap-2'>
        <form action="" className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5' />
          <input type="url" placeholder='https://your-link.com' value={article.url} onChange={(e) => { setArticle({ ...article, url: e.target.value }) }} required className='url_input peer' /> {/** we used peer for later on because we want to change the state of our button depending on the url entered */}
          <button type='submit' className='submit_btn peer-focus:border-blue-600 peer-focus:text-blue-600'>{/**when we focus on input the button will be focused as well */}
            <span className='blue_gradient'>Enter</span>
          </button>
        </form>

        {/** URL history */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          
          {allArticles.map((item, index) => ( //parenthesis and not curly brace to instantly return something from the array
              <div 
              key={`link-${index}`} 
              onClick={() => setArticle(item)}
              className='link_card'
              >
                <div className='copy_btn' onClick={() => handleCopyButton(item.url)}>
                    <img className='w-[40%] h-[40%] object-contain' src={copied === item.url ? tick : copy} alt="copy_icon" />
                </div>
                <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>{item.url}</p>
              </div>
          ))}
        </div>


      </div>
      {/** Results */}
      <div className='my-10 max-w-full flex justify-center items-center'>
          {isFetching ? 
          (<img src={loader} alt='loader' className='w-10 h-10 object-contain' />) : 
          error ? 
          (<p className='font-inter font-bold text-black text-center'>Oops something went wrong &#128565; <br /><span className='font-satoshi text-gray-700'>{error?.data?.error}</span></p>) : 
          (article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>Here is your <span className='blue_gradient'>Summary &#10549;</span></h2>
              <div className='summary_box'>
                  <p className='font-inter font-medium text-sm text-gray-700'>{article.summary}</p>
              </div>
            </div>
          ))}
      </div>

    </section>

  )
}

export default Demo