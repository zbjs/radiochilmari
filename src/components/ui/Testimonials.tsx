import React from 'react';
import testimonialsData from '@/contexts/testimonialsData';

const Testimonials = () => {
  return (
    <section id="testimonies" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
            আমাদের সম্পর্কে অন্যদের কী বলার আছে তা এখানে।
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-blue-500 md:text-center md:text-5xl">
            এটা শুধু আমাদের না, 
            </h1>
            <p className="text-xl text-purple-500 md:text-center md:text-2xl">
            আমাদের শ্রোতা এবং  শিল্পী দের মতামত! 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-sm leading-6 space-y-8"
            >
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href={testimonial.link} className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gray-500 text-md">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">{testimonial.testimonial}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
