import Header from "./pages/Header";
import Body from "./pages/body";
import Ask from "./components/Ask";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.css.map";
import "font-awesome/css/font-awesome.min.css";
import "./styles/style.css";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#5260AB" }}>
        <div className="topRightBalls big-background small-background">
          <div className=" px-5 leftDownBalls big-background small-background">
            <Header />
          </div>
        </div>
      </div>
      <div className="px-5">
        <Body />
      </div>
      <Ask />
      <div className="px-5">
        <Footer />
      </div>
    </>
  );
}

export default App;
