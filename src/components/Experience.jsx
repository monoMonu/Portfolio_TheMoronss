const Experience = () => {
    
    const experience = {
        company: "Cognizant",
        title: "Software Developer Lead",
        location: "Noida",
        place:"Onsite",
        startDate: "Nov, 2024",
        endDate: "Present",
        responsibilities: [
          "Managed user details and processed user requests by implementing REST APIs in Node.js.",
          "Worked towards adding new features to the application wherein parents could get information related to Covid-19 from professionals.",
          "Worked with MongoDB to store relevant user related data and also the information that needed to be displayed accordingly.",
          "Created a frontend framework that connected daycare centers with parents using Quasar (Vue.JS resource).",
          "Worked closely with the designers and was actively involved in the meetings that took place regarding betterment of things in the company.",
        ],
        tools: ["Docker", "Kubernetes", "ExpressJS", "Socket.io", "ESLint / Prettier"],
        skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose", "JavaScript"],
      };

    return (
      <div style={styles.header}>
        <h2 className="text-3xl font-bold text-gray-600 m-1 mb-3">Experience</h2>
        <h3 className="text-2xl font-bold text-black-600 m-1 mb-1">{experience.company}</h3>
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5px",marginLeft: "5px",marginRight: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{experience.title}</h4>
          <h4>{experience.location}</h4>
        </div>
        <div style={{display: "flex",justifyContent: "space-between",marginLeft: "5px",marginRight: "5px",marginTop: "1px",marginBottom: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{experience.place}</h4>
          <h4>{experience.startDate} - {experience.endDate}</h4>
        </div>
        <hr className="border-gray-500 mb-1" />
        <ul className="text-black-600" style={styles.disc}>
          {experience.responsibilities.map((responsibility, index) => (
           <li key={index}>{responsibility}</li>
          ))}
        </ul>
          
          <div style={styles.skills}>
          <span style={styles.note}>Tools:</span> {experience.tools.map((tool, index) => (
              <span key={index} style={styles.skill}>{tool}</span>
            ))}
          </div>

        <div style={styles.skills}>
          <span style={styles.note}>Skills:</span>{experience.skills.map((skill, index) => (
              <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>

        <div style={styles.experience_bottom_section}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <p style={{alignContent: "center", fontWeight: "600", fontSize: "1.1rem"}}>Software Developer Lead</p>
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
      company_items: {
        display: "flex",
        justifyContent: "space-between"
      },

      disc: {
        listStyleType: "disc",
        paddingLeft: "20px",
      },
      tools: {
        display: "flex",
        gap: "30px",
        marginTop: "10px",
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
    };

export default Experience
