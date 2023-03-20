// import Chats from "../Chat/chats";
// import SingleInteraction from "./single-interaction";

import Chats from "../Chat/chats";

function Interaction() {
  return (
    <>
      <main className="d-flex align-items-center justify-content-center">
        <section className="container-fluid chat-main d-flex align-items-center justify-content-center flex-column pb-lg-4 mb-lg-1 z-0">
          <div
            className="w-100 d-flex border-bottom border-start border-end rounded-bottom shadow mb-lg-3"
            id="wrapper"
          >
            <div className="border-end bg-white z-1" id="sidebar-wrapper">
              <div className="sidebar-content d-flex flex-column align-items-stretch flex-shrink-0 bg-white wrapper">
                <a
                  href="#"
                  className="d-flex align-items-center flex-shrink-0 px-3 py-2 link-dark text-decoration-none bg-white border-bottom top-0 z-1 top"
                >
                  <span className="fs-5 fw-semibold">Interaction</span>
                </a>
                <Chats></Chats>
                <div className="bottom"></div>
              </div>
            </div>
            {/* <SingleInteraction></SingleInteraction> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Interaction;
