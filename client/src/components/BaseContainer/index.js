import React from 'react'
import {classNames} from '../../utilities'

export default function BaseContainer(props) {

  const paddingT = "pt-".concat(String(props.paddingTop))

  return (
    <div className={classNames("max-w-7xl mx-auto px-6 lg:px-8", "pt-20")}>
        {props.children}
    </div>
  )
}


// max-w-[300px] sm:max-w-[560px] md:max-w-[688px] lg:max-w-[944px] xl:max-w-[1200px]