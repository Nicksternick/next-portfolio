import {
    BrowserRouter,
    Link,
    Route,
    Routes
} from 'react-router-dom'
import '../portfolio.css'
import Home from './routes/Home.tsx'


function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <nav className="navbar has-background-primary">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/" className="navbar-item">
                                Home
                            </Link>
                            <Link to="/about" className="navbar-item">
                                Projects
                            </Link>
                            <Link to="/contact" className="navbar-item">
                                Comics
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className="section has-background-warning">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <div className="footer">
                    Nicholas DiGiovanni ©2025
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
