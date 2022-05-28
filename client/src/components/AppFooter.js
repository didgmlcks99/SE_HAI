import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Salt Bread
        </a>
        <span className="ms-1">&copy; Bug is Life</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://hisnet.handong.edu/" target="_blank" rel="noopener noreferrer">
          Hisnet
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
