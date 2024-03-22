import React from 'react';
import styles from './MainPage.module.css'
import SideMenu from '../SideMenu/SideMenu';



export default function MainPage() {
  return (
    <div className={styles.container}>
      <SideMenu/>
    </div>
  )
}