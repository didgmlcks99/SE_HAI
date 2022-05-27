// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'

import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
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

//function Update(props) {
class Update extends Component {
  state = {
    num: '',
    title: '',
    writer: '',
    body: '',
  }

  postUpdate = () => {
    try {
      if (this.state.title !== '' && this.state.writer !== '' && this.state.body !== '') {
        fetch('http://localhost:3001/api/update_post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            num: this.state.num,
            title: this.state.title,
            body: this.state.body,
            writer: this.state.writer,
          }),
        }).then((response) => response.json())
        alert('수정 완료')
        const pname = window.location.href.split('/')
        const cat = pname[pname.length - 3]

        window.location.replace('#/committee/' + cat + '/read/' + this.state.num)
      } else {
        alert('모든 칸을 작성해야합니다!')
      }
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
          num: data[0].num,
          title: data[0].title,
          writer: data[0].writer,
          body: data[0].body,
        })
      })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const pname = window.location.href.split('/')
    const category = pname[pname.length - 3]
    return (
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader id="boardLabel">
            <strong>글 수정하기</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormLabel id="formLabel">제목</CFormLabel>
              <div className="mb-3">
                <CFormInput
                  className="textField"
                  id="title"
                  name="title"
                  variant="outlined"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <CFormLabel id="formLabel">작성자</CFormLabel>
              <div className="mb-3">
                <CFormInput
                  className="textField"
                  id="author"
                  name="writer"
                  variant="outlined"
                  value={this.state.writer}
                  onChange={this.handleChange}
                />
              </div>
              <CFormLabel id="formLabel">내용</CFormLabel>
              <div className="mb-3">
                <TextField
                  className="textField"
                  id="body"
                  name="body"
                  multiline
                  rows={15}
                  variant="outlined"
                  value={this.state.body}
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
                <Link href={`/#/committee/` + category + `/read/${this.state.num}`}>
                  <CButton color="dark" variant="outlined">
                    취소
                  </CButton>
                </Link>
                <CButton color="dark" onClick={this.postUpdate}>
                  수정
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    )
  }
}
export default Update
