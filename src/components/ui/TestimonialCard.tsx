// components/ui/CenteredCard.tsx

import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  link: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  testimonial,
  link,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      <p className="text-sm mt-4">{testimonial}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
        Read more
      </a>
    </div>
  );
};

export default TestimonialCard;
