import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import '../../../../scss/Read.scss'
import { CButton } from '@coreui/react'

class Read extends Component {
  state = {
    boards: [],
  }

  postDelete = () => {
    try {
      const id = {
        // eslint-disable-next-line react/prop-types
        id: this.props.match.params.postid,
      }
      fetch('http://localhost:3000/#/committee/inquiry/delete', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(id),
      }).then((reponse) => {
        alert('삭제 완료')
        // eslint-disable-next-line react/prop-types
        this.props.history.replace('/')
      })
    } catch (e) {
      console.log(e)
    }
  }

  loadingData = () => {
    try {
      const id = {
        // eslint-disable-next-line react/prop-types
        id: this.props.match.params.postid,
      }
      fetch('http://localhost:3000/#/committee/inquiry/read', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(id),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ boards: data })
        })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    const { loadingData } = this
    loadingData()
  }

  // 답변하기 버튼을 누르면 제목이 전달될 수 있도록
  render() {
    const { boards } = this.state
    return (
      <div className="root">
        <h2>{boards.title}</h2>
        <h4>{boards.author}</h4>
        <p>{boards.content}</p>
        {/* <Link href="/#/list"> */}
        <Link href="/#/committee/inquiry">
          <Button variant="outlined">목록</Button>
        </Link>
        <Link href="/#/committee/inquiry/write">
          <CButton color="dark" variant="outline">
            답변
          </CButton>
        </Link>
        <Button variant="outlined" onClick={this.postDelete}>
          삭제
        </Button>
        <Link href={`/#/committee/inquiry/update/${boards.id}`}>
          <Button variant="outlined">수정</Button>
        </Link>
      </div>
    )
  }
}

export default Read
