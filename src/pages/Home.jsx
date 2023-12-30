const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 46,
    textAlign: "center",
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Enjoy Your App{" "}
        <span role="img" aria-label="Greeting icon">
          👤📱
        </span>
      </h1>
    </div>
  );
};

export default Home;
