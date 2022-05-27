// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'

import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import '../../../../scss/Write.scss'

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
      <div className="root">
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <TextField
              className="textField"
              id="title"
              name="title"
              label="Title"
              variant="outlined"
              value={this.title}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className="textField"
              id="writer"
              name="writer"
              label="Writer"
              variant="outlined"
              value={this.writer}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className="textField"
              id="body"
              name="body"
              label="Body"
              multiline
              rows={15}
              variant="outlined"
              value={this.body}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={10}>
            <Link href={`/#/committee/` + category + `/read/${this.state.num}`}>
              <Button variant="outlined">수정취소</Button>
            </Link>
            <Button variant="outlined" onClick={this.postUpdate}>
              전송하기
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default Update
