import "./App.css";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experiences } from "../components/Experiences";
import Achievements from "../components/Achievements";
import { Contests } from "../components/Contests";
import { Contact } from "../components/Contact";

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contests />
            <Achievements />
            <Experiences />
            <Contact />
        </>
    );
}
export default App;
