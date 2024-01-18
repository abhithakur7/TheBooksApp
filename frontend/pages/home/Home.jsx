import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../store/actions";
import styles from "./Home.module.css";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

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
          <div className={styles.cardheader}>
            <h3>{book.title}</h3>
            <div className={styles.actions}>
              <MdEdit />
              <FaTrash />
            </div>
          </div>
          <p>{book.description}</p>
          <h6>{book.author}</h6>
        </div>
      ))}
    </div>
  );
};

export default Home;
