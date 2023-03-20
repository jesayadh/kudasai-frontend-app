function BubbleMessageReceived({ text }) {
  return (
    <>
      <div className="message received">
        {text}
        <span className="metadata">
          <span className="time"></span>
        </span>
      </div>
    </>
  );
}

export default BubbleMessageReceived;
