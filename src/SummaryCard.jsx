const SummaryCard = ({ children }) => {
    return (
      <div className="shadow-xl rounded-3xl max-w-sm md:max-w-3xl md:grid md:grid-cols-2 w-full overflow-hidden">
        {children}
      </div>
    );
}

export default SummaryCard;