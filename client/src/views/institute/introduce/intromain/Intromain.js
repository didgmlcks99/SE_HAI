import React, { Component } from 'react'
import Link from '@material-ui/core/Link'

import { CButton, CCard, CRow, CCardBody, CCardHeader, CCol } from '@coreui/react'

class Intromain extends Component {
  name = '아무개'
  state = {
    value: '',
    inst_data: {},
  }

  constructor(props) {
    super(props)
    this.state = {
      value: '아직 소개글이 작성되지 않았습니다.',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('소개글이 작성되었습니다!')
    event.preventDefault()
  }

  componentDidMount() {
    const pname = window.location.href.split('/')
    const instId = pname[pname.length - 1]

    // fetch('http://localhost:3000/#/institute/introduce')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ boards: data })
    //   })
    // fdsjsdfkldsf

    fetch(`http://localhost:3001/api/get_one_inst/${instId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          inst_data: data[0],
        })
        console.log(data[0].name + '!!!')
        this.name = data[0].name
        console.log(this.name + '@@@')
        this.render()
      })
  }

  render() {
    const { inst_data } = this.state

    console.log(this.name + '???')
    return (
      <>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader id="boardLabel">
              <CRow>
                <CCol xs={6}>
                  <strong>{`환영합니다.소개합니다!`}</strong>
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
