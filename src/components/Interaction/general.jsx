const General = () => {
  return (
    <>
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
          <label htmlFor="firstName" className="form-label small mb-1">
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
    </>
  );
};

export default General;
