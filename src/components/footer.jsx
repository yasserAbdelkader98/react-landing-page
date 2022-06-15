import logo from "../images/blueLogo.png";

function Footer() {
  return (
    <>
      <div className="pt-5 d-flex flex-wrap">
        <div
          style={{ color: "#303A6C", fontSize: "20px" }}
          className="col-lg-3 col-6"
        >
          <img src={logo} alt="logo" />
          <br />
          <p className="pt-5">Safa@gmail.com</p> <br />
          <p>699-4478 757+ </p>
        </div>
        <div style={{ color: "#303A6C" }} className="col-lg-3 col-6">
          <h2 className="py-4">الروابط</h2>
          <div style={{ fontSize: "20px" }} className="d-flex ">
            <div className="w-50 cursor-pointer">
              <p>الرئيسية</p>
              <p>من نحن</p>
              <p>الخدمات</p>
              <p>الفعاليات</p>
              <p>الكورسات</p>
              <p>الندوات</p>
            </div>
            <div className="w-50 cursor-pointer">
              <p>الورشات</p>
              <p>الاخبار</p>
              <p>الابحاث</p>
              <p>فريق العمل</p>
              <p>العضوية</p>
              <p>اتصل بنا</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h2 style={{ color: "#303A6C" }} className="py-4">
            تابعنا{" "}
          </h2>
          <span style={{ color: "#ccc" }}>
            <i
              className="fa fa-lg fa-google-plus px-2 py-3"
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-lg fa-linkedin px-2 py-2"
              aria-hidden="true"
            ></i>
            <i className="fa fa-lg fa-twitter px-2 py-2" aria-hidden="true"></i>
            <i className="fa fa-lg fa-facebook px-2 py-2" aria-hidden="true" />
          </span>
          <h2 className="py-4" style={{ color: "#303A6C" }}>
            لمتابعة الاخبار{" "}
          </h2>
          <div className="d-flex">
            <input
              style={{ border: "2px solid #ccc", height: "60px" }}
              className="w-75"
              type="text"
            />
            <button
              style={{ backgroundColor: "#5260AB", fontSize: "20px" }}
              className="btn text-light w-25"
            >
              اشترك
            </button>
          </div>
        </div>
      </div>
      <p
        style={{ color: "#5260AB", fontSize: "20px" }}
        className="text-center my-3"
      >
        الحقوق محفوظة لصفا
      </p>
    </>
  );
}

export default Footer;
