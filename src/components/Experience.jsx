const Experience = ({ experienceInfo }) => {
  const renderlis = (li) => (
      <li key={li.id} >
          {li.description}
      </li>
  )

  const lis = experienceInfo.points.map(renderlis)

  return (
    <>
      <div className="mx-auto sm:h-[400px] sm:py-0 sm:px-8">
        <div className="md:flex">
          <div className="h-48 w-full sm:w-48 sm:flex-shrink-0 bg-white">
            {experienceInfo.imageUrl && (
              <img
                className="h-48 w-full object-contain sm:w-48 bg-gray-100"
                src={`./assets/images/business/${experienceInfo.imageUrl}`}
                alt={experienceInfo.business}
              />
            )}
          </div>
          <div className="px-6 py-4 sm:py-0 sm:px-8 sm:h-[360px] sm:overflow-auto">
            <a
              href={experienceInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline hover:pointer"
            >
              {experienceInfo.business}
            </a>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">
              {experienceInfo.name}
            </p>
            <p className="mt-2 text-gray-500">
              {experienceInfo.start} - {experienceInfo.end}
            </p>
            <p className="mt-2 text-gray-500">{experienceInfo.location}</p>
            <ul className="list-disc list-inside mt-8 text-gray-500 flex flex-col gap-4">
              {lis}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
