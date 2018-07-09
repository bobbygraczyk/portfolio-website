import React from "react";

export default class Pages {
  constructor() {
    this.allegoPage = (
      <React.Fragment>
        Allegorithmic Launcher is a multiplatform desktop application designed
        to serve and maintain Allegorithmic's various Substance Suite products.
        It is expected to be used by most of the Substance Suite user base,
        which is hundreds of thousands of people!
        <br />
        This product was built using the HTML5/CSS3/JS stack and wrapped in
        Electron as a native desktop app, similarly to how Slack or Discord's
        desktop apps are built. I was responsible for the preliminary design of
        many of the content panels and programming their functionality to
        completion. The panels were then sent to Allego's UX/UI team who
        modified my wireframe designs and collaborated with me to finalize the
        product's look and feel. Most of my work on this project was front-end
        based, however I assisted with light back-end work as well such as local
        software management and user license verification.
        <br />
        <h5>Technologies used:</h5>
        <table>
          <td>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS/JSX</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>React</li>
              <li>Electron</li>
              <li>Node.js</li>
            </ul>
          </td>
        </table>
        <iframe src="https://drive.google.com/file/d/0B8EV6iFRszsAV0hObUQ5ZC03RFBjTE1QYnZSUnhuYWhnR3Vr/preview" />
      </React.Fragment>
    );

    this.portfolioPage = (
      <React.Fragment>
        I created this portfolio website using HTML5, Sass, JSX, React, and
        Firebase. I have made the source code publicly available on GitHub as
        React and Sass both require compilation, however I invite you to use the
        Chrome Inspector in Google Chrome (<code>Ctrl + Shift + I</code>) to
        view the compiled and processed HTML and CSS. React utilizes the Single
        Page Application (SPA) model to quickly and efficiently diff and display
        dynamic content using a Virtual DOM, leading to the fastest page load
        times currently available. This website does not currently follow ADA or
        SEO guidelines due to time constraints, however I am very familiar with
        both.
        <br />
        <h5>Technologies used:</h5>
        <table>
          <td>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS/JSX</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Node.js</li>
              <li>Firebase</li>
            </ul>
          </td>
        </table>
        <button
          onClick={() =>
            window.open(
              "https://github.com/bobbygraczyk/portfolio-website",
              "_blank"
            )}
        >
          VIEW ON GITHUB
        </button>
      </React.Fragment>
    );

    this.blocPage = (
      <ul>
        <li>
          <h5>Bloc Jams</h5>
          Mock music streaming platform that pulls information from an API
          maintained by Bloc. Designed to gain a greater understanding of state
          management, prop drilling, and React Router. Users can view a list of
          albums, play a song/album, and control playback with transport
          controls.
          <br />
          <button
            onClick={() =>
              window.open(
                "https://github.com/bobbygraczyk/bloc-jams-react",
                "_blank"
              )}
          >
            VIEW ON GITHUB
          </button>
        </li>
        <li>
          <h5>Bloc Chat</h5>
          Functional chat application built using Firebase BaaS. Users can log
          in with Google, view and create chat rooms, and view/create posts
          within them. Designed to gain a greater understanding of backend
          implementations.
          <br />
          <button
            onClick={() =>
              window.open(
                "https://github.com/bobbygraczyk/chat-react",
                "_blank"
              )}
          >
            VIEW ON GITHUB
          </button>
        </li>
      </ul>
    );

    this.musicPage = (
      <React.Fragment>
        I've been writing and performing music for 20 years. I started Choir and
        Orchestra (Cello) in Elementary School and stayed passionately involved
        until I gained an appreciation for guitar, songwriting, and production.
        Around age 12 I started playing guitar and bass guitar in the church
        band during morning congregations and I would run the audio board at
        night. I was also frequently involved in stage productions at church and
        school where I would either sing, act, play in the band, or all three.
        By age 16 I was regularly performing original music all over the
        Midwest/East Coast with my friends/bandmates. At this time I also became
        heavily involved in audio recording, mixing, and mastering. Around age
        22 I had mostly fully switched to making solo music that involves both
        analog and digital instruments with the help of Ableton Live. As of
        today I have written 100+ songs and counting!
        <br />
        <button
          onClick={() =>
            window.open("https://soundcloud.com/bobbyo182", "_blank")}
        >
          VISIT SOUNDCLOUD
        </button>
      </React.Fragment>
    );

    this.musicSkillsPage = (
      <table>
        <td width="50%">
          <ul>
            <li>Guitar</li>
            <li>Bass</li>
            <li>Drums</li>
            <li>Piano</li>
            <li>Songwriting</li>
            <li>Composing</li>
            <li>Arrangement</li>
            <li>Hi-Fidelity Recording</li>
          </ul>
        </td>
        <td width="50%">
          <ul>
            <li>Music Theory</li>
            <li>Mixing</li>
            <li>Mastering</li>
            <li>Ableton Live</li>
            <li>Pro Tools</li>
            <li>Live Event Audio</li>
            <li>Audio Processing for Video</li>
            <li>Audio Synthesization</li>
          </ul>
        </td>
      </table>
    );

    this.musicExperiencePage = (
      <table>
        <td style={{ textAlign: "center" }}>
          <h5>Featured Project:</h5>
          <iframe
            style={{ border: "0", width: "100%", height: "120px" }}
            src="https://bandcamp.com/EmbeddedPlayer/album=2927771476/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
            seamless
          >
            <a href="http://jubakron.bandcamp.com/album/lp1">LP1 by ｊｕｂ⍟</a>
          </iframe>
        </td>
        <td>
          <ul>
            <li>100+ songs written</li>
            <li>200+ performances</li>
            <li>6 LPs recorded/mixed/mastered</li>
            <li>200+ hrs live audio mixing</li>
            <li>500+ hrs in Ableton Live</li>
            <li>150+ hrs in Pro Tools</li>
          </ul>
        </td>
      </table>
    );

    this.streamingPage = (
      <React.Fragment>
        I have 200+ hrs experience streaming live events on location. These
        events have been anything from fundraisers to concerts to video game
        tournaments. Typically I am responsible for all audio/visual elements
        before and during the stream, however at larger events I sometimes
        receieve help with overlays and stage management. These responsibilities
        include:
        <table>
          <td>
            <ul>
              <li>Equipment consultation</li>
              <li>Stage planning</li>
              <li>Equipment set up/cable management</li>
              <li>Lighting</li>
              <li>Stage engineering</li>
              <li>Live audio mixing from games, stages, and commentators</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>
                Creation of overlays, branding materials, and advertisements
              </li>
              <li>
                Effective communication with Stage Manager (if not myself)
              </li>
              <li>
                Making sure Commentators/Announcers have all the accomodations
                they need
              </li>
              <li>Audio/Video transitions between various scenes</li>
              <li>Audience interaction via Chat</li>
            </ul>
          </td>
        </table>
        <iframe src="https://www.youtube.com/embed/aQ7zlfhSvYs" />
      </React.Fragment>
    );

    this.gamePage = (
      <React.Fragment>
        Independently read Unreal Engine documentation and learned from online
        courses to create a working game prototype. Created a third person
        class-based multiplayer combat game with procedural levels and items.
        Successfully implemented original motion capture data, input,
        locomotion, networking, melee combat, projectile combat, inventory
        system, menus, class system, lock-on system, competent AI, random item
        drops, and more. Over the course of two years I learned:
        <table>
          <td>
            <ul>
              <li>3d Modelling (Maya)</li>
              <li>3d Sculpting (Zbrush)</li>
              <li>Texturing (Substance Designer)</li>
              <li>Animation/Rigging (Maya)</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Motion Capture (Kinekt API)</li>
              <li>Game Programming (Blueprint Visual Scripting)</li>
              <li>Game Networking (BVS)</li>
              <li>UI Design (BVS)</li>
            </ul>
          </td>
        </table>
        <iframe src="https://drive.google.com/file/d/1pzcG2ewPteJZ-PmQ6Wmf5x8PdPc6uRP6/preview?wmode=opaque" />
      </React.Fragment>
    );

    this.visPage = (
      <React.Fragment>
        3D hobbiest for 8+ years. I have created 3D assets for games, mods,
        product visualization, architectural visualization, and the web. Skills
        include:
        <table>
          <td>
            <ul>
              <li>Concept Design (Photoshop)</li>
              <li>Low or Hi-Poly modelling (Maya)</li>
              <li>Hi-Poly sculpting organic or mechanical (Zbrush)</li>
              <li>UV Mapping (Maya/Zbrush)</li>
              <li>Animation (Maya/MoCap)</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Physically-Based Material Texturing (Substance Suite)</li>
              <li>Photoreal Rendering (Maya Arnold/Unreal Engine 4)</li>
              <li>Compositing (Modo, After Effects)</li>
              <li>Visualization from CAD</li>
              <li>Photogrammetry</li>
            </ul>
          </td>
        </table>
        <iframe src="https://www.youtube.com/embed/Q5cPuwHOZCU" />
      </React.Fragment>
    );

    this.workExperiencePage = (
      <React.Fragment>
        <b>Allegorithmic</b> - <i>Software Intern</i>
        <br />
        <small>MAR 2018 - PRESENT</small>
        <ul>
          <li>Create and maintain build automation systems with Jenkins</li>
          <li>
            Work on a team utilizing Agile practices to deliver feature parity
            across multiple platforms while continuously developing and
            integrating new features
          </li>
          <li>
            Large contributions to Front- and Back-End of HTML5 / CSS3 /
            React.js / Electron based desktop application on a production scale
          </li>
        </ul>
        <br />
        <b>Bloc</b> - <i>Web Developer Track</i>
        <br />
        <small>JAN 2018 - PRESENT</small>
        <br />
        <br />
        <p>
          Intensive full stack web development bootcamp covering HTML5, CSS3,
          JavaScript, React.js, data structures, JQuery, Git, Github, popular
          frameworks, SQL, Node.js, and computer science fundamentals over the
          course of eight months. Designed specifically and solely to educate
          and train aspiring Front End Developers to be more than competent and
          job-ready to begin a web development career utilizing cutting edge
          techniques.
        </p>
        <br />
        <b>Best Buy</b> - <i>Front End Lead</i>
        <br />
        <small>OCT 2014 - NOV 2017</small>
        <ul>
          <li>
            Responsible for hiring, training, scheduling, overseeing, and
            developing the careers of 10-15 team members at the Front End and
            Customer Service desks.
          </li>
          <li>
            Frequently acted as Manager on Duty for the store, supporting team
            members and resolving customer concerns or complaints.
          </li>
          <li>
            Drove success through excellent leadership, support, and training.
            Maintained a scorecard ranking in the top 10% of the company for the
            majority of the time I was in-role.
          </li>
        </ul>
        <br />
        <small>
          <i>*Coming soon, please contact me for references</i>
        </small>
      </React.Fragment>
    );

    this.personalPage = (
      <React.Fragment>
        Aspiring software developer and “jack of all trades”; limitless
        creativity, curiosity, and energy looking for an equally bright
        opportunity.
        <p
          style={{
            fontSize: "7em",
            textAlign: "center",
            filter: "contrast(50%)"
          }}
        >
          🎸🎹🥁🎮🌱🍕🍺📺📚😼☕🧘‍
        </p>
      </React.Fragment>
    );
  }
}
