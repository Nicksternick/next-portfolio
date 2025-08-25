import { Link } from "react-router-dom"

function Home() {
    return (
        <>
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
                        <img src="https://placehold.co/450" alt="Face Image" />
                    </div>
                    <div className="content">
                        <h1>Background</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur, quidem et eligendi repellendus accusantium. Incidunt, earum dicta nulla quidem officia, quas ipsa minus ipsam exercitationem nemo tenetur? Provident, fugit?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home