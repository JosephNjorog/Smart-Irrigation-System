import React from 'react';
import './NavbarFooterStyles.css'; // Importing CSS for Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center">
        <p className="text-white">&copy; {new Date().getFullYear()} Smart Irrigation. All rights reserved.</p>
        <p className="text-white">Follow us on social media!</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="nav-link">Facebook</a></li>
          <li><a href="#" className="nav-link">Twitter</a></li>
          <li><a href="#" className="nav-link">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
