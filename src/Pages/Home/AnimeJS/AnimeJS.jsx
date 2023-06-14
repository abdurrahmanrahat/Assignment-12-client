import anime from 'animejs';
import { useRef } from 'react';
import { useEffect } from 'react';

import animePhoto from '../../../assets/animejs-image_notbg.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AnimeJS = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const animateElement = () => {
            anime({
                targets: '.animateImg',
                scale: 1.3,
                duration: 800,
                easing: 'easeInOutQuad',
                loop: true,
            });
        };

        animateElement();
    }, []);


    return (
        <div>
            {/* Section Title */}
            <SectionTitle
                subHeading='See here'
                heading='AnimateJS'
            ></SectionTitle>

            <div className="mb-20 mt-12 grid grid-cols-1 md:grid-cols-2">
                <div ref={elementRef} className='animateEle animateImg w-1/2 mx-auto'>
                    <img src={animePhoto} className='w-full' alt="" />
                </div>
                <div className='w-1/2 flex flex-col gap-8 justify-center'>
                    <h2 className='text-3xl font-bold'>Learn New Language Like <span>Foreign</span></h2>
                    <p>A foreign language might be learned as a second language; however, there is a distinction between the two terms.</p>
                    <div>
                        <button className='btn text-md bg-[#0E0C1A] hover:bg-[#FFBD00] text-white hover:text-white p-4 animateEle'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeJS;