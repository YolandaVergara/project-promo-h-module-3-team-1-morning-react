import React from "react";
import Icon from "./Icon";
import dataIcons from "./data/dataIcons.json";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    /* console.log(props); */
  }
  render() {
    return dataIcons.map((dataIcon, key) => {
      return (
        <Icon
          key={key}
          href={this.props.info[dataIcon.name]}
          className={dataIcon.className}
          title={dataIcon.title}
          target={dataIcon.target}
          /*    phone={this.props.phone}
          email={this.props.email}
          linkedin={this.props.linkedin}
          github={this.props.github} */
        />
      );
    });
  }
}

export default Icons;
