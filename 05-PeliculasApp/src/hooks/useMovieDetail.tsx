import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { MovieFull } from '../interface/movieInterface';
import { CreditsResponse, Cast } from '../interface/creditInterface';


interface MovieDetail {
    isLoading: boolean;
    movieFull?: MovieFull,
    cast: Cast[];
}

export const useMovieDetail = (movieId: number) => {
   const [state, setstate] = useState<MovieDetail>({
    isLoading: true,
    movieFull: undefined,
    cast: []
   })

   const getMovieDetail = async() => {
    //   await movieDb.get<MovieFull>(`/${movieId}`)
        const movieDetailPromise =  movieDb.get<MovieFull>(`/${movieId}`);
        const castPromise =  movieDb.get<CreditsResponse>(`/${movieId}/credits`);

        const [movideDetailResp, castPromiseResp] =await  Promise.all([movieDetailPromise,castPromise])

        setstate({
            isLoading: false,
            movieFull: movideDetailResp.data,
            cast: castPromiseResp.data.cast
        })
   } 

   useEffect(() => {
       getMovieDetail();
   }, []);

   return {
       ...state
   }
}
