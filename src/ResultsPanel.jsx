const ResultsPanel = () => {
  return (
    <div className="bg-gradient-to-b from-slate-700 to-blue-700 text-white flex flex-col items-center p-8 gap-4 text-center">
      <h2 className="text-xl text-slate-300">Seu Resultado</h2>
      <div className="w-40 h-40 rounded-full bg-gradient-to-b from-blue-700 to-transparent flex flex-col items-center justify-center">
        <span className="text-6xl font-bold">76</span>
        <span className="text-slate-400">de 100</span>
      </div>
      <h3 className="text-2xl mt-4">Great</h3>
      <p className="text-slate-300">
        Sua pontuação foi maior que a de 65% das pessoas que fizeram estes testes.
      </p>
    </div>
  );

}

export default ResultsPanel;