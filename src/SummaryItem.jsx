//este será o componente mais reutilizável, que receberá props para renderizar diferentes itens de resumo com base nos dados fornecidos.
const SummaryItem = ({ icon, category, score, color }) => {
    const colorClasses = {
        red: 'bg-red-100/50 text-red-500',
        yelllo: 'bg-yellow-100/50 text-yellow-500',
        green: 'bg-green-100/50 text-green-500',
        blue: 'bg-blue-100/50 text-blue-500',
    };

    return (
        <div className={`flex items-center justify-between p-4 rounded-lg ${colorClasses[color]}`}>
            <div className="flex items-center gap-3">
                <img src={icon} alt={`${category} icon`} />
                <span className="font-bold">{category}</span>
            </div>
            <p className="text-gray-500 font-bold">
                <span className="text-gray-800">{score} </span>
                / 100
            </p>
        </div>
    );
}

export default SummaryItem;