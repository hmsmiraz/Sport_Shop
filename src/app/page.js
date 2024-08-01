import HomeButton from "@/components/home-button";
import { currentUser } from "@clerk/nextjs/server";
import { Fragment } from "react";
import styles from "./styles/styles.module.scss";

export default async function Home() {
  const user = await currentUser();

  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.innerDiv}>
          <div className={styles.flexContainer}>
            <section className={styles.leftSection}>
              <div className={styles.innerLeftSection}>
                <span className={styles.spanContainer}>
                  <span className={styles.spanText}>
                    Cricket's your passion, we're your partner
                  </span>
                  <span className={styles.spanBlock}></span>
                </span>
                <h1 className={styles.heading}>
                  From pitch to pavilion, we've got you covered.
                </h1>
                <div className={styles.buttonContainer}>
                  <HomeButton user={JSON.parse(JSON.stringify(user))} />
                </div>
              </div>
            </section>
            <section className={styles.rightSection}>
              <img
                src="./2.png"
                alt="Home Page Banner"
                className={styles.image}
              />
            </section>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
