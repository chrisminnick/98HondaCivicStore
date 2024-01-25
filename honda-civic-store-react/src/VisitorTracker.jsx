function VisitorNumber(props) {
  return (
    <button
      style={{ color: 'purple', width: '50%' }}
      onClick={props.incrementVisitor}
    >
      {props.visitorNumber}
    </button>
  );
}

export default VisitorNumber;
