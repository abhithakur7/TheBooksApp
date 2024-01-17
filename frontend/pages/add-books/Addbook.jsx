import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/actions";

import styles from "./books.module.css";

const AddBook = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleChange = (property, e) => {
    setData((prev) => ({
      ...prev,
      [property]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook(data));
  };

  return (
    <div className={styles.books}>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
