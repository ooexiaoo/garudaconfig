import { HoveredLink } from "./ui/navbar-menu"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="font-bold sm:text-3xl text-white">About Us</h2>
              <p>This is a place for anime enjoyers,
                A place where you can be yourself and watch any anime you'd every want!
              </p>
            </div>
            <div>
            <h2 className="font-bold sm:text-3xl text-white">Courses</h2>
                <HoveredLink href="/courses">All Courses</  HoveredLink>
                <HoveredLink href="/basicmusic">Basic Music Theory</  HoveredLink>
                <HoveredLink href="/courses">Advanced Composition</  HoveredLink>
                <HoveredLink href="/courses">Songwriting</  HoveredLink>
                <HoveredLink href="/courses">Music Production</  HoveredLink>
            </div>
            <div>3</div>
            <div>4</div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Super Duper Anime Lovers</p>
    </footer>
  )
}

export default Footer