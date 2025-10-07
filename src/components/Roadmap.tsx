const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2025",
      title: "Foundation",
      status: "completed",
      items: [
        "Token launch and initial DEX listing",
        "Website and community portal launch",
        "Smart contract audit completion",
        "Initial marketing campaign"
      ]
    },
    {
      quarter: "Q2 2025",
      title: "Growth",
      status: "current",
      items: [
        "CEX listings on major exchanges",
        "AI trading bot beta release",
        "Partnership announcements",
        "Staking platform launch"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Expansion",
      status: "upcoming",
      items: [
        "Mobile app release (iOS & Android)",
        "Advanced AI features rollout",
        "NFT marketplace integration",
        "Cross-chain bridge development"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Innovation",
      status: "upcoming",
      items: [
        "DAO governance implementation",
        "Metaverse integration",
        "Strategic institutional partnerships",
        "Global expansion initiative"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-primary/20 border-primary text-primary";
      case "current":
        return "bg-secondary/20 border-secondary text-secondary";
      default:
        return "bg-muted/20 border-muted-foreground/30 text-muted-foreground";
    }
  };

  return (
    <section className="py-24 px-4" id="roadmap">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow">
            ROADMAP
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-muted-foreground text-lg">
            Our journey to revolutionize crypto intelligence
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-1/2 transform ${index % 2 === 0 ? 'md:-translate-x-2' : 'md:translate-x-2'} w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-background ${phase.status === 'completed' ? 'bg-primary shadow-[0_0_20px_hsl(var(--neon-glow)/0.8)]' : phase.status === 'current' ? 'bg-secondary shadow-[0_0_20px_hsl(var(--tech-purple)/0.8)]' : 'bg-muted'}`} />

                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="neon-border rounded-xl p-4 md:p-6 backdrop-blur-sm bg-card/30 hover:bg-card/50 transition-all hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.2)]">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border ${getStatusColor(phase.status)}`}>
                      {phase.status.toUpperCase()}
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-xl md:text-2xl mb-2">
                      {phase.quarter}
                    </h3>
                    
                    <h4 className="text-lg md:text-xl text-primary mb-4">
                      {phase.title}
                    </h4>

                    <ul className={`space-y-2 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground text-sm md:text-base flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0 hidden md:inline">{index % 2 === 0 ? '◂' : '▸'}</span>
                          <span className="text-primary mt-1 flex-shrink-0 md:hidden">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
