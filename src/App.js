import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: [],
    categoria: "general"
  };

  componentDidMount() {
    this.consultarNoticias(this.state.categoria);
  }

  handleChange = () => {
    this.consultarNoticias(this.state.categoria);
  };

  consultarNoticias = async (categoria = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=915942ad794843e8af4c132463c0da58`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({ noticias: noticias.articles });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
