import style from './index.module.css'
import "@fontsource/poppins"; 
import { Grid } from '@mui/material';



const HOME = () => {
  return (
    <section>
    <section className={style.section_1}>
      <div className={style.section_1_content}>
        <h6 className={style.section_1_text}>PROCESS VISA WITHOUT WITHIN HOURS</h6>
        <h1 className={style.section_1_title}>Immigrations & 
        <br/>
          Visa Consultion</h1>
        <button className={style.section_1_button}>Book Consultancy</button>
      </div>
    </section>
    <section className={style.section_2}>
        <div className={style.section_2_head}>
        <p className={style.section_2_title}>Start <span className={style.section_2_titleSpan}>planning</span> <b>your</b> 
            <br />
             New <span className={style.section_2_titleSpan}><b>Dream</b></span></p>
           <p className={style.section_2_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
           <button className={style.section_2_button}>Request Free Consultancy</button>
  
        </div>
        <div className={style.section_2_cards}>

                {/* CARD 1 */}
                <Grid style={{marginTop:'7%',  paddingLeft:' 80px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3}>
            <div className={style.card}>
                <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
                <p className={style.card_country}>UNITED STATES</p>
                <h4 className={style.card_title}>Addiction When Gambling Becomes A Problem</h4>
                <p className={style.card_text}>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
            </Grid>

            {/* CARD 2 */}
            <Grid item xs={3}>
            <div className={style.card}>
                <img src="https://preview.colorlib.com/theme/immigration/img/s2.jpg" alt="" />
                <p className={style.card_country}>CANADA</p>
                <h4 className={style.card_title}>Addiction When Gambling Becomes A Problem</h4>
                <p className={style.card_text}>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
            </Grid>
            {/* CARD 3 */}
            <Grid item xs={3}>
            <div className={style.card}>
                <img src="https://preview.colorlib.com/theme/immigration/img/s3.jpg" alt="" />
                <p className={style.card_country}>GERMANY</p>
                <h4 className={style.card_title}>Addiction When Gambling Becomes A Problem</h4>
                <p className={style.card_text}>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
            </Grid>

            {/* CARD 4 */}
            <Grid item xs={3}>
            <div className={style.card}>
                <img src="https://preview.colorlib.com/theme/immigration/img/s4.jpg" alt="" />
                <p className={style.card_country}>AUSTRLIA</p>
                <h4 className={style.card_title}>Addiction When Gambling Becomes A Problem</h4>
                <p className={style.card_text}>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
            </Grid>
            </Grid>
        </div>
    </section>
    <section className={style.section_3}>
            <h1 className={style.section_3_title}>Our Unique Features that can impress you</h1>
            <p className={style.section_3_text}>Who are in extremely love with eco friendly system.</p>
        <div className={style.text_card}>
            {/* CARD 1 */}
            <Grid style={{marginTop:'7%',  paddingLeft:' 80px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Expert Technicians</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid >
             
             {/* CARD 2 */}
             <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Professional Service</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid>

             {/* CARD 3 */}
             <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Great Support</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid>

             {/* CARD 4 */}
             <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Technical Skills</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid>

             {/* CARD 5 */}
             <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Highly Recomended</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid>

             {/* CARD 6 */}
             <Grid item xs={4}>
             <div className={style.card_txt}>
                <h4 className={style.cardtxt_title}>Positive Reviews</h4>
                <p className={style.cardtxt_text}>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
             </div>
             </Grid>
             </Grid>
        </div>
    </section>
    <section className={style.section_4}>
        <div className={style.section_4_head}>
        <h1>LATEST NEWS FROM OUR BLOG</h1>
        <p>Who are in extremely love with eco friendly system</p>
        </div>
        <div>
            <div></div>
            <div></div>
        </div>
    </section>
    </section>
  )
}

export default HOME
