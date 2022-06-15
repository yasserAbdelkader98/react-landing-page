function ShareContent(props) {
  return (
    <>
      <div style={{ borderRadius: "15px" }} className="d-flex my-5 px-5">
        <i
          style={{ color: "#F69C5D" }}
          className="fa fa-4x fa-check-circle py-3"
          aria-hidden="true"
        />
        <div className="px-3">
          <h5 style={{ color: "#444" }}> نداوت </h5>
          <h3 className="text-light">{props.description}</h3>
        </div>
      </div>
    </>
  );
}

export default ShareContent;
