import Image from "next/image";
import Hero from "./component/home";
import About from "./component/about";
import Projects from "./component/projects";
import Contact from "./component/contact"
import Footer from "./component/footer"
import Skills from "./component/skills";

export default function Home() {
  return (
          <div>
            



            <Hero />
            <About />
            <Projects />
            |<Skills />
            <Contact />
            <Footer />

            
          </div> 
  )
}

