import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem,
  CNavLink,
} from '@coreui/react'

import '../../../../scss/List.scss'

class PostList extends Component {
  state = {
    boards: [],
  }
  componentDidMount() {
    const pname = window.location.href.split('/')
    const c = pname[pname.length - 1]

    fetch(`http://localhost:3001/api/get_posts/${c}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          boards: data.map((value) => {
            const date = value.date.split('T')
            return (
              <CTableRow key={value.num}>
                <CTableHeaderCell scope="row">{value.num}</CTableHeaderCell>
                <CTableDataCell colSpan="3">
                  <CNavLink
                    to={`/committee/` + c + `/read/${value.num}`}
                    component={NavLink}
                    id="table-component"
                  >
                    {value.title}
                  </CNavLink>
                </CTableDataCell>
                <CTableDataCell className="right">{value.writer}</CTableDataCell>
                <CTableDataCell className="right">{date[0]}</CTableDataCell>
              </CTableRow>
            )
          }),
        })
      })
  }
  render() {
    const pname = window.location.href.split('/')
    const category = pname[pname.length - 1]
    const { boards } = this.state
    return (
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader id="boardLabel">
            <CRow>
              <CCol xs={6}>
                <strong>문의게시판</strong>
              </CCol>
              <CCol xs={6}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <Link to={`/committee/` + category + `/write`}>
                    <CButton color="primary" variant="outline">
                      글쓰기
                    </CButton>
                  </Link>
                </div>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">번호</CTableHeaderCell>
                      <CTableHeaderCell scope="col">제목</CTableHeaderCell>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                      <CTableHeaderCell scope="col"></CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="right">
                        작성자
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="right">
                        날짜
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {boards.map((row) => {
                      return row
                    })}
                  </CTableBody>
                </CTable>
              </CCard>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    )
  }
}
export default PostList
