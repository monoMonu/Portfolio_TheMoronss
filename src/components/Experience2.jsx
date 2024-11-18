const Experience2 = () => {
    
    const experience = {
    company: "CODESYLUMS",
    title: "Software Development Intern + Teaching Assistant",
    location: "Bengaluru",
    place:"Onsite",
    startDate: "Jan, 2024",
    endDate: "Nov",
    responsibilities: [
      "Worked towards creating a platform from scratch that could register students and help track their activities throughout the bootcamp. For Ex- The projects that they created in the hackathons conducted there.",
      "As a teaching assistant I was involved in organizing hackathons and helping students with programming related doubts.",
      "Worked towards building a community of software developers by initiating an open source culture like GSoC(Google Summer of Code) in the bootcamp.",
    ],
    tools: ["Git", "IntelliJ IDEA / PyCharm", "Apache Kafka", "Jenkins", "Chrome DevTools"],
    skills: ["NodeJS", "MongoDB", "ExpressJS", "Mongoose"],
  };

    return (
      <div style={styles.header}>
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
          <p style={{alignContent: "center", fontWeight: "600", fontSize: "1.1rem"}}>Software Development Intern</p>
        </div>
      </div>
    )
  }
  
  const styles = {
      header: {
        background: "white",
        marginTop: "-3px",
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
      // experience_bottom_section_image: {
      //   border: "1px solid",
      //   borderRadius:"10px",
      // }
    };

export default Experience2
