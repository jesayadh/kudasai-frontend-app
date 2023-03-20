function Note() {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="notes-tab"
            data-bs-toggle="tab"
            data-bs-target="#Notes"
            type="button"
            role="tab"
            aria-controls="Notes"
            aria-selected="true"
          >
            Notes
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="notes"
          role="tabpanel"
          aria-labelledby="notes-tab"
        >
          <div className="form-floating position-relative">
            <textarea
              className="form-control p-2 border-top-0"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{
                resize: "none",
                height: "calc(100% - 2rem)",
                borderTopLeftRadius: "0!important",
                borderTopRightRadius: "0!important",
              }}
            ></textarea>
            <label htmlFor="floatingTextarea2" className="small"></label>
            <button className="btn btn-primary position-absolute bottom-0 end-0 m-2 z-2 px-1 py-0 small">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
