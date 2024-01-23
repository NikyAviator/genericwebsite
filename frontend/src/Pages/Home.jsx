import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tma2 from '../public/tma2.jpeg';
import BasicCarousel from '../Components/BasicCarousel';
const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${tma2})` }}
        className='home-background-image'
      ></div>
      <Container>
        <div className='home-background-overlay'></div>
        <Row>
          <Col>
            <h1 className='airy-header'>
              Välkommen till oss på Team Vägservice Sverige!
            </h1>
            <h3 className='airy-subheader'>
              Kvalitet, ansvar & service sedan 1987
            </h3>
            <p className='airy-text'>
              Team Vägservice Sverige (TVS) erbjuder kvalitativa lösningar när
              det gäller trafiksäkerhet, snöröjning, jour och tillsyn samt
              varu-, gods- och maskintransporter. Bolaget startades 2006 och är
              en del av Team Städservice som varit verksamt i Västra
              Götalandsregionen sedan 1987. TVS är ett familjeföretag som
              värdesätter långsiktiga relationer och det ska kännas tryggt att
              anlita oss.
            </p>
            <h1>Våra tjänster: TEST</h1>
          </Col>
        </Row>
        <Row>
          <BasicCarousel />
        </Row>
      </Container>
    </>
  );
};

export default Home;
