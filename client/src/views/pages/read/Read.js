import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import '../../../scss/Read.scss'

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
      fetch('http://localhost:3000/#/delete', {
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
      fetch('http://localhost:3000/#/read', {
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

  render() {
    const { boards } = this.state
    return (
      <div className="root">
        <h2>{boards.title}</h2>
        <h4>{boards.author}</h4>
        <p>{boards.content}</p>
        {/* <Link href="/#/list"> */}
        <Link href="/#/list">
          <Button variant="outlined">목록</Button>
        </Link>
        <Button variant="outlined" onClick={this.postDelete}>
          삭제
        </Button>
        <Link href={`/#/update/${boards.id}`}>
          <Button variant="outlined">수정</Button>
        </Link>
      </div>
    )
  }
}

export default Read
