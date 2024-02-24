import { FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa'
import { SiPlatzi } from 'react-icons/si'

const Profile = ({ info }) => {
  const { profile } = info
  const { socialNetwork } = profile

  const handleDownload = ({ language }) => {
    const link = document.createElement('a')
    link.href = `./assets/pdfs/CV ${language} Oneiber Quintero.pdf`
    link.download = `CV ${language} Oneiber Quintero.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="w-full sm:w-4/12 md:w-3/12 h-screen sm:h-full sm:rounded-l-lg py-8 px-2 flex flex-col justify-between items-center text-textSecondary bg-gradient-to-b from-bgPrimary to-bgSecondary">
        <div className=" flex flex-col items-center gap-2">
          <img
            className="w-36 h-36 rounded-full"
            src={`./assets/images/${profile.imageUrl}`}
            alt={profile.firstname}
          />
          <div className="flex flex-col items-center">
            <h1>
              {profile.prefix ?? ''} {profile.firstname} {profile.lastname}
            </h1>
            <h2>{profile.birthday}</h2>
          </div>

          <div className="flex gap-2 text-xl [&>a]:opacity-90 [&>a:hover]:opacity-100 [&>a]:relative">
            {socialNetwork.linkedin && (
              <a
                href={socialNetwork.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                data-title={socialNetwork.linkedin.name}
              >
                <FaLinkedin />
              </a>
            )}
            {socialNetwork.facebook && (
              <a
                href={socialNetwork.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                data-title={socialNetwork.facebook.name}
              >
                <FaFacebookSquare />
              </a>
            )}
            {socialNetwork.platzi && (
              <a
                href={socialNetwork.platzi.url}
                target="_blank"
                rel="noopener noreferrer"
                data-title={socialNetwork.platzi.name}
              >
                <SiPlatzi />
              </a>
            )}
            {socialNetwork.github && (
              <a
                href={socialNetwork.github.url}
                target="_blank"
                rel="noopener noreferrer"
                data-title={socialNetwork.github.name}
              >
                <FaGithub />
              </a>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h2>Descargar curriculum</h2>
            <button
              type="button"
              onClick={() => handleDownload({ language: 'english' })}
              className="text-textPrimary px-4 py-2  bg-bgTertiary rounded-lg shadow-md shadow-bgPrimary hover:shadow-bgSecondary opacity-90 hover:opacity-100"
            >
              En ingles
            </button>
            <button
              type="button"
              onClick={() => handleDownload({ language: 'spanish' })}
              className="text-textPrimary px-4 py-2 bg-bgTertiary rounded-lg shadow-md shadow-bgPrimary hover:shadow-bgSecondary opacity-90 hover:opacity-100"
            >
              En español
            </button>
          </div>
        </div>

        <h2 className="text-sm">
          © {new Date().getFullYear()} {profile.firstname} {profile.lastname}
        </h2>
      </div>
    </>
  )
}

export default Profile
