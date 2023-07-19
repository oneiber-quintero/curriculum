const Course = ({ course }) => {
  return (
    <>
      <a
        className="cursor-pointer text-textPrimary"
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full"
          src={`./assets/images/courses/${course.imageUrl}`}
          alt={course.course}
        />
        <h2 className="font-semibold">{course.course}</h2>
        <span className="flex justify-between">
          <small>{course.start}</small>
          <small>{course.end}</small>
        </span>
      </a>
    </>
  )
}

export default Course
