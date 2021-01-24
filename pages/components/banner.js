import React from 'react';
import ItemCardWhite from './ItemCardWhite';
import ItemCardTransparent from './ItemCardTransparent';
import ItemCardBorder from './ItemCardBorder';
// import home from '';
const Banner = ({ title }) => {

	return (
		<div>
			<div className="w-full h-screen m-0 p-0 bg-cover bg-bottom" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1502921451607-29fa99d270d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")` }}>
				<div className="flex items-center justify-center flex-col container max-w-4xl mx-auto pt-56 md:pt-40 text-center break-normal">
					<p className="text-black font-extrabold text-xl max-w-xs">
						Self-Storage and Door-to-Door Storage in Hong Kong
			        </p>
					<p className="text-xl md:text-2xl text-red-500">HAPPY</p>
					<div className="flex items-center justify-center">
						<button className="inline-flex items-center h-10 px-5 m-4 text-white transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">
							<svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
							</svg>
							<span>SEELF-STORAGE</span>
						</button>
						<button className="inline-flex items-center h-10 px-5 m-4 text-white transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-indigo-800">
							<span>DOOR-TO-DOOR</span>
							<svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
				<div className="mx-0 sm:mx-6">
					<div className="w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
						<div className="flex h-full bg-transparent  overflow-hidden">
							<div className="flex w-full flex-col md:flex-row md:space-x-4 no-underline hover:no-underline">
								<div className="w-full md:w-1/2 flex flex-col flex-grow flex-shrink">
									<div className="flex justify-center py-4 flex-1 bg-transparent md:bg-yellow-100 rounded-t rounded-b-none overflow-hidden md:shadow-lg">
										<div className="container  max-w-lg  flex flex-col space-y-4 justify-center items-center">
											<ItemCardTransparent title={"Boxful Self-Storage"} />
											<ItemCardWhite />
											<ItemCardWhite />
											<ItemCardBorder btnLabel={"see stores"} />
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/2 flex flex-col flex-grow flex-shrink">
									<div className="flex justify-center py-4 flex-1 bg-transparent md:bg-green-100 rounded-t rounded-b-none overflow-hidden shadow-lg">
										<div className="container  max-w-lg  flex flex-col space-y-4 justify-center items-center">
											<ItemCardTransparent title={"Boxful Door-to-Door"} />
											<ItemCardWhite />
											<ItemCardWhite />
											<ItemCardBorder btnLabel={"see plans"} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Banner
