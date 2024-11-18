
const ProfileHighlights = () => {
    
    const highlights = {
        title: "Profile Highlights",
        skills: ["machine learning", "SQL", "JavaScript", "Python", "full software development lifecycles", "optimized software solutions"],
        achievements: [
          "Expertly optimized and restructured existing software for enhanced performance and usability.",
          "Demonstrated ability to collaborate across teams, contributing to both development and documentation for knowledge sharing.",
          "Proficient in developing models and frameworks, aligning with industry best practices in software engineering and game programming.",
        ],
        education: "Noida Institute of Engineering & Technology, BTech with Specialization in Data Science, 2026.",
      };

    return (
      <div style={styles.header}>
        <h2 className="text-3xl font-bold text-gray-600 m-1">{highlights.title}</h2>
        <hr className="border-gray-500" />
        <p className="text-black-600 m-1">Dynamic software engineer with over 2 years of experience in creating efficient, optimized software solutions for businesses in Montreal. Skilled in full software development lifecycles, with hands-on expertise in <span style={{fontWeight: "700"}}>machine learning, SQL, JavaScript, and Python</span>. Known for driving a 22% increase in company conversions through responsive design and efficiency-driven coding, I excel in process improvement and delivering tailored solutions for client needs.</p>
        <div style={styles.skills}>
            <span style={styles.note}>NOTE:</span> {highlights.skills.map((skill, index) => (
                <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>
        <h3 style={styles.note}>Key Achievements:</h3>
        <ul className="text-black-600 m-1" style={styles.disc}>
            {highlights.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
            ))}
        </ul>
        <h3 style={styles.note}>Education:</h3>
        <p className="text-black-600 m-1">{highlights.education}</p>
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
          padding: "2px",
          fontWeight: "700",
      },
      line: {
          border: "0.01px solid #A8A8A8",
      },
      disc: {
        listStyleType: "disc",
        paddingLeft: "20px",
      },
      description: {
          fontSize: "1.1rem",
          padding: "2px",
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
      achievements: {
        marginLeft: "25px",
      },
    }
export default ProfileHighlights
