import Instructors from "./instructors";
import headerPhoto from "../images/header2.png";

function HeaderContent() {
  return (
    <>
      <div className="py-4 d-flex justify-content-between flex-wrap">
        <div className="col-lg-5 col-12">
          <div className=" d-flex justify-content-between mx-2">
            <div className="w-50">
              <button
                style={{ textDecoration: "underline" }}
                className="btn bg-transparent text-light"
              >
                الرئيسيه
              </button>
              <i className="fa fa-angle-left text-light" aria-hidden="true"></i>
              <button
                style={{ color: "#51BFAD" }}
                className="btn bg-transparent"
              >
                الندوات
              </button>
            </div>
            <div className="w-50 mx-2 d-flex justify-content-around">
              <span>
                <i
                  className="fa fa-2x fa-heart text-light"
                  aria-hidden="true"
                />
              </span>
              <span className="text-light">
                اضف الي <br />
                المفضله
              </span>
            </div>
          </div>
          <div className="m-2">
            <i
              style={{ color: "#51BFAD" }}
              className="fa fa-2x fa-calendar-check-o"
              aria-hidden="true"
            />
            <span className="text-light text-bold mx-4">
              يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً
            </span>
          </div>
          <h1 className="text-light ml-2">
            ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة بمناقشة
            الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
          </h1>
          <button
            className="btn text-light my-3"
            style={{
              width: "200px",
              height: "60px",
              backgroundColor: "#51BFAD",
              fontWeight: "bold",
            }}
          >
            حجز الان
          </button>
          <Instructors />
        </div>
        <div className="col-lg-6 col-12">
          <img
            style={{ borderRadius: "10px" }}
            className="w-100 h-75 mt-5"
            src={headerPhoto}
            alt="header"
          />
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
