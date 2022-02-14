import Footer from "./footer";
import Header from "./header";
export default function Layout({ children }) {
  const styles = {
    justifyContent: "center",
    minHeight: "500px",
    padding: "10px 0",
  };

  return (
    <>
      <Header />
      <main style={styles}>
        <section className="container">{children}</section>
      </main>
      <Footer />
    </>
  );
}
