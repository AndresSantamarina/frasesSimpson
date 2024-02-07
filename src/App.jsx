import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logoSimpsons.png";
import Frase from "./components/Frase";
import { Image, Container, Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //mostrar el spinner
      setMostrarSpinner(true);
      //hacer una petición get a la api
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      console.log(datos[0]);
      setPersonaje(datos[0]);
      //ocultar el spinner cambiando el valor a false
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      //agregar un mensaje para el usuario final
    }
  };

  //mostrarSpinner === true es igual a que ponga mostrarSpinner porque es un booleano
  const mostrarComponente = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variant="danger" />
    </div>
  ) : (
    <Frase personaje={personaje} />
  );

  return (
    <Container className="text-center my-4">
      <Image
        src={logo}
        alt="logo de Los Simpsons"
        fluid
        className="logoSimpsons"
      />
      {mostrarComponente}
      <Button className="mb-3" variant="warning" onClick={consultarAPI}>
        Obtener frase
      </Button>{" "}
    </Container>
  );
}

export default App;
