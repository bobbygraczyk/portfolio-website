import React, { Component } from "react";
import "../App.css";

class ContentSection extends Component {
  constructor(props) {
    super(props);

    this.app = props.app;
    this.title = props.title;
    this.sections = props.sections;
    this.sectionTitle = props.sectionTitle;
    this.sectionContent = props.sectionContent;
  }
  render() {
    const navBar = (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <button
          onClick={() => this.props.app.onButtonClick(this.props.sections[0])}
        >
          <h4>{this.props.sections[0]}</h4>
        </button>
        <button
          onClick={() => this.props.app.onButtonClick(this.props.sections[1])}
        >
          <h4>{this.props.sections[1]}</h4>
        </button>
        <button
          onClick={() => this.props.app.onButtonClick(this.props.sections[2])}
        >
          <h4>{this.props.sections[2]}</h4>
        </button>
      </React.Fragment>
    );

    const content = (
      <div className="Section-Main-Content">
        <h5>{this.props.sectionTitle}</h5>
        <div className="Section-Inner-Content">{this.props.sectionContent}</div>
      </div>
    );

    return !this.props.app.state.isWide ? (
      <table>
        <td className="Section-Nav-Wide-Aspect">{navBar}</td>
        <td>{content}</td>
      </table>
    ) : (
      <table>
        <tr>{navBar}</tr>
        <tr>{content}</tr>
      </table>
    );
  }
}

export default ContentSection;
