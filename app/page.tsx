export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          Anti Front-Running Protection
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Search Domains Without<br />
          <span className="text-[#58a6ff]">Registrars Stealing Them</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Registrars watch your searches and snatch domains before you can register them.
          DomainGuard routes every lookup through rotating proxies and multiple anonymous
          WHOIS APIs — so your searches stay private.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Searching Safely — $5/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>&#10003; Rotating proxy servers</span>
          <span>&#10003; Multiple WHOIS APIs</span>
          <span>&#10003; Zero search logs</span>
          <span>&#10003; Bulk domain checks</span>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">How Front-Running Happens</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: "1", title: "You Search", desc: "You type a domain into a registrar's search bar. They log it instantly." },
            { step: "2", title: "They Register It", desc: "Automated bots register the domain or mark it for upsell within seconds." },
            { step: "3", title: "You Pay More", desc: "The domain is now 'taken' or sold back to you at a premium price." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-2">
              <div className="text-[#58a6ff] font-extrabold text-2xl">0{item.step}</div>
              <div className="text-white font-semibold">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-sm">
          DomainGuard never sends your query to a single registrar. Every check is anonymized, rotated, and never stored.
        </p>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold text-white">$5</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-[#c9d1d9]">
            {[
              "Unlimited anonymous domain searches",
              "Rotating proxy network (50+ servers)",
              "Multi-source WHOIS aggregation",
              "Bulk check up to 100 domains at once",
              "TLD availability matrix",
              "Zero search logs — ever",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Get Started — $5/mo
          </a>
          <p className="text-xs text-[#8b949e] text-center">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "Is registrar front-running actually real?",
              a: "Yes. Multiple investigations and lawsuits have confirmed that some registrars monitor search queries and register domains before customers can. It's a known industry problem."
            },
            {
              q: "How does DomainGuard prevent it?",
              a: "We route every WHOIS lookup through rotating anonymous proxy servers and query multiple independent WHOIS data sources — never a registrar's own search API. Your query is never tied to your identity or IP."
            },
            {
              q: "What happens after I subscribe?",
              a: "You get instant access to the domain search dashboard. Enter any domain or bulk-paste a list, and we return real-time availability results anonymously. No registrar ever sees your search."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-2">
              <div className="text-white font-semibold">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} DomainGuard. All rights reserved.
      </footer>

    </main>
  );
}
