import Footer from "../component/Footer";
import NavigationBar from "../component/Navbar";
import CardMyDesain from "../mydesain/CardMyDesain";
import IntroMyDesain from "../mydesain/IntroMyDesain";

const MyDesain = () => {
    return (
        <div>
            <NavigationBar />
            <IntroMyDesain />
            <CardMyDesain />
            <Footer />
        </div>
    );
}

export default MyDesain;