import React from "react";

export default function Saludar(props){

    const {userInfo, saludarFn} = props;
    const {nombre = "Anónimo"} = userInfo;

    return(

        <div>

            <button onClick={() => saludarFn(nombre)}>Saludar</button> 
        
        </div>

    );

}