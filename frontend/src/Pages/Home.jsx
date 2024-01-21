import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BasicCarousel from '../Components/BasicCarousel.jsx';

const Home = () => {
  return (
    <>
      <Container>
        <h1>Kvalitet, ansvar & service sedan 1987</h1>
      </Container>
    </>
  );
};

export default Home;
