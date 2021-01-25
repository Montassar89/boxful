import React from 'react';
import Carousel from 're-carousel'
import {
	bannerHMobile, itemStyle,
	itemStyleTow,
	textStyle,
	buttonOneStyle, buttonTowStyle
} from './style'

import IndicatorDots from './IndicatorDots'
const BannerTopMobile = () => {
	return (
		<div className="banner-h-mobile w-full  relative mt-24 z-0 block md:hidden" style={bannerHMobile}>

			<Carousel loop auto widgets={[IndicatorDots]}>
				<div className="flex flex-col items-center justify-between"
					style={itemStyle}>

					<div className="flex flex-col items-center">
						<div className="text-center font-bold text-base w-5/6 mx-auto" style={textStyle}>Self-Storage and Door-to-Door Storage in Hong Kong</div>
						<div className="cny-img"><img src="https://www.boxful.com/images/cny2021/locker_m_en.png?111" className="w-11/12 max-w-xs mx-auto mt-1" /></div>
						<div className="cny-btn mt-1"><a href="/CNYpromotion-self-storage-lockers" target="_blank">
							<img src="https://www.boxful.com/images/cny2021/btn_en.png" width="220" /></a></div>
					</div>

					<div className="flex flex-col items-center mb-8">
						<a className="btn-locker flex bg-center bg-no-repeat font-bold text-base rounded-xl h-12" style={buttonOneStyle}
						>SELF-STORAGE</a>

					</div>
				</div>
				<div className="flex flex-col items-center justify-between"
					style={itemStyleTow}>

					<div className="flex flex-col items-center">
						<div className="text-center font-bold text-base w-5/6 mx-auto" style={textStyle}>Self-Storage and Door-to-Door Storage in Hong Kong</div>
						<div className="cny-img"><img src="https://www.boxful.com/images/cny2021/locker_m_en.png?111" className="w-11/12 max-w-xs mx-auto mt-1" /></div>
						<div className="cny-btn mt-1"><a href="/CNYpromotion-self-storage-lockers" target="_blank">
							<img src="https://www.boxful.com/images/cny2021/btn_en.png" width="220" /></a></div>
					</div>

					<div className="flex flex-col items-center mb-8">

						<a className="btn-locker flex bg-center bg-no-repeat font-bold text-base rounded-xl h-12" style={buttonTowStyle}
						>DOOR-TO-DOOR</a>

					</div>
				</div>
			</Carousel>
		</div>

	)
}

export default BannerTopMobile
