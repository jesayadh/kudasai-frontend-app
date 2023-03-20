function ContactCard({ chat, onClick }) {
  return (
    <>
      <div
        href="#"
        className="list-group-item list-group-item-action active py-3 lh-tight bg-primary"
        aria-current="true"
        key={"asdasd"}
        onClick={onClick}
      >
        <div className="d-flex px-3">
          <i className="fab fa-whatsapp fa-1-5x text-white"></i>{" "}
          <span className="ps-2">asdasd</span>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
