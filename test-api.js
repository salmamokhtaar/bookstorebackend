const axios = require('axios');

// Base URL for API
const API_URL = 'http://localhost:3000';

// Store token after login
let token = '';

// Test user data
const testUser = {
  name: 'Test User',
  email: 'test@example.com',
  password: 'test123'
};

// Test admin data
const testAdmin = {
  name: 'Test Admin',
  email: 'admin@example.com',
  password: 'admin123',
  role: 'admin'
};

// Test book data
const testBook = {
  bookTitle: 'Test Book',
  author: 'Test Author',
  imageUrl: 'https://example.com/test-book.jpg',
  bookCategory: 'Test',
  bookDescription: 'This is a test book.',
  bookPdfUrl: 'https://example.com/test-book.pdf'
};

// Helper function to log responses
const logResponse = (title, response) => {
  console.log(`\n=== ${title} ===`);
  console.log('Status:', response.status);
  console.log('Data:', JSON.stringify(response.data, null, 2));
};

// Helper function to log errors
const logError = (title, error) => {
  console.log(`\n=== ${title} ===`);
  console.log('Error:', error.message);
  if (error.response) {
    console.log('Status:', error.response.status);
    console.log('Data:', JSON.stringify(error.response.data, null, 2));
  }
};

// Test API endpoints
const testAPI = async () => {
  try {
    // 1. Register a regular user
    console.log('\n--- Testing User Registration ---');
    const registerResponse = await axios.post(`${API_URL}/register`, testUser);
    logResponse('Register User', registerResponse);

    // 2. Register an admin user
    console.log('\n--- Testing Admin Registration ---');
    const adminRegisterResponse = await axios.post(`${API_URL}/register`, testAdmin);
    logResponse('Register Admin', adminRegisterResponse);
    
    // 3. Login as admin
    console.log('\n--- Testing Admin Login ---');
    const loginResponse = await axios.post(`${API_URL}/login`, {
      email: testAdmin.email,
      password: testAdmin.password
    });
    logResponse('Login', loginResponse);
    
    // Save token for authenticated requests
    token = loginResponse.data.token;
    
    // 4. Get all users (admin only)
    console.log('\n--- Testing Get All Users ---');
    const usersResponse = await axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    logResponse('Get All Users', usersResponse);
    
    // 5. Upload a book (admin only)
    console.log('\n--- Testing Book Upload ---');
    const bookResponse = await axios.post(`${API_URL}/upload_book`, testBook, {
      headers: { Authorization: `Bearer ${token}` }
    });
    logResponse('Upload Book', bookResponse);
    
    const bookId = bookResponse.data._id;
    
    // 6. Get all books
    console.log('\n--- Testing Get All Books ---');
    const booksResponse = await axios.get(`${API_URL}/all_books`);
    logResponse('Get All Books', booksResponse);
    
    // 7. Get book by ID
    console.log('\n--- Testing Get Book by ID ---');
    const bookByIdResponse = await axios.get(`${API_URL}/book/${bookId}`);
    logResponse('Get Book by ID', bookByIdResponse);
    
    // 8. Update book (admin only)
    console.log('\n--- Testing Update Book ---');
    const updateBookResponse = await axios.patch(`${API_URL}/book/${bookId}`, {
      bookTitle: 'Updated Test Book',
      bookDescription: 'This is an updated test book.'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    logResponse('Update Book', updateBookResponse);
    
    // 9. Delete book (admin only)
    console.log('\n--- Testing Delete Book ---');
    const deleteBookResponse = await axios.delete(`${API_URL}/book/${bookId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    logResponse('Delete Book', deleteBookResponse);
    
    console.log('\n--- API Testing Complete ---');
    
  } catch (error) {
    logError('API Test Error', error);
  }
};

// Run the tests
testAPI();
