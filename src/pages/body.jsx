import ShareContent from "../components/shareContent";

function Body() {
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-between flex-wrap"
      >
        <div className="col-lg-6 col-10">
          <h1>ملخص الندوة</h1>
          <h5 className="my-3" style={{ color: "#51BFAD" }}>
            10,382 حاضرين
          </h5>
          <p style={{ fontSize: "20px" }}>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصيهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
            المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو
            شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
            لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
            استخدام "هنا يوجد محتوى نصي،
            <br />
            <br /> هنا يوجد محتوى نصي هناك حقيقة مثبتة منذ زمن طويل وهي أن
            المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
            للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام
            طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف
            عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
          </p>
        </div>
        <div
          className="col-lg-4 col-12"
          style={{
            backgroundColor: "#5260AB",
            borderRadius: "15px",
          }}
        >
          <div
            className="px-5 py-4 d-flex justify-content-between"
            style={{ backgroundColor: "#51BFAD", borderRadius: "15px" }}
          >
            <span
              style={{ fontSize: "25px", fontWeight: "bold" }}
              className="text-light"
            >
              نشر المحتوي
            </span>
            <span className="text-light">
              <i
                className="fa fa-lg fa-google-plus px-2 py-3"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-lg fa-linkedin px-2 py-2"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-lg fa-twitter px-2 py-2"
                aria-hidden="true"
              ></i>
              <i
                className="fa fa-lg fa-facebook px-2 py-2"
                aria-hidden="true"
              />
            </span>
          </div>
          <ShareContent description="يوجد ندواتين كل اسبوع " />
          <ShareContent description="جميع النداوت مجانية من صفا " />
          <ShareContent description="خطوات و نصائح في مجال الاقتصاد " />
        </div>
      </div>
    </>
  );
}

export default Body;
