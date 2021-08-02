import React, {useState, useEffect} from 'react';

export default function HookEstado(){

    const [stateCar, setStateCar] = useState(false);
    const [contar, setContar] = useState(0);

    useEffect(() => {
        alert(`Clicks: ${contar}`);
    }, [contar]);

    const encenderApagar = () => {

        // setStateCar(!stateCar);
        setStateCar(prevValue => !prevValue);
        setContar(contar + 1);

    };

    return (

        <div>

            <h3>El botón esta: {stateCar ? "Encendido" : "Apagado"}</h3>
            <h4>Clicks: {contar}</h4>
            <button onClick={encenderApagar}>Encender/Apagar</button>

        </div>

    );

}