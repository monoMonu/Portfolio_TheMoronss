const Education = () => {
    
    const education = {
        institute: 'Noida Institute of Engineering & Technology',
        degree: 'BTech in Computer Science and Engineering',
        specialization: 'Specialization: Data Science',
        location: 'Greater Noida',
        cgpa: "7.5",
        duration: 'Nov 2022 - Aug 2026',
        points: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
          'Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.'
        ],
        skills: ['NodeJS', 'MongoDB', 'ExpressJS', 'Mongoose', 'HTML', 'CSS', 'JavaScript'],
    }

    return (
        <>
      <div style={styles.header}>
        <h2 className="text-3xl font-bold text-gray-600 m-1 mb-3">Education</h2>
        <h3 className="text-2xl font-bold text-black-600 m-1 mb-1">{education.institute}</h3>
        <h4 style={{marginLeft: "5px",color: "gray", fontWeight: "600"}}>{education.degree}</h4>
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5px",marginLeft: "5px",marginRight: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{education.specialization}</h4>
          <h4>{education.location}</h4>
        </div>
        <div style={{display: "flex",justifyContent: "space-between",marginLeft: "5px",marginRight: "5px",marginTop: "1px",marginBottom: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{education.cgpa}</h4>
          <h4>{education.duration}</h4>
        </div>
        <hr className="border-gray-500 mb-1" />
        <ul className="text-black-600" style={styles.disc}>
          {education.points.map((responsibility, index) => (
           <li key={index}>{responsibility}</li>
          ))}
        </ul>

        <div style={styles.skills}>
          <span style={styles.note}>Skills:</span>{education.skills.map((skill, index) => (
              <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>

        <div style={styles.experience_bottom_section}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
        </div>
      </div>

      <div style={styles.header}>
        <h3 className="text-2xl font-bold text-black-600 m-1 mb-1">JIS College of Engineering & Technology</h3>
        <h4 style={{marginLeft: "5px",color: "gray", fontWeight: "600"}}>{education.degree}</h4>
        <div style={{display: "flex",justifyContent: "space-between",marginTop: "5px",marginLeft: "5px",marginRight: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{education.specialization}</h4>
          <h4>{education.location}</h4>
        </div>
        <div style={{display: "flex",justifyContent: "space-between",marginLeft: "5px",marginRight: "5px",marginTop: "1px",marginBottom: "5px",color: "gray", fontWeight: "600"}}>
          <h4>{education.cgpa}</h4>
          <h4>{education.duration}</h4>
        </div>
        <hr className="border-gray-500 mb-1" />
        <ul className="text-black-600" style={styles.disc}>
          {education.points.map((responsibility, index) => (
           <li key={index}>{responsibility}</li>
          ))}
        </ul>

        <div style={styles.skills}>
          <span style={styles.note}>Skills:</span>{education.skills.map((skill, index) => (
              <span key={index} style={styles.skill}>{skill}</span>
            ))}
        </div>

        <div style={styles.experience_bottom_section}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRec0cS6Ih_9mLikhqLpkJIBwHcxSN68UyWlw&s" alt="" width="120px" height="80px"/>
          
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

export default Education
