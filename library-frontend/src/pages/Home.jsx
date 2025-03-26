import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Library Books</h1>
      <Link to="/add" className="btn btn-primary mb-4">Add New Book</Link>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>book id</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.bookId}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.availabilityStatus}</td>
                <td>
                  <Link to={`/update/${book.bookId}`} className="btn btn-warning btn-sm">Edit</Link>
                  <button onClick={() => handleDelete(book.id)} className="btn btn-error btn-sm ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
