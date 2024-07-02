
import React from "react"
import { FiSend } from "react-icons/fi"

const ContactSection = () => {
	return (
		<div 
		id="contact"
		className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden gap-8">
			<div className="w-[40rem] p-10 relative">
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
				<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
				<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
			</div>

			<h1 className="py-4 sm:text-7xl dark:bg-clip-text text-transparent bg-gradient-to-l from-neutral-300 to-neutral-500 text-center text-4xl font-bold">
				Lets Connect
			</h1>
			<div className="flex flex-col w-80  sm:w-[480px] justify-center items-center gap-4 ">
				{/* <input
					placeholder="Enter your email here"
					type="text"
					className="sm:w-full w-80 p-2  bg-transparent rounded-md border border-neutral-400 text-white"
				/>
				<textarea
					placeholder="Write your message here"
					className="sm:w-full w-80 p-2  bg-transparent rounded-md border border-neutral-400 text-white"
				/> */}
					<a href="mailto:itxfaizsultan@gmail.com">
				<div className="flex justify-center items-center border border-neutral-400 rounded-lg p-3 active:scale-105 transition-all mt-10 gap-2 text-md m-auto">
					<button  className=" text-neutral-200 font-semibold ">Click Here to Send Message</button>
					<FiSend color="white" size={20} />
				</div>
					</a>
			</div>
		</div>
	)
}

export default ContactSection
