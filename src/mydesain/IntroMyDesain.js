import { Image } from 'react-bootstrap';
import '../mydesain/IntroMyDesain.css'
import Corak from '../asset/Corak-1.png'

const IntroMyDesain = () => {
    return (
        <div className='IntroMyDesain'>
            <Image className='imgMyDesain' src={Corak} />
            <h1>MY DESAIN</h1>
        </div>
    )
}

export default IntroMyDesain;