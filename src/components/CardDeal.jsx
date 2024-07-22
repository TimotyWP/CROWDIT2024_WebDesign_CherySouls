import React from 'react'

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Enhance Your Career with <br className="sm:block hidden" /> In-Demand Coding Skills
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      Master essential coding skills with our monthly courses. Stay competitive in the job market while boosting your career prospects. Join us and start your journey towards a successful tech career today.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;