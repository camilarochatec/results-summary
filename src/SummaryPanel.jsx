import SummaryItem from "./Summary.Item";
import data from "./data.json";

const SummaryPanel = () => {
    return (
        <div className=" bg-white p-8 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-800">Sumário</h2>
            <div className="flex flex-col gap-4">
                {data.map((item) => (
                    <SummaryItem
                        key={item.category}
                        icon={item.icon}
                        category={item.category}
                        score={item.score}
                        color={item.color}
                    />
                ))}
            </div>

            <button className="mt-4 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-full transition-colors">
                Continue
            </button>

        </div>
    );
}
export default SummaryPanel;