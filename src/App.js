import React, { Component } from "react";
import Header from "./components/header.js";
import Pages from "./components/pages.js";
import ContentSection from "./components/content-section.js";
import FooterScroll from "./components/footer-scroll.js";
import background from "./assets/background.webm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.sectionWebRef = React.createRef();
    this.sectionSoftwareRef = React.createRef();
    this.sectionAudioRef = React.createRef();
    this.sectionMediaRef = React.createRef();
    this.topRef = React.createRef();

    this.resize = this.resize.bind(this);
    this.pages = new Pages();

    this.state = {
      currentWindow: null,
      sectionWebTitle: "Allegorithmic Launcher",
      sectionWebContent: this.pages.allegoPage,
      sectionAudioTitle: "Music",
      sectionAudioContent: this.pages.musicPage,
      sectionMediaTitle: "Streaming",
      sectionMediaContent: this.pages.streamingPage,
      sectionAboutTitle: "Work Experience / Education",
      sectionAboutContent: this.pages.workExperiencePage,
      isWide: true
    };
  }

  onButtonClick(page) {
    if (page === "Allegorithmic") {
      this.setState({
        sectionWebContent: this.pages.allegoPage,
        sectionWebTitle: "Allegorithmic Launcher"
      });
    } else if (page === "Portfolio") {
      this.setState({
        sectionWebContent: this.pages.portfolioPage,
        sectionWebTitle: "Portfolio Website"
      });
    } else if (page === "Bloc") {
      this.setState({
        sectionWebContent: this.pages.blocPage,
        sectionWebTitle: "Bloc Projects"
      });
    } else if (page === "Music") {
      this.setState({
        sectionAudioContent: this.pages.musicPage,
        sectionAudioTitle: "Music"
      });
    } else if (page === "Skills") {
      this.setState({
        sectionAudioContent: this.pages.musicSkillsPage,
        sectionAudioTitle: "Skills"
      });
    } else if (page === "Experience") {
      this.setState({
        sectionAudioContent: this.pages.musicExperiencePage,
        sectionAudioTitle: "Experience"
      });
    } else if (page === "Streaming") {
      this.setState({
        sectionMediaContent: this.pages.streamingPage,
        sectionMediaTitle: "Streaming"
      });
    } else if (page === "Game Design") {
      this.setState({
        sectionMediaContent: this.pages.gamePage,
        sectionMediaTitle: "Battle Planet"
      });
    } else if (page === "3D") {
      this.setState({
        sectionMediaContent: this.pages.visPage,
        sectionMediaTitle: "3D / Visualization"
      });
    } else if (page === "Background") {
      this.setState({
        sectionAboutContent: this.pages.workExperiencePage,
        sectionAboutTitle: "Work Experience / Education"
      });
    } else if (page === "Personal") {
      this.setState({
        sectionAboutContent: this.pages.personalPage,
        sectionAboutTitle: "Personal Life / Interests"
      });
    }
  }

  componentWillMount() {
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize() {
    let heightRatio = window.innerHeight / window.innerWidth;
    if (heightRatio > 1) {
      this.setState({ isWide: true });
    } else {
      this.setState({ isWide: false });
    }
  }

  render() {
    return (
      <div className="App" style={{ height: window.innerHeight }}>
        <div className="Video-Container">
          <video
            id="Background-Video"
            data-type="background"
            muted="muted"
            preload="none"
            autoPlay
            loop
          >
            <source type="video/webm" src={background} />
          </video>
        </div>
        <div ref={this.topRef} />
        <Header app={this} />
        <div className="Inner-Content">
          <div className="Content-Wrapper">
            <section className="Content-Section" ref={this.sectionWebRef}>
              <ContentSection
                app={this}
                title="WEB"
                sections={["Allegorithmic", "Portfolio", "Bloc"]}
                sectionTitle={this.state.sectionWebTitle}
                sectionContent={this.state.sectionWebContent}
              />
            </section>
            <section className="Content-Section" ref={this.sectionSoftwareRef}>
              <ContentSection
                app={this}
                title="AUDIO"
                sections={["Music", "Skills", "Experience"]}
                sectionTitle={this.state.sectionAudioTitle}
                sectionContent={this.state.sectionAudioContent}
              />
            </section>
            <section className="Content-Section" ref={this.sectionAudioRef}>
              <ContentSection
                app={this}
                title="MEDIA"
                sections={["Streaming", "Game Design", "3D"]}
                sectionTitle={this.state.sectionMediaTitle}
                sectionContent={this.state.sectionMediaContent}
              />
            </section>
            <section className="Content-Section" ref={this.sectionMediaRef}>
              <ContentSection
                app={this}
                title="ABOUT"
                sections={["Background", "Personal", "References*"]}
                sectionTitle={this.state.sectionAboutTitle}
                sectionContent={this.state.sectionAboutContent}
              />
            </section>
            <br />
            <br />
          </div>
        </div>
        <FooterScroll />
      </div>
    );
  }
}

export default App;
