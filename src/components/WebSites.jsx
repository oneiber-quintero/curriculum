import WebSite from './WebSite'
const WebSites = ({ info }) => {
  const renderWebSites = (elem) => (
    <WebSite key={elem.id} webSite={elem}/>
  )

  const websites = info.websites.map(renderWebSites)
  return (
    <>
      <h2 className="mt-12 sm:mt-0 font-bold mb-4 text-textPrimary">
        MIS SITIOS WEBS
      </h2>
      <div
        className="grid gap-x-10 gap-y-10 sm:overflow-auto sm:pr-2 grid-cols-auto-fit-300"
        style={{ height: 'calc(100% - 40px)' }}
      >
        {websites}
      </div>
    </>
  )
}

export default WebSites
