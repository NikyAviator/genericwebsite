import { Container, Row, Col } from 'react-bootstrap';
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';
import '../scss/main.scss'; // Import your custom SCSS for styling

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col className='footer-item'>
            <IoMail size={30} />{' '}
            <a href='mailto:office@teamvagservice.se'>
              office@teamvagservice.se
            </a>
          </Col>
          <Col className='footer-item'>
            <IoCall size={30} /> 0520-661960
          </Col>
          <Col className='footer-item'>
            <IoLocationSharp size={30} /> Danska Backen 5, 463 71 Lödöse, Lilla
            Edets kommun
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
