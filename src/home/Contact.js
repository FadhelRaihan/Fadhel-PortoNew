import { Button, Container } from 'react-bootstrap';
import '../style/Contact.css'

const Contact = () => {
    return (
        <div className='Contact'>
            <Container>
                <h1>CONTACT ME IF YOU INTERESTED</h1>
                <Button variant= 'light' className='button'>Click for contact</Button>
            </Container>
        </div>
    )
}

export default Contact;