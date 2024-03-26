import '../mycontact/IsiMyContact.css'
import { Container, Image, Button } from 'react-bootstrap';
import Email from '../asset/Medsos/Biru/Email M.png'
import GitHub from '../asset/Medsos/Biru/Github.png'
import Ig from '../asset/Medsos/Biru/Instagram.png'
import Linkedin from '../asset/Medsos/Biru/Linkedin.png'
import Wa from '../asset/Medsos/Biru/Whats App.png'

const IsiMyContact = () => {
    return (
        <div className='IsiMyContact'>
            <Container className='Contact'>
                <Image className='imgContact' src={Email}/>
                <Container className='Isi'>
                    <h3>m.fadhelraihan@gmail.com</h3>
                    <Button variant='light' className='buttonContact'>Click This</Button>
                </Container>
            </Container>

            <Container className='Contact'>
                <Image className='imgContact' src={GitHub}/>
                <Container className='Isi'>
                    <h3>@FadhelRaihan</h3>
                    <Button variant='light' className='buttonContact'>Click This</Button>
                </Container>
            </Container>

            <Container className='Contact'>
                <Image className='imgContact' src={Ig}/>
                <Container className='Isi'>
                    <h3>@fadhelraihann</h3>
                    <Button variant='light' className='buttonContact'>Click This</Button>
                </Container>
            </Container>

            <Container className='Contact'>
                <Image className='imgContact' src={Linkedin}/>
                <Container className='Isi'>
                    <h3>Fadhel Raihan</h3>
                    <Button variant='light' className='buttonContact'>Click This</Button>
                </Container>
            </Container>

            <Container className='Contact'>
                <Image className='imgContact' src={Wa}/>
                <Container className='Isi'>
                    <h3>(+62) 81324232156</h3>
                    <Button variant='light' className='buttonContact'>Click This</Button>
                </Container>
            </Container>
        </div>
    )
}

export default IsiMyContact;