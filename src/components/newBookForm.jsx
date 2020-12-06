import React from "react";
const NewBookForm = () => {
  return (
    <form>
      <input type="text" placeholder="book title" />
      <input type="text" placeholder="author name" />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
