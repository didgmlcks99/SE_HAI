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

/*
DB 연결되면 코드 수정해서 해보기!!
const department = [
  'GLS',
  '경영경제학부',
  '공간환경시스템공학부',
  '국제어문학부',
  '법학부',
  '상담심리사회복지학부',
  '생명과학부',
  '전산전자공학부',
  '창의융합교육원',
  '커뮤니케이션학부',
  '콘텐츠융합디자인학부',
  'ICT창업학부',
]

function NavBar() {
  const nav = [
    {
      component: CNavGroup,
      name: '학회 위원회',
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
  const inserting = () => {
    for (let i = 0; i < department.length; i++) {
      nav.push({
        component: CNavTitle,
        name: department[i],
      })
    }
    return nav
  }
  return inserting()
}

const _nav = NavBar()
*/

const _nav = [
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
  {
    component: CNavGroup,
    name: '전산전자공학부',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: '시선',
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
      },
      {
        component: CNavGroup,
        name: '이론전자학회',
        to: '/institute/이론전자',
        items: [
          {
            component: CNavItem,
            name: 'Introduction',
            to: '/institute/이론/introduce',
          },
          {
            component: CNavItem,
            name: 'Recruiting',
            to: '/institute/이론/recruit',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Chips Chpis',
        to: '/institute/chipschips',
      },
      {
        component: CNavItem,
        name: 'CRAIST 90%',
        to: '/institute/CRAIST',
      },
      {
        component: CNavItem,
        name: 'HAILO',
        to: '/institute/HAILO',
      },
      {
        component: CNavItem,
        name: 'IT창업학회 벤처러스',
        to: '/institute/벤처러스',
      },
      {
        component: CNavItem,
        name: 'SODA',
        to: '/institute/SODA',
      },
    ],
  },
]

export default _nav

// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
// import ReactDOM from 'react-dom'

// const NavBar = () => {
//   const [depts, setDepts] = useState([])
//   const [insts, setInsts] = useState([])
//   const [deptInst, setDeptInst] = useState([])

//   useEffect(() => {
//     // Axios.get('http://localhost:3001/api/get_depts').then((response) => {
//     //   setDepts(response.data)
//     //   // console.log(response.data)
//     // })

//     Axios.get('http://localhost:3001/api/get_insts').then((response) => {
//       setInsts(response.data)
//       // console.log(response.data)
//     })
//   }, [])

//   const existing_dept = []

//   const [tmp_navs, setTmp_navs] = useState([])
//   // const tmp_nav = []

//   useEffect(() => {
//     for (let i = 0; i < insts.length; i++) {
//       if (existing_dept.indexOf(insts[i].dept_name) !== -1) {
//         // console.log(insts[i].name)
//       } else {
//         // console.log(insts[i].name)
//         existing_dept.push(insts[i].dept_name)

//         tmp_navs.push({
//           component: CNavGroup,
//           name: insts[i].dept_name,
//         })

//         console.log('tmp_navs')
//         console.log(tmp_navs)
//       }
//     }

//     // setTmp_navs(tmp_navs)

//     // console.log('existing_dept')
//     // console.log(existing_dept)
//   })

//   useEffect(() => {
//     console.log(existing_dept.length)

//     for (let i = 0; i < existing_dept.length; i++) {
//       Axios.get(`http://localhost:3001/api/get_dept_inst/${existing_dept[i]}`).then((response) => {
//         tmp_navs[i]['items'] = response.data.map((val) => {
//           return {
//             component: CNavItem,
//             name: val.name,
//             to: '/pages/postlist',
//           }
//         })
//       })
//     }
//   })

//   // console.log('tmp_navs')
//   // console.log(tmp_navs)

//   return tmp_navs
// }

// // export default _nav
// export default NavBar
