import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logoSimpsons.png"
import Frase from "./components/Frase";
import { Image, Container, Button } from "react-bootstrap";

function App() {
  return (
    <Container className="text-center my-4">
      <Image src={logo} fluid className="logoSimpsons" />
      <Frase />
      <Button className="mb-3" variant="warning">Obtener frase</Button>{" "}
    </Container>
  );
}

export default App;
