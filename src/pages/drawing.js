import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"
import {Stage, Layer, Circle, Rect} from 'react-konva';

export default function Home(props){


  const Number_of_points = 6;

  function generateShapes() {
  return [...Array(Number_of_points)].map((_, i) => ({
    id: i.toString(),
    x: 50 + i.toString() * 30,
    y: 50,
    isDragging: false,
  }));
}

  const INITIAL_STATE = generateShapes();

  const [inputNumber, setInputNumber] = React.useState("coefficient XYZ")
  const [inputValue, setInputValue] = React.useState()
  const [hoverClass, setHoverClass] = React.useState(styles.invis)
  const [formatFile, setFormatFile] = React.useState('lammps')
  const [hideInput, setHideInput] = React.useState(styles.nonecoef)
  const [points, setPoints] = React.useState(INITIAL_STATE);

    const handleDragStart = (e) => {
      const id = e.target.id();
      setPoints(
        points.map((point) => {
          return {
            ...point,
            isDragging: point.id === id,
          };
        })
      );
    };
    const handleDragEnd = (e) => {
      setPoints(
        points.map((point) => {
          return {
            ...point,
            isDragging: false,
          };
        })
      );
    };



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
          <Stage width={1000} height={300} margin-top={300}>
            <Layer>
              <Rect
                width={250}
                height={300}
                fill='grey'
              />
            {points.map((point) => (
              <Circle
                radius = {10}
                key={point.id}
                id={point.id}
                x={point.x}
                y={point.y}
                fill="black"
                draggable
                rotation={point.rotation}
                scaleX={point.isDragging ? 1.2 : 1}
                scaleY={point.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
              ))}
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
