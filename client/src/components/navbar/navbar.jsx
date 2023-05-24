import style from "./index.module.css"
import PhoneIcon from '@mui/icons-material/Phone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

const NAVBAR = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbar1}>
        <p className={style.navbar1_text}>We believe we helps people
           for happier lives</p>
           <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="LOGO" />
           <div className={style.navbar1_contact}>
           <p>+880 123 12 658 439 </p>
           <span className={style.phone}><PhoneIcon  /></span>
           </div>
      </div>
      <div className={style.navbar2}>
        <Link className={style.links}>HOME</Link>
        <Link className={style.links}>ABOUT</Link>
        <Link className={style.links}>IMMIGRATION</Link>
        <Link className={style.links}>COURSE</Link>
        <Link className={style.links}>COUNTRY</Link>
        <div className={style.blog}>
        <Link className={style.link}>BLOG</Link>
        <ExpandMoreIcon/>
        </div>
        <Link className={style.links}>CONTACT</Link>
        <Link className={style.links}>ELEMENTS</Link>
      </div>
    </div>
  )
}

export default NAVBAR
