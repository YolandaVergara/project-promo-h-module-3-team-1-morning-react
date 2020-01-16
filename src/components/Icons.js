import React from "react";
import PropTypes from 'prop-types';
import Icon from "./Icon";
import dataIcons from "./data/dataIcons.json";

class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return dataIcons.map((dataIcon, key) => {
      return (
        <Icon
          key={key}
          href={this.props.info[dataIcon.name]}
          prefix={dataIcon.prefix}
          className={dataIcon.className}
          title={dataIcon.title}
          target={dataIcon.target}
        />
      );
    });
  }
}

Icons.propTypes = {
  info: PropTypes.object
}

export default Icons;
