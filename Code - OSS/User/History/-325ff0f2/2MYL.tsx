import { WavyBackground } from "./ui/wavy-background"


function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="">Meet Our Instructiors</h2>
            <p className="">
                Discover the talented porfessionals who will guide your musical journey
            </p>
        </WavyBackground>
    </div>
  )
}

export default Instructors