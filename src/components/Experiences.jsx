import { useState } from 'react'
import TimeLineNodo from './TimeLineNodo'
import Modal from './modal'
import Experience from './experience'

const Experiences = ({ info }) => {
  const { experiences, skills } = info
  const [isOpen, setIsOpen] = useState(false)
  const [experienceInfo, setExperienceInfo] = useState({})

  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = (elem) => {
    setExperienceInfo(elem)
    setIsOpen(true)
  }

  const renderNode = (elem) => {
    const node = {
      id: elem.id,
      name: elem.name,
      area: elem.business,
      start: elem.start,
      end: elem.end,
      location: elem.location
    }
    return <TimeLineNodo key={elem.id} node={node} onOpen={() => onOpen(elem)}/>
  }

  const nodes = experiences && experiences.map(renderNode)

  const renderSkills = (elem) => {
    return (
      <li key={elem.id} className="flex justify-between items-center mb-2">
        <span className="text-textSecondary">{elem.skill}</span>
        <div className="flex">
          <span>{''.padStart(elem.stars * 2, '⭐️')}</span>
        </div>
      </li>
    )
  }

  const lis = skills && skills.map(renderSkills)
  return (
    <>
      <h2 className="mt-12 sm:mt-0 font-bold mb-4 text-textPrimary">
        EXPERIENCIA LABORAL
      </h2>
      <div
        className="sm:overflow-auto h-full w-full flex flex-col sm:flex-row justify-between"
        style={{ height: 'calc(100% - 40px)' }}
      >
        <div className="relative sm:pr-2">
          <div className="border-r-2 border-gray-300 absolute h-full top-0 z-0 left-[19px]"></div>
          <div className="m-0 p-0">{nodes}</div>
        </div>
        <div>
          <div className="flex flex-col items-center bg-gradient-to-b from-bgPrimary to-bgSecondary rounded-md p-2 ">
            <h2 className="text-2xl font-bold mb-4 text-textSecondary">
              Habilidades
            </h2>
            <ul className="w-full p-2">{lis}</ul>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Experience experienceInfo={experienceInfo} />
      </Modal>
    </>
  )
}

export default Experiences
