import React from "react";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => (
  <div>
    <div className="row">
      {noticias.map(noticia => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  </div>
);

export default ListaNoticias;
