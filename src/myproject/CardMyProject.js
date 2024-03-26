import { Card, Button, Container } from "react-bootstrap";
import Foto from '../asset/IsiCard.jpg'
import '../myproject/CardMyProject.css'

const CardMyProject = () => {
    return (
        <div className="CardMyProject">
            <Container className="CardProject">
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject"> 
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
            </Container>

{/* =============================================================================================== */}

            <Container className="CardProject">
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject"> 
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
            </Container>

{/* =============================================================================================== */}

            <Container className="CardProject">
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject"> 
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
                        <Card.Title>Judul</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="light">Click for More</Button>
                    </Card.Body>
                </Card>
                <Card className="kartuProject">
                    <Card.Img variant="top" src={Foto}/>
                    <Card.Body className="bodyKartuProject">
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

export default CardMyProject;