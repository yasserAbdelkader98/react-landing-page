import firstInstructorPhoto from "../images/dr1.png";
import secInstructorPhoto from "../images/dr2.png";

function Instructors() {
  return (
    <>
      <div style={{ borderRadius: "10px" }} className="bg-light p-4 mt-4">
        <h5 style={{ backgroundColor: "lightblue", maxWidth: "140px" }}>
          تقديم المحاضرين
        </h5>
        <div className="d-flex">
          <img
            className="py-2"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            src={firstInstructorPhoto}
            alt="img"
          />
          <div className="px-3">
            <h5>الدكتور رجا المرزوقى</h5>
            <p>
              نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
              الامير سعود الفيصل للدراسات الدبلوماسية
            </p>
          </div>
        </div>
        <div className="d-flex">
          <img
            className="py-2"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            src={secInstructorPhoto}
            alt="img"
          />
          <div className="px-3">
            <h5>الدكتور رجا المرزوقى</h5>
            <p>
              نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
              الامير سعود الفيصل للدراسات الدبلوماسية
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructors;
