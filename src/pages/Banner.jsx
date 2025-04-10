import React,{useState,useEffect} from 'react'
import "./Banner.css";
import MovieContent from '../components/MovieContent';
import Moviedate from '../components/Moviedate';
import PlayButton from '../components/PlayButton';
import MovieSwiper from '../components/MovieSwiper';
const Banner = () => {
    const [movies,setMovies]=useState([]);
    const fetchData=()=>{
        fetch('https://filmen3.vercel.app/data/movieData.json')
        .then(res => res.json())
        .then(data=>setMovies(data))
        .catch(e=>console.log(e.message));
    };
    useEffect(()=>{
        fetchData();
    },[]);
    
    const handleSlideChange=(id)=>{
        const newMovies=movies.map(movie=>{
            movie.active=false;
            if(movie._id===id){
                movie.active=true;
            }
            return movie;
        });
        setMovies(newMovies);
    }
  return (
    
    <div className='banner'>
        {
        movies && movies.length>0  && movies.map(movie=>(
            <div className='movie'>
                <img src={movie.bgImg} alt="bgImg" className={`bgImg ${movie.active ? 'active' : ''}`} />
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <MovieContent movie={movie}/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Moviedate movie={movie}/>
                            <PlayButton movie={movie}/>
                        </div>
                    </div>
                </div>
            </div>
        ))
        }
        {movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
    </div>
  );
}

export default Banner;
