import { Container, Row, Col } from 'react-bootstrap';
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';
import '../scss/main.scss'; // Import your custom SCSS for styling

const Footer = () => {
  const mapsLink =
    'https://www.google.com/maps/place/Danska+backen+5,+463+71+L%C3%B6d%C3%B6se/@58.0345993,12.1623,17z/data=!4m6!3m5!1s0x464543b0b9aed153:0x3fe0f699927a9bd5!8m2!3d58.0349358!4d12.164568!16s%2Fg%2F11c43w65vk?entry=ttu';
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
            <a
              href={mapsLink}
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
            >
              <IoLocationSharp size={30} />
            </a>
            <p>Danska Backen 5, 463 71 Lödöse, Lilla Edets kommun </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
