import info from './info.json'
import Profile from './components/Profile'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-[430px] h-full sm:h-screen w-full block sm:flex flex-col sm:flex-row justify-center items-center lg:p-8 shadow-md">
        <Profile info={info} />
        <Main info={info}/>
      </div>
    </>
  )
}

export default App
