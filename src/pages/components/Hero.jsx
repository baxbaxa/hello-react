import {Button, Alert, Container, Row, Col} from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="container">
             <Button>test</Button>
        <Alert variant="success"> ეს არის დემო </Alert>


        <Container>
            <Row>
                <Col md>1</Col>
                <Col md>1</Col>
                <Col md>1</Col>
            </Row>
        </Container>

        </div>
    )
}


  export default Hero;