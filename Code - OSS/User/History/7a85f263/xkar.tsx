'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
  {
    title: 'Understanding Anime Culture',
    description:
      'Dive deep into the fascinating world of anime culture and gain insights into its history, themes, and impact.',
    slug: 'understanding-anime-culture',
    isFeatured: true,
  },
  {
    title: 'The Art of Anime Storytelling',
    description:
      'Learn the craft of storytelling in anime from experienced creators and explore techniques to create compelling narratives.',
    slug: 'the-art-of-anime-storytelling',
    isFeatured: true,
  },
  {
    title: 'Mastering Character Design in Anime',
    description:
      'Advanced techniques to master character design and development in the anime genre.',
    slug: 'mastering-character-design-in-anime',
    isFeatured: true,
  },
  {
    title: 'Anime Production Essentials',
    description:
      'Get started with anime production with this comprehensive overview covering animation techniques, storytelling, and more.',
    slug: 'anime-production-essentials',
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: 'Exploring Anime Voice Acting',
    description:
      'Enhance your voice acting skills for anime characters with expert tips and strategies from industry professionals.',
    slug: 'exploring-anime-voice-acting',
    isFeatured: true,
  },
  {
    title: 'Anime Marketing Strategies',
    description:
      'Learn how to promote your anime effectively in the digital age and reach your target audience with impactful marketing strategies.',
    slug: 'anime-marketing-strategies',
    isFeatured: true,
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Anime Experience</p>
        </div>
        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => ({
            title: webinar.title,
            description: webinar.description,
            link: '/'
          }))}/>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View all Members
          </Link>
        </div>
      </div>
      </div>
  )
}

export default UpcomingWebinars