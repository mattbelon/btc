import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from './Select';
import Error from './Error';


function Formulario ({guardarMoneda,guardarCriptomoneda}){
    const [criptomonedas, guardarCriptos] = useState([]);

    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false);

    useEffect(() => {
        const consultarApi = async () =>{
            const key = '3232402bfe8a491754a40c7b79d68cd656553bc5e9e3b78012dac26bcd9c4a03';
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await axios.get(url);
            console.log(resultado.data.Data);
            guardarCriptos(resultado.data.Data);
        }
        consultarApi();
    },[]);

    // comprobar campos
    const cotizarMoneda = e =>{
        e.preventDefault();

        if(monedaCotizar === '' || criptoCotizar ===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMoneda(monedaCotizar);
        guardarCriptomoneda(criptoCotizar);
    }
    // show error
const componente = (error) ? <Error mensaje="Ambos campos son necesarios" /> : null;

    return(
        <form
        onSubmit={cotizarMoneda}
        >
            <div className="row">
            <label>Elige una Moneda</label>
            <select
            className="u-full-width"
            onChange={e => guardarMonedaCotizar(e.target.value)}
            >
                    <option value="">Selecciona tu moneda</option>
                    <option value="USD">USD</option>
                    <option value="ARS">Pesos Argentinos</option>

            </select>
                    {componente}
                <div className="row">
                    <label>Elije una crypto</label>
                    <select
                    onChange={e => guardarCriptoCotizar(e.target.value)}
                    className="u-full-width"

                    >
                        <option value="">Elije tu cripto</option>
                        {criptomonedas.map(crypto =>(
                            <Select 
                            key={crypto.CoinInfo.Id}
                            crypto={crypto}
                            />
                        ))}
                    </select>

                </div>

            </div>

            <input type="submit" className="button-primary u-full-width" value="calcular"/>

        </form>

    )

}
export default Formulario;