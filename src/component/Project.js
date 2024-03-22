import { Card, Button, Container } from "react-bootstrap";
import Foto from '../asset/IsiCard.jpg'
import '../style/Project.css'

const Project = () => {
    return (
        <div className="Project">
            <h1>PROJECT</h1>
            <Container className="Card">
                <Card className="kartu">
                    <Card.Img variant="top" src={Foto} className="img"/>
                    <Card.Body className="bodyKartu"> 
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartu">
                    <Card.Img variant="top" src={Foto} className="img"/>
                    <Card.Body className="bodyKartu">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartu">
                    <Card.Img variant="top" src={Foto} className="img"/>
                    <Card.Body className="bodyKartu">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Project;