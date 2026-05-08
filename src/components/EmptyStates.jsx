// Empty states — common copy that gets shipped without much thought.

export function NoResults() {
  return (
    <div className="empty-state">
      <h3>No results found</h3>
      <p>Try a different search term.</p>
    </div>
  );
}

export function NoNotifications() {
  return (
    <div className="empty-state">
      <h3>You're all caught up!</h3>
      <p>Nothing new to see here.</p>
    </div>
  );
}

export function NoTeammates() {
  return (
    <div className="empty-state">
      <h3>You haven't invited any teammates yet.</h3>
      <p>
        Utilize our team management tools to facilitate collaboration
        across your organization. Leverage seamless integrations to
        optimize your workflow.
      </p>
      <button>Invite teammates</button>
    </div>
  );
}

export function FirstRun() {
  return (
    <div className="empty-state">
      <h3>Welcome aboard! 🎉</h3>
      <p>Let's get you set up — it'll only take a minute.</p>
      <button>Get started</button>
    </div>
  );
}
