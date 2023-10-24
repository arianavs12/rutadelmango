import React from 'react'
import Nav from "../components/Nav";
import { productores } from '../utils/Productores';

const Comercializacion = (props) => {
  return (
    <div>
      <Nav {...props} />
      <strong>
        ORGANIZACIONES DE PRODUCTORES
      </strong>
        <div>
            Organizaciones con mayor enfoque empresarial que han introducido tecnologías de punta y avanzado en la cadena productiva,<br /> 
            comercializando directo en la central de abastos y exportando a los Estados Unidos son: <br /> 
            AGROEXPORTADOREA EL PALENQUE, MAGMAR S.P.R. DE R.I., <br />
            GEMAA Agropecuaria S.P.R. DE R.L., <br /> 
            SANGOT S.P.R. DE R.I., H. LOBA S.P.R. DE R.I., <br /> 
            GRUMAN S.P.R. DE R.I.
        </div>
        <div>
            <strong>
            Principales Sociedades de Producción Rural.
            </strong>
            <ul>           
          {productores.map((item) => (
             <li>
                {item}
             </li>
          ))}
            </ul>
        </div>
        <br />
        <div>
            <img src='https://imparcialoaxaca.mx/wp-content/uploads/2022/03/Hombres-2.jpg' alt='Empacadora'/>
        </div>
        <a href="/comercialización/canales-de-venta">
          Canales de venta
        </a>
        <br />
        <a href="/">
          Regresar
        </a>
    </div>
  )
}

export default Comercializacion;