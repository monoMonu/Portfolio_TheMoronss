
const VideoSection = () => {
  return (
    <div style={styles.bodyvedio_container}>
        <video style={styles.videoFrame} controls>
            <source src="/interview.mp4" type="video/mp4" />
               Your browser does not support the video tag.
        </video>
    </div>
  )
}

const styles = {
    bodyvedio_container: {
        display: "flex",
        width: "100%",
        borderRadius: "30px",
        padding: '15px 35px',
    },
     videoFrame: {
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        border: "none",
    },
}

export default VideoSection
