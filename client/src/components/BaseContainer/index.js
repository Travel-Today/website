import React from 'react'
import {classNames} from '../../utilities'

export default function BaseContainer(props) {

  const paddingT = "pt-".concat(String(props.paddingTop))

  return (
    <div className={classNames("mx-auto lg:max-w-[80%] md:max-w-[85%] max-w-[90%] ", "pt-20")}>
        {props.children}
    </div>
  )
}
