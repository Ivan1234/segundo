import React from "react";

export default function Saludar(props){

    const {userInfo, saludarFn} = props;
    const {nombre = "Anónimo"} = userInfo;
    const {edad} = userInfo;
    const {color} = userInfo;

    return(

        <div>

            <button onClick={() => saludarFn(nombre, edad, color)}>Saludar</button> 
        
        </div>

    );

}