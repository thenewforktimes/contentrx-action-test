// A collection of buttons with a mix of clean and flaggable copy.
// Used as fixture content for the ContentRX GitHub Action.

export function PrimaryActions() {
  return (
    <div>
      <button>Save changes</button>
      <button>Continue</button>
      <button>Cancel</button>
      <button>Submit</button>
      <button>OK</button>
      <button>Click here</button>
      <button>Click here to learn more</button>
      <button title="Submit the form.">Submit the form.</button>
      <button aria-label="close">×</button>
      <button aria-label="Close dialog">×</button>
    </div>
  );
}

export function DestructiveActions() {
  return (
    <div>
      <button>Delete account</button>
      <button>Permanently delete this workspace</button>
      <button>Are you sure?</button>
      <button title="Delete">×</button>
    </div>
  );
}

export function NavigationCTAs() {
  return (
    <div>
      <a href="/dashboard">Open dashboard</a>
      <a href="/settings">Manage settings</a>
      <a href="/billing">View billing</a>
      <a href="/learn">Click here to learn more about pricing</a>
    </div>
  );
}
