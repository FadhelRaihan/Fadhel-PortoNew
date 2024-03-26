import Footer from "../component/Footer";
import NavigationBar from "../component/Navbar";
import IntroMyContact from "../mycontact/IntroMyContact";
import IsiMyContact from "../mycontact/IsiMyContact";

const MyContact = () => {
    return (
        <div>
            <NavigationBar />
            <IntroMyContact />
            <IsiMyContact />
            <Footer />
        </div>
    );
}

export default MyContact;