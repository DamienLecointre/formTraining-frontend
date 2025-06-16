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
            <h5 className={styles.signText}>Already have an account ?</h5>
            <Link href="/logIn" className={styles.signText}>
              Sign in
            </Link>
          </div>
          <div className={styles.signContainer}>
            <h5 className={styles.signText}>Don't have an account ?</h5>
            <Link href="/signUp" className={styles.signText}>
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
