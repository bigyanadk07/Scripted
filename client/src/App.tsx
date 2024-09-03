import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Dashboard from './Dashboard/Components/Dashboard'
import ManageUsers from './Dashboard/ManageUsers'
import CreatePost from './Dashboard/Components/PostsActionsPage/CreatePost'
import EditPost from './Dashboard/Components/PostsActionsPage/EditPost'
import DeletePost from './Dashboard/Components/PostsActionsPage/DeletePost'
import ViewPosts from './Dashboard/Components/PostsActionsPage/ViewPost'
import SignIn from './Dashboard/Components/Auth/SignIn'
import SignUp from './Dashboard/Components/Auth/SignUp'
import { AuthProvider } from './Dashboard/Components/Auth/AuthContext';

const App:React.FC = () => {
  return (
    <div>
      <AuthProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/manage-users" element={<ManageUsers/>} />
            <Route path="/create-post" element={<CreatePost/>} />
            <Route path="/edit-post" element={<EditPost/>} />
            <Route path="/delete-post" element={<DeletePost/>} />
            <Route path="/view-posts" element={<ViewPosts/>} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App
