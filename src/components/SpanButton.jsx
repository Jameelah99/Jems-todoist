import React from 'react'

export const SpanButton = ({label, classname, func}) => {
  return (
    <span className={classname} onClick={() => func()}>{label}</span>
  )
}
