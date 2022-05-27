import React, { Component } from 'react'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import '../../../../scss/Write.scss'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

class Write extends Component {
  state = {
    title: '',
    author: '',
    content: '',
  }

  postWrite = () => {
    try {
      // trim, required
      if (this.state.content !== '') {
        fetch('http://localhost:3000/#/institute/introduce/write', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(this.state),
        }).then((reponse) => {
          alert('작성 완료')
          // eslint-disable-next-line react/prop-types
          // this.props.history.replace('/introduce/intromain')
          window.location.replace('#/institute/introduce/intromain')
        })
      } else {
        alert('모든 칸을 작성해야합니다!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  postReply = () => {
    try {
      // trim, required
      if (this.state.title !== '' && this.state.author !== '' && this.state.content !== '') {
        fetch('http://localhost:3000/#/introduce/intromain/write', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(this.state),
        }).then((reponse) => {
          alert('작성 완료')
          // eslint-disable-next-line react/prop-types
          window.location.replace('#/institute/introduce/intromain')
        })
      } else {
        alert('모든 칸을 작성해야합니다!')
      }
    } catch (e) {
      console.log(e)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader id="boardLabel">
            <strong>리크루팅 글쓰기</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormLabel id="formLabel">내용</CFormLabel>
              <div className="mb-3">
                <TextField
                  className="textField"
                  id="content"
                  name="content"
                  multiline
                  rows={15}
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {/* <Link href="/committee/inquiry">
                  <CButton color="dark" variant="outline">
                    목록
                  </CButton>
                </Link> */}
                <CButton color="dark" onClick={this.postWrite}>
                  등록
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    )
  }
}

export default Write
