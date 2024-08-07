'use client';

import Image from 'next/image'

// `app/table/page.tsx` is the UI for the `/table URL
export default function Page() {

  return (
    <>
      <h1>Articles</h1>
      <nav>
        <a href="#articleOne">Aritcle 1</a>
        <a href="#articleTwo">Article 2</a>
        <a href="#articleThree">Article 3</a>
      </nav>

      <section>
        <div id="articleOne">
          <div className="articleImage">
            <Image src="/banner_1.jpg" width={800} height={150} alt="Alt text 1" />
          </div>
          <h2>Article One</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Nec nam aliquam sem et. Urna duis convallis convallis tellus id interdum velit laoreet. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Massa placerat duis ultricies lacus sed. Vulputate enim nulla aliquet porttitor. Blandit cursus risus at ultrices mi. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet venenatis urna cursus eget nunc scelerisque viverra.</p>
        </div>

        <div id="articleTwo">
          <div className="articleImage">
            <Image src="/banner_2.jpg" width={800} height={150} alt="Alt text 2" />
          </div>
          <h2>Article Two</h2>
          <p>At ultrices mi tempus imperdiet. Donec ultrices tincidunt arcu non sodales neque sodales ut. Cursus sit amet dictum sit amet. Eget gravida cum sociis natoque. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. In metus vulputate eu scelerisque felis. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nunc sed velit dignissim sodales ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna sit amet purus gravida. Nec tincidunt praesent semper feugiat nibh. Morbi tincidunt augue interdum velit euismod in. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Lobortis feugiat vivamus at augue eget. Vulputate eu scelerisque felis imperdiet proin fermentum.</p>
        </div>

        <div id="articleThree">
          <div className="articleImage">
            <Image src="/banner_3.jpg" width={800} height={150} alt="Alt text 3" />
          </div>
          <h2>Article Three</h2>
          <p>Donec enim diam vulputate ut pharetra. Eget arcu dictum varius duis at consectetur lorem. Leo in vitae turpis massa sed elementum tempus egestas sed. Donec ultrices tincidunt arcu non sodales neque. Aliquet risus feugiat in ante metus. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Facilisis mauris sit amet massa vitae. Aliquet lectus proin nibh nisl. Volutpat blandit aliquam etiam erat velit scelerisque in. Et sollicitudin ac orci phasellus. Enim ut tellus elementum sagittis vitae et leo duis ut. Ullamcorper malesuada proin libero nunc consequat interdum. Tristique magna sit amet purus gravida. Tristique et egestas quis ipsum.</p>
        </div>
      </section>
    </>
  )

}