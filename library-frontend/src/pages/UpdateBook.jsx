import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ bookId: "", title: "", author: "", genre: "", availabilityStatus: "Available" });

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(book)
      const response = await fetch(`http://localhost:8080/api/books/${book.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="w-full max-w-md  p-6 rounded-lg "> 
      <h2 className="text-2xl font-bold mb-4">Update Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
       <input type="text" name="bookId" value={book.bookId} className="input input-bordered w-full" onChange={handleChange} required />
        <input type="text" name="title" value={book.title} className="input input-bordered w-full" onChange={handleChange} required />
         
        <input type="text" name="author" value={book.author} className="input input-bordered w-full" onChange={handleChange} required />
        <input type="text" name="genre" value={book.genre} className="input input-bordered w-full" onChange={handleChange} required />
        <button className="btn btn-warning">Update Book</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateBook;
