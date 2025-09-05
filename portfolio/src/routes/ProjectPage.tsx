import {
    useLocation,
    Link
} from "react-router-dom"

interface projectData {
    name: string,
    subtitle: string,
    time: string,
    description: string,
    images: string[]
}

export default function ProjectPage() {
    const location = useLocation();
    let project = location.state as projectData;

    return (
        <>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1>Title: {project.name}</h1>
                        <div className="columns">
                            <div className="column">
                                <p>Subtitle: {project.subtitle}</p>
                            </div>
                            <div className="column has-text-right">
                                <p>Time: {project.time}</p>
                            </div>
                        </div>
                        <p>Description: {project.description}</p>
                        <p><Link to='/projects/'>Back</Link></p>
                    </div>
                    <div className="column">
                        {project.images.map((img) => (
                            <img src={img} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}