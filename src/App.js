import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { instance } from './API/instance';
import './App.css'
import AppRouter from './Components/AppRouter/AppRouter';
import { AuthContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [user,setUser] = useState(null)
  const [download,setDownload] = useState(false)
  const [alert,setAlert] = useState(false)
  const[visible,setVisible] = useState(false)

  useEffect(() => {
     authorizing()
      },[])

  async function authorizing(){
    try{
    const response = await instance.get(`auth/auth`)    
      setIsAuth(true)
      setUser(response.data.user)
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser,
      download,
      setDownload,
      alert,
      setAlert,
      visible,
      setVisible
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App
