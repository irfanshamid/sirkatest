import PropTypes from "prop-types";

export default function StyledSkeleton({ total, height }) {
  const styled = {
    width: "100%",
    height: height ? height : "30px",
    background: "#2222",
    margin: "8px 0",
    position: "relative",
    borderRadius: "4px",
  };

  var puler = [];
  for (let i = 0; i < total; i++) {
    puler.push(<div key={i} className="animated-pulse" style={styled}></div>);
  }

  return puler;
}

StyledSkeleton.propTypes = {
  total: PropTypes.number,
  height: PropTypes.string,
};
