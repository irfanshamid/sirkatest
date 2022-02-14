import PropTypes from "prop-types";
/* eslint no-use-before-define: 0 */ // --> OFF

export default function StyledCard({ children, bgcolor }) {
  const core = {
    backgroundColor: bgcolor ? bgcolor : "#FFF",
    border: "none",
    borderRadius: "10px",
    padding: "30px",
    margin: "20px 0",
  };

  return (
    <div className="card" style={core}>
      {children}
    </div>
  );
}

StyledCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  bgcolor: PropTypes.string,
};
