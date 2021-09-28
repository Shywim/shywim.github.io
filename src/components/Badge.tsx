import React, { CSSProperties } from 'react'

export const BadgeList = ({
  style,
  children,
}: React.PropsWithChildren<{ style?: CSSProperties }>) => {
  return (
    <div className="resume-skills" style={style}>
      {children}
    </div>
  )
}

export const Badge = ({
  style,
  href,
  goal,
  children,
}: React.PropsWithChildren<{
  style?: CSSProperties
  href?: string
  goal?: string
}>) => {
  const Tag = href ? 'a' : 'span'

  return (
    <Tag
      className="resume-skill"
      style={style}
      href={href}
      onClick={(e) => {
        if (href != null) {
          setTimeout(() => {
            location.href = href
          }, 150)
          e.preventDefault()
        }
        if (goal != null) {
          window.plausible(goal)
        }
      }}
    >
      {children}
    </Tag>
  )
}
