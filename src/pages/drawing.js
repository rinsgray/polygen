import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"



export default function Home(props){

  const [inputNumber, setInputNumber] = React.useState("XYZ")
  const [inputValue, setInputValue] = React.useState()
  const pressEnter = (e) =>{
    if (e.keyCode === 13){
      let xyz = document.getElementById('xyz').value
      setInputNumber(xyz);
      setInputValue("");
    }
    else{
      setInputValue()
    }
  };


  return(
    <Layout>
      <div className={styles.draw}>
      <div className={styles.rectangle}>
      Здесь будет рисовалка
      </div>
      <div className={styles.button}>
      <div className={styles.button1}>
      <input type="text" id="xyz" placeholder={inputNumber} value={inputValue} onKeyDown={pressEnter}/>
      </div>
      <div className={styles.button2}>
      <button>lammps</button>
      </div>
      </div>
      </div>
    </Layout>
  )
}
