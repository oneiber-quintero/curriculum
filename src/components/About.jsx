import { FaCode, FaUserGraduate, FaBuilding, FaBook } from 'react-icons/fa'

const About = ({ info }) => {
  const { about } = info

  const renderAbout = (elem) => {
    return (
      <div key={elem.id} className="text-textPrimary">
        <div className="flex items-center gap-4 mb-2">
          <p className="text-bgPrimary text-4xl">{renderIcon(elem.id)}</p>
          <h2 className="font-semibold">{elem.title}</h2>
        </div>

        <p>{elem.description}</p>
      </div>
    )
  }

  const renderIcon = (id) => {
    if (id === 'a1') {
      return <FaUserGraduate />
    } else if (id === 'a2') {
      return <FaBuilding />
    } else if (id === 'a3') {
      return <FaCode />
    } else if (id === 'a4') {
      return <FaBook />
    } else {
      return <FaCode />
    }
  }

  const abouts = about.length && about.map(renderAbout)

  return (
    <>
      <h2 className="font-bold mb-4 text-textPrimary">SOBRE MÍ</h2>
      <div
        className=" h-full grid gap-4 sm:overflow-auto grid-cols-auto-fit-300"
        style={{ height: 'calc(100% - 40px)' }}
      >
        {abouts}
      </div>
    </>
  )
}

export default About
