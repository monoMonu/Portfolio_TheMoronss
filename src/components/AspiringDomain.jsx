
const AspiringDomain = () => {

    return (
      <div style={styles.header}>
        <h2 className="text-3xl font-bold text-gray-600 m-1">Aspiring Domain</h2>
        <h4 style={styles.title_description}>Cloud Computing and DevOps</h4>
        <hr className="border-gray-500" />
        <p className="text-black-600 m-1">Involves the development and deployment of applications on cloud platforms like <span style={{fontWeight: "700"}}>AWS, Azure, and Google Cloud,</span> alongside streamlining development process with <span style={{fontWeight: "700"}}>DevOps</span> practices.</p>
      </div>
    )
  }
  
  const styles = {
      header: {
        background: "white",
        padding: "10px 10px",
        border: "1px solid #A8A8A8",
        borderRadius: "10px"
      },
      title: {
          color: "#404040",
          fontWeight: "700",
      },
      title_description: {
          color: "#585858",
          paddingBottom: "6px",
          fontWeight: "700",
          marginLeft: "2px"
      },
      line: {
        border: "0.01px solid #A8A8A8",
      },
      description: {
          fontSize: "1.1rem",
          padding: "2px",
      }
    };

export default AspiringDomain
