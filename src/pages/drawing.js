import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./drawing.module.css"


export default function Home(){
  return(
    <Layout>
      <div className={styles.rectangle}>
      Здесь будет рисовалка
      </div>
    </Layout>
  )
}
