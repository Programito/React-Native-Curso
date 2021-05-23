import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interface/movieInterface';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[]
}


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [movieState, setMovieState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });


    const getMovies = async () => {
        const nowPlayingPromise = movieDb.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDb.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDb.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDb.get<MovieDBResponse>('/upcoming');

        const resps = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);



        setMovieState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results
        });

        setisLoading(false);
    }

    useEffect(() => {
        //now_playing
        getMovies();
    }, [])

    return {
        ...movieState,
        isLoading
    }

}
