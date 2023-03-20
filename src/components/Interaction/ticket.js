import { WindowPlus, WindowStack } from "react-bootstrap-icons";

function Ticket() {
  var childWindow;
  var timer;
  
  const openWindow = () => {
    childWindow = window.open(
      "http://localhost:3000/frame",
      "childWindow",
      "width=500,height=500"
    );
    timer = setInterval(checkChild, 500);
    // alert("Child window opened");
  };
  
  const checkChild = () => {
    if (childWindow.closed) {
        alert("Child window closed");
        clearInterval(timer);
    }
  }

  return (
    <>
      <nav className="w-100 d-flex justify-content-end border-bottom mb-2">
        <div
          className="nav nav-tabs border-bottom-0"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link py-0 border-top border-start border-end mainwindowtab"
            id="nav-1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-1"
            type="button"
            role="tab"
            aria-controls="nav-1"
            aria-selected="false"
            disabled
          >
            Ticket
          </button>
          <button
            className="nav-link py-0 border-top border-start border-end mainwindowtab"
            id="nav-2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-2"
            type="button"
            role="tab"
            aria-controls="nav-2"
            aria-selected="false"
            disabled
          >
            Knowledge
          </button>
          <button
            className="nav-link py-0 border-top border-start border-end mainwindowtab active"
            id="nav-3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-3"
            type="button"
            role="tab"
            aria-controls="nav-3"
            aria-selected="true"
          >
            Contact
          </button>
          <button
            className="nav-link py-0 border-top border-start border-end mainwindowtab"
            id="nav-4-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-4"
            type="button"
            role="tab"
            aria-controls="nav-4"
            aria-selected="false"
          >
            Responses
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade"
          id="nav-1"
          role="tabpanel"
          aria-labelledby="nav-1-tab"
          tabIndex="0"
        >
          Ticket
        </div>
        <div
          className="tab-pane fade"
          id="nav-2"
          role="tabpanel"
          aria-labelledby="nav-2-tab"
          tabIndex="0"
        >
          Knowledge
        </div>
        <div
          className="tab-pane fade show active"
          id="nav-3"
          role="tabpanel"
          aria-labelledby="nav-3-tab"
          tabIndex="0"
        >
          <div className="rightsidebar wrapper">
            <ul
              className="nav nav-pills top mb-2"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item pe-2" role="presentation">
                <button
                  className="nav-link rightsidebartab active"
                  id="pills-info-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-info"
                  type="button"
                  role="tab"
                  aria-controls="pills-info"
                  aria-selected="true"
                >
                  Information
                </button>
              </li>
              <li className="nav-item pe-2" role="presentation">
                <button
                  className="nav-link rightsidebartab"
                  id="pills-history-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-history"
                  type="button"
                  role="tab"
                  aria-controls="pills-history"
                  aria-selected="false"
                >
                  History
                </button>
              </li>
            </ul>
            <div
              className="tab-content bg-white rounded shadow-md middle"
              id="pills-tabContent"
            >
              <button
                onClick={openWindow}
                className="btn btn-light float-end"
              >
                <WindowPlus />
              </button>
              <div
                className="tab-pane fade show active"
                id="pills-info"
                role="tabpanel"
                aria-labelledby="pills-info-tab"
                tabIndex="0"
              >
                <div className="p-3">
                  <div className="mb-3">
                    <button className="btn btn-primary">
                      <i className="fad fa-save"></i>
                    </button>
                    <button className="btn btn-secondary">
                      <i className="fad fa-sync-alt"></i>
                    </button>
                  </div>
                  <div className="mb-0">
                    <label className="form-label fw-bold">General</label>
                  </div>
                  <div className="mb-3 mx-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label small mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label htmlFor="title" className="form-label small mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Mr. / Mrs. / Ms."
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label
                      htmlFor="firstName"
                      className="form-label small mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      defaultValue="John"
                    />
                  </div>
                  <div className="mb-3 mx-3">
                    <label htmlFor="lastName" className="form-label small mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      defaultValue="Doe"
                    />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-history"
                role="tabpanel"
                aria-labelledby="pills-history-tab"
                tabIndex="0"
              >
                History Content
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-4"
          role="tabpanel"
          aria-labelledby="nav-4-tab"
          tabIndex="0"
        >
          Responses
        </div>
      </div>
    </>
  );
}

export default Ticket;
