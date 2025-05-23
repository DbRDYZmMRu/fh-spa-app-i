import { store } from "../../../global.js";


export const index = `

		<div class="banner-wrap">
			<div class="banner-slider">
				
				<!-- hero slide start -->
				<div class="banner-slide">
					<div class="hero-image" style="background-image: url(images/bg/bg1.jpg);"></div>
					<div class="container">
						<div class="hero-content">
							<div class="cta-btn" data-animation="fadeInUp" data-delay="1s">
								<a class="btn mt-8 me-5 goToLink" href="pages/upcoming.html" style="color: #f9fafa">
									<span class="fw-bold">
										read upcoming poetry . . .
									</span>
								</a>
							</div>
						</div>
					</div>
					<div class="hero-overlay"></div>
				</div>
				<div class="banner-slide">
					<div class="hero-image" style="background-image: url(images/ads/airmax1000-ii.gif);"></div>
					<div class="container">
						<div class="hero-content">
							<div class="cta-btn" data-animation="fadeInUp" data-delay="1s">
								<h1 class="fw-bold" style="color: #8B0A1A">The AIRMAX 1000
								</h1>
								<h4 class="me-5 fw-bold" style="color: #000">
									manufactured in partnership with Zellerfeld, reinvents the iconic Air Max 1 for Nike's latest expression of visible Air cushioning.
								</h4>
							</div>
						</div>
					</div>
					<div class="hero-overlay"></div>
				</div>
				<div class="banner-slide">
					<div class="hero-image" style="background-image: url(images/ads/airmax1000.gif);"></div>
					<div class="container">
						<div class="hero-content">
							<div class="cta-btn" data-animation="fadeInUp" data-delay="1s">
								<a class="btn mt-8 me-5 goToLink" href="https://sneakernews.com/2024/11/14/nike-air-max-1000/?amp" style="color: #f9fafa" target="_blank">
									<h1 class="mb-4 fw-bold" style="color: #f9fafa">The AIRMAX 1000</h1>
								</a>
								<h4 class="me-5 fw-bold" style="color: #f9fafa">
									Launching exclusively at ComplexCon in Las Vegas, from November 16 to 17
								</h4>
							</div>
						</div>
					</div>
					<div class="hero-overlay"></div>
				</div>
				<div class="banner-slide">
					<a href="https://orebella.com" target="_blank">
						<div class="hero-image" style="background-image: url(images/bg/bg6.jpg);"></div>
						<div class="hero-overlay"></div>
					</a>
				</div>
				<div class="banner-slide">
					<div class="hero-image" style="background-image: url(images/bg/bg8.jpg);"></div>
					<div class="container">
						<div class="hero-content">
							<div class="cta-btn" data-animation="fadeInUp" data-delay="1s">
								<a href="https://orebella.com" target="_blank">
									<h2 class="mb-4 fw-bold" style="color: #f9fafa">Shop</h2>
									<h1 style="color: #D3B263;" class="error-title mt-4 mb-5">Orebella
									</h1>
								</a>
							</div>
						</div>
					</div>
					<div class="hero-overlay"></div>
				</div>
			</div>
			<div class="shape">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
					<path fill="#ffffff" fill-opacity="1">
						<animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
													 M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"></animate>
					</path>
				</svg>
			</div>
		</div>
		<section class="slice-ptb bg-black bg-fit" v-if="store">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 mb-5 mb-lg-0 text-center">
						<div class="neon">Celebrity
						</div>
						<div class="flux">reviews
						</div>
						
						<!-- <h3 class="text-white">They all said</h3>
            <p>
             your poetry is
            </p> -->
						<h6 class="text-white">
							<div class="waviy">
								<span style="--i:1">m</span>
								<span style="--i:2">w</span>
								<span style="--i:3">a</span>
								<span style="--i:4">h</span>
								<span style="--i:5"></span>
								<span style="--i:6">💋</span>
							</div>
							
							<!-- <span class="display-3">awesome</span> -->
						</h6>
					</div>
					<div class="col-lg-8">
						<div class="promo-carousel" id="grouploop-1">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/LewisHamilton.jpg" alt="Lewis Hamilton">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Lewis Hamilton</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/IdrisElba.jpg" alt="Idris Elba">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Idris Elba</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Fedez.jpg" alt="Fedez">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Fedez</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/LeBronJames.jpg" alt="LeBron James">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">LeBron James</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JoeBiden.jpg" alt="Joe Biden">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Joe Biden</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-2">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/MarsaiMartin.jpg" alt="Marsai Martin">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Marsai Martin</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/DonatellaVersace.jpg" alt="Donatella Versace">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Donatella Versace</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/DavidDobrik.jpg" alt="David Dobrik">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">David Dobrik</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/AlanWalker.jpg" alt="Alan Walker">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Alan Walker</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/PostMalone.jpg" alt="Post Malone">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Post Malone</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-3">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/6lack.jpg" alt="6lack">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">6lack</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Diplo.jpg" alt="Diplo">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Diplo</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Shakira.jpg" alt="Shakira">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Shakira</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/TheChainsmokers.jpg" alt="The Chainsmokers">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">The Chainsmokers</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/TravisScott.jpg" alt="Travis Scott">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Travis Scott</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-4">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/DuaLipa.jpg" alt="Dua Lipa">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Dua Lipa</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/SofiaWylie.jpg" alt="Sofia Wylie">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Sofia Wylie</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/LiliReinhart.jpg" alt="Lili Reinhart">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Lili Reinhart</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/KendallJenner.jpg" alt="Kendall Jenner">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Kendall Jenner</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JustinTimberlake.jpg" alt="Justin Timberlake">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Justin Timberlake</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-5">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Khalid.jpg" alt="Khalid">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Khalid</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/TheWeeknd.jpg" alt="The Weeknd">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">The Weeknd</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/TaylorSwift.jpg" alt="Taylor Swift">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Taylor Swift</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Drake.jpg" alt="Drake">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Drake</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/CalvinHarris.jpg" alt="Calvin Harris">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Calvin Harris</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-6">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/CharlyCox.jpg" alt="Charly Cox">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Charly Cox</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/CaitlynJenner.jpg" alt="Caitlyn Jenner">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Caitlyn Jenner</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Dagny.jpg" alt="Dagny">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Dagny</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/LilUziVert.jpg" alt="Lil Uzi Vert">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Lil Uzi Vert</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/KamalaHarris.jpg" alt="Kamala Harris">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Kamala Harris</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-7">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/AliciaKeys.jpg" alt="Alicia Keys">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Alicia Keys</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/LaLisa.jpg" alt="Lisa">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Lisa</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/CamilaCabello.jpg" alt="Camila Cabello">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Camila Cabello</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Melanie_Fontana_2017.jpg" alt="Melanie Fontana">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Melanie Fontana</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/HarryStyles.jpg" alt="Harry Styles">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Harry Styles</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-8">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/KylieJenner.jpg" alt="Kylie Jenner">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Kylie Jenner</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Pink.jpg" alt="Pink">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Pink</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/AmandaSeyfried.jpg" alt="Amanda Seyfried">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Amanda Seyfried</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Oprah.jpg" alt="Oprah">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Oprah
											</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/WesMoore.jpg" alt="Wes Moore">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Wes Moore</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-9">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/EllieGoulding.jpg" alt="Ellie Goulding">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Ellie Goulding</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/ChloeBailey.jpg" alt="Chloe Bailey">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Chloe Bailey</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/BigSean.jpg" alt="Big Sean">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Big Sean</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/ZaraLarsson.jpg" alt="Zara Larsson">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Zara Larsson</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/CristianoRonaldo.jpg" alt="Cristiano Ronaldo">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Cristiano Ronaldo</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-10">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/AddisonRae.jpg" alt="Addison Rae">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Addison Rae</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Logic.jpg" alt="Logic">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Logic</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JakePaul.jpg" alt="Jake Paul">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Jake Paul</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JenniferLopez.jpg" alt="Jennifer Lopez">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Jennifer Lopez</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/BadBunny.jpg" alt="Bad Bunny">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Bad Bunny</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-11">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/MaeMuller.jpg" alt="Mae Muller">
										</div>
										<div class=" portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Mae Muller</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/DojaCat.jpg" alt="Doja Cat">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Doja Cat</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Ciara.jpg" alt="Ciara">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Ciara</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/ParisHilton.jpg" alt="Paris Hilton">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Paris Hilton</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/50Cent.jpg" alt="50 Cent">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">50 Cent</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-12">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/GrantCardone.jpg" alt="Grant Cardone">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Grant Cardone</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/MarkZuckerberg.jpg" alt="Mark Zuckerberg">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Mark Zuckerberg</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/TomCruise.jpg" alt="Tom Cruise">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Tom Cruise</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/RickRoss.jpg" alt="Rick Ross">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Rick Ross</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/BrianRose.jpg" alt="Brian Rose">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Brian Rose</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-13">
							<div class="item-wrap">
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Neymar.jpg" alt="Neymar">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Neymar</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/50Cent.jpg" alt="50 Cent">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">50 Cent</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Mariam.jpg" alt="Mariam">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Mariam Rod</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JesseElder.jpg" alt="Jesse Elder">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Jesse Elder</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Owlcity.jpg" alt="Owl City">
										</div>
										<div class=" portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Owl City</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-14">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/NickiMinaj.jpg" alt="Nicki Minaj">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Nicki Minaj</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Madonna.jpg" alt="Madonna">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Madonna</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/AsapRocky.jpg" alt="ASAP Rocky">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Asap Rocky</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/BarackObama.jpg" alt="Barack Obama">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Barack Obama</h5>
										</div>
									</div>
								</div>
								<div class="mb-4 item">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/BeyoncВ.jpg" alt="Beyonce">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Beyonce</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-15">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/FelipeVI.jpg" alt="FelipeVI">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">King Felipe VI&gt;</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Leonor.jpg" alt="Leonor">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Princess Leonor</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/QueenLetizia.jpg" alt="Queen Letizia">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Queen Letizia</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Gracey.jpg" alt="Gracey">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Gracey</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Tyla.jpg" alt="Tyla">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Tyla</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-16">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/SZA.jpg" alt="SZA">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">SZA</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/InfantaSofia.jpg" alt="Infanta Sofia">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Infanta Sofia</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/KanyeWest.jpg" alt="Kanye West">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Kanye West</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JimmyFallon.jpg" alt="Jimmy Fallon">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Jimmy Fallon</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/KevinHart.png" alt="Kevin Hart">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Kevin Hart</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="promo-carousel" id="grouploop-17">
							<div class="item-wrap">
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Rihanna.jpg" alt="Rihanna">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Rihanna</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/JayZ.jpg" alt="Jay Z">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Jay Z</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/SerenaWilliams.jpg" alt="Serena Williams">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Serena Williams</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/VenusWilliams.jpg" alt="Venus Williams">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Venus Williams</h5>
										</div>
									</div>
								</div>
								<div class="item mb-4">
									<div class="portfolio-item-stack portfolio-item-stack-light">
										<div class="portfolio-image">
											<img class="img-fluid rounded" src="images/reviews/Nas.jpg" alt="Nas">
										</div>
										<div class="portfolio-caption portfolio-caption-bottom">
											<h5 class="text-white mt-2">Nas</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

`;

