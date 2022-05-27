import React, { Component } from 'react'
import Link from '@material-ui/core/Link'

import { CButton, CCard, CRow, CCardBody, CCardHeader, CCol } from '@coreui/react'

class Intromain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '아직 소개글이 작성되지 않았습니다.',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log(this.name)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('소개글이 작성되었습니다!')
    event.preventDefault()
  }

  componentDidMount() {
    // fetch('http://localhost:3000/#/list')
    fetch('http://localhost:3000/#/institute/introduce')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ boards: data })
      })
  }

  render() {
    return (
      <>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader id="boardLabel">
              <CRow>
                <CCol xs={6}>
                  <strong>환영합니다. 시선을 소개합니다!</strong>
                </CCol>
                <CCol xs={6}>
                  <Link href={`#/institute/introduce/write`}>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <CButton color="primary" variant="outline">
                        글쓰기
                      </CButton>
                    </div>
                  </Link>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CCol xs={12}>
                <CCard className="mb-4">
                  <CRow>
                    <CCardBody>
                      <label>
                        여기는 소개글 자리
                        {/* <textarea rows="20" cols="100" value={this.state.value} onChange={this.handleChange} /> */}
                        <br /> <br /> <br />
                      </label>
                    </CCardBody>
                  </CRow>
                </CCard>
              </CCol>
              {/* <Link to={`/#/write`}> */}
            </CCardBody>
          </CCard>
        </CCol>
        {/* <input type="submit" value="수정하기" /> */}
        {/* <form onSubmit={this.handleSubmit}> */}
        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to={`/institute/introduce/write`}>
            <CButton color="primary" variant="outline">
              글쓰기
            </CButton>
          </Link>
        </div> */}
        {/* <Link href="/committee/inquiry#/institute/introduce/write">
          <CButton color="dark" variant="outline">
            목록
          </CButton>
        </Link> */}
        {/* </form> */}
      </>
    )
  }
}
export default Intromain
