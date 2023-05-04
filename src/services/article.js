//? This is one specific part of our state of our global store.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_SUMMARIZER_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey );
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    //Redux toolkit query is good because it makes it easier for us, it automatically creates a hook (getSummary)
    // out of this endpoint.
    //? encodeURIComponent is just incase the url link has special characters which might effect the api call, this is built into js,
    //? it encodes a text string as a valid component of a Uniform Resource Identifier (URI)
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

//? useGetSummary is what we wouldve used if we needed to fetch the api right away once app loads, but we need it only when we hit submit button so we use 'useLazyGetSummaryQuery'
//? it alows us to fire this hook on demand
export const { useLazyGetSummaryQuery } = articleApi; 