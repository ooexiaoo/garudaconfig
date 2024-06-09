'use client'
import Image from "next/image"

function page() {
    return (
        <div className="flex flex-col w-full justify-center">
            <div className="w-full hero min-h-screen" style={{ backgroundImage: 'url(./Ilya_Kuvshino.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">THE BASICS!!!</h1>
                        <p className="mb-5">If you like anime this is the perfect place for you to get started, Here you&apos;ll learn about all the different styles of anime.</p>
                        <button className="btn btn-accent">START NOW</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center p-10">
                <div className="card w-96 bg-gray-900 shadow-xl">
                    <figure className="px-10 pt-10">
                        <Image src="./rei.jpg"
                        width={300}
                        height={300}
                        className="rounded-xl"
                        alt={"choco"}/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rei</h2>
                        <p>Who is Rei and why is she so influencial?</p>
                        <div className="card-actions">
                            <button className="btn btn-accent">Meet Rei</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page