import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="columns">
                <div className="column">
                    <div className="content">
                        <h1 className="title">Nicholas DiGiovanni</h1>
                    </div>
                    <div className="container has-text-centered">
                        <Link to="/about">
                            <img src="https://placehold.co/200" className="pr-3 pb-2" alt="" />
                        </Link>
                        <Link to="/contact">
                            <img src="https://placehold.co/200" className="pr-3 pb-2" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="column is-two-fifths">
                    <div className="container has-text-centered">
                        <img src="https://placehold.co/450" alt=""/>
                    </div>
                    <div className="content">
                        <h1>Background</h1>
                        <p>
                            I go by Nick. I am a programmer, storywriter, and artist.
                            I have a Bachelors of Science in Game Design and Development.
                            In regards to programing I have an interest in user inputs and 
                            developer tools to make creating programs easier. 
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Home