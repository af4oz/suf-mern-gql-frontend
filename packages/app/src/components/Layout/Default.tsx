import React, { ReactNode } from 'react'
import { Paper } from '../CompStore'
import NavBar from '../Navs/NavBar'

interface DefaultProps {
  children: ReactNode
}

const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <Paper>
      <NavBar />
      {children}
    </Paper>
  )
}

export default DefaultLayout
