import './App.css';
import NavigationBar from "../src/component/Navbar";
import Intro from './component/Intro';
import Project from './component/Project';
import Desain from './component/Desain';
import Footer from './component/Footer';
import Contact from './component/Contact';

function App() {
  return (
    <div>
        <NavigationBar />
        <Intro />
        <Project />
        <Desain />
        <Contact />
        <Footer />
    </div>

  );
}

export default App;
