import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, setBookData, updateBook } from "../../store/actions";
import styles from "../add-books/books.module.css";
import { useSearchParams } from "react-router-dom";

const EditBook = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
  });
  const [searchParams] = useSearchParams();
  const book = useSelector((state) => state.bookData);
  const books = useSelector((state) => state.allBooksData);

  const dispatch = useDispatch();

  const handleChange = (property, e) => {
    setData((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBook({ id: searchParams.get("id"), data }));
    setData({
      title: "",
      author: "",
      description: "",
    });
  };

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      dispatch(
        setBookData(books.filter((item) => item._id === searchParams.get("id")))
      );
    }
  }, [books]);

  useEffect(() => {
    if (book._id) {
      setData((prev) => ({
        ...prev,
        title: book.title,
        author: book.author,
        description: book.description,
      }));
    }
  }, [book]);

  return (
    <div className={styles.books}>
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="title"
          placeholder="Enter Title"
          value={data.title}
          onChange={(e) => handleChange("title", e)}
        />
        <input
          name="author"
          placeholder="Author Name"
          value={data.author}
          onChange={(e) => handleChange("author", e)}
        />
        <textarea
          name="description"
          placeholder="Write description"
          rows={10}
          value={data.description}
          onChange={(e) => handleChange("description", e)}
        />
        {/* <div className={styles.cover}>
          <label className={styles["cover-image"]}>
            <input type="file" onChange={(e) => handleChange("image", e)} />
            Choose cover
          </label>
        </div> */}
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
