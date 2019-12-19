import React from 'react';
import Icon from './Icon';
import dataIcons from './data/dataIcons.json';



class Icons extends React.Component {
  render() {
    return (
      dataIcons.map((dataIcon, key) => {

        return (<Icon key={key}
          href={dataIcon.href}
          className={dataIcon.className}
          title={dataIcon.title}
          target={dataIcon.target}
        />
        );
      }

      )

    )
  }
}

export default Icons;    