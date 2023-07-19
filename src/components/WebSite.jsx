const WebSite = ({ webSite }) => {
  return (
    <>
      <a
        className="cursor-pointer text-textPrimary"
        href={webSite.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-full"
          src={`./assets/images/websites/${webSite.imageUrl}`}
          alt={webSite.title}
        />
        <h2 className="font-semibold">{webSite.title}</h2>
        <span className="flex justify-between">
          <small>{webSite.description}</small>
        </span>
      </a>
    </>
  )
}

export default WebSite
