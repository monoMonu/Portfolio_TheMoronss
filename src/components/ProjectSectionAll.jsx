import { Rocket } from "lucide-react"

const ProjectSectionAll = () => {
    const projects =
        {
            title: 'O-AUTHIFY-2.0',
            duration: 'Apr 2023 - May 2023',
            description: 'An implementation of OAuth 2.0 to secure APIs.',
            skills: ['Golang', 'Gin-Gonic', 'PostgreSQL', 'GORM', 'JWT', 'SQL-Mock'],
            tools: ['Git', 'IntelliJ IDEA / PyCharm', 'Apache Kafka', 'Jenkins', 'Chrome DevTools']
        }
    const project1 =
        {
              title: 'Link Shortener',
              duration: 'Sept 2022 - Oct 2022',
              description: 'A collaborative platform where people can connect and meet in order to share skills. Something like Tinder but for sharing skills rather than dating.',
              skills: ['NodeJS', 'MongoDB', 'ExpressJS', 'Mongoose', 'HTML', 'CSS', 'JavaScript'],
              tools: ['Docker', 'Kubernetes', 'ExpressJS', 'Socket.io', 'ESLint / Prettier']
        }

  return (
    <>
    <div style={styles.header}>
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
    </div>

    <div style={styles.header}>
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5px",marginLeft: "5px",marginRight: "5px", fontWeight: "600"}}>
            <div style={{display: "flex"}}>
                <h2 className="text-2xl font-bold text-black-600 mb-1">{project1.title}</h2>
                <Rocket style={{marginLeft: "10px", marginTop: "5px", color: "grey"}}/>
            </div>
            <h4 className="text-1xl text-gray-600 mb-1">{project1.duration}</h4>
        </div>
        <hr className="border-gray-500 mb-1" />
        <ul className="text-black-600" style={styles.disc}>
            {project1.description.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <div style={styles.skills}>
          <span style={styles.note}>Skills:</span>{project1.skills.map((skill, index) => (
              <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>
        <div style={styles.skills}>
          <span style={styles.note}>Tools:</span> {project1.tools.map((tool, index) => (
              <span key={index} style={styles.skill}>{tool}</span>
            ))}
        </div>
    </div>


    </>
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
}

export default ProjectSectionAll
