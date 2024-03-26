import NavigationBar from "../component/Navbar";
import Intro from "../home/Intro"
import Project from "../home/Project"
import Desain from "../home/Desain"
import Contact from "../home/Contact"
import Footer from "../component/Footer"

const Home = () => {
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

export default Home;
