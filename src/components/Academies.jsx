import { useState } from 'react'
import Modal from './modal'
import TimeLineNodo from './TimeLineNodo'
import Academy from './Academy'

const Academies = ({ info }) => {
  const { academies } = info
  const [isOpen, setIsOpen] = useState(false)
  const [academyInfo, setAcademyInfo] = useState({})

  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = (elem) => {
    setAcademyInfo(elem)
    setIsOpen(true)
  }

  const renderNode = (elem) => (
    <TimeLineNodo key={elem.id} node={elem} onOpen={() => onOpen(elem)}/>
  )

  const nodes = academies.map(renderNode)

  return (
    <>
      <h2 className="mt-12 sm:mt-0 font-bold mb-4 text-textPrimary">
        ESTUDIOS ACADÉMICOS
      </h2>
      <div
        className="sm:overflow-auto h-full"
        style={{ height: 'calc(100% - 40px)' }}
      >
        <div className="relative sm:pr-2">
          <div className="border-r-2 border-gray-300 absolute h-full top-0 z-0 left-[19px]"></div>
          <div className="m-0 p-0">{nodes}</div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Academy academyInfo={academyInfo} />
      </Modal>
    </>
  )
}

export default Academies
