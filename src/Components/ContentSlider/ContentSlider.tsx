//Components
import { Icon } from '../../Components';

//Content
import TextResources from '../../Content/TextResources.json';

//Dependencies
import { useState } from 'react';

//Style
import '../../css/Components/contentslider.css';

//Types
import { ContentSliderProps } from "../../Types/Components/ContentSlider";

export const ContentSlider = ( props: ContentSliderProps ) => {
    const { headerText, slides, slideContent } = props;

    const [slideIndex, setSlideIndex] = useState(0);

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

    const getHeaderText = () => {
        switch(slideContent) {
            case 'skillsContent':
                const skillsContentHeaderGenericText = TextResources.pageContent.home.rightHandSide.skillsContent.headerText;
                const skillsContentHeader = () => {
                    if (slideIndex === 0) 
                        return 'Languages ' + skillsContentHeaderGenericText;
                    if (slideIndex === 1) 
                        return 'Frameworks ' + skillsContentHeaderGenericText;
                    if (slideIndex === 2) 
                        return 'Tools ' + skillsContentHeaderGenericText;
                    if (slideIndex === 3) 
                        return 'Teamwork ' + skillsContentHeaderGenericText;
                }
                return skillsContentHeader();
        }
    }

    const getSlideStyle = () => {
        switch(slideContent) {
            case 'skillsContent': 
                return 'skillscontent-icons'
        }
    }

    return (
        <div className='contentSlider-container'>
            {headerText && getHeaderText()}
            <div className={getSlideStyle()}>
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