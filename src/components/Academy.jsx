const Academy = ({ academyInfo }) => {
  const renderlis = (li) => (
        <li key={li.id} >
            {li.description}
        </li>
  )

  const lis = academyInfo.points.map(renderlis)

  return (
    <>
      <div className="mx-auto sm:h-[400px] sm:py-0 sm:px-8">
        <div className="md:flex">
          <div className="h-48 w-full sm:w-48 sm:flex-shrink-0 bg-white">
            {academyInfo.imageUrl && (
              <img
                className="h-48 w-full object-contain sm:w-48 bg-gray-100"
                src={`./assets/images/business/${academyInfo.imageUrl}`}
                alt={academyInfo.area}
              />
            )}
          </div>
          <div className="px-6 py-4 sm:py-0 sm:px-8 sm:h-[360px] sm:overflow-auto">
            <a
              href={academyInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase tracking-wide text-sm font-semibold hover:underline hover:pointer"
            >
              {academyInfo.name}
            </a>
            <p className="block mt-1  leading-tight font-medium text-black">
              {academyInfo.area}
            </p>
            <p className="mt-2 text-gray-500">
              {academyInfo.start} - {academyInfo.end}
            </p>
            <p className="mt-2 text-gray-500">{academyInfo.location}</p>
            <ul className="list-disc list-inside mt-8 text-gray-500 flex flex-col gap-4">
              {lis}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Academy
