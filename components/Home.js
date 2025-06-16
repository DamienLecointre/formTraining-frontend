//NEXT IMPORTS
import Link from "next/link";

//STYLE IMPORTS
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome back!</h1>
        <div className={styles.linkContainer}>
          <div className={styles.signContainer}>
            <h5>Already have an account ?</h5>
            <Link href="/logIn">Sign in</Link>
          </div>
          <div className={styles.signContainer}>
            <h5>Don't have an account ?</h5>
            <Link href="/signUp">Sign up</Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
