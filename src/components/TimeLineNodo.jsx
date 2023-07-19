import { FaBuilding } from 'react-icons/fa'

const TimeLineNodo = ({ node, onOpen }) => {
  return (
    <>
      <div key={node.id} className="mb-4">
        <div className="flex items-center ">
          <div
            onClick={onOpen}
            className="bg-gray-300 rounded-full h-10 w-10 flex items-center justify-center z-10"
          >
            <button className="bg-gradient-to-b from-bgPrimary to-bgSecondary text-textSecondary w-8 h-8 rounded-full flex items-center justify-center focus:outline-none border-none">
              <FaBuilding />
            </button>
          </div>
          <div onClick={onOpen} className="flex flex-col ml-4 text-textPrimary cursor-pointer">
            <h3 className="text-lg font-bold">{node.name}</h3>
            <p>{node.area}</p>
            <p>
              {node.start} - {node.end}
            </p>
            <p>{node.location}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLineNodo
