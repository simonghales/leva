import React, { useContext } from 'react'
// @ts-expect-error
import { Portal as P } from 'react-portal'
import { ThemeContext } from '../../context'

export function Overlay(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div style={{ position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, zIndex: 1000 }} {...props} />
}

// @ts-ignore
export function Portal({ children }) {
  const { className } = useContext(ThemeContext)!
  return (
    <P>
      <div className={className}>{children}</div>
    </P>
  )
}
