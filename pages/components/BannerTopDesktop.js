import React from 'react';

const BannerTopDesktop = () => {
	return (
		<div className="home-banner-e-wrapper md:flex bg-white  hidden" style={{ height: '575px', paddingTop: '64px' }}>
			<div className="locker-bg bg-cover bg-no-repeat w-1/3"
				style={{ background: 'url("https://www.boxful.com/images/cny2021/locker.jpg") no-repeat 100% 50%' }}>

			</div>

			<div className="hero-main flex justify-center mt-10 w-1/3">
				<div className="main-info w-full" style={{ maxWidth: '480px' }}>

					<div className="cny-sol font-bold text-center text-base mb-1" style={{ color: '#f27d80' }}>Self-Storage and Door-to-Door Storage in Hong Kong</div>
					<div className="cny-main-title mx-0 mt-4 mb-2" >
						<img className="max-w-full transform scale-150"
							src="https://www.boxful.com/images/cny2021/xsol_en.png,q111.pagespeed.ic.sTydckP4FI.webp"
						/>
					</div>
					<div className="cny-btn flex justify-center items-center">
						<img height="20" src="data:image/webp;base64,UklGRoQBAABXRUJQVlA4THcBAAAvKkAGED/BNpIkJ/0CyD8y4sDC1bdpMG4jSVEtb/5Z0v35SlEkSU2T9CORPxouIIRkKx/hDPoKkaQaSgjPoPsGAbV72c78AjlEhxRIE9swUrBbqZQunCMOzuNP7HeMR/stoSmAAREaoKPAoAGAcxeFqJsaTXOkv3Ev1N8JB7JtJ82j7l6k+XH5+18jJSGsIKL/E4By/gip1NAaVOcP+dfjdHpYolQpkX9uV+PNycpPFS3tbTW9fdKnLPJEIntf5W40hSkevSUpeqcRhfsqf6tJA+APSUkBdmDAtEp8jWuvq9JbEK+vkC4C8WcHjTG/fD/ETdG66dpg8NcIhdzTqvyAzEiSc677TdG6ydDUv3IAXM7H/W673W73++PpfEWuFc4X1OyCkUtJKqI3C7ECMGIhZAH0ZhFvAgBDvIBEegT/XUDX4i/Tq5qj+A+aUiWtNKYDcZVEDrl+4AqJHPLbgWdLQ4tST2kmQy3KHQlny4OQAXNG284ZGJkA" />
						<a className=" my-0 mx-1 inline-block bg-cover"
							style={{
								background: 'url("https://www.boxful.com/images/cny2021/btn_en.png")',
								backgroundSize: 'cover',
								height: '47px',
								width: '236px',
								margin: '14px',
							}}>

						</a>
						<img height="20" src="data:image/webp;base64,UklGRoQBAABXRUJQVlA4THcBAAAvKkAGED/BNpIkJ/0CyD8y4sDC1bdpMG4jSVEtb/5Z0v35SlEkSU2T9CORPxouIIRkKx/hDPoKkaQaSgjPoPsGAbV72c78AjlEhxRIE9swUrBbqZQunCMOzuNP7HeMR/stoSmAAREaoKPAoAGAcxeFqJsaTXOkv3Ev1N8JB7JtJ82j7l6k+XH5+18jJSGsIKL/E4By/gip1NAaVOcP+dfjdHpYolQpkX9uV+PNycpPFS3tbTW9fdKnLPJEIntf5W40hSkevSUpeqcRhfsqf6tJA+APSUkBdmDAtEp8jWuvq9JbEK+vkC4C8WcHjTG/fD/ETdG66dpg8NcIhdzTqvyAzEiSc677TdG6ydDUv3IAXM7H/W673W73++PpfEWuFc4X1OyCkUtJKqI3C7ECMGIhZAH0ZhFvAgBDvIBEegT/XUDX4i/Tq5qj+A+aUiWtNKYDcZVEDrl+4AqJHPLbgWdLQ4tST2kmQy3KHQlny4OQAXNG284ZGJkA" />


					</div>
					<div className="hero-btn-wrap flex justify-between items-center mt-3" style={{ maxWidth: '400px', margin: '13px auto 0' }}>

						<a className="btn-locker flex bg-center bg-no-repeat" style={{
							width: "190px",
							height: "48px",
							lineHeight: "48px",
							borderRadius: "16px",
							fontSize: "14px",
							letterSpacing: "2px",
							background: '#fef9e5 url("https://www.boxful.com/images/hero-e/left.svg") no-repeat 15px center',

							fontWeight: "bold",
							color: "#333",
							transition: "box-shadow .4s",
							backgroundSize: "20px !important",
							paddingLeft: "50px",
							marginRight: "4px"
						}}
						>SELF-STORAGE</a>
						<a className="btn-locker flex bg-center bg-no-repeat" style={{
							width: "190px",
							height: "48px",
							lineHeight: "48px",
							borderRadius: "16px",
							fontSize: "14px",
							letterSpacing: "2px",
							background: '#e9f8f7 url("https://www.boxful.com/images/hero-e/right.svg") no-repeat 160px center',

							fontWeight: "bold",
							color: "#333",
							transition: "box-shadow .4s",
							backgroundSize: "20px !important",
							paddingLeft: "18px",
							marginRight: "4px"
						}}
						>DOOR-TO-DOOR</a>
					</div>
				</div>
			</div>
			<div className="valet-bg bg-cover w-1/3"
				style={{ background: 'url("https://www.boxful.com/images/cny2021/valet.jpg") no-repeat 0 50%' }}></div>
		</div>
	)
}

export default BannerTopDesktop
