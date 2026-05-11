export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-6">
          Git-like versioning for prompts
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Version Control for<br />
          <span className="text-[#58a6ff]">AI Prompt Templates</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track every prompt change, run A/B tests, and measure performance metrics — all in one place. Built for AI product teams who ship fast and iterate faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <div className="space-y-1 text-[#8b949e]">
            <p><span className="text-[#58a6ff]">$</span> promptdiff commit -m <span className="text-[#a5d6ff]">"improve tone for B2B audience"</span></p>
            <p><span className="text-[#3fb950]">✓</span> Saved version <span className="text-[#58a6ff]">v1.4.2</span> — diff: +3 tokens, -1 sentence</p>
            <p><span className="text-[#58a6ff]">$</span> promptdiff ab-test --variants v1.3.0 v1.4.2 --metric conversion</p>
            <p><span className="text-[#3fb950]">✓</span> A/B test started — <span className="text-[#58a6ff]">1,200 samples</span> needed for significance</p>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#30363d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: '⎇', title: 'Branch & Merge', desc: 'Experiment on branches, merge winners to main' },
            { icon: '⚡', title: 'A/B Testing', desc: 'Statistical significance tracking built-in' },
            { icon: '📊', title: 'Performance Metrics', desc: 'Latency, cost, quality scores per version' },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-8">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt versions',
              'Branch & merge workflows',
              'A/B test tracking',
              'Performance analytics dashboard',
              'Team collaboration (up to 10 seats)',
              'API access',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does prompt versioning work?',
              a: 'Every time you save a prompt, PromptDiff stores a full snapshot with a diff against the previous version — just like Git commits. You can browse history, compare versions side-by-side, and roll back instantly.',
            },
            {
              q: 'Can I run A/B tests across prompt versions?',
              a: 'Yes. Select any two versions, define your success metric (conversion, quality score, latency), and PromptDiff routes traffic and tracks results until statistical significance is reached.',
            },
            {
              q: 'What LLM providers are supported?',
              a: 'PromptDiff is provider-agnostic. It works with OpenAI, Anthropic, Mistral, Cohere, and any API-compatible model. You bring your own keys.',
            },
          ].map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  )
}
