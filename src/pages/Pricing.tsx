// Pricing page — marketing copy, plan cards, FAQ.

export default function Pricing() {
  return (
    <main>
      <h1>Pricing.</h1>
      <p>
        Simple, transparent pricing — no hidden fees, no surprises.
        Cancel anytime.
      </p>

      <section aria-label="Plan comparison">
        <article>
          <h2>Free.</h2>
          <p>$0 / month</p>
          <p>10 checks per month</p>
          <button>Start free</button>
        </article>

        <article>
          <h2>Pro.</h2>
          <p>$39 / month</p>
          <p>Utilize our world-class engine to optimize your content.</p>
          <button>Click here to upgrade</button>
        </article>

        <article>
          <h2>Enterprise.</h2>
          <p>Custom pricing</p>
          <p>
            Leverage our cutting-edge, scalable solution to facilitate
            seamless collaboration across your organization.
          </p>
          <button>Contact sales</button>
        </article>
      </section>

      <section aria-label="Frequently asked questions">
        <h2>Questions?</h2>
        <details>
          <summary>What happens if I exceed my monthly limit?</summary>
          <p>
            Don't worry — we'll let you know when you're getting close
            to your limit. You can upgrade at any time to keep going.
          </p>
        </details>
        <details>
          <summary>Can I cancel anytime?</summary>
          <p>Yes! Cancel any time, no questions asked.</p>
        </details>
      </section>
    </main>
  );
}
