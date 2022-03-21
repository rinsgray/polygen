import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"
import {Stage, Layer, Circle, Rect, Text, Line} from 'react-konva';

export default function Home(props){

  const Colors =['#03045e','#023e8a','#0077b6','#0096c7','#00b4d8','#48cae4'];
  const Number_of_points = 6;

  function generateShapes() {
    return [...Array(Number_of_points)].map((_, i) => ({
      id: i.toString(),
      color: Colors[i.toString()],
      x: 50 + i.toString() * 30,
      y: 50,
    }));
  }

  function generateLine() {
    return [...Array(1)].map((_, i) => ({
      id: i.toString(),
      x: 600 + i.toString() * 50,
      y: 200,
      points: []
    }));
  }

  const INITIAL_STATE = generateShapes();
  const LINE_CONST = generateLine();

  const [inputNumber, setInputNumber] = React.useState("coefficient XYZ")
  const [inputValue, setInputValue] = React.useState()
  const [hoverClass, setHoverClass] = React.useState(styles.invis)
  const [formatFile, setFormatFile] = React.useState('lammps')
  const [hideInput, setHideInput] = React.useState(styles.nonecoef)
  const [points, setPoints] = React.useState(INITIAL_STATE)
  const [coordinatesX,setCoordinatesX] = React.useState('0')
  const [coordinatesY,setCoordinatesY] = React.useState('0')
  const [linePoints, setLinePoints] = React.useState(LINE_CONST)
  const [lineCoordX1, setLineCoordX1] = React.useState()
  const [lineCoordY1, setLineCoordY1] = React.useState()
  const [lineCoordX2, setLineCoordX2] = React.useState()
  const [lineCoordY2, setLineCoordY2] = React.useState()

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

    const handleDragStartLine = (e) => {
      const id = e.target.id();
      setLinePoints(
        linePoints.map((line) => {
          return {
            ...line,
            isDragging: line.id === id,
          };
        })
      );
    };

    const handleDragEndLine = (e) => {
      setLinePoints(
        linePoints.map((line) => {
          return {
            ...line,
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
          <Stage width={1000} height={400}>
            <Layer>
              <Rect
                width={250}
                height={400}
                fill='grey'
              />
            </Layer>
            <Layer>
            {points.map((point) => (
              <Circle
                radius = {10}
                key={point.id}
                id={point.id}
                x={point.x}
                y={point.y}
                fill={point.color}
                draggable
                rotation={point.rotation}
                shadowColor="black"
                shadowBlur={8}
                shadowOpacity={0.6}
                shadowOffsetX={point.isDragging ? 4 : 1}
                shadowOffsetY={point.isDragging ? 4 : 1}
                scaleX={point.isDragging ? 1.2 : 1}
                scaleY={point.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onMouseEnter={e => {
                  const container = e.target.getStage().container();
                  container.style.cursor = "pointer";
                }}
                onMouseLeave={e => {
                  const container = e.target.getStage().container();
                  container.style.cursor = "default";
                }}
                onMouseMove={e => {
                  if (e.target.absolutePosition().x > 250){
                    setCoordinatesX((e.target.absolutePosition().x)-250)
                    setCoordinatesY(e.target.absolutePosition().y)
                  } else{
                    setCoordinatesX('0')
                    setCoordinatesY('0')
                  }
                }}
              />
              ))}
            </Layer>
            <Layer>
            {linePoints.map((line) => (
              <Circle
                radius = {5}
                key={line.id}
                id={line.id}
                x={line.x}
                y={line.y}
                fill='red'
                draggable
                rotation={line.rotation}
                scaleX={line.isDragging ? 1.2 : 1}
                scaleY={line.isDragging ? 1.2 : 1}
                onDragStart={handleDragStartLine}
                onDragEnd={handleDragEndLine}
                onMouseMove={e => {
                  setLineCoordX1(e.target.absolutePosition().x)
                  setLineCoordY1(e.target.absolutePosition().y)
                }}
              />
            ))}
            {linePoints.map((line) => (
              <Circle
                radius = {5}
                key={line.id}
                id={line.id}
                x={line.x + 50}
                y={line.y}
                fill='red'
                draggable
                rotation={line.rotation}
                scaleX={line.isDragging ? 1.2 : 1}
                scaleY={line.isDragging ? 1.2 : 1}
                onDragStart={handleDragStartLine}
                onDragEnd={handleDragEndLine}
                onMouseMove={e => {
                  setLineCoordX2(e.target.absolutePosition().x)
                  setLineCoordY2(e.target.absolutePosition().y)
                }}
              />
            ))}
              <Line
                x = {0}
                y = {0}
                width={750}
                height={400}
                points = {[lineCoordX2,lineCoordY2,lineCoordX1,lineCoordY1]}
                stroke = "red"
                strokeWidth = {3}
                />
            </Layer>
            <Layer>
              <Text
                x = {100}
                y = {15}
                text = {coordinatesX}
              />
              <Text
                x = {125}
                y = {15}
                text = '|'
              />
              <Text
                x = {132}
                y = {15}
                text = {coordinatesY}
              />

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
