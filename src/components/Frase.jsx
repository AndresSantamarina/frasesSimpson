import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

const Frase = () => {
  return (
    <Container className="my-3">
      <h2>Bart Simpson</h2>
      <Image src="src/assets/bart.png" fluid className="bart" />
      <p className="text-center my-3">Ay Caramba!</p>
    </Container>
  );
};

export default Frase;
