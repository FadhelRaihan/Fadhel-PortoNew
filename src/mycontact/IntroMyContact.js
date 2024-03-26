import { Image } from 'react-bootstrap';
import '../mycontact/IntroMyContact.css'
import Corak from '../asset/Corak-1.png'

const IntroMyContact = () => {
    return (
        <div className='IntroMyContact'>
            <Image className='imgMyContact' src={Corak} />
            <h1>MY CONTACT</h1>
        </div>
    )
}

export default IntroMyContact;