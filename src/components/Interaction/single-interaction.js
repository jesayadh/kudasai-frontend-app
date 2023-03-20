import { useContext } from "react";
import Information from "../Case/information";
import Chat from "../Chat/chat";
import InteractionInformation from "./interaction-information";
import Note from "./note";
import Ticket from "./ticket";
import { ChatContext } from "../../context/ChatContext";
import Split from "react-split";

function SingleInteraction() {
  const { data } = useContext(ChatContext);
  if (data.chatId != "null") {
    return (
      <>
        <div id="page-content-wrapper">
          <InteractionInformation></InteractionInformation>
          <Split sizes={[60, 40]} className="split" style={{ height: "70vh" }}>
            <div id="left" style={{minWidth:"20vw"}}>
              <div className="split d-flex flex-column">
                <Information></Information>
                <Split sizes={[60, 40]} direction="vertical">
                  <div
                    id="top"
                    className="w-100 bg-light"
                    style={{ maxHeight: "40vh" }}
                  >
                    <Chat data={data} />
                  </div>
                  <div
                    id="bottom"
                    className="w-100 z-3 p-3 bg-white"
                    style={{ maxHeight: "30vh" }}
                  >
                    <Note></Note>
                  </div>
                </Split>
              </div>
            </div>
            <div id="right" className="bg-light p-2" style={{minWidth:"30vw"}}>
              <Ticket></Ticket>
            </div>
          </Split>
        </div>
      </>
    );
  }
}

export default SingleInteraction;
