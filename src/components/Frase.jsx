import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

const Frase = ({ personaje }) => {
  return (
    <Container className="my-3">
      <h2>{personaje.character}</h2>
      <Image
        src={personaje.image}
        alt={personaje.character}
        fluid
        className="imagenPersonaje"
      />
      <p className="text-center my-3">{personaje.quote}</p>
    </Container>
  );
};

export default Frase;
