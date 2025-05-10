import { store } from "../../../global.js";

export const header = `
  
		<header class="header">
			<nav class="navbar navbar-light navbar-expand-lg navbar-default">
				<div class="container-fluid">
					<a class="navbar-brand" @click.prevent="store.directPath('/home')" href="#">
						<img class="logo" :src="store['resources']['global']['images']['logo']" alt="Frith Hilton Logo">
					</a>
					<button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar top-bar mt-0"></span>
						<span class="icon-bar middle-bar"></span>
						<span class="icon-bar bottom-bar"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" @click.prevent="store.directPath('/home')" href="#">
									<span class="text-line">
										Home
									</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" @click.prevent="store.directPath('/publications')" href="#">
									<span class="text-line">
										Publications
									</span>
								</a>
							</li>
							
							<li class="nav-item">
								<a @click.prevent="store.directPath('/upcoming')" class="nav-link" href="#">
									<span class="text-line">
										Upcoming Poetry</span>
								</a>
							</li>
							<li class="nav-item">
								<a @click.prevent="store.directPath('/musicpool')" class="nav-link" href="#">
									<span class="text-line">
										Musicpool
									</span>
								</a>
							</li>
							<li class="nav-item">
									<a @click.prevent="store.directPath('/bio')" class="nav-link" href="#">
									<span class="text-line">
										Bio
									</span>
								</a>
							</li>
							<li class="nav-item">
								<a @click.prevent="store.directPath('/cookies')" class="nav-link" href="#">
									<span class="text-line">
										Cookies Policy
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="navbar-icons list-unstyled mb-0 ms-auto">
						<a class="icon" href="https://www.instagram.com/frithhilton17" target="_blank">
							<i class="fab fa-instagram"></i>
						</a>
						<a class="icon" href="https://www.x.com/frithhilton17" target="_blank">
							<i class="fab fa-x-twitter"></i>
						</a>
					</div>
				</div>
			</nav>
		</header>


`;
