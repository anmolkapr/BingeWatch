import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) =>{

    

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    //if config is passed then use that else use base settings 
    const {posters,title,subtitle,isDark, config } = props;

    const currentSetting = config ? config : settings;
     return (
         <>
         <div className="flex flex-col items-start my-2">
             <h3 className={`text-2xl mx-4 font-bold ${isDark? "text-white":"text-gray-800"}`}>{title}</h3>
             <p className={`text-sm mx-4 ${isDark? "text-white":"text-gray-800"}`}>{subtitle}</p>
         </div>
         <Slider {...currentSetting}>
             {posters.map((each) => (
                 <Poster  {...each} isDark = {isDark}/>
             ))}
         </Slider>
         </>
         
     );
}

export default PosterSlider;