import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const [currentPage, setCurrentPage] = useState("profile");

  const ProfilePage = () => (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-center mb-4">Alex Smith</h1>
      <p className="text-gray-700 text-center mb-6">
        Software Engineer | JavaScript & React Expert
      </p>
      <div className="space-y-4">
        <p>
          <strong>Email:</strong> alex.smith@example.com
        </p>
        <p>
          <strong>Location:</strong> San Francisco, CA
        </p>
        <p>
          <strong>Skills:</strong> React, Node.js, JavaScript, HTML, CSS
        </p>
        <p>
          <strong>About Me:</strong> Dedicated developer with over 5 years of
          experience crafting dynamic and user-centered web applications.
        </p>
      </div>
    </div>
  );

  const LinksPage = () => (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">
        My Professional Profiles
      </h2>
      <div className="space-y-4">
        <a
          href="https://github.com/alexsmith"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          GitHub Profile
        </a>
        <a
          href="https://linkedin.com/in/alexsmith"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://example.com/certification"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          JavaScript & React Certification
        </a>
        <a
          href="https://alexsmith-portfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          Portfolio Website
        </a>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Profile Hub</h1>
            <div className="space-x-4">
              <Link
                to="/"
                className={`text-white hover:text-blue-200 ${
                  currentPage === "profile" ? "font-bold" : ""
                }`}
                onClick={() => setCurrentPage("profile")}
              >
                Profile
              </Link>
              <Link
                to="/links"
                className={`text-white hover:text-blue-200 ${
                  currentPage === "links" ? "font-bold" : ""
                }`}
                onClick={() => setCurrentPage("links")}
              >
                Links
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
