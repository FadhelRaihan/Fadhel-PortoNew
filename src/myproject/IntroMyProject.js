import { Image } from 'react-bootstrap';
import '../myproject/IntroMyProject.css'
import Corak from '../asset/Corak-1.png'

const IntroMyProject = () => {
    return (
        <div className='IntroProject'>
            <Image className='imgMyProject' src={Corak} />
            <h1>MY PROJECT</h1>
        </div>
    )
}

export default IntroMyProject;