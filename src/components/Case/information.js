function Information({ data }) {
  return (
    <>
      <div className="accordion z-0 p-2" id="caseInformation">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button bg-lightblue fw-bold p-2 z-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseInfo"
              aria-expanded="true"
              aria-controls="collapseInfo"
            >
              Case Information
            </button>
          </h2>
          <div
            id="collapseInfo"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#caseInformation"
          >
            <div className="accordion-body p-0">
              <table className="table table-hover table-responsive mb-0">
                <tbody className="table-content">
                  <tr>
                    <th scope="row">Origin</th>
                    <td>Inbound Chat</td>
                  </tr>
                  <tr>
                    <th scope="row">ID</th>
                    <td>12345</td>
                  </tr>
                  <tr>
                    <th scope="row">Sub-Channel</th>
                    <td colSpan="2">Web-App</td>
                  </tr>
                  <tr>
                    <th scope="row">Received Date</th>
                    <td colSpan="2">01 Nov 2023 12:00:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
