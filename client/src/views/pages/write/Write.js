import React, { Component } from 'react'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import '../../../scss/Write.scss'

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
      if (this.state.title !== '' && this.state.author !== '' && this.state.content !== '') {
        fetch('http://localhost:3000/#/write', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(this.state),
        }).then((reponse) => {
          alert('작성 완료')
          // eslint-disable-next-line react/prop-types
          this.props.history.replace('/pages/postlist')
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
            <strong>게시판 글쓰기</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormSelect className="bottom-margin" aria-label="Default select example">
                <option>게시판을 선택해주세요</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </CFormSelect>
              <CFormLabel id="formLabel">제목</CFormLabel>
              <div className="mb-3">
                <CFormInput
                  className="textField"
                  id="title"
                  name="title"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </div>
              <CFormLabel id="formLabel">작성자</CFormLabel>
              <div className="mb-3">
                <CFormInput
                  className="textField"
                  id="author"
                  name="author"
                  variant="outlined"
                  onChange={this.handleChange}
                />
              </div>
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
              <div className="mb-3">
                <CFormLabel id="formLabel" htmlFor="formFile">
                  첨부파일
                </CFormLabel>
                <CFormInput type="file" id="formFile" />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href="/pages/postlist#/pages/postlist">
                  <CButton color="dark" variant="outline">
                    목록
                  </CButton>
                </Link>
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
