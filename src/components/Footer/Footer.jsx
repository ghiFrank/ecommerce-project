import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-black pt-10">
      {/* First Div: Logo */}
      <div className="text-center text-4xl font-bold mb-8">MyBrand</div>

      {/* Second Div: Signup Section */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mb-8 ">
        <div className="text-[16px] mb-4 md:mb-0 border-t md:border-r border-b  border-gray-500 p-12 uppercase">
          Sign Up to Get 10% Off Your First Order
        </div>
        <div className=" border-t  border-b  border-gray-500 p-12">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4   text-black w-72 border-none outline-none"
          />
          <button className="   text-black px-4  rounded-full">→</button>
        </div>
      </div>

      {/* Third Div: Menu */}
      <div className="flex justify-center items-center gap-x-10 mb-8 text-[14px]">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Delivery and Returns
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
      </div>

      {/* Fourth Div: Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-center gap-x-60  items-center text-center text-sm space-y-4 md:space-y-0 border-t border-gray-500 py-5">
        <div className="order-3 md:order-1 py-5">
          © 2024. All rights reserved.
        </div>
        <div className="order-1 md:order-2 flex space-x-4 gap-10">
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Pinterest
          </a>
        </div>
        <div className="order-2 md:order-3 flex space-x-4 gap-8 py-2">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
