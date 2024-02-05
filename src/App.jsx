import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logoSimpsons.png";
import Frase from "./components/Frase";
import { Image, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //hacer una petición get a la api
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const datos = await respuesta.json();
    console.log(datos[0]);
    setPersonaje(datos[0]);    
  };

  return (
    <Container className="text-center my-4">
      <Image
        src={logo}
        alt="logo de Los Simpsons"
        fluid
        className="logoSimpsons"
      />
      <Frase personaje={personaje}/>
      <Button className="mb-3" variant="warning">
        Obtener frase
      </Button>{" "}
    </Container>
  );
}

export default App;
