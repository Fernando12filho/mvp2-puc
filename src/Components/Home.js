import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import "./style.css"

function Home() {
 return(
    <div className="body">
        <Header />
        <Hero />
        <Projects />
        <Footer />
    </div>
 )
}

export default Home;