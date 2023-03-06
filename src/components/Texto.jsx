import React from 'react';
import styles from "./Texto.modulo.css";

const Texto = (props) => {
  return (
   <div className={styles.texto}>
   {props.children} 
   <button>{props.nombre}</button>
    </div>
  )
}

export default Texto