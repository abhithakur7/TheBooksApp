import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <a href="/">TheBookApp</a>
      </div>
      <div>
        <button className={styles.btn}>
          <a href="/addbook">Add New Book</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
