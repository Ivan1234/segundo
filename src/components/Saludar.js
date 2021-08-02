import React from "react";

export default function Saludar(props){

    console.log(props.userInfo.nombre);

    return(

        <div>
            <p>Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años, y su color favorito es el: {props.userInfo.color}</p>
        </div>

    );

}