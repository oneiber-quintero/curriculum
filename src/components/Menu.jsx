import { FaHome, FaSchool, FaUserAlt } from 'react-icons/fa'
import { BiSolidBusiness, BiWindows } from 'react-icons/bi'
import { PiCertificate } from 'react-icons/pi'

const Menu = ({ info, setSelectedOption }) => {
  const handleClick = (option) => {
    setSelectedOption(option)
  }

  const isMenu = (optionMenu) => {
    return info.menu.includes(optionMenu)
  }

  return (
    <>

      <ul className="hidden sm:block [&>li]:relative p-0.5 [&>li]:opacity-80 [&>li:hover]:opacity-100 [&>li]:rounded-full [&>li]:cursor-pointer [&>li]:p-4 [&>li]:text-xl border-2 rounded-full border-bgPrimary">

        { isMenu('home') &&
          <li onClick={() => handleClick('home')} id="home" data-title="Inicio">
            <FaHome />
          </li>
        }

        { isMenu('about') &&
          <li
            onClick={(e) => handleClick('about')}
            id="about"
            data-title="Sobre mí"
          >
            <FaUserAlt />
          </li>
        }

        { isMenu('academies') &&
          <li
            onClick={(e) => handleClick('academies')}
            id="academies"
            data-title="Estudios Academicos"
          >
            <FaSchool />
          </li>
        }

        { isMenu('experiences') &&
          <li
            onClick={(e) => handleClick('experiences')}
            id="experiences"
            data-title="Experiencia Laboral"
          >
            <BiSolidBusiness />
          </li>
        }

        { isMenu('courses') &&
          <li
            onClick={(e) => handleClick('courses')}
            id="courses"
            data-title="Cursos"
          >
            <PiCertificate />
          </li>
        }

        { isMenu('websites') &&
          <li
            onClick={(e) => handleClick('websites')}
            id="websites"
            data-title="mis sitios web"
          >
            <BiWindows />
          </li>
        }
      </ul>
    </>
  )
}

export default Menu
