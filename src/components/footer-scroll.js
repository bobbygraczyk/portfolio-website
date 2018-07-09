import React, { Component } from "react";
import linkedin from "../assets/In-White-34px-R.png";
import envelope from "../assets/envelope.png";
import github from "../assets/github-logo.png";
import "../App.css";

export default class FooterScroll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer">
        <div id="Scroll-Frame">
          <h5>
            {`HTML5 / CSS3 / SASS / JS ES6 / REACT / JQUERY / JSX / NODE.JS / GIT /
                PERFORCE / JENKINS / FIREBASE / PHOTOSHOP / PREMIERE PRO / UE4 /
                MAYA / ABLETON LIVE / LIVE AUDIO / 3D / OBS / 
                HTML5 / CSS3 / SASS / JS ES6 / REACT / JQUERY / JSX / NODE.JS / GIT /
                PERFORCE / JENKINS / FIREBASE / PHOTOSHOP / PREMIERE PRO / UE4 /
                MAYA / ABLETON LIVE / LIVE AUDIO / 3D / OBS / `}
          </h5>
        </div>
        <div id="Social-Media">
          <img
            src={github}
            onClick={() => window.open("https://github.com/bobbygraczyk")}
          />
          <img
            src={linkedin}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bobby-graczyk-9b6156115/"
              )}
          />
          <img
            src={envelope}
            onClick={() => window.open("mailto:bobbygraczyk@gmail.com")}
          />
        </div>
      </div>
    );
  }
}
