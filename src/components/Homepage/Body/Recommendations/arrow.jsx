import React from 'react'
import { Icon } from 'semantic-ui-react'

const Arrow = (props) => {
  return (
    <a className={'arrow'} href={'#'} onClick={props.click} style={props.position === 'left' ? { left: '40px'}: (props.position === 'right' ? { right: '40px'}: null) }>
      <Icon name={props.name} />
    </a>
  )
}

export default Arrow