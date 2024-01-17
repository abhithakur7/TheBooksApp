import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../store/actions";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.allBooksData);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <div className={styles.homepage}>
      {books.map((book, index) => (
        <div key={index} className={styles.card}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <h6>{book.author}</h6>
        </div>
      ))}
    </div>
  );
};

export default Home;
