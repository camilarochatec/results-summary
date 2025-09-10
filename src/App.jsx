import ResultsPanel from "./ResultsPanel";
import SummaryCard from "./SummaryCard";
import SummaryPanel from "./SummaryPanel";

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 font-sans p-4">
      <SummaryCard>
        <ResultsPanel />
        <SummaryPanel />
      </SummaryCard>
    </main>
  );
}
 
export default App;