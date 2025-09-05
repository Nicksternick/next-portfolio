import {
    Link,
    Route,
    Routes
} from 'react-router-dom'
import ProjectPage from './ProjectPage'
import projectData from '../data/json/project-data.json'

function LandingPage() {
    return (
        <>
            <div className="content">
                <h1 className="title">Game Projects</h1>
            </div>
            <div className="content has-text-centered">
                <Link to='/projects/yes' state={projectData}>
                    <img src="https://placehold.co/300" className="pr-3 pb-2" alt="" />
                </Link>
            </div>
        </>
    )
}

export default function Projects() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/yes" element={<ProjectPage />} />
            </Routes>
        </>
    )
}