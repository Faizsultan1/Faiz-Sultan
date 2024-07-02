import Image from "next/image"
import Link from "next/link"
import React from "react"

const ProjectsSection = () => {
	return (
		<section id="projects" className="dark:bg-black md:pt-16">
			<h2 className="py-16 sm:text-7xl dark:bg-clip-text text-transparent bg-gradient-to-tr from-neutral-300 to-neutral-500 text-center text-4xl font-bold">
				My Projects
			</h2>
			<div className=" max-w-screen-lg mx-auto flex justify-center dark:text-white ">
				<div className="p-4 ">
				<Link href={"https://next-js-image-gallary.vercel.app/"} target="_blank">
					<div className="relative h-[250px]">
						<Image
							src={"/image-gallary.png"}
							alt="faiz"
							fill
							className="absolute rounded-lg object-cover object-top"
						/>
					</div>
					<p className="text-neutral-100 text-2xl font-semibold py-6 underline underline-offset-4 text-center">
						
							Image Gallary {" "}
						
					</p>
					</Link>
					<div className="w-full flex flex-wrap gap-3 justify-center text-xs px-4">
						<span className="bg-neutral-400 text-black px-2 py-1 rounded-full font-semibold">
							Next js
						</span>
						<span className="bg-neutral-400 text-black px-2 py-1 rounded-full font-semibold">
							Typescript
						</span>
						<span className="bg-neutral-400 text-black px-2 py-1 rounded-full font-semibold">
							Tailwind css
						</span>
						
						
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default ProjectsSection
