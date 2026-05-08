// Error messages — a mix of accusatory, vague, and well-named actors.

interface ErrorProps {
  message: string;
}

export function NetworkError() {
  return (
    <div role="alert">
      <h2>An unexpected error occurred</h2>
      <p>Something went terribly wrong. Please try again.</p>
    </div>
  );
}

export function ValidationError() {
  return (
    <div role="alert">
      <h2>Invalid input</h2>
      <p>You entered the wrong value. Try again.</p>
    </div>
  );
}

export function GoodNetworkError() {
  return (
    <div role="alert">
      <h2>We couldn't reach the server</h2>
      <p>
        Try again in a moment. If it keeps happening, email
        hello@example.com.
      </p>
    </div>
  );
}

export function PaymentFailed() {
  return (
    <div role="alert" aria-label="Payment failure notice">
      <h2>Payment failed — please contact your bank.</h2>
      <p>
        Your payment did not go through. We will not be able to process
        your subscription until you have resolved the issue with your
        bank or card issuer.
      </p>
      <button>OK</button>
    </div>
  );
}

export function FormFieldError({ message }: ErrorProps) {
  return <span className="text-red-500">{message}</span>;
}
