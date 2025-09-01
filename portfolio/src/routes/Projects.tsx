import {
    Link,
    // Route,
    // Routes
} from 'react-router-dom'


export default function Projects() {
    return (
        <>
            <div className="content">
                <h1 className="title">Game Projects</h1>
            </div>
            <div className="content has-text-centered">
                <Link to="/projects/">
                    <img src="https://placehold.co/300" className="pr-3 pb-2" alt="" />
                </Link>
                <Link to="/projects/yes">
                    <img src="https://placehold.co/300" className="pr-3 pb-2" alt="" />
                </Link>
                <Link to="/projects/">
                    <img src="https://placehold.co/300" className="pr-3 pb-2" alt="" />
                </Link>
                <Link to="/projects/">
                    <img src="https://placehold.co/300" className="pr-3 pb-2" alt="" />
                </Link>
            </div>
            {/* <Routes>
                <Route path="/" element={<Test1 />} />
                <Route path="/yes" element={<TestPage />} />
            </Routes> */}
        </>
    )
}