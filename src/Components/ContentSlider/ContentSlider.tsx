//Components
import { Icon } from '../../Components';

//Dependencies
import { useEffect, useState } from 'react';

//Style
import '../../css/Components/contentslider.css';

//Types
import { ContentSliderProps } from "../../Types/Components/ContentSlider";

export const ContentSlider = ( props: ContentSliderProps ) => {
    const { slides } = props;

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        var slideElement = document.getElementById('slides');
        slideElement?.classList.add('fade');
        setTimeout(() => {slideElement?.classList.remove('fade')}, 350);
    }, [slideIndex]);

    const goToPreviousSlide = () => {
        const isFirstSlide = slideIndex === 0;
        const newSlideIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
        setSlideIndex(newSlideIndex);
    };

    const goToNextSlide = () => {
        const isLastSlide = slideIndex === slides.length - 1;
        const newSlideIndex = isLastSlide ? 0 : slideIndex + 1;
        setSlideIndex(newSlideIndex);
    };

    const goToSpecificSlide = (desiredIndex: number) => {
        setSlideIndex(desiredIndex);
    };

    const leftSlideArrow = () => {
        return <Icon iconName='arrow_left' label='arrow_left' onClickEvent={goToPreviousSlide} size='extra-small'/>
    };

    const rightSlideArrow = () => {
        return <Icon iconName='arrow_right' label='arrow_right' onClickEvent={goToNextSlide} size='extra-small'/>
    };

    //TODO: style dots so they have their own container/are fixed to bottom of parent root container (somehow lol)
    const slideDots = () => {
        return (
            <div className='slide-dots'>
                {slides.map((slide, slideNumber) => {
                    if (slideNumber === slideIndex)
                        return <Icon iconName='circle' label='circle' onClickEvent={() => goToSpecificSlide(slideNumber)} selected size='extra-small'/>
                    else 
                        return <Icon iconName='circle' label='circle' onClickEvent={() => goToSpecificSlide(slideNumber)} size='extra-small'/>
                })}
            </div>
        );
    }

    return (
        <div className='contentSlider-container'>
            <div id='slides'>
                {slides[slideIndex]}
            </div>
            <div className='contentSlider-navigation-container'>
                {leftSlideArrow()}
                {slideDots()}
                {rightSlideArrow()}
            </div>
        </div>
    );
}