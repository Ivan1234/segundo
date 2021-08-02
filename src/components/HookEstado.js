import React, {useState} from 'react';

export default function HookEstado(){

    const [stateCar, setStateCar] = useState(false);

    const encenderApagar = () => {

        // setStateCar(!stateCar);
        setStateCar(prevValue => !prevValue);

    };

    return (

        <div>

            <h3>El botón esta: {stateCar ? "Encendido" : "Apagado"}</h3>
            <button onClick={encenderApagar}>Encender/Apagar</button>

        </div>

        

    );

}