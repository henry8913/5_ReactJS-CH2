
# 📚 EPICBooks

Welcome to **EPICBooks**, my ultimate online bookstore built with React and Vite, where I offer a vast selection of literature across various genres. This platform makes searching, browsing, and exploring books easy and enjoyable for everyone.

> 🌐 Experience EPICBooks in action: [Click here to visit our live demo](https://5-react-js-ch-2.vercel.app/)

![EPICBooks](./public/img/cover.b.jpg)

## 📌 Main Features

### 🌗 Theme Support
- Dark mode by default with light mode toggle option
- Smooth theme transitions
- Theme-aware components and modals
- Persistent theme selection
- Enhanced dark theme consistency across all pages
- Dark background for About and BookDetails sections
- Improved theme transitions and color schemes

### ✅ Category Navigation
Browse books by different categories including History, Horror, Romance, Fantasy, and Sci-Fi.

### 🖼️ Book Cards with Interactive Selection
- Visually appealing book cards displaying essential details and pricing information
- Red border highlight when a book is selected
- Smooth hover effects for better user interaction
- "See Details" button for each book
- Detailed book information page with ASIN parameter routing
- Enhanced book details layout with card design
- Back to Home navigation button

### 📝 Book Reviews and Ratings
- User review system with star ratings (1-5 stars)
- Comment functionality for each book
- Real-time review updates
- Theme-aware modals for comments and reviews
- Enhanced API integration with Strive School
- Token-based authentication for comments
- CRUD operations for reviews (GET, POST, PUT, DELETE)
- Improved error handling for API requests

### 🏢 About Page
- Company history and mission statement
- Team member profiles
- Customer testimonials
- Responsive design for all devices

### 📩 Newsletter Integration
Subscribe to our newsletter for updates on new titles and special offers.

### 📱 Responsive Design
- Fully optimized for both mobile and desktop platforms
- Mobile-friendly navigation with theme toggle
- Responsive modals and overlays

### 🔍 Search Functionality
- Real-time search filtering within categories
- Easy-to-use search bar for finding specific books
- Theme-aware search interface

## 🚀 Getting Started

### Prerequisites
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/henry8913/5_ReactJS-CH2.git
```

2. Navigate to the project directory:
```bash
cd 5_ReactJS-CH2
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit:
```
http://0.0.0.0:5173
```

## 🧪 Testing

This project uses **Vitest** for testing and **@testing-library/react** for component testing.

### Running Tests

First, ensure all dependencies are installed:

```bash
npm install
```

To run the tests, execute this command:

```bash
npm test
```

The tests are located in the `src/tests/` directory. This command runs all the tests and displays the results.

### Writing Tests

All test files are located within the `src/tests` directory and should be named with a `.test.jsx` extension. These tests typically import components and utilities from **@testing-library/react**.

Here's an example test for a component:

```javascript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders the component', () => {
    render(<MyComponent />);
    const element = screen.getByText(/My Component/i);
    expect(element).toBeInTheDocument();
  });
});
```

## 🛠️ Technologies Used

- **React**: Modern UI development
- **Vite**: Next-generation frontend tooling
- **Bootstrap**: Responsive styling and components
- **Bootstrap Icons**: Icon library
- **ESLint**: Code quality and consistency
- **React Router**: Page navigation and routing
- **Strive School API**: Book reviews and ratings
- **Vitest**: Unit and integration testing
- **@testing-library/react**: Component testing
- **@testing-library/jest-dom**: Custom test matchers

## 📂 Project Structure

```
├── 📄 public/           # Static assets
│   ├── books/          # Book JSON data
│   └── img/            # Images
├── 📄 src/             # Source code
│   ├── components/     # React components
│   ├── context/       # Theme and app context
│   ├── tests/         # Test files
│   ├── assets/        # Project assets
│   └── App.jsx        # Main application
├── 📄 index.html       # Entry HTML
└── 📄 package.json     # Dependencies
```

## 🔄 Future Updates
- [x] Book reviews and ratings
- [x] Search functionality
- [x] Dark theme by default
- [x] Improved modal transparency and backdrop effects
- [x] Enhanced mobile navigation
- [x] Theme-aware form inputs
- [x] Optimized theme switching UX
- [x] Component testing with Vitest
- [x] Integration tests for core features
- [ ] User authentication system
- [ ] Shopping cart functionality
- [ ] Social media integration
- [ ] E2E testing implementation
- [ ] Expanded test coverage for all components

## 🖼️ Screenshot
<p align="center">
    <img src="./public/img/Screenshot.png" alt="Demo Screenshot" width="100%" />
</p>

## 📝 ESLint Configuration
If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules.

## 👨‍💻 Author
[Henry](https://github.com/henry8913)

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
