import '../css/carousel.css'

export default function Carousel() {
    return (
        <>
            <div className='c-wrapper'>
                <button className='c-arrow c-prev'>&#8592;</button>
                <div className="c-body m-2 has-background-primary">
                    <figure className='c-image has-text-centered 
                    is-flex
                    is-align-content-center
                    is-justify-content-center'>
                        <img src="https://placehold.co/1280x800" alt="" />
                    </figure>
                </div>
                <button className='c-arrow c-next'>&#8594;</button>
            </div>

        </>
    )
}