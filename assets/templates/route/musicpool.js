import { store } from  "../../../global.js";

export const musicpool = `

		<div class="latestRelease">
			<div class="svg-wrapper" @click.prevent="store.loadNewRelease">
				<svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
					<rect class="shape" height="60" width="320"></rect>
				</svg>
				<div class="text">LATEST RELEASE</div>
			</div>
		</div>

<!-- Album 15 -->
		<div class="gradient-item" @click="store.showAlbumTracks(15)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['ValenceEve']" alt="Valence Eve" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(15)">
					<div class="col-12 text-center">
						<h3 class="text-white">Valence Eve</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="15" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. I try</li>
							<li>2. Kill time</li>
							<li>3. Alarms</li>
							<li>4. Smile on me</li>
							<li>5. Queen's daughter</li>
							<li>6. The game we play</li>
							<li>7. Yahoo</li>
							<li>8. Beautiful Taylor</li>
							<li>9. Farce emotions</li>
							<li>10. To you</li>
							<li>11. Honest</li>
							<li>12. Recruits</li>
							<li>13. Butcher feel</li>
							<li>14. Porn star</li>
							<li>15. Taking you home</li>
							<li>16. Kai Trump</li>
							<li>17. Dime piece</li>
							<li>18. Fisherman</li>
							<li>19. Bedtime</li>
							<li>20. Madness</li>
							<li>21. Clubing sad</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 14 -->
		<div class="gradient-item" @click="store.showAlbumTracks(14)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['farthermemes']" alt="Farther Memes" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(14)">
					<div class="col-12 text-center">
						<h3 class="text-white">Farther Memes</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="14" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Oliver Sacks</li>
							<li>2. Oliver Sacks II</li>
							<li>3. Palacio de la Zarzuela</li>
							<li>4. The preacher</li>
							<li>5. Rick reflection</li>
							<li>6. End of summer</li>
							<li>7. Sex is everything</li>
							<li>8. Fool for you</li>
							<li>9. Hathaway</li>
							<li>10. Crush</li>
							<li>11. Jealousy</li>
							<li>12. Obligations</li>
							<li>13. Rust</li>
							<li>14. Best cardigan</li>
							<li>15. Unwilling</li>
							<li>16. Applish</li>
							<li>17. Home alone</li>
							<li>18. Aureole sigh</li>
							<li>19. First lines</li>
							<li>20. Spaghetti code</li>
							<li>21. Fire</li>
							<li>22. Fish</li>
							<li>23. Greener</li>
							<li>24. Lens</li>
							<li>25. Keyhole</li>
							<li>26. Bright-eyed</li>
							<li>27. Cut in fame</li>
							<li>28. Feel good</li>
							<li>29. Adios</li>
							<li>30. Woah</li>
							<li>31. Locked in</li>
							<li>32. Heartbeat</li>
							<li>33. Barefoot</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 13 -->
		<div class="gradient-item" @click="store.showAlbumTracks(13)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['theSessions']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(13)">
					<div class="col-12 text-center">
						<h3 class="text-white">the Sessions...</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="13" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Savour</li>
							<li>2. Dizzy morning</li>
							<li>3. Dirty laundry</li>
							<li>4. Canticle</li>
							<li>5. SZA</li>
							<li>6. Undecided</li>
							<li>7. Different</li>
							<li>8. Session 8</li>
							<li>9. I'll be there</li>
							<li>10. Back to the store</li>
							<li>11. Sorry I'm alive</li>
							<li>12. Long way home</li>
							<li>13. Field of faeries</li>
							<li>14. Magical</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 12 -->
		<div class="gradient-item" @click="store.showAlbumTracks(12)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['itspop']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(12)">
					<div class="col-12 text-center">
						<h3 class="text-white">it's pop</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="12" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Low life dirty rat</li>
							<li>2. A seal</li>
							<li>3. Summit</li>
							<li>4. New hemp plant</li>
							<li>5. Melly</li>
							<li>6. Stuck in life</li>
							<li>7. Heart census</li>
							<li>8. Kevin Hart</li>
							<li>9. Head</li>
							<li>10. Imagination</li>
							<li>11. Lonely note</li>
							<li>12. Hubble</li>
							<li>13. Take me out</li>
							<li>14. Reward Money</li>
							<li>15. Big fat lie</li>
							<li>16. The calm</li>
							<li>17. I don't know</li>
							<li>18. I get the ghetto</li>
							<li>19. Sliving</li>
							<li>20. Bagging this home</li>
							<li>21. Bag grips</li>
							<li>22. Outro</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 11 -->
		<div class="gradient-item" @click="store.showAlbumTracks(11)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['Troubadour']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(11)">
					<div class="col-12 text-center">
						<h3 class="text-white">troubadour</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="11" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Eviction</li>
							<li>2. Waste away</li>
							<li>3. West to west</li>
							<li>4. I'll never</li>
							<li>5. Cave</li>
							<li>6. Just let me go</li>
							<li>7. Cheetah</li>
							<li>8. Find me</li>
							<li>9. Baby girl</li>
							<li>10. My Hope</li>
							<li>11. Someone asked</li>
							<li>12. Let it go</li>
							<li>13. Testa</li>
							<li>14. Respiring</li>
							<li>15. Pretty girl</li>
							<li>16. Vacation</li>
							<li>17. Heathrow</li>
							<li>18. Benny</li>
							<li>19. Beginning</li>
							<li>20. Bedroom</li>
							<li>21. Goodness</li>
							<li>22. Sure we lit</li>
							<li>23. Old door</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 10 -->
		<div class="gradient-item" @click="store.showAlbumTracks(10)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['Nightswan']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(10)">
					<div class="col-12 text-center">
						<h3 class="text-white">Nightswan</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="10" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Curandera</li>
							<li>2. Marilyn</li>
							<li>3. Being friends</li>
							<li>4. Darbies</li>
							<li>5. Amor fati</li>
							<li>6. Pale</li>
							<li>7. Nominal now</li>
							<li>8. Best stan</li>
							<li>9. Different man</li>
							<li>10. Fresh</li>
							<li>11. Bad descriptions</li>
							<li>12. Backstage Friday</li>
							<li>13. Amusing</li>
							<li>14. Party ho</li>
							<li>15. Love god</li>
							<li>16. Hungry ladies</li>
							<li>17. Dreadnought</li>
							<li>18. Get it out</li>
							<li>19. Liar</li>
							<li>20. Skin</li>
							<li>21. Line</li>
							<li>22. Boss woman</li>
							<li>23. Solid ground</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 9 -->
		<div class="gradient-item" @click="store.showAlbumTracks(9)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['theLovertap3']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(9)">
					<div class="col-12 text-center">
						<h3 class="text-white">the Lover tap3</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="9" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Fair this time</li>
							<li>2. Envy</li>
							<li>3. Hump</li>
							<li>4. Show me a girl</li>
							<li>5. Disclose</li>
							<li>6. On one</li>
							<li>7. Boink</li>
							<li>8. Seventeen</li>
							<li>9. All girls aren't the same</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 8 -->
		<div class="gradient-item" @click="store.showAlbumTracks(8)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['lantern']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(8)">
					<div class="col-12 text-center">
						<h3 class="text-white">lantern</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="8" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Do I ever do?</li>
							<li>2. Number busy</li>
							<li>3. Emma I feel</li>
							<li>4. Raunch child</li>
							<li>5. Jekyll</li>
							<li>6. God of clean</li>
							<li>7. Hungry man</li>
							<li>8. Lantern</li>
							<li>9. 3:30</li>
							<li>10. Be my lover</li>
							<li>11. Purple zone</li>
							<li>12. Shire</li>
							<li>13. Pussy power</li>
							<li>14. Scent</li>
							<li>15. Yeehaw</li>
							<li>16. Mind talk</li>
							<li>17. Cautious</li>
							<li>18. Sarah</li>
							<li>19. Call for more</li>
							<li>20. Higher calling</li>
							<li>21. Say it</li>
							<li>22. Avalon</li>
							<li>23. How I lose it</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 7 -->
		<div class="gradient-item" @click="store.showAlbumTracks(7)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['theo']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(7)">
					<div class="col-12 text-center">
						<h3 class="text-white">Theo</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="7" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Easy son</li>
							<li>2. Ex, your relay</li>
							<li>3. Easy, hard</li>
							<li>4. Apogee</li>
							<li>5. Caret</li>
							<li>6. Moment</li>
							<li>7. Trauma</li>
							<li>8. Yodel in a vial</li>
							<li>9. Tate jersey love</li>
							<li>10. Favourite</li>
							<li>11. Rose</li>
							<li>12. Swan</li>
							<li>13. Demola (Zenosyne)</li>
							<li>14. Heavy keys</li>
							<li>15. Crash</li>
							<li>16. Oh din!</li>
							<li>17. Soured love</li>
							<li>18. The one</li>
							<li>19. Post soul</li>
							<li>20. Our fall</li>
							<li>21. Send me to sleep</li>
							<li>22. Purpose</li>
							<li>23. Waste the time</li>
							<li>24. Mound gold</li>
							<li>25. Jail</li>
							<li>26. Stuck</li>
							<li>27. Doobry</li>
							<li>28. Cull sigh</li>
							<li>29. I'm on air</li>
							<li>30. Bread</li>
							<li>31. I pray</li>
							<li>32. My fantasy</li>
							<li>33. A nearer echo</li>
							<li>34. Happy married life</li>
							<li>35. Polygamy</li>
							<li>36. Sofia</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 6 -->
		<div class="gradient-item" @click="store.showAlbumTracks(6)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['jacaranda']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(6)">
					<div class="col-12 text-center">
						<h3 class="text-white">Jacaranda</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="6" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Home</li>
							<li>2. QWERTY</li>
							<li>3. Blue heeler</li>
							<li>4. Gargoyle</li>
							<li>5. Silly hen</li>
							<li>6. June</li>
							<li>7. Thoth</li>
							<li>8. Real sad</li>
							<li>9. Tangerine clouds</li>
							<li>10. What if cell like</li>
							<li>11. Can't hide your theme</li>
							<li>12. Paying only you</li>
							<li>13. The pain you need</li>
							<li>14. Mona Lisa</li>
							<li>15. Reusable bag</li>
							<li>16. Street lights</li>
							<li>17. Beautiful</li>
							<li>18. Pro hac vice</li>
							<li>19. Cobber momma</li>
							<li>20. Get that education</li>
							<li>21. Telescopic</li>
							<li>22. Christmas sleepover</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 5 -->
		<div class="gradient-item" @click="store.showAlbumTracks(5)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['screentime']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(5)">
					<div class="col-12 text-center">
						<h3 class="text-white">screen time</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="5" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. From the start</li>
							<li>2. Reverse</li>
							<li>3. Get on with Jack</li>
							<li>4. Too deep</li>
							<li>5. Andalucía</li>
							<li>6. Friends</li>
							<li>7. Text</li>
							<li>8. Sunny</li>
							<li>9. Humming</li>
							<li>10. Waves</li>
							<li>11. Addison Rae</li>
							<li>12. Pauline</li>
							<li>13. Skyline grey</li>
							<li>14. Bittersweet</li>
							<li>15. Over you</li>
							<li>16. Dreaming</li>
							<li>17. Relapse holding</li>
							<li>18. Not lost</li>
							<li>19. Hideaway</li>
							<li>20. Superficial</li>
							<li>21. Warning sign</li>
							<li>22. Tears to my heart</li>
							<li>23. I'm sorry</li>
							<li>24. Yearning</li>
							<li>25. Silver all gone</li>
							<li>26. Your eyes</li>
							<li>27. Hold over me</li>
							<li>28. A minute</li>
							<li>29. Mariam</li>
							<li>30. Mine</li>
							<li>31. Back home</li>
							<li>32. Heaven knows</li>
							<li>33. Assets</li>
							<li>34. Just us two</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 4 -->
		<div class="gradient-item" @click="store.showAlbumTracks(4)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['frith']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(4)">
					<div class="col-12 text-center">
						<h3 class="text-white">Frith</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="4" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Take no buck</li>
							<li>2. Triple to the X</li>
							<li>3. Facts</li>
							<li>4. Consumed</li>
							<li>5. Anon</li>
							<li>6. Curveball</li>
							<li>7. Sovereign</li>
							<li>8. Playing</li>
							<li>9. LILI</li>
							<li>10. Hope</li>
							<li>11. Popsicle</li>
							<li>12. Ape</li>
							<li>13. Close friends</li>
							<li>14. Dad (Interlude)</li>
							<li>15. Paris</li>
							<li>16. Warn me you’re ready</li>
							<li>17. Unfurled</li>
							<li>18. Every door Taylor</li>
							<li>19. Milk</li>
							<li>20. Admissible emotions</li>
							<li>21. Euphoria</li>
							<li>22. Beat me down</li>
							<li>23. Ready to begin</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 3 -->
		<div class="gradient-item" @click="store.showAlbumTracks(3)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['december13']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(3)">
					<div class="col-12 text-center">
						<h3 class="text-white">December 13</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="3" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Anarchy</li>
							<li>2. December 13</li>
							<li>3. Can't have you</li>
							<li>4. Got a bitch a valve</li>
							<li>5. Tom</li>
							<li>6. Still can't swim</li>
							<li>7. Well with her eff fame</li>
							<li>8. Lili Fallon</li>
							<li>9. Missing you</li>
							<li>10. My girl</li>
							<li>11. Forest</li>
							<li>12. Flutter</li>
							<li>13. No. 13 a bore</li>
							<li>14. Partner</li>
							<li>15. Something simple</li>
							<li>16. Aperient flow</li>
							<li>17. Six</li>
							<li>18. Beethovenian</li>
							<li>19. Outside</li>
							<li>20. I think I am</li>
							<li>21. Sound of tears</li>
							<li>22. What’s next?</li>
							<li>23. Scribbling with a gun</li>
							<li>24. I'm okay</li>
							<li>25. Milou Christmas</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 2 -->
		<div class="gradient-item" @click="store.showAlbumTracks(2)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['colourfullight']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(2)">
					<div class="col-12 text-center">
						<h3 class="text-white">colourful light</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="2" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. Conterminous</li>
							<li>2. Forever</li>
							<li>3. Not on my mobile</li>
							<li>4. No prolix</li>
							<li>5. Clones</li>
							<li>6. Needle</li>
							<li>7. Gold pack</li>
							<li>8. Endorphin</li>
							<li>9. Never what it means</li>
							<li>10. How you had me</li>
							<li>11. I won't say it</li>
							<li>12. On you</li>
							<li>13. Little girl</li>
							<li>14. Ogre</li>
							<li>15. Living video record</li>
							<li>16. So long</li>
							<li>17. No telling</li>
							<li>18. Pepperoni freestyle</li>
							<li>19. May 1st</li>
							<li>20. Plunge (Interlude)</li>
							<li>21. Next to you</li>
							<li>22. Above</li>
							<li>23. Warden</li>
							<li>24. Automatic</li>
							<li>25. Colourful light</li>
							<li>26. Gravity</li>
							<li>27. Malady</li>
							<li>28. Favourite girl</li>
							<li>29. Baby sways</li>
							<li>30. What she does</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		
		<!-- Album 1 -->
		<div class="gradient-item" @click="store.showAlbumTracks(1)">
			<div class="gradient-wrap">
				<img :src="store['resources']['musicpool']['images']['hiv']" alt="" crossorigin="anonymous">
			</div>
		</div>
		<section class="py-4 bg-black">
			<div class="container">
				<div class="row justify-content-center" @click="store.showAlbumTracks(1)">
					<div class="col-12 text-center">
						<h3 class="text-white">H.I.V</h3>
					</div>
				</div>
				
				<!-- Album listing -->
				<div id="1" class="row justify-content-center mt-3" style="display: none;">
					<div class="col-12 text-center">
						<ul class="text-white list-unstyled">
							<li>1. What is Love</li>
							<li>2. Real Friends</li>
							<li>3. Spotlight</li>
							<li>4. Bleeding Heart</li>
							<li>5. Rollie Dreams</li>
							<li>6. Bad Vibez</li>
							<li>7. My Heart</li>
							<li>8. Interlude</li>
							<li>9. What is Real</li>
							<li>10. Sunday Special</li>
							<li>11. Hurt You</li>
							<li>12. Two Bad Bitches</li>
							<li>13. What's the Price?</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

`;
