import React from 'react';
import styles from './MainPage.module.css'
import SideMenu from '../SideMenu/SideMenu';
import SoldierDetails from '../SoldierDetails/SoldierDetails';


export default function MainPage() {
  return (
    <div className={styles.container}>
      <SideMenu/>
      <SoldierDetails/>
    </div>
  )
}