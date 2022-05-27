import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// import PostList from './routes/PostList'
// import Read from './routes/Read'
// import Write from './routes/Write'
// import Update from './routes/Update'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const PostList = React.lazy(() => import('./views/pages/postlist/PostList'))
const Read = React.lazy(() => import('./views/pages/read/Read'))
const Write = React.lazy(() => import('./views/pages/write/Write'))
const Update = React.lazy(() => import('./views/pages/update/Update'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route exact path="/list" name="Lists" element={<PostList />} />
            <Route path="/read/:postid" name="Read" element={<Read />} />
            <Route path="/update/:postid" name="Update" element={<Update />} />
            <Route path="/write" name="Write" element={<Write />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
