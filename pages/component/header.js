export default function Header() {
  const styled = {
    float: "left",
    padding: "10px",
    width: "100%",
  };

  const brand = {
    fontSize: "30px",
    fontWeight: "600",
  };

  const quotes = {
    color: "#fff",
    fontSize: "12px",
    backgroundColor: "#333",
    padding: "0 10px",
  };

  return (
    <nav className="navbar navbar-default bg-light" role="navigation">
      <div style={styled} className="container">
        <a style={brand} href="#">
          Sirkary.
        </a>

        <div className="ml-0">
          <div style={quotes}>powered by</div>
          <div style={quotes}>irfanshamid</div>
        </div>
      </div>
    </nav>
  );
}
