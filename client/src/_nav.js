import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBrowser,
  cilBookmark,
  // cilBell,
  // cilCalculator,
  // cilChartPie,
  // cilCursor,
  // cilDrop,
  // cilNotes,
  // cilPencil,
  // cilPuzzle,
  // cilSpeedometer,
  // cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const NavBar = () => {
  const nav = [
    {
      component: CNavGroup,
      name: '학회위원회',
      icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
      to: '/committee/notice',
      items: [
        {
          component: CNavItem,
          name: '공지',
          to: '/committee/notice',
        },
        {
          component: CNavItem,
          name: '문의',
          to: '/committee/inquiry',
        },
      ],
    },
    {
      component: CNavTitle,
      name: '학회',
    },
  ]

  fetch(`http://localhost:3001/api/get_depts`)
    .then((response) => response.json())
    .then((data) => {
      data.map((val) => {
        nav.push({
          component: CNavGroup,
          name: val.dept_name,
          icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
          items: [],
        })
        return null
      })
    })

  // console.log(nav) 더하기 1

  fetch(`http://localhost:3001/api/get_insts`)
    .then((response) => response.json())
    .then((data) => {
      data.map((val) => {
        nav[val.num + 1].items.push({
          component: CNavGroup,
          name: val.name,
          to: '/institute/시선',
          items: [
            {
              component: CNavItem,
              name: 'Introduction',
              to: '/institute/introduce/intromain',
            },
            {
              component: CNavItem,
              name: 'Recruiting',
              to: '/institute/recruit/recruitmain',
            },
          ],
        })
        return null
      })
    })

  return nav
}

export default NavBar
