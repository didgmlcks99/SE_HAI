import React, { Component } from 'react'
//import '../../../../scss/List.scss'
import Link from '@material-ui/core/Link'
import { StylesContext } from '@material-ui/styles'

import {
  CButton,
  CCard,
  CRow,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import MainImg from 'src/assets/images/시선리크루팅.png'

class Recruitmain extends Component {
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
    fetch('http://localhost:3000/#/institute/recruit')
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
                  <strong>시선학회 리크루팅 정보!!</strong>
                </CCol>
                <CCol xs={6}>
                  <Link href={`#/institute/recruit/write`}>
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
              <CRow>
                <CCol xs={6}>
                  <CCard className="mb-4">
                    <CRow>
                      <CCardBody>
                        <div>
                          <div>
                            <img className="d-block w-100" id="poster" src="/sight_poster.png" />
                          </div>
                        </div>
                      </CCardBody>
                    </CRow>
                  </CCard>
                </CCol>
                <CCol xs={6}>
                  <CRow>
                    <CCardBody>
                      <label>
                        ”Why not Change the World?”<p></p>
                        ”배워서 남 주자!”<p></p>
                        <p>ㅤ</p>
                        🎉시선 2022 - 1 리쿠르팅🎉<p></p>
                        💕세상의 소외된 약자를 위해 함께 고민할 신입 학회원을 모집합니다.💕<p></p>
                        <p>ㅤ</p>
                        1. 시선 (See 善) : 선한 곳을 보다.<p></p>
                        💁🏻‍♂️ 시선 학회는 황성수 교수님의 지도 하에<p></p>
                        👀 사회의 소외된 이웃을 바라보고,<p></p>
                        📱그들의 필요를 채워주는 IT 기술을 만드는 학회입니다.<p></p>
                        <p>ㅤ</p>
                        2. 지원 자격<p></p>
                        👤 2학기 연속 학회 활동 참여<p></p>
                        👤 방학 중 합숙 프로젝트, 스터디 참여 및 스터디 진행<p></p>
                        👤 이번 학기 정모 참여(13 주차 화요일 21:00)<p></p>
                        👤 개발자, 디자이너, 기획자 누구든!<p></p>
                        <p>ㅤ</p>
                        3. 학회 활동<p></p>
                        👩‍🦽 휠체어 이용자들을 위한 커뮤니티맵 어플 ”휘리릭” 리뉴얼 및 유지보수<p></p>
                        💡 소외된 이웃을 위한 새로운 프로젝트 기획 및 개발<p></p>
                        🏆 공모전 및 대회 참가<p></p>
                        ✏️ 방학 중 스터디<p></p>
                        <p>ㅤ</p>
                        4. 지원 방법<p></p>
                        📬 5/14(토) 23:00까지 구글 폼 작성 후 제출<p></p>
                        *구글폼 URL<p></p> : <Link>https://forms.gle/KizAT6QRwW85S3Qn8</Link>
                        <p>ㅤ</p>
                        5. 면접 일정<p></p>
                        🧑‍💻5/18 - 5/19(수,목) 대면 면접 (추후 변동 가능성 있음)<p></p>
                        <p>ㅤ</p>
                        문의 | 박규경 010-9104-5092<p></p>
                        {/* <textarea rows="20" cols="100" value={this.state.value} onChange={this.handleChange} /> */}
                        <br /> <br /> <br />
                      </label>
                    </CCardBody>
                  </CRow>
                </CCol>
              </CRow>
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
export default Recruitmain
