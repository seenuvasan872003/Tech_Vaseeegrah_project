import 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F5F3EA] py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img to='/' className="inherit max-w-none" src="https://billzy.com/wp-content/uploads/2024/08/billzy-logo.png" alt="Billzy" />  
            <p className="mb-4">
            Billzy’s payment solutions empower you to streamline transactions and boost your business growth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/usecase" >
                Use Cases
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a className="hover:text-blue-400">Blog</a></li>
              <li><a className="hover:text-blue-400">Book a Demo</a></li>
              <li><a className="hover:text-blue-400">Developers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" >
                About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
