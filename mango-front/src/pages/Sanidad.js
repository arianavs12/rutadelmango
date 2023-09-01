import React from 'react'
import Nav from "../components/Nav";

const Sanidad = (props) => {
  return (
    <div>
      <Nav {...props} />
      <strong>
        Sanidad Vegetal
      </strong>
        <div>
            En el ámbito de la producción de Mango encontramos la Junta Local de Sanidad Vegetal , que posteriormente se cambiaría como<br />
            Junta local Mangueros Unidos de Chahuites y San Pedro Tapanatepec, Oaxaca, para  llevar la Campaña contra la Mosca de la Fruta,<br />
            encargada de promover la sanidad de las huertas  de manera coordinada con el Comité Estatal  de Oaxaca  CESVO, en la zona.
            <br />
            Satisfecho comenta que el productor de mango tiene la cultura de la exportación, cumple con las condiciones en materia <br />
            fito-sanitaria del mercado nacional, estadounidense, europeo y asiático.
            <br />
            La empacadora Puerta Dorada está bajo la supervisión del representante en México de la USDA, encargado del examen diario<br />
            del proceso hasta su empaque.<br />
            <br />
            El mango debe de estar libre de la mosca de la fruta, plaga que se desarrolla en la pulpa y que se combate a través de <br />
            un tratamiento hidrotérmico.
        </div>
        <br />
        <div>
            <img src='https://vivemaravatio.com/wp-content/uploads/2021/01/mango-michoacan.jpg' alt='Saneamiento del mango'/>
        </div>
        <br />
        <br />
        <a href="/exportación">
          Regresar
        </a>
    </div>
  )
}

export default Sanidad;