import "../styles/contributions.css";

function Contributions() {
  return (
    <div className="contributions-page">
      {/* Header */}
      <div className="contributions-header">
        <h1>Contributions</h1>
        <p>Manage monthly member contributions.</p>
      </div>

      {/* Contribution form */}
      <div className="contribution-form">
        <h2>Add Contribution</h2>

        <form>
          <input type="text" placeholder="Member Name" />

          <input type="number" placeholder="Amount" />

          <input type="month" />

          <select>
            <option>Pending</option>
            <option>Approved</option>
          </select>

          <button type="submit">Save Contribution</button>
        </form>
      </div>

      {/* Contribution history */}
      <div className="contribution-history">
        <h2>Recent Contributions</h2>

        <div className="history-item">
          <p>
            <strong>Amantle Carol</strong> paid P1,000 for April 2026
          </p>
        </div>

        <div className="history-item">
          <p>
            <strong>Kabelo M.</strong> paid P1,000 for April 2026
          </p>
        </div>

        <div className="history-item">
          <p>
            <strong>Neo T.</strong> paid P1,000 for April 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contributions;