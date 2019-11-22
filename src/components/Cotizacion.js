import React from 'react';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0 ) return null;

    return (
        <div className="resultado">
            <h2>Desde cotizacion</h2>
            <p className="precio">El precio es <span>{resultado.PRICE}</span></p>
            <p>El precio más alto fue<span>{resultado.HIGHDAY}</span></p>
            <p>El precio más bajo fue <span>{resultado.LOWDAY}</span></p>
            <p>Variación en las últimas 24hs <span>{resultado.CHANGEPCT24HOUR}</span>%</p>
            <p>última actualización: <span>{resultado.LASTUPDATE}</span></p>


        </div>


      );
}
 
export default Cotizacion;