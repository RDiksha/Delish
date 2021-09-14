import React from "react";
import EntryLogo from "./assets/res2.jpeg";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function EntryPage(props) {
  const { setShowBg } = props;
  const history = useHistory();
  const handleClick = () => {
    setShowBg(false);
    history.push("/Homepage");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${EntryLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
        textAlign: "center",
        color: "darkred",
        fontFamily: "cursive",
      }}
    >
      <div style={{ position: "absolute", top: "25%", left: "35%" }}>
        <h1>Delish</h1>
        <h3>...Relish your taste buds</h3>
        <Container>
          <Button variant="outline-success" size="lg" onClick={handleClick}>
            Take a tour
          </Button>
          {"  "}
          <Button variant="outline-success" size="lg">
            Login
          </Button>
        </Container>
      </div>
    </div>
  );
}
export default EntryPage;
