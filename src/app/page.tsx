     
import React from 'react';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12 min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">

      {/* Title Section */}
      <div className="text-left max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-black via-blue-800 to-blue-600 text-transparent bg-clip-text leading-snug text-center">
          Everything Talent <br/>simplifies hiring with a <br/> free ATS and AI-driven<br/> assessments.
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Local Image */}
          <img 
            src="/image/img1.jpg" // Adjust the path to match your image location in the public folder
            alt="Workspace" 
            className="rounded-lg shadow-lg transform rotate-6 w-72 h-48 md:w-96 md:h-64 object-cover"
          />
          {/* External Image */}
          <img 
           src="/image/img2.jpg" // Correct Unsplash image link
            alt="Person using laptop" 
            className="rounded-lg shadow-lg transform rotate-6 w-72 h-48 md:w-96 md:h-64 object-cover"
          />
        </div>
      </div>
      </div>

      {/* Description Section */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h2 className="text-4xl font-bold text-black">Our Story</h2>
        <p className="text-2g font-semibold  mt-6 mb-10">
          We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, 
          we empower our weavers and their families to break the cycle of poverty and build a brighter future.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16 mb-16">
        
        {/* Text Section on the Left */}
        <div className="grid grid-cols-12 justify-center items-center mt-12"> 
        <div className="col-span-12 md:col-span-5 order-2 md:order-1 md:col-start-2">
        <div className="flex flex-col justify-center 1g:pr-14"> 
        <div className="text-left max-w-4xl lg:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-6">
            The Journey to Transform Recruitment
          </h1>
          <p className="text-lg text-gray-600 text-justify">
            Everything Talent was founded with a vision to transform the way organizations approach 
            hiring. Frustrated by traditional, cumbersome methods of recruiting and recognizing the 
            potential for bias in evaluating candidates, our founder set out to create a solution that 
            simplifies the hiring journey while leveraging the latest advancements in technology.
          </p>
        </div>
        </div>
        </div>
        </div>

        {/* Image Section on the Right */}
        <div className="order-1 md:order-2 md:col-start-7 col-span-12 md:col-span-5 mb-6 md:mb-0 mt-6 md:mt-0"></div>
        <div className="w-full lg:w-1/2">
          <img 
             src="/image/story1.webp" // Replace with local or Unsplash image
            alt="Transforming Recruitment" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16 mb-16">
        
        {/* Text Section on the Left */}
        <div className="text-right max-w-4xl lg:w-1/2 lg:order-2">
          <h1 className="text-4xl font-bold text-black mb-6">
          Combining Innovation with Efficiency
          </h1>
          <p className="text-lg text-gray-600 text-justify">
          Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. 
          This allows you to evaluate candidates quickly and accurately, regardless of their background 
          or the complexity of the role. We are committed to leveraging the latest technology to streamline
          the recruitment process and reduce bias.
          </p>
        </div>

        {/* Image Section on the Right */}
        <div className="w-full lg:w-1/2 lg:order-1">
          <img 
            src="/image/story_2.webp" 
            alt="Transforming Recruitment" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-16 mb-16">
        
        {/* Text Section on the Left */}
        <div className="text-left max-w-4xl lg:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-6">
            Democratizing Recruitment Tools
          </h1>
          <p className="text-lg text-gray-600 text-justify">
          We believe in democratizing access to powerful recruitment tools, making them available to 
          both startups and established companies alike. Our goal is to level the playing field, ensuring
          that every organization, regardless of size, can compete for and secure the best talent available.
          </p>
        </div>

        {/* Image Section on the Right */}
        <div className="w-full lg:w-1/2">
          <img 
             src="/image/story_3.webp"
            alt="Transforming Recruitment" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      
    </section>
  );
};
