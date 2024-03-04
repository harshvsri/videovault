function VideoCard() {
  return (
    <div className="card">
      <img src="/placeholder.png"></img>
      <div className="card-info">
        <div className="card_info-profile"></div>
        <h3>Video Title</h3>
      </div>
      <div className="card-details">
        <h3>Channel Name</h3>
        <p>Views * Upload Time</p>
      </div>
    </div>
  );
}

export default VideoCard;
