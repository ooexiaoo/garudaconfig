'use client'
import { BackgroundBeams } from "@/components/ui/background-beams"


function page() {
  return (
    <div>
    <BackgroundBeams className="z-0 fixed"/>
    <ContactForm/>
    </div>
  )
}

export default page