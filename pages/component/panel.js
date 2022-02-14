import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
/* eslint no-use-before-define: 0 */ // --> OFF

export default function StyledPanel({ summary, desc }) {
  const _icon = {
    border: "3px solid #555",
    color: "#555",
    filter: "saturate(500%)",
    width: "46px",
    height: "46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  const _summary = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const _desc = {
    fontSize: "13px",
    color: "#999",
  };

  return (
    <div className="row mt-3">
      <div className="col-4">
        <div style={_icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="col-8">
        <div style={_summary}>{summary}</div>
        <div style={_desc}>{desc}</div>
      </div>
    </div>
  );
}

StyledPanel.propTypes = {
  summary: PropTypes.number,
  icon: PropTypes.string,
};
