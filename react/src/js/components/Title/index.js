import React from 'react'
import PropTypes from 'prop-types';

import styles from './styles.scss'

const Title = ({ text }) => {
  return (
    <h1 className={styles.title}>{ text }</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: 'React boilerplate'
}

export default Title

