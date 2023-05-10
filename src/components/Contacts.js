import { Container, Row, Col } from "react-bootstrap";


export const Contacts = () => {
    return (
        <section className="contacts">
            <Container>
                <Row>
                    <Col>
                    <button className="vvd" onClick={()=> console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                    </Col>
                    <Col>
                        <button className="vvd" onClick={()=> console.log('about')}>
                            <span>Learn more about me</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}