import React from "react"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import Image from "next/image"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { FiGithub } from "react-icons/fi"
import Link from "next/link"

const HeroSection = () => {
	return (
		<div
			id="home"
			className=" h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] text-balance text-center capitalize flex flex-col items-center justify-start gap-5"
		>
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="sm:flex sm:flex-row-reverse  ">
				<div className="relative h-80 w-72 aspect-square mx-auto my-8 sm:mt-14">
					<Image
						src={"/faizz.jpg"}
						alt="faiz"
						fill
						priority
						// sizes="288px"
						className="absolute h-full w-full object-cover object-top rounded-2xl "
					/>
				</div>
				<div className="flex flex-col items-center justify-center sm:mt-16">
					<p className="px-10 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
						faiz sultan{" "}
						<span className="absolute bg-green-600  rounded-full px-1.5 scale-[0.3] top-1 mr-3">
							o
						</span>
					</p>
					<p className="px-10 text-lg sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-500 pt-2">
						(Enthusiast Software Engineer)
					</p>
				</div>
			</div>
			<div className=" text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-neutral-100 to-neutral-400 ">
				<TextGenerateEffect words='"Lets build dynamic FullStack web apps together"' />
			</div>
			<div className="m-4 flex justify-center text-center gap-4 sm:gap-16 sm:text-2xl sm:py-10">
				<Link href={"https://github.com/Faizsultan1"} target="_blank">
				<HoverBorderGradient
					containerClassName="rounded-full"
					as="button"
					className="dark:bg-black bg-white text-black dark:text-neutral-300 flex items-center space-x-2 "
				>
					<FiGithub />
					<span>GitHub</span>
				</HoverBorderGradient>
				</Link>
				<Link href="/Faiz-Sultan.pdf">
				<HoverBorderGradient
					containerClassName="rounded-full"
					as="button"
					className="dark:bg-black bg-white text-black dark:text-neutral-300 flex items-center space-x-2"
				>
					<span>Download Cv</span>
				</HoverBorderGradient>
				</Link>
			</div>
		</div>
	)
}

export default HeroSection
