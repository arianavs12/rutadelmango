import React from 'react'
import AppAppBar from "../components/Nav";

const Variedades = (props) => {
  return (
    <div>
      <AppAppBar {...props} />
      <strong>
        VARIEDADES MEJORADAS DE MANGO.
      </strong>
        <div>
            La genealogía del mango Ataulfo es incierta, pues se desconocen sus verdaderos progenitores. Según reportes locales y documentales, <br />
            eran ocho los árboles ‘madre-padre’ de mango Ataulfo ubicados en la región del soconusco Chiapas del predio que era propiedad  del <br />
            sr. José Ataulfo Morales Gordillo, se tiene estimado que los árboles nacieron en 1943 (Infante al., 2011).
        </div>
        <div>
            De esta forma fue adquirido por el gobierno del estado para su conservación y posteriores investigaciones a  <br />
            la Fundación Produce Chiapas, AC, teniendo como finalidad preservar los árboles ‘padre’ y brindarles el cuidado  <br />
            que requieren. Con el objetivo de conservar y mejorar la calidad de la producción, se decidió realizar la instalación de  <br />
            laboratorios de investigación específicos del mango Ataulfo en el mismo sitio.  <br />
            Dicha propagación del material vegetativo se transfirió del Instituto Mexicano del Café (IMC) a la <br />
            Comisión Nacional de Fruticultura (CONAFRUT) para su propagación masiva. Años después, el frutal fue conocido como ‘Ataulfo’.<br />
            Al año 2020, solo existen cinco arboles padre en dicho predio, sin considerar las variaciones morfo-genéticas entre estos árboles <br />
            ‘hermanos’, las varetas que dieron origen a las primeras plantaciones de mango Ataulfo fueron propagadas y dispersadas siguiendo <br />
            el proceso de injerto de vareta, hasta alcanzar los miles de árboles establecidos en Chiapas y en el resto de la República Mexicana <br />
            y que incluso se han propagado hasta Guatemala y Brasil.
        </div>
        <br />
      <p>
        MANGO TOMY ATKINS, Haden, Kent: Variedades mejoradas  por polinización originaria de Florida, E.U. creadas en la década de 1940.
      </p>
      <p>
        ZANATEPEC,  VIVERO  EJIDAL DE REGADILLO  en al año 1975  a través del banco   con las variedades Haden , Kent , Keitt, diplomático, <br />
        con varetas traídas de Nayarit y colima  sr. Humberto Nolasco.
      </p>
        <a href="/historiadelmango">
          Regresar
        </a>
    </div>
  )
}

export default Variedades;