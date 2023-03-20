function LoadingChat({ note }) {
  return (
    <>
      <div className="message system">
        <i className="font-italic text-secondary disabled">
          {note ? note : "Retrieving Messages... Please Wait."}
        </i>
      </div>
    </>
  );
}

export default LoadingChat;
