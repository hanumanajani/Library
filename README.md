# 📚 Library Management System

## 🚀 Project Overview
The **Library Management System** is a full-stack web application built using **Spring Boot** for the backend and **React.js with Tailwind CSS** for the frontend. This system allows users to **add, search, and manage books** efficiently.

## 🏗 Tech Stack
- **Frontend**: React.js, Tailwind CSS, DaisyUI, React Router
- **Backend**: Spring Boot, Spring Data JPA, Hibernate
- **Database**:  MySQL (configurable)
- **Tools & Others**: Postman, Maven,VS Code,SDK

## 📌 Features
### ✅ Backend (Spring Boot)
- REST API for CRUD operations on books
- Database connectivity using Spring Data JPA

### ✅ Frontend (React.js + Tailwind CSS)
- User-friendly UI with responsive design
- Add new books with form validation
- Search books by **Book ID** or **Title**
- Display search results in a table format

---

## 🔗 API Endpoints (Backend)
| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| `POST` | `/api/books`         | Add a new book |
| `GET`  | `/api/books`         | Get all books |
| `GET`  | `/api/books/{id}`    | Get book by ID |
| `PUT`  | `/api/books/{id}`    | Update book details |
| `DELETE` | `/api/books/{id}` | Delete a book |

---

## 🎯 Usage
- **Add a new book**: Navigate to the **Add Book** page and enter book details.
- **Search for books**: Use the **Search Books** page to find books by **ID or Title**.  this is not implemented for front end.
- **Manage books**: Perform CRUD operations on books using the API endpoints.

---






