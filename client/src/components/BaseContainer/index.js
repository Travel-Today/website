import React from 'react'
import {classNames} from '../../utilities'

export default function BaseContainer(props) {

  const paddingT = "pt-".concat(String(props.paddingTop))

  return (
    <div className={classNames("mx-auto xl:max-w-[80%] max-w-[95%] ", "pt-20")}>
        {props.children}
    </div>
  )
}
