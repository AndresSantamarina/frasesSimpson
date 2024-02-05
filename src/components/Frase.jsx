import Image from "react-bootstrap/Image";
import bart from "../assets/bart.png"
import { Container } from "react-bootstrap";

const Frase = ({personaje}) => {



  return (
    <Container className="my-3">
      <h2>{personaje.character}</h2>
      <Image src={personaje.image} alt="Imagen del personaje" fluid className="bart" />
      <p className="text-center my-3">{personaje.quote}</p>
    </Container>
  );
};

export default Frase;
