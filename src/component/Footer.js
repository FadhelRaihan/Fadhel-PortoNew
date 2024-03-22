import { Container, Image } from 'react-bootstrap';
import Logo from '../asset/Logo.png'
import Email from '../asset/Medsos/Email.png'
import Github from '../asset/Medsos/Github.png'
import Instagram from '../asset/Medsos/Instagram.png'
import Linkedin from '../asset/Medsos/Linkedin.png'
import Wa from '../asset/Medsos/WhatsApp.png'
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container className='atas'>
                <Image className='imgAtas' src={Logo} />
                <p>Cibiru Wetan, Kabupaten Bandung, Jawa Barat Indonesia</p>
            </Container>
            <Container className='bawah'>
                <Image className='imgBawah' src={Email} />
                <Image className='imgBawah' src={Github} />
                <Image className='imgBawah' src={Instagram} />
                <Image className='imgBawah' src={Linkedin} />
                <Image className='imgBawah' src={Wa} />
            </Container>
        </div>
    )
}

export default Footer;