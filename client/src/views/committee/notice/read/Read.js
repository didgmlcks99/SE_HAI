import React, { Component } from 'react'
import Link from '@material-ui/core/Link'
import '../../../../scss/Read.scss'

import { CButton, CCard, CRow, CCardBody, CCardHeader, CCol } from '@coreui/react'

class Read extends Component {
  state = {
    boards: {},
  }

  postDelete = () => {
    const pname = window.location.href.split('/')
    try {
      const num = pname[pname.length - 1]
      const cat = pname[pname.length - 3]
      fetch(`http://localhost:3001/api/delete_post/${num}`, {
        method: 'DELETE',
      }).then(
        alert('삭제 완료'),
        // eslint-disable-next-   react/prop-types
        window.location.replace('#/committee/' + cat),
      )
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    const pname = window.location.href.split('/')
    const num = pname[pname.length - 1]
    fetch(`http://localhost:3001/api/get_one_post/${num}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          boards: data[0],
        })
      })
  }

  render() {
    const { boards } = this.state
    const pname = window.location.href.split('/')
    const category = pname[pname.length - 3]

    return (
      <>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader id="boardLabel">
              <CRow>
                <CCol xs={11}>
                  <strong>{boards.title}</strong>
                </CCol>
                <CCol xs={1}>
                  <div id="writer">{boards.writer}</div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CRow>
                    <CCardBody>{boards.body}</CCardBody>
                  </CRow>
                </CCard>
              </CCol>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href={'#/committee/' + category}>
                  <CButton color="dark" variant="outline">
                    목록
                  </CButton>
                </Link>
                <Link href={`#/committee/` + category + `/update/${boards.num}`}>
                  <CButton color="dark" variant="outline">
                    수정
                  </CButton>
                </Link>
                <CButton color="dark" onClick={this.postDelete}>
                  삭제
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </>
    )
  }
}

export default Read
