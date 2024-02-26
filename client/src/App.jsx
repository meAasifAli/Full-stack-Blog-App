import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header'
import Blogs from './pages/Blogs'
import WriteBlog from './pages/WriteBlog'
import UserProfile from './pages/UserProfile'
import Footer from './components/Footer'
import axios from 'axios'
import { useAuthUser } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogDetail from './pages/BlogDetail'
import EditBlog from './pages/EditBlog'


const App = () => {
  axios.defaults.baseURL = 'http://localhost:5000',
    axios.defaults.withCredentials = true
  const { authUser } = useAuthUser()
  // console.log(authUser);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to={"/"} />} />
        <Route path='/login' element={!authUser ? <Login /> : <Navigate to={"/"} />} />
        <Route path='/blogs' element={authUser ? <Blogs /> : <Navigate to={"/login"} />} />
        <Route path='/write' element={authUser ? <WriteBlog /> : <Navigate to={"/login"} />} />
        <Route path='/profile' element={authUser ? <UserProfile /> : <Navigate to={"/login"} />} />
        <Route path='/about' element={authUser ? <About /> : <Navigate to={"/login"} />} />
        <Route path='/contact' element={authUser ? <Contact /> : <Navigate to={"/login"} />} />
        <Route path='/blog/:id' element={authUser ? <BlogDetail /> : <Navigate to={"/login"} />} />
        <Route path='/edit/:id' element={authUser ? <EditBlog /> : <Navigate to={"/login"} />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}
export default App