import React from 'react';

const AboutUs = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <span className="font-semibold">Timbu</span> - Where Fashion Meets Confidence!
      </p>
      <p className="text-base mb-4">
        At <strong>Timbu</strong>, we believe fashion is more than just clothing, it's a way to express who you are. 
        Our mission is to empower individuals through stylish, high-quality, and affordable fashion that suits every occasion.
      </p>
      <p className="text-base mb-4">
        Founded in 2023, we set out to build a store that blends modern trends with timeless style. Whether you're looking for everyday basics, 
        statement pieces, or the latest seasonal drops, we've got something for everyone.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Curated collections for men, women & unisex</li>
        <li>Quality fabrics and fits</li>
        <li>Secure payments & fast delivery</li>
        <li>Friendly, responsive customer service</li>
      </ul>
      <p className="text-base">
        We're more than just a fashion store — we're a community. Thank you for making us a part of your style journey.
      </p>
      <p className="mt-6 italic">Stay stylish,  
        <br />The <span className="font-semibold">Timbu</span> Team</p>
    </div>
  );
};

export default AboutUs;
