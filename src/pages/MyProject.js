import Footer from "../component/Footer";
import NavigationBar from "../component/Navbar";
import CardMyProject from "../myproject/CardMyProject";
import IntroMyProject from "../myproject/IntroMyProject";

const MyProject = () => {
    return (
        <div>
            <NavigationBar />
            <IntroMyProject />
            <CardMyProject />
            <Footer />
        </div>
    );
}

export default MyProject;