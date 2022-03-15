import React,{useState,useEffect} from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import axios from 'axios';

const HomePage = () => {

    const [recommendedMovies,setRecommendedMovies] = useState([]);
    const [Premiers,setPremierMovies] = useState([]);
    const [onlineSteamEvents,setOnlineSteamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setRecommendedMovies(getPopularMovies.data.results);
            console.log(getPopularMovies);
        };

        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setOnlineSteamEvents(getUpcomingMovies.data.results);
        };

        requestUpcomingMovies();
    }, []);

    return (
        <div>
        <div className="bg-darkBackground-800"><p className="text-white text-center h-8 py-1">SCROLL TO EXPLORE SHOWS</p></div>
            <HeroCarousel></HeroCarousel>
            <div className='container mx-auto px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 my-3'>
                    The best Of Entertainment
                </h1>    
                <EntertainmentCardSlider></EntertainmentCardSlider>  
                       
            </div>
            <div className='container mx-auto px-12 my-8'>
            <PosterSlider title= "Recommended Movies"  
            subtitle ="Movies picked for you"
            posters = {recommendedMovies}
            isDark = {false}></PosterSlider>
            </div>

            

            <div className='bg-premier-800 py-12 '>
                <div className='container mx-auto px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src = "https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"  alt = "RuPay" className='w-full h-full'/>
                    </div >
                    <PosterSlider title= "Premiers"  
                    subtitle ="Tired of watching old stuff , Then for you.."
                    posters = {Premiers}
                    isDark = {true}></PosterSlider>
                </div>
            </div>

           

            <div className='container mx-auto px-12 my-8'>
            <PosterSlider title= "Online Streams"  
            subtitle ="Now explore the live events at single click"
            posters = {onlineSteamEvents}
            isDark = {false}></PosterSlider>
            </div>

            <div>
                CREATED BY ANMOL KAPOOR AND AGNEY S TALWARR
            </div>
            
            
            
        </div>
        
    );
};

export default HomePage;