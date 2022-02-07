import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"


export default function Home(){
  return(
    <Layout>
      <div className={styles.draw}>
      <div className={styles.rectangle}>
      Здесь будет рисовалка
      </div>
      <div className={styles.button}>
      <div className={styles.button1}>
      <input type="text" placeholder="XYZ"/>
      </div>
      <div className={styles.button2}>
      <button>lammps</button>
      </div>
      </div>
      </div>
    </Layout>
  )
}
