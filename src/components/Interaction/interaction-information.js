function InteractionInformation(params) {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light position-sticky top-0 z-2">
        <div
          className="container-fluid px-1"
          style={{ paddingTop: ".17rem", paddingBottom: ".17rem" }}
        >
          <button className="btn btn-primary py-1 px-2 ms-1" id="sidebarToggle">
            <span className="fs-5 fw-semibold">
              <i className="fad fa-chevron-left"></i>
            </span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainMenuSupportedContent"
            aria-controls="mainMenuSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="mainMenuSupportedContent"
          >
            <ul className="navbar-nav w-100">
              <li className="nav-item active">
                <a className="nav-link d-flex align-items-center px-3" href="#" data-html="true" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                  <i className="fas fa-user text-purple pe-2"></i>
                  <span className="d-lg-block d-none small">John Doe</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center px-3" href="#">
                  <i className="fad fa-clock text-dark pe-2"></i>
                  <span className="small">00:00:55</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center px-3" href="#">
                  <i className="fas fa-comment-alt-times text-danger pe-2"></i>
                  <span className="d-lg-block d-none small">End Chat</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center px-3" href="#">
                  <i className="fas fa-comment-alt-slash text-warning pe-2"></i>
                  <span className="d-lg-block d-none small">Transfer Chat</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center px-3" href="#">
                  <i className="fas fa-comments-alt text-primary pe-2"></i>
                  <span className="d-lg-block d-none small">
                    Conference Chat
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center px-3" href="#">
                  <i className="fas fa-user-friends text-cyan pe-2"></i>
                  <span className="d-lg-block d-none small">Consultation</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default InteractionInformation;
