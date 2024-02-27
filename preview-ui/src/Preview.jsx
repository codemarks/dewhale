import { Search, ShoppingCart, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen">
      <header className="bg-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-xl text-teal-600">Edumem</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-teal-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-500">About</a>
            <a href="#" className="text-gray-600 hover:text-teal-500">Courses</a>
            <a href="#" className="text-gray-600 hover:text-teal-500">Instructor</a>
            <a href="#" className="text-gray-600 hover:text-teal-500">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600" />
          <ShoppingCart className="w-5 h-5 text-gray-600" />
          <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white">
            <LogIn className="w-4 h-4 mr-2" /> Login/Register
          </Button>
        </div>
      </header>
      <main className="px-8 py-12">
        <section className="text-center max-w-4xl mx-auto">
          <span className="inline-block bg-pink-200 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">50% OFF - LEARN FROM TODAY</span>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">The Best Way For Your Learning 🎓</h1>
          <p className="text-gray-600 mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-teal-600 text-white">Explore Courses →</Button>
            <Button variant="outline" className="text-teal-600 border-teal-600">Watch Demo</Button>
          </div>
        </section>
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              title="Financials Security with Thinking & Principles"
              students={78}
              rating={5}
            />
            <CourseCard
              title="Learning to Write As A Professional Author"
              students={78}
              rating={4}
            />
            <CourseCard
              title="Master jQuery in a Short Period of Time"
              students={78}
              rating={4.5}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const CourseCard = ({ title, students, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <AspectRatio ratio={16 / 9} className="mb-4">
        <img
          src="https://via.placeholder.com/300x200"
          alt={title}
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{students} Students</span>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.396-.957 1.705-.957 2.102 0l1.34 3.24a1 1 0 001.26.67l3.584-1.047a1 1 0 01.581 1.924l-3.025 2.084a1 1 0 00-.286.991l.715 3.494a1 1 0 01-1.45 1.054L10 13.01l-3.14 1.65a1 1 0 01-1.45-1.054l.715-3.494a1 1 0 00-.286-.991L3.814 8.8a1 1 0 01.581-1.924l3.584 1.047a1 1 0 001.26-.67l1.34-3.24z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;