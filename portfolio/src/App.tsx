import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

// Routes
import Home from './routes/Home.tsx'
import Projects from './routes/Projects.tsx';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

// CSS
import './css/App.css'


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
                        <Route path="/projects/*" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
