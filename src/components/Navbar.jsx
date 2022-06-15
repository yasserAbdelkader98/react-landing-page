/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/toplogo.png";
import "../styles/style.css";

function Navbar() {
  let navbarStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="d-flex justify-content-between py-4 flex-wrap">
        <div className="col-lg-6 col-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex justify-content-between col-lg-6 col-12">
          <button className="btn border-0 bg-transparent text-light">EN</button>
          <input
            className="bg-transparent w-50 border-0 text-light"
            type="search"
            placeholder="بحث..."
            aria-label="Search"
          />
          <span>
            <i
              style={{ color: "#51BFAD" }}
              className="fa fa-2x fa-calendar-check-o"
              aria-hidden="true"
            />
            <span className="text-light text-bold mx-3">الاجنده</span>
          </span>
          <i
            className="fa fa-3x fa-user-circle-o text-light"
            aria-hidden="true"
          />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse py-3"
          id="navbarSupportedContent"
          style={navbarStyle}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: "#51BFAD" }}>
                الرئيسيه <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                من نحن <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الخدمات <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الفعاليات <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الكورسات <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الندوات <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الورشات <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الاخبار <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                الابحاث <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                فريق العمل <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                العضويه <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                اتصل بنا <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
    
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
