// Sign-in page — form labels, placeholders, button text.

export default function SignIn() {
  return (
    <main>
      <h1>Sign in to your account</h1>
      <p>Welcome back! Please enter your credentials below.</p>

      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address here"
          aria-label="Email address"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          aria-label="Password"
        />

        <a href="/forgot-password">Forgot your password?</a>

        <button type="submit">Sign in</button>
        <button type="button">Click here if you don't have an account</button>
      </form>

      <p>
        By signing in, you agree to our terms of service and privacy
        policy.
      </p>
    </main>
  );
}
