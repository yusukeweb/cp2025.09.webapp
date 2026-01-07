"use client";
import styles from './page.module.css';
import { useState } from 'react';
const Meki = () => {
    const [count,setCount] = useState(20);
    const handleClick = () => {
        setCount((up) => up + 10);
    }
    return (
        <>
        <h1 className={styles.title}>test</h1>
        <div className={styles.flex}>
            <button onClick={handleClick}>Click!</button>
            <div className={styles.balloon} style={{width: count,height: count}}>
              <p style={count <= 40 ? {fontSize:`${count - 10}px`} :{fontSize:`40px`}}>{`${count} `}</p>
            </div>
        </div>
        </>
    )
}
export default Meki;
