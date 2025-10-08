const MarqueeText = () => {
  const text = "VAITO.AI";
  const repeatedText = Array(20).fill(text).join(" • ");

  return (
    <div className="relative overflow-hidden bg-primary/10 py-6 border-y border-primary/20">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-4xl md:text-5xl font-bold text-primary mx-4">
          {repeatedText}
        </span>
        <span className="text-4xl md:text-5xl font-bold text-primary mx-4" aria-hidden="true">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
