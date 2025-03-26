import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({ bookId: "", title: "", author: "", genre: "", availabilityStatus: "Available" });
  const navigate = useNavigate();

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(book)
      const response = await fetch("http://localhost:8080/api/books", {
        method: "POST",
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
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md p-6 ">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input type="text" name="bookId" placeholder="Book ID" className="input input-bordered w-full" onChange={handleChange} required />
          <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" onChange={handleChange} required />
          <input type="text" name="author" placeholder="Author" className="input input-bordered w-full" onChange={handleChange} required />
          <input type="text" name="genre" placeholder="Genre" className="input input-bordered w-full" onChange={handleChange} required />
          <button className="btn btn-primary">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

