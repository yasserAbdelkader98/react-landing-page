import boy from "../images/boy.png";
import "../styles/style.css";

function Ask() {
  return (
    <>
      <div style={{ marginTop: "100px" }} className=" d-flex flex-wrap">
        <div
          style={{
            background: "#5260AB",
            height: "500px",
            borderTopLeftRadius: "30%",
            borderBottomLeftRadius: "30%",
          }}
          className=" mt-5 col-lg-6 col-12"
        >
          <div
            className="askSectionBubbles w-100 "
            style={{
              height: "500px",
            }}
          >
            <img
              style={{
                height: "700px",
                position: "relative",
                top: "-200px",
              }}
              src={boy}
              alt="client"
            />
          </div>
        </div>
        <div className="col-lg-6 pt-5 px-4 col-12 mt-5">
          <div className="d-flex ">
            <span>
              <i
                style={{ color: "#51BFAD" }}
                className="fa fa-5x fa-question"
                aria-hidden="true"
              />
            </span>
            <div className="px-3 py-4">
              <h3>ارسل سؤالك للمحاضر</h3>
              <h5 style={{ color: "#5260AB" }}>
                يجب عليك التسجيل و حضور الندوة
              </h5>
            </div>
          </div>
          <fieldset>
            <legend>السؤال</legend>
            <input style={{ width: "90%", height: "100px" }} type="text" />
          </fieldset>

          <h6 className="my-3" style={{ color: "#F69C5D" }}>
            لابد من حجز الندوة اولا حتي تتمكن من ترك سؤالك
          </h6>
          <button
            style={{
              backgroundColor: "#5260AB",
              color: "white",
              fontSize: "25px",
              width: "170px",
              height: "50px",
            }}
            className="btn my-3"
            disabled
          >
            ارسل
          </button>
        </div>
      </div>
    </>
  );
}

export default Ask;
