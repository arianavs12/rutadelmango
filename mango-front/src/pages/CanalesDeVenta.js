import React from 'react'
import Nav from "../components/Nav";

const CanalesVenta = (props) => {
  return (
    <div>
      <Nav {...props} />
      <strong>
        CANALES DE COMERCIALIZACION
      </strong>
        <div>
            JUMEX
            <br />
            Precios  evolución histórica de precios para compra local
        </div>
    <strong>
        CADENA  DE VALOR
    </strong>
        <div>
            Productores, mano de obra, cajas de madera, flete, viveros, bodegas para empaques de mango nacional <br />
            y exportación a mercados finales. Prestadores de servicio.
        </div>
        <br />
       {/*  <div>
            <img src='https://www.croplifela.org/images/ES/recomendados/Impacto-Climatico-Y-Agricultura.png' alt='Riesgos climáticos en la agricultura'/>
        </div> */}
        <br />
        <a href="/exportación">
          Regresar
        </a>
    </div>
  )
}

export default CanalesVenta;