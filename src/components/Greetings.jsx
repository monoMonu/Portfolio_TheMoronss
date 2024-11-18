import { color } from "chart.js/helpers"


const Greetings = () => {
  return (
    <div style={styles.greetings}>
      <h3 style={styles.greetings_hello}>Hello :&#41;</h3>
      <p style={styles.greetings_description}>&quot;Innovating Youth careers with AI-Driven SaaS to Showcase Skills & fast-tract Hiring&quot;</p>
    </div>
  )
}

const styles ={
    greetings: {
        padding: "8px"
    },
    greetings_hello: {
        color: "black",
        fontSize: "1.1rem",
        fontWeight: "600"
    },
    greetings_description: {
        paddingTop: "20px",
        color: "black",
        fontSize: "1.2rem",
        fontWeight: "700"
    }
}


export default Greetings
