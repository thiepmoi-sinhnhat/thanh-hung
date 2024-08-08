import "./App.scss";
import sinhnhat_vertical from "/sinh-nhat-vertical.png";
import sinhnhat from "/sinhnhat.jpg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
        padding: "16px",
      }}
    >
      <img src={sinhnhat} alt="sinhnhat-image" className="sinhnhat-image" />
      <img
        src={sinhnhat_vertical}
        alt="sinhnhat-image"
        className="sinhnhat-image-vertical"
      />
    </div>
  );
}

export default App;
