const CareerObj = () => {

    const objectivesText = `Desirous for the role of Software Developer at TUV Inc. to design complex requirements of clients and customers into hi-tech and reliable software. Excellent knowledge of software design and development especially data structures and product-oriented designs and 3 years of work experience as a software developer.`;

  return (
    <div style={styles.header}>
      <h2 className="text-3xl font-bold text-gray-600 m-1">Career Objectives</h2>
      <hr className="border-gray-500" />
      <p className="text-black-600 m-1">{objectivesText}</p>
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
    line: {
        border: "0.01px solid #A8A8A8",
    },
  };
  

export default CareerObj
