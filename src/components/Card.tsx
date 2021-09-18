import React, { CSSProperties } from 'react'

export const Card = ({
  style,
  children,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  )
}

export const CardBody = ({
  style,
  children,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return (
    <div className="card-body" style={style}>
      {children}
    </div>
  )
}