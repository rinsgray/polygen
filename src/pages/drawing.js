import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"
import {Stage, Layer, Circle} from 'react-konva';


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
          <Stage width = {100} height={100}>
            <Layer>
              <Circle x={20} y={20} radius={50} fill="green" />
            </Layer>
          </Stage>
        </div>
        <div className={styles.choice}>
          <button >lammps</button>
          <ul>
            <li><p>lammps</p></li>
            <li><p>XYZ</p></li>
            <li><p>pdb</p></li>
          </ul>
        </div>
        <div className={styles.coef}>
          <input type="text" id="xyz" placeholder={inputNumber} value={inputValue} onKeyDown={pressEnter}/>
        </div>
      </div>
    </Layout>
  )
}
