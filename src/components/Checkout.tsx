// Checkout flow — adds a focused mix of strings for the action to chew on.

interface CheckoutProps {
  total: number;
}

export function CheckoutSummary({ total }: CheckoutProps) {
  return (
    <section aria-label="Order summary">
      <h2>Review your order.</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <p>
        By clicking the button below, you authorize us to charge your
        card and you indicate that you have read and agree to our
        terms of service.
      </p>
      <button>Click here to pay</button>
      <button>Cancel</button>
    </section>
  );
}

export function CardErrorBanner() {
  return (
    <div role="alert">
      <h3>An unexpected error occurred</h3>
      <p>
        Something went wrong with your payment. Please try again later
        or contact our support team if the issue persists.
      </p>
      <button title="Retry the payment.">Retry</button>
    </div>
  );
}

export function CardErrorBannerGood() {
  return (
    <div role="alert">
      <h3>We couldn't process your card</h3>
      <p>
        Try again, or use a different payment method. If it keeps
        happening, email hello@example.com.
      </p>
      <button>Try again</button>
    </div>
  );
}

export function PromoCodeField() {
  return (
    <div>
      <label htmlFor="promo">Promo code</label>
      <input
        id="promo"
        placeholder="Enter your promo code here"
        aria-label="Promo code input"
      />
      <button>Apply</button>
    </div>
  );
}
