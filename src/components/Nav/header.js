import React, { useContext } from 'react'

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-kudasai kudasai-alert bg-light-kudasai p-0 d-flex justify-content-between row row-cols-3"
        id="MainNavigationBar"
      >
        <div className="pt-2 col" style={{ left: "0", top: "0" }}>
          <button
            className="navbar-toggler collapsed pt-2 px-3 border-0 "
            id="loginIcon"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#kudasaiLogin"
          >
            <i className="fad fa-sign-in h3 m-0 text-primary"></i>
          </button>

          <button
            className="navbar-toggler collapsed pt-2 px-2 border-0 "
            id="InfoIcon"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#kudasaiInfo"
          >
            <i className="fad fa-question h3 m-0 text-danger"></i>
          </button>
          <button>logout</button>
        </div>

        <a
          className="navbar-brand p-0 m-0 d-flex align-items-center justify-content-center col"
          href="#"
        >
          <img
            className="img-fluid"
            style={{ width: "2.5rem" }}
            src="assets/svg/kudasai.svg"
            id="kudasaiIcon"
            alt="kudasa.ai"
          />
          <span className="fw-bold ps-2">My Workspace</span>
        </a>

        <div className="pt-2 col">
          <button
            className="navbar-toggler collapsed pt-2 px-3 border-0 float-end"
            id="BarsIcon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarBars"
            aria-controls="navbarBars"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fad fa-bars h3 m-0 text-kudasai"></i>
          </button>
          <a
            className="text-decoration-none pt-2 px-2 border-0 float-end"
            href="https://wa.me/628111334856"
            target="_blank"
          >
            <i className="fab fa-whatsapp h3 text-success"></i>
          </a>
        </div>

        <div
          className="nav-scroller border-top border-kudasai navbar-collapse collapse show"
          id="navbarBars"
        >
          <nav className="navigation bg-light-kudasai pt-2 d-flex align-items-center justify-content-md-center px-lg-0 px-2">
            <div className="nav-item px-1">
              <button className="btn px-2 py-0 rounded" id="OmnichannelButton">
                My Channel
              </button>
            </div>

            <div className="nav-item px-1">
              <button className="btn px-2 py-0 rounded">My Interaction</button>
            </div>

            <div className="nav-item px-1">
              <button className="btn px-2 py-0 rounded">
                My Interaction History
              </button>
            </div>

            <div className="nav-item px-1">
              <button className="btn px-2 py-0 rounded">
                Interaction Search
              </button>
            </div>

            <div className="nav-item px-1">
              <button className="btn px-2 py-0 rounded">
                Customer Contact
              </button>
            </div>
          </nav>
        </div>

        <div className="nav-item px-1 dropdown megamenu">
          <button
            className="d-none btn px-2 py-0 rounded dropdown"
            type="button"
            id="OmnichannelDropdown"
            data-bs-auto-close="outside"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Omnichannel
          </button>
          <div
            className="dropdown-menu megamenucontent mainworkshopmenu row shadow-md p-0"
            id="OmnichannelContent"
            aria-labelledby="OmnichannelDropdown"
          >
            <div className="table-responsive p-0">
              <table className="table table-hover table-striped mb-0 border-top p-0 text-center">
                <thead>
                  <tr>
                    <th scope="col">Media</th>
                    <th scope="col">Status</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Forward</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-phone-alt"></i>
                      <span>Voice, Instant Messaging</span>
                    </td>
                    <td>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Ready</span>
                    </td>
                    <td>(00:02:39)</td>
                    <td>No Active Forward</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-comment-alt"></i>
                      <span>Chat</span>
                    </td>
                    <td>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Ready</span>
                    </td>
                    <td>(00:02:40)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <i className="far fa-envelope"></i>
                      <span>Chat</span>
                    </td>
                    <td>
                      <i className="fas fa-check-circle text-success"></i>
                      <span>Ready</span>
                    </td>
                    <td>(00:02:40)</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="kudasaiInfo"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="kudasaiInfo"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-center position-relative">
              <h2 className="modal-title fw-bold">F.A.Q. / About</h2>
              <button
                type="button"
                className="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="h1 m-0" aria-hidden="true">
                  <i className="fal fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <h6 className="m-0 p-2">
                Omnichannel is a neologism portmanteau describing a business
                strategy. According to Frost & Sullivan, omnichannel is defined
                as "seamless and effortless, high-quality customer experiences
                that occur within and between contact channels".
              </h6>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center">
              <small>
                original design by{" "}
                <a
                  className="text-decoration-none"
                  href="https://waheedos.com"
                  target="_blank"
                >
                  Waheedos
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="kudasaiLogin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="kudasaiLogin"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-center position-relative">
              <h2 className="modal-title fw-bold">Login</h2>
              <button
                type="button"
                className="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="h1 m-0" aria-hidden="true">
                  <i className="fal fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text small">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label small ps-1 pt-1"
                    htmlFor="exampleCheck1"
                  >
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-center">
              <small>
                <a
                  className="text-decoration-none"
                  href="https://waheedos.com"
                  target="_blank"
                >
                  forgot password
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
