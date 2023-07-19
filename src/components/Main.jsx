import useSelectedMenu from '../hooks/useSelectedMenu'
import { lazy } from 'react'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Menu = lazy(() => import('./Menu'))
const Courses = lazy(() => import('./Courses'))
const Academies = lazy(() => import('./Academies'))
const Experiences = lazy(() => import('./Experiences'))
const WebSites = lazy(() => import('./WebSites'))

const Main = ({ info }) => {
  const [selectedOption, setSelectedOption] = useSelectedMenu(info.menu[0])

  const isMenu = (optionMenu) => {
    return info.menu.includes(optionMenu)
  }

  return (
    <>
      <div className="w-full sm:w-8/12 md:w-7/12  sm:h-full sm:rounded-r-lg p-2 bg-bgTertiary flex justify-between items-start">
        <div className="h-full w-full p-4 hidden sm:block">
          { isMenu('home') && selectedOption === 'home' && <Home key="mHome" info={info} />}
          { isMenu('about') && selectedOption === 'about' && <About key="mAbout" info={info} />}
          { isMenu('academies') && selectedOption === 'academies' && <Academies key="mAcademies" info={info} />}
          { isMenu('experiences') && selectedOption === 'experiences' && <Experiences key="mExperiences" info={info} />}
          { isMenu('courses') && selectedOption === 'courses' && <Courses key="mCourses" info={info} />}
          { isMenu('websites') && selectedOption === 'websites' && <WebSites key="mWebSites" info={info} />}

        </div>
        <div className="h-full w-full p-4 block sm:hidden">
          { isMenu('home') && <Home key="mrHome" info={info} />}
          { isMenu('about') && <About key="mrAbout" info={info} />}
          { isMenu('academies') && <Academies key="mrAcademies" info={info} />}
          { isMenu('experiences') && <Experiences key="mrExperiences" info={info} />}
          { isMenu('courses') && <Courses key="mrCourses" info={info} />}
          { isMenu('websites') && <WebSites key="mrWebSites" info={info} />}
        </div>

          <Menu info={info} setSelectedOption={setSelectedOption} />

      </div>
    </>
  )
}

export default Main
