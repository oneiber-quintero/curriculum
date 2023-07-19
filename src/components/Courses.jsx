import Course from './Course'
const Courses = ({ info }) => {
  const renderCourse = (elem) => (
    <Course key={elem.id} course={elem}/>
  )

  const courses = info.courses.map(renderCourse)

  return (
    <>
      <h2 className="mt-12 sm:mt-0 font-bold mb-4 text-textPrimary">
        CURSOS REALIZADOS
      </h2>
      <div
        className="grid gap-x-10 gap-y-10 sm:overflow-auto sm:pr-2 grid-cols-auto-fit-300"
        style={{ height: 'calc(100% - 40px)' }}
      >
        {courses}
      </div>
    </>
  )
}

export default Courses
