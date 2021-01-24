import React from 'react';
// import home from '';
const Banner = ({ title }) => {

	return (
		<div>
			<div className="w-full h-screen m-0 p-0 bg-cover bg-bottom" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1502921451607-29fa99d270d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")`}}>
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
									<div className="flex justify-center py-4 flex-1 bg-transparent md:bg-yellow-100 rounded-t rounded-b-none overflow-hidden shadow-lg">

										<div className="container  max-w-lg  flex flex-col space-y-4 justify-center items-center">


											<div className="md:bg-transparent bg-white md:border-0 border w-full flex items-center p-2 rounded-xl">
											   
												<div className="flex-grow p-3">
													<div className="text-sm text-gray-500 ">
													In-Person Access

      											</div>
													<div className="font-semibold text-gray-700 mb-4">
													Boxful Self-Storage
      											</div>
													<div className="text-sm text-gray-500">
													Full control of your
      											</div>
													<div className="text-sm text-gray-500">

													belongings at Boxful Stores

      											</div>
												</div>
												<div className="relative flex items-center mr-8">
													<img src="https://miro.medium.com/max/1365/1*wcrv3-eUOx84Xf5XnVi27w.png"
														alt="My profile" className="ml-4 w-32 rounded-xl" />
												</div>

											</div>
											<div className="bg-white w-full flex items-center p-2 rounded-xl shadow-sm border border-gray-100">
												<div className="relative flex items-center mr-8">
													<img src="https://blog.but.fr/wp-content/uploads/2020/03/01-fauteuil-jaune-enveloppant-dynamise-salon.jpg"
														alt="My profile" className="ml-4 w-24 h-24 rounded-xl" />
												</div>
												<div className="flex-grow p-3">
													<div className="font-semibold text-gray-700">
														By-Square-Feet
      											</div>
													<div className="text-sm text-gray-500">
														Great for storing furniture and all sizes
      											</div>
													<div className="text-sm text-black">
														from <span className="font-extrabold text-2xl">$349</span> /month
      											</div>
													<div className="text-sm text-gray-500">
														Pay for the space you use
      											</div>
												</div>

											</div>
											<div className="bg-white w-full flex items-center p-2 rounded-xl shadow-sm border border-gray-100">
												<div className="relative flex items-center mr-8">
													<img src="https://blog.but.fr/wp-content/uploads/2020/03/01-fauteuil-jaune-enveloppant-dynamise-salon.jpg"
														alt="My profile" className="ml-4 w-24 h-24 rounded-xl" />
												</div>
												<div className="flex-grow p-3">
													<div className="font-semibold text-gray-700">
														Store Locations
      											</div>
													<div className="text-sm text-gray-500">
													24hr private access to your belongings
      											</div>
													<div className="text-sm text-black">
														from <span className="font-extrabold text-2xl">$494</span> /month
      											</div>
													<div className="text-sm text-gray-500">
													1 free access per month, 1 free pickup trip
      											</div>
												</div>
												




											</div>
											<div className="bg-transparent w-full flex items-center justify-between p-2 h-32 mb-8 border shadow-sm">
												<div className="relative flex-grow items-center">
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">1-month min storage period</p>
													</div>
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">No deposit required</p>
													</div>
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">Best price guarantee</p>
													</div>
												</div>
												<a href="https://www.google.com/" className="flex items-center justify-center px-5 py-3 
															border border-transparent uppercase text-base font-medium 
															rounded-full text-white bg-yellow-500 hover:bg-yellow-600 h-10 mx-4">
													see stores
                                        		</a>

												




											</div>
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/2 flex flex-col flex-grow flex-shrink">
									<div className="flex justify-center py-4 flex-1 bg-transparent md:bg-green-100 rounded-t rounded-b-none overflow-hidden shadow-lg">

										<div className="container  max-w-lg  flex flex-col space-y-4 justify-center items-center">


											<div className="md:bg-transparent bg-white md:border-0 border w-full flex 
											items-center p-2 rounded-xl">

												<div className="flex-grow p-3">
													<div className="text-sm text-gray-500 ">
														We Come To You

      											</div>
													<div className="font-semibold text-gray-700 mb-4">
														Boxful Door-to-Door
      											</div>
													<div className="text-sm text-gray-500">
														Effortless storage
      											</div>
													<div className="text-sm text-gray-500">

														experience at home
      											</div>
												</div>
												<div className="relative flex items-center mr-8">
													<img src="https://miro.medium.com/max/1365/1*wcrv3-eUOx84Xf5XnVi27w.png"
														alt="My profile" className="ml-4 w-32 rounded-xl" />
												</div>

											</div>
											<div className="bg-white w-full flex items-center p-2 rounded-xl shadow-sm border border-gray-100">
												<div className="relative flex items-center mr-8">
													<img src="https://blog.but.fr/wp-content/uploads/2020/03/01-fauteuil-jaune-enveloppant-dynamise-salon.jpg"
														alt="My profile" className="ml-4 w-24 h-24 rounded-xl" />
												</div>
												<div className="flex-grow p-3">
													<div className="font-semibold text-gray-700">
														By-Square-Feet
      											</div>
													<div className="text-sm text-gray-500">
														Great for storing furniture and all sizes
      											</div>
													<div className="text-sm text-black">
														from <span className="font-extrabold text-2xl">$349</span> /month
      											</div>
													<div className="text-sm text-gray-500">
														Pay for the space you use
      											</div>
												</div>

											</div>
											<div className="bg-white w-full flex items-center p-2 rounded-xl shadow-sm border border-gray-100">
												<div className="relative flex items-center mr-8">
													<img src="https://blog.but.fr/wp-content/uploads/2020/03/01-fauteuil-jaune-enveloppant-dynamise-salon.jpg"
														alt="My profile" className="ml-4 w-24 h-24 rounded-xl" />
												</div>
												<div className="flex-grow p-3">
													<div className="font-semibold text-gray-700">
														By-Square-Feet
      											</div>
													<div className="text-sm text-gray-500">
														Great for storing furniture and all sizes
      											</div>
													<div className="text-sm text-black">
														from <span className="font-extrabold text-2xl">$349</span> /month
      											</div>
													<div className="text-sm text-gray-500">
														Pay for the space you use
      											</div>
												</div>

											</div>
											<div className="bg-transparent w-full flex items-center justify-between p-2 h-32 mb-8 border shadow-sm">
												<div className="relative flex-grow items-center">
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">We move & deliver for you</p>
													</div>
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">Pay monthly for what you use</p>
													</div>
													<div className="flex items-center m-0">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" className="bi bi-check2" viewBox="0 0 16 16">
															<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
														</svg>
														<p className="ml-2 text-sm text-black">Easy online booking</p>
													</div>
												</div>
												<a href="https://www.google.com/" className="flex items-center justify-center px-5 py-3 
															border border-transparent uppercase text-base font-medium 
															rounded-full text-white bg-yellow-500 hover:bg-yellow-600 h-10 mx-4">
													see plans
                                        		</a>

											</div>
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
