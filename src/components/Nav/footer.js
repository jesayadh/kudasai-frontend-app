function Footer(params) {
  return (
    <>
      <footer className="w-100 text-center kudasai-alert bg-light-kudasai p-1 fixed-bottom">
        <div className="d-flex align-items-center justify-content-center">
          <a
            className="text-black text-decoration-none d-flex align-items-center pe-1"
            href="https://kudasa.ai"
          >
            <small className="pe-1">copyright &copy;</small>
            <b
              className="pe-1 small"
              style={{ letterSpacing: "-0.033rem", marginBottom: "0.1rem" }}
            >
              kudasa.ai
            </b>
            <img
              className="img-fluid pe-1"
              style={{ width: "1.15rem" }}
              src="assets/svg/kudasai.svg"
              alt="kudasa.ai"
            />
            <small className="pe-1" id="getThisYear"></small>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
