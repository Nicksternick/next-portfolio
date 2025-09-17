/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useState } from 'react';
import '../css/carousel.css'

export default function Carousel() {
    // States
    const [index, changeIndex] = useState(0);
    // Variables
    let nextIndex: number;
    let prevIndex: number;
    let itemCount: number = 5;

    nextIndex = (index + 1) % itemCount;
    prevIndex = (index - 1 + itemCount) % itemCount;

    // Methods
    const increment = () => {
        prevIndex = index;
        let currentIndex = nextIndex;
        changeIndex(currentIndex);
        nextIndex = (index + 1) % itemCount;
    }

    const decrement = () => {
        nextIndex = index;
        let currentIndex = prevIndex;
        changeIndex(currentIndex)
        prevIndex = (index - 1 + itemCount) % itemCount;
    }

    return (
        <div className='c-wrapper'>
            <button onClick={decrement} className='c-arrow c-prev'>&lt;</button>
            <div className="c-body m-2 has-background-primary">
                <figure className='c-image has-text-centered 
                    is-flex
                    is-align-content-center
                    is-justify-content-center'>
                    <img src="https://placehold.co/1280x800" alt="" />
                </figure>
            </div>
            <button onClick={increment} className='c-arrow c-next'>&gt;</button>
            <p>{index}</p>
        </div>
    )
}