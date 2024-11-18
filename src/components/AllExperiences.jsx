
import PropTypes from 'prop-types';

const AllExperiences = ({ description, color }) => {
  return (
    <div style={styles.btn}>
      <button
        style={{
          background: color,
          fontSize: "1.1rem",
          fontWeight: "600",
          padding: "10px",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.6)",
        }}
      >
        {description} <span>&gt;</span>
      </button>
    </div>
  );
};

const styles = {
  btn: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

AllExperiences.propTypes = {
  description: PropTypes.string.isRequired, // description is required and should be a string
  color: PropTypes.string.isRequired, // color is required and should be a string
};

export default AllExperiences;
