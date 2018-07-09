import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.app = props.app;
  }

  scrollToSection(section) {
    section.current.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="Header">
        <div style={{ height: "calc(50vh - 55px" }} />
        <div id="Wrapper">
          <div id="Title">
            <p
              style={{ cursor: "pointer" }}
              onClick={() => this.scrollToSection(this.app.topRef)}
            >
              BOBBY GRACZYK
            </p>
          </div>
          <div id="Subtitle">
            <p>digital generalist</p>
          </div>
          <div id="Jpn-Text">
            <p>デジタルジェネラリスト</p>
          </div>
          <div id="Nav-Links">
            <button
              onClick={() => this.scrollToSection(this.app.sectionWebRef)}
            >
              WEB
            </button>|
            <button
              onClick={() => this.scrollToSection(this.app.sectionSoftwareRef)}
            >
              AUDIO
            </button>|
            <button
              onClick={() => this.scrollToSection(this.app.sectionAudioRef)}
            >
              MEDIA
            </button>|
            <button
              onClick={() => this.scrollToSection(this.app.sectionMediaRef)}
            >
              ABOUT
            </button>
          </div>
        </div>
        <div style={{ height: "calc(50vh - 55px" }} />
      </div>
    );
  }
}

export default Header;
