// timeline/page.jsx
"use client";

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const updates = [
  {
    id: 1,
    date: '2025-12-01',
    title: 'Foundation started - tie beam',
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035611/IMG_3662_mtijt0.jpg',
  },
  {
    id: 2,
    date: '2025-12-01',
    title: 'Foundation started - column',
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035618/IMG_3631_wm556s.jpg',
  },
    {
    id: 3,
    date: '2025-12-03',
    title: 'Assembly of structural steel columns', 
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035622/IMG_3664_xaaqri.jpg',
  },
      {
    id: 4,
    date: '2025-12-04',
    title: 'Laying of concrete blocks - kitchen wall',
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035610/IMG_3679_ogctej.jpg',
  },
        {
    id: 5,
    date: '2025-12-06',
    title: 'Laying of concrete blocks - garage wall',
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035611/IMG_3698_htvemz.jpg',
  },
        {
    id: 6,
    date: '2025-12-06',
    title: 'Concrete pouring completed for kitchen ground floor slab',
    imageUrl: 'https://res.cloudinary.com/dnlsg8f0j/image/upload/v1765035610/IMG_3692_nsmwtj.jpg',
  },
  // ...add remaining updates
];

export default function VerticalTimelinePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-start py-10 px-4">
      <FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
      <div className="w-full max-w-4xl h-[90vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500">
        <VerticalTimeline>
          {updates.map(update => (
            <VerticalTimelineElement
              key={update.id}
              date={update.date}
              contentStyle={{ background: '#ffffff', color: '#333' }}
              contentArrowStyle={{ borderRight: '7px solid #ffffff' }}
            >
              <h3 className="font-semibold text-lg">{update.title}</h3>
              <img
                src={update.imageUrl}
                alt={update.title}
                className="w-full rounded-md mt-3"
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
