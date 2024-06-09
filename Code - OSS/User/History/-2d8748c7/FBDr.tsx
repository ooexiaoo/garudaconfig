import { HoveredLink } from "./ui/navbar-menu";


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="font-bold sm:text-3xl text-white">About Us</h2>
              <p>This is a place for anime enjoyers,
                A place where you can be yourself and watch any anime youd every want!
              </p>
            </div>
            <div>
            <h2 className="font-bold sm:text-3xl text-white">Courses</h2>
              <div className="flex flex-col space-y-1 text-sm cursor-pointer">
                  <a className="cursor-pointer" href="/courses">Courses</a>
                  <a className="cursor-pointer" href="/basicmusictheory">Basic Music Theory</a>
                  <a className="cursor-pointer" href="/advancedcomposition">Advanced Composition</a>
                  <a className="cursor-pointer" href="/songwriting">Songwriting</a>
                  <a className="cursor-pointer" href="/musicproduction">Music Production</a>
              </div>
            </div>
            <div>3rd Section</div>
            <div>4th Section</div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Super Duper Anime Lovers</p>
    </footer>
  )
}

export default Footer