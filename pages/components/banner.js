import React from 'react';
import ItemCardWhite from './ItemCardWhite';
import ItemCardTransparent from './ItemCardTransparent';
import ItemCardBorder from './ItemCardBorder';
import BannerTopDesktop from './BannerTopDesktop';
import BannerTopMobile from './BannerTopMobile';
// import home from '',
const Banner = () => {

	return (

		<div>
			<BannerTopDesktop />
			<BannerTopMobile />
			<div className="container px-4 md:px-0 max-w-6xl mx-auto md:-mt-32">
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
