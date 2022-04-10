import React from 'react';
import { Link } from 'react-router-dom';
import AuthImage from '../../images/photo-1591818250210-48fba09a2305.png';

const data = [
  {
    id: 1,
    header: '5 Quick Tips For Title',
    content:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: AuthImage,
  },
  {
    id: 2,
    header: '7 Reliable Sources To Learn About Title',
    content: '10 Great Lessons You Can Learn From Content.',
    image: AuthImage,
  },
  {
    id: 3,
    header: 'The 5 Reasons Tourists Love Title',
    content: 'Ten Moments That Basically Sum Up Your Content Experience.',
    image: AuthImage,
  },
  {
    id: 4,
    header: 'Ten Top Risks Of Owning Title',
    content: 'Master The Skills Of Content And Be Successful.',
    image: AuthImage,
  },
  {
    id: 5,
    header: '15 Top Reasons Why You Face Obstacles In Learning Title',
    content: 'The Millionaire Guide On Content To Help You Get Rich.',
    image: AuthImage,
  },
  {
    id: 6,
    header: 'This Is How Title Will Look Like In 10 Years Time',
    content: `Here's What Industry Insiders Say About Content.`,
    image: AuthImage,
  },
  {
    id: 7,
    header: '5 Doubts You Should Clarify About Title',
    content: '7 Moments To Remember From Content.',
    image: AuthImage,
  },
  {
    id: 8,
    header: 'The Millionaire Guide On Title To Help You Get Rich',
    content:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image: AuthImage,
  },
];

function NewPosts() {
  return (
    <div className="flex h-full w-full divide-x divide-gray-500 mt-20">
      <div className="flex m-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.map((items) => (
            <div
              key={items.id}
              className="flex flex-col bg-white w-96 h-96 rounded shadow transition-all duration-200 hover:shadow-downfall-lg transform hover:-translate-y-0.5"
            >
              <div className="w-full aspect-w-4 aspect-h-3 rounded overflow-hidden">
                <Link to="#">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={items.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex">
                <div className="flex w-full h-full flex-col justify-center items-center p-2 mt-4">
                  <h5 className="text-md tracking-tight text-gray-700 font-serif m-1 font-semibold text-center">
                    {items.header}
                  </h5>
                  <p className="p-2 font-normal text-gray-700 dark:text-gray-400">
                    {`${items.content.substring(0, 40)}...`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPosts;
