function NewsFeed({headline, stats}) {
  return (
    <>
      <div className="newsHeadline mb-3 rounded-lg p-2 cursor-pointer hover:bg-slate-100">
        <p className="font-semibold  text-slate-800 text-sm">
            {headline}
        </p>
        <p className="text-[12px] h-5 overflow-hidden text-slate-600">
            {stats}
          
        </p>
      </div>
    </>
  );
}

export default NewsFeed;
