import React from 'react';
import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}){

  const headerStyles={
    backgroundColor:bgColor,
    color:textColor
  }

  return(
    <header>
      <div className='container' style={headerStyles}>
        <h2>{text}</h2>
      </div>
    </header>
  )
};

Header.defaultProps={
  text:'Feedback UI',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff0a95'

}

Header.propTypes={
  text:PropTypes.string,

}

export default Header