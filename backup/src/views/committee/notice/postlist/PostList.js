import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
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

// import ListItem from '@material-ui/core/ListItem'
// import Divider from '@material-ui/core/Divider'
// import ListItemText from '@material-ui/core/ListItemText'
// import Typography from '@material-ui/core/Typography'
import '../../../../scss/List.scss'

class PostList extends Component {
  state = {
    boards: [],
  }
  componentDidMount() {
    // // fetch('http://localhost:3000/#/list')
    // fetch('http://localhost:3000/#/committee/notice')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ boards: data })
    //   })

    fetch('http://localhost:3001/api/get_notice')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          boards: data.map((value) => {
            return (
              <CTableRow key={value.num}>
                <CTableHeaderCell scope="row">{value.num}</CTableHeaderCell>
                <CTableDataCell colSpan="3">
                  <CNavLink to="/committee/notice" component={NavLink} id="table-component">
                    {value.title}
                  </CNavLink>
                </CTableDataCell>
                <CTableDataCell className="right">{value.writer}</CTableDataCell>
                <CTableDataCell className="right">{value.date}</CTableDataCell>
              </CTableRow>
            )
          }),
        })
      })
  }
  render() {
    const { boards } = this.state
    return (
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader id="boardLabel">
            <strong>공지게시판</strong>
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

            {/* {boards.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/committee/notice/read/${item.id}`}>
                    <ListItem className="post" alignItems="flex-start">
                      <ListItemText
                        primary={item.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary"
                            >
                              {item.author}
                              <br></br>
                            </Typography>
                            {item.content}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Link>
                  <Divider variant="inset" component="li" />
                </div>
              )
            })} */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link to={`/committee/notice/write`}>
                <CButton color="primary" variant="outline">
                  글쓰기
                </CButton>
              </Link>
            </div>
            <CPagination align="center" aria-label="Page navigation example">
              <CPaginationItem aria-label="Previous" disabled>
                <span aria-hidden="true">&laquo;</span>
              </CPaginationItem>
              <CPaginationItem active>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </CPaginationItem>
            </CPagination>
            {/* <Link to={`/#/write`}> */}
          </CCardBody>
        </CCard>
      </CCol>
    )
  }
}
export default PostList
