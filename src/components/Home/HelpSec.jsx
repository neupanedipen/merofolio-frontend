import React from 'react';
import styles from './HelpSec.module.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const HelpSec = () => {
    return (
    <section id="how can we help" className={styles.help}>
        <h1>How Can We Help You</h1>
        <p>Do you face any of these problems?<br />Here's how we can help</p>

      <div className={styles.row}>
        <div className={styles.helpCol}>
          <img src={img1} alt="Banner img"/>
          <h3>
            "It's a pain to manually keep track of my portfolio in spreadsheets"
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            earum nihil velit itaque nemo molestiae iusto cumque temporibus quia
            repellendus at nobis, sunt assumenda facere officia labore
            dignissimos laboriosam! Veniam.
          </p>
        </div>
        <div className={styles.helpCol}>
          <img src={img2} alt="img2"/>
          <h3>"Portfolio management tools are so expensive!"</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            earum nihil velit itaque nemo molestiae iusto cumque temporibus quia
            repellendus at nobis, sunt assumenda facere officia labore
            dignissimos laboriosam! Veniam.
          </p>
        </div>
        <div className={styles.helpCol}>
          <img src={img3} alt="img3"/>
          <h3>"I don't know what stocks to buy"</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            earum nihil velit itaque nemo molestiae iusto cumque temporibus quia
            repellendus at nobis, sunt assumenda facere officia labore
            dignissimos laboriosam! Veniam.
          </p>
        </div>
      </div>
    </section>
    )
}

export default HelpSec;