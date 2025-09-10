import SummaryItem from "./SummaryItem"; 
import reactionIcon from './assets/icon-reaction.svg'; 
import memoryIcon from './assets/icon-memory.svg';
import verbalIcon from './assets/icon-verbal.svg';
import visualIcon from './assets/icon-visual.svg';

const iconMap = {
  reaction: reactionIcon,
  memory: memoryIcon,
  verbal: verbalIcon,
  visual: visualIcon,
};

const SummaryPanel = () => {
    return (
        <div className="bg-white p-8 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-800">Sumário</h2>
            <div className="flex flex-col gap-4">
                {data.map((item) => (
                    <SummaryItem
                        key={item.category}
                        icon={iconMap[item.icon]} 
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