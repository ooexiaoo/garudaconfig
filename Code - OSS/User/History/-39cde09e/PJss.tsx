'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Varun's web development course was a game-changer for me. It helped me grasp the core concepts quickly and jumpstart my career in tech. Highly recommended!",
    name: 'Sarah Adams',
    title: 'Web Development Student',
  },
  {
    quote:
      "I've always been interested in anime, but Varun's course took my appreciation to a whole new level. His insights and recommendations opened up a whole new world of anime for me!",
    name: 'Jason Nguyen',
    title: 'Anime Enthusiast',
  },
  {
    quote:
      "Learning coding from Varun was a breeze. His teaching style makes complex topics easy to understand, and his passion for programming is contagious!",
    name: 'Lily Patel',
    title: 'Coding Student',
  },
  {
    quote:
      "Varun's unique blend of web development and anime expertise in his courses was exactly what I was looking for. It's refreshing to learn from someone with such diverse interests!",
    name: 'Alex Thompson',
    title: 'Course Participant',
  },
  {
    quote:
      "Varun's courses helped me see the connections between web development and other areas of interest like anime. It's inspiring to learn from someone who's so passionate about both!",
    name: 'Emily Jackson',
    title: 'Course Participant',
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">
            Hear our Harmoney: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials