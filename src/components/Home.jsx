const Home = ({ info }) => {
  const { profile } = info
  return (
    <div className="min-h-screen sm:min-h-full h-full w-full relative">
      <div className="absolute top-0 left-0 right-0 m-auto z-2 w-full h-full bg-fondo bg-contain bg-no-repeat bg-center opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 m-auto z-2 w-full h-full">
        <div className="w-full h-full text-textPrimary flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold opacity-100">
            {profile.prefix} {profile.firstname} {profile.lastname}
          </h1>
          <h2 className="text-lg opacity-100">{profile.profession}</h2>
        </div>
      </div>

    </div>
  )
}

export default Home
