const About = () => {
  return (
    <section className="py-24 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <div className="inline-block">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-glow mb-2">
              ABOUT VAITO.AI
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            VAITO.AI is the next generation of cryptocurrency intelligence, combining advanced artificial intelligence with blockchain technology to revolutionize how you interact with digital assets.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="neon-border rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.3)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Advanced algorithms analyzing market trends in real-time</p>
            </div>

            <div className="neon-border rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.3)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-2">Secure</h3>
              <p className="text-muted-foreground">Enterprise-grade security protecting your investments</p>
            </div>

            <div className="neon-border rounded-lg p-6 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.3)] transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-orbitron font-bold text-xl mb-2">Fast</h3>
              <p className="text-muted-foreground">Lightning-fast transactions and instant insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
