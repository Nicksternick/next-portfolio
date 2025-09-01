import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import '../portfolio.css'
import Home from './routes/Home.tsx'
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import './App.css'


function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <div className="content">
                <Navbar />
                <div id='main' className="section">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
