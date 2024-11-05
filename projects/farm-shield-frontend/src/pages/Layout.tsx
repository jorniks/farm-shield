import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
export const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen bg- relative bg-[radial-gradient(circle,_#edf7f1,_#fcfcfc)] dark:bg-[radial-gradient(circle,_#1a2e23,_#1e1e1e)] top-0">
      <Header />
      <Outlet />
    </div>
  )
}
