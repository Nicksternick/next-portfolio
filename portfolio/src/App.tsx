import {
    BrowserRouter,
    Link,
    Route,
    Routes
} from 'react-router-dom'
import '../portfolio.css'

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="section">
                    <nav className="navbar has-background-primary">
                        <div className="navbar-menu">
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item">
                                    Home
                                </Link>
                                <Link to="/about" className="navbar-item">
                                    About
                                </Link>
                                <Link to="/contact" className="navbar-item">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
