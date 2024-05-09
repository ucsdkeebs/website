import Link from "next/link";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
  <main className={styles.main}>
    <div className={styles.popup}>
      <h1 className={styles.header}>Sign Up</h1>
      <p>We <strong>require</strong> a discord account for the account sign-up. Please make one and join our discord if you haven’t yet!</p>
      <form className={styles.signup_form}>
        <label className={styles.label}>Email</label>
        <input type="text" className={styles.input_box}></input>
        <label className={styles.label}>UCSD Student?</label>
        <select className={styles.select}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </form>
      <Link className={styles.button} href='/'>Sign up with Discord</Link>
    </div>
  </main>
  )
  ;
}
