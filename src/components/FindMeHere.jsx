import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const FindMeHere = () => {
  return (
    <div>
      <div style={styles.header}>
        <h2 className="text-3xl font-bold text-black-600 m-1">Find Me Here</h2>
        <div className="flex flex-row gap-40">
            <Github color="white" size="55" style={styles.icon}/>
            <Twitter color="white" size="55" style={styles.icon}/>
            <Linkedin color="white" size="55" style={styles.icon}/>
            <ExternalLink  color="white" size="55" style={styles.icon}/>
        </div>
      </div>
    </div>
  )
}

const styles = {
    header: {
      background: "white",
      padding: "10px 10px",
      border: "1px solid #A8A8A8",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    icon: {
        borderRadius: "20%",
        background: "black",
        padding: "2px 5px"
    }
  };

export default FindMeHere
