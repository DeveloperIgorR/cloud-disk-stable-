import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { instance } from './API/instance';
import './App.css'
import AppRouter from './Components/AppRouter/AppRouter';
import { AuthContext } from './context';

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [user,setUser] = useState(null)

  useEffect(() => {
     authorizing()
      },[])

  async function authorizing(){
    try{
    const response = await instance.get(`auth/auth`)    
      setIsAuth(true)
    } catch (e) {
        console.log(e)
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
export default App
