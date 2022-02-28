import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"
import {Stage, Layer, Circle} from 'react-konva';

export default function Home(props){

  const [inputNumber, setInputNumber] = React.useState("XYZ")
  const [inputValue, setInputValue] = React.useState()
  const [hoverClass, setHoverClass] = React.useState(styles.invis)
  const [formatFile, setFormatFile] = React.useState('lammps')
  const [hideInput, setHideInput] = React.useState(styles.nonecoef)
  const pressEnter = (e) =>{
    if (e.keyCode === 13){
      let xyz = document.getElementById('xyzInput').value
      setInputNumber(xyz);
      setInputValue("");
    }
    else{
      setInputValue()
    }

  };
  const showSelection = () =>{
    setHoverClass(styles.vis)
  }
  const hideSelection = () =>{
    setHoverClass(styles.invis)
  }
  const choiceFormatL = () =>{
    let format = 'lammps'
    setHideInput(styles.nonecoef)
    setFormatFile(format)
  }
  const choiceFormatX = () =>{
    let format = 'XYZ'
    setHideInput(styles.coef)
    setFormatFile(format)
  }
  const choiceFormatP = () =>{
    let format = 'pdb'
    setHideInput(styles.nonecoef)
    setFormatFile(format)
  }
  
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
          <button className={styles.buttonChoice}
            onMouseEnter = {showSelection}
            onMouseLeave = {hideSelection}>
            {formatFile}
          </button>
          <div className={hoverClass}>
          <ul onMouseEnter = {showSelection}
          onMouseLeave = {hideSelection}>
            <li id='lammps' onClick={choiceFormatL}><p>lammps</p></li>
            <li id='xyz' onClick={choiceFormatX}><p>XYZ</p></li>
            <li id='pdb' onClick={choiceFormatP}><p>pdb</p></li>
          </ul>
          </div>
        </div>
        <div className={hideInput}>
          <input type="text" id="xyzInput" placeholder={inputNumber} value={inputValue} onKeyDown={pressEnter}/>
        </div>
      </div>
    </Layout>
  )
}
