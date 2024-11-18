import { BadgeCheck, BrainCircuit, CircleChevronDown, CloudUpload, CodeXml, LayoutGrid, SquareChartGantt, SquareFunction  } from "lucide-react";

const CoreSkills = () => {

    const skills = [
        {
          icon: <SquareChartGantt size="40" />, // Replace with your actual icon class
          title: 'Programming',
          experience: '4+ years XP',
          dropdown: false, // Initially set to false
        },
        {
          icon: <SquareFunction size="40" />, // Replace with your actual icon class
          title: 'Frontend',
          experience: '4+ years XP',
          dropdown: false,
        },
        {
            icon: <BrainCircuit  size="40" />, // Replace with your actual icon class
            title: 'AI & Data Science',
            experience: '4+ years XP',
            dropdown: false,
        },
        {
            icon: <CloudUpload  size="40" />, // Replace with your actual icon class
            title: 'Computing',
            experience: '4+ years XP',
            dropdown: false,
        },
        {
            icon: <CodeXml  size="40" />, // Replace with your actual icon class
            title: 'Backend',
            experience: '4+ years XP',
            dropdown: false,
        },
        {
            icon: <LayoutGrid   size="40" />, // Replace with your actual icon class
            title: 'Misc',
            experience: '4+ years XP',
            dropdown: false,
        },
        
      ];

  return (
    <div style={styles.header}>
        <div style={styles.header_sections}>
            <h2 className="text-3xl font-bold text-gray-600 m-1 mb-3">Core Skills</h2>
            <BadgeCheck className='text-[#22f] size-7 inline-block ml-2 mt-2' />
        </div>
        <hr className="border-gray-500 mb-3" />
        <div style={styles.skills_grid} >
        {skills.map((skill, index) => (
          <div key={index} style={styles.skill_card} >
            <div style={styles.skill_icon} >{skill.icon}</div>
            <div style={styles.skill_info}>
              <h3 style={styles.skill_info_title}>{skill.title}</h3>
              <p style={{fontSize: "0.8rem"}}>{skill.experience}</p>
            </div>
            <div style={styles.skill_icon_dropdown}><CircleChevronDown size="32"/> </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
    header: {
      background: "black",
      padding: "10px 10px",
      border: "1px solid #A8A8A8",
      borderRadius: "10px"
    },
    header_sections: {
        display: "flex",
    },
    skills_grid: {
        display: "grid",
        marginBottom: "10px",
        gridTemplateColumns: "repeat(2, 1fr)", /* Adjust for desired number of columns */
        gap: "20px",
      },
    skill_card: {
        padding: "10px",
        border: "0.4px solid gray",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
      },
    skill_icon: {
        flex: "0 0 55px", /* Adjust icon size as needed */
        // marginRight: "10px",
        color: "white",
      },
    skill_icon_dropdown: {
        color: "white",
        cursor: "pointer"
    },
    skill_info: {
        flex: "1",
        color: "white",
      },
      skill_info_title: {
        fontSize: "1.5rem",
        fontWeight: "800"
      },
    dropdown_arrow: {
        /* Your dropdown arrow styles here */
        flex: "0 0 20px",
        cursor: "pointer",
      }
}

export default CoreSkills
