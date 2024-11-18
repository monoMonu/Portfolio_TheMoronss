
const DetailedViewOptions = () => {
  return (
    <div style={styles.header}>
      {/* Timeline line */}
      <hr className="border-gray-500 " />

      {/* Timeline event */}
      <div style={styles.btn}>
      <button
        style={{
          background: "#FFC53D",
          fontSize: "1.1rem",
          fontWeight: "600",
          padding: "10px",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.6)",
        }}
      >
        Detailed View Options <span>&gt;</span>
      </button>
    </div>
    </div>
  )
}

const styles = {
    header: {
      padding: "25px 10px",
      borderRadius: "10px"
    },
    btn: {
        marginTop: "-25px",
        marginBottom: "-25px",
        display: "flex",
        justifyContent: "center",
    },
}

export default DetailedViewOptions
