import React,{useState} from 'react';
import { SliderData } from '../Data/SliderData';
const ImageSlider = ({slides}) => {
    const[current,setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current+1);
    };
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current-1);
    };
    console.log(slides.length);

    if(!Array.isArray(slides) || slides.length <= 0){
        console.log(slides.length);
        return null;
    }

    return(
        <section className = "slider">
            <button className="prev-img" aria-controls = "myCarousel-items" aria-label = "Previous Slide" onClick={prevSlide}>
            &#65308;
            </button>
            <button className="next-img" aria-controls = "myCarousel-items" aria-label = "Next Slide" onClick={nextSlide}>
            &#65310;
            </button>
            {SliderData.map((slide,index) => {
                return (
                    <div className = {index === current ? 'slide active' : 'slide'} key=
                    {index}>
                        {index === current && (
                            <img src={slide.img} alt='fitness image' className = "images"/>
                        )}
                    </div>
                );
            })}        
        </section>
    );
};
export default ImageSlider;