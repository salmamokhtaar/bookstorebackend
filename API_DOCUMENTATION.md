# Book Management API Documentation

## Authentication Endpoints

### Register User
- **URL**: `/register`
- **Method**: `POST`
- **Auth Required**: No
- **Description**: Register a new user
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "message": "User successfully registered",
  "user": {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Register Admin User
- **URL**: `/register`
- **Method**: `POST`
- **Auth Required**: No
- **Description**: Register an admin user
- **Request Body**:
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```
- **Response**: Same as regular user registration but with role set to "admin"

### Login
- **URL**: `/login`
- **Method**: `POST`
- **Auth Required**: No
- **Description**: Login a user
- **Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response**:
```json
{
  "message": "Successfully logged in",
  "user": {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## User Management Endpoints

### Get All Users (Admin Only)
- **URL**: `/users`
- **Method**: `GET`
- **Auth Required**: Yes (Admin)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T10:00:00.000Z"
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin",
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T10:00:00.000Z"
  }
]
```

### Get User by ID
- **URL**: `/users/:id`
- **Method**: `GET`
- **Auth Required**: Yes
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "createdAt": "2023-06-22T10:00:00.000Z",
  "updatedAt": "2023-06-22T10:00:00.000Z"
}
```

### Update User
- **URL**: `/users/:id`
- **Method**: `PUT`
- **Auth Required**: Yes
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```
- **Response**:
```json
{
  "message": "User successfully updated",
  "user": {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "role": "user",
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T11:00:00.000Z"
  }
}
```

### Delete User (Admin Only)
- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Auth Required**: Yes (Admin)
- **Headers**: `Authorization: Bearer <token>`
- **Response**:
```json
{
  "message": "User successfully deleted"
}
```

## Book Management Endpoints

### Get All Books
- **URL**: `/all_books`
- **Method**: `GET`
- **Auth Required**: No
- **Response**:
```json
[
  {
    "_id": "60d21b4667d0d8992e610c87",
    "bookTitle": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "imageUrl": "https://example.com/great-gatsby.jpg",
    "bookCategory": "Fiction",
    "bookDescription": "A novel about the American Dream set in the Roaring Twenties.",
    "bookPdfUrl": "https://example.com/great-gatsby.pdf"
  },
  {
    "_id": "60d21b4667d0d8992e610c88",
    "bookTitle": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "imageUrl": "https://example.com/mockingbird.jpg",
    "bookCategory": "Fiction",
    "bookDescription": "A novel about racial injustice in the American South.",
    "bookPdfUrl": "https://example.com/mockingbird.pdf"
  }
]
```

### Get Book by ID
- **URL**: `/book/:id`
- **Method**: `GET`
- **Auth Required**: No
- **Response**:
```json
{
  "_id": "60d21b4667d0d8992e610c87",
  "bookTitle": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "imageUrl": "https://example.com/great-gatsby.jpg",
  "bookCategory": "Fiction",
  "bookDescription": "A novel about the American Dream set in the Roaring Twenties.",
  "bookPdfUrl": "https://example.com/great-gatsby.pdf"
}
```

### Get Books by Category
- **URL**: `/books?category=Fiction`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: Array of books in the specified category

### Upload Book (Admin Only)
- **URL**: `/upload_book`
- **Method**: `POST`
- **Auth Required**: Yes (Admin)
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
```json
{
  "bookTitle": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "imageUrl": "https://example.com/great-gatsby.jpg",
  "bookCategory": "Fiction",
  "bookDescription": "A novel about the American Dream set in the Roaring Twenties.",
  "bookPdfUrl": "https://example.com/great-gatsby.pdf"
}
```
- **Response**:
```json
{
  "_id": "60d21b4667d0d8992e610c87",
  "bookTitle": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "imageUrl": "https://example.com/great-gatsby.jpg",
  "bookCategory": "Fiction",
  "bookDescription": "A novel about the American Dream set in the Roaring Twenties.",
  "bookPdfUrl": "https://example.com/great-gatsby.pdf"
}
```

### Update Book (Admin Only)
- **URL**: `/book/:id`
- **Method**: `PATCH`
- **Auth Required**: Yes (Admin)
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:
```json
{
  "bookTitle": "The Great Gatsby (Updated)",
  "bookDescription": "Updated description of the novel."
}
```
- **Response**: Updated book object

### Delete Book (Admin Only)
- **URL**: `/book/:id`
- **Method**: `DELETE`
- **Auth Required**: Yes (Admin)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: Deleted book object
