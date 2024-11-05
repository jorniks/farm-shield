import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/theme'
import { ThemeButton } from './ThemeBtn'
export const Header = () => {
  const activeLink = (link: { isActive: boolean; isPending: boolean; isTransitioning: boolean }) => {
    return link.isActive
      ? 'text-primary text-xl font-bold !leading-[30px] shadow-[0px_-2px_0px_0px_#2EA15C_inset] transition-shadow  text-primary'
      : 'text-secondary dark:text-white text-xl !leading-[30px] font-normal transition-shadow'
  }
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="mx-[100px] w-[calc(100%_-_200px)] top-8 relative border px-8 py-8  bg-[rgba(217,_217,_217,_0.1)] dark:!bg-[rgba(255,_255,_255,_0.04)] border-[#2C2C2C1F] dark:border-solid dark:border-[rgba(255,_255,_255,_0.12)] rounded-[40px] flex justify-between items-center">
      <Link to="/" className="text-2xl text-primary font-bold  ">
        FarmShield
      </Link>
      <nav>
        <ul className="flex gap-4 font-poppins ">
          <li>
            <NavLink className={activeLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="/faqs">
              FAQ's
            </NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 ">
        <ThemeButton theme={theme} themeHandler={toggleTheme} />
        <Link
          to={'/onboarding'}
          className="capitalize text-white bg-primary px-4 py-2 flex justify-center items-center gap-[10px] rounded-[40px] text-xl font-normal"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
