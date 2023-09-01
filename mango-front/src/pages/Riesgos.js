import React from 'react'
import Nav from "../components/Nav";

const Riesgos = (props) => {
  return (
    <div>
      <Nav {...props} />
      <strong>
        LA MAYOR PREOCUPACIÓN: EL CAMBIO CLIMÁTICO
      </strong>
        <div>
        Los productores de mango comentan tienen una preocupación inmediata: los efectos que el cambio climático <br />
        está provocando en las huertas; año con año, los frentes fríos vienen acompañados por vientos huracanados <br />
        que tira la fruta; la falta de lluvia impide la floración; los incendios y quemas de pasto como causa de <br />
        deshidratación del suelo, todo esto provoca la pérdida del 30 por ciento de la producción total, <br />
        asociada con los bajos precios que se pagan actualmente por el producto en el mercado local.
        </div>
        <br />
        <div>
            <img src='https://www.croplifela.org/images/ES/recomendados/Impacto-Climatico-Y-Agricultura.png' alt='Riesgos climáticos en la agricultura'/>
        </div>
        <br />
        <a href="/exportación">
          Regresar
        </a>
    </div>
  )
}

export default Riesgos;