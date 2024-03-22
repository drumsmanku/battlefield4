
import styles from './MainPage.module.css'
import SideMenu from '../SideMenu/SideMenu';
import SoldierDetails from '../SoldierDetails/SoldierDetails';
import RightSideMenu from '../RightSideMenu/RightSideMenu';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <SideMenu/>
      <SoldierDetails/>
      <RightSideMenu/>
    </div>
  )
}