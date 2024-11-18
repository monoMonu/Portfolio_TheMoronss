import { Rocket } from "lucide-react"

const ProjectSection = () => {
    const projects =
        {
          title: 'BUY-N-SELL',
          duration: 'Sept 2024 - Oct 2024',
          description: 'A collaborative platform where people can connect and meet in order to share skills. Something like Tinder but for sharing skills rather than dating.',
          skills: ['Node.JS', 'MongoDB', 'ExpressJS', 'Mongoose', 'HTML', 'CSS', 'JavaScript'],
          tools: ['Docker', 'Kubernetes', 'ExpressJS', 'Socket.io', 'ESLint / Prettier'],
        }

  return (
    <div style={styles.header}>
        <h2 className="text-3xl font-bold text-gray-600 m-1 mb-3">Projects</h2>
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5px",marginLeft: "5px",marginRight: "5px", fontWeight: "600"}}>
            <div style={{display: "flex"}}>
                <h2 className="text-2xl font-bold text-black-600 mb-1">{projects.title}</h2>
                <Rocket style={{marginLeft: "10px", marginTop: "5px", color: "grey"}}/>
            </div>
            <h4 className="text-1xl text-gray-600 mb-1">{projects.duration}</h4>
        </div>
        <hr className="border-gray-500 mb-1" />
        <ul className="text-black-600" style={styles.disc}>
            {projects.description.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div style={styles.skills}>
          <span style={styles.note}>Skills:</span>{projects.skills.map((skill, index) => (
              <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>
        <div style={styles.skills}>
          <span style={styles.note}>Tools:</span> {projects.tools.map((tool, index) => (
              <span key={index} style={styles.skill}>{tool}</span>
            ))}
        </div>

        <div style={styles.experience_bottom_section}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <p style={{alignContent: "center", fontWeight: "600", fontSize: "1.1rem"}}>Project Completion Report</p>
        </div>
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
    disc: {
        listStyleType: "disc",
        paddingLeft: "20px",
    },
    skills: {
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        gap: "20px",
      },
      skill: {
        backgroundColor: "#f0f0f0",
        border: "1px solid black",
        borderRadius: "15px",
        padding:"5px",
        color: "black",
        fontWeight: "500",
      },
      note: {
        color: "black",
        fontWeight: "700",
        marginTop: "5px"
      },
      experience_bottom_section: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px"
      },
}

export default ProjectSection
