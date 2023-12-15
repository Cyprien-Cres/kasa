const Host = ({ hostName, hostPicture }) => {
  return (
    <div className="host-container">
      <p className="host-name">{hostName}</p>
      <img src={hostPicture} alt={hostName} className="host-picture" />
    </div>
  )
}

export default Host
