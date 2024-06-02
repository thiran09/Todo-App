import React from 'react'
import styles from "../css/todoitems.module.css";

export default function TodoItems({item}) {
  return (
    <div className={styles.itemsdiv}>
        <div className={styles.items}>
          <span className={styles.span} >{item.name}</span>
          <button className={styles.button} >Delete</button>
                
        </div>
    </div>
  )
}
