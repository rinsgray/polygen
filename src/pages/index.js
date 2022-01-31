import * as React from 'react'
import  Layout  from '../components/layout'
import * as styles from"./index.module.css"


export default function Home(){
  return(
    <Layout header='Главная'>
      <div className={styles.text}>
      Это главная старница проекта Polygen.
      </div>
    </Layout>
  )
}
