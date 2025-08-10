import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const requests = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setLeaveRequests(requests);
  }, []);

  const updateStatus = (index, status) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = status;
    setLeaveRequests(updatedRequests);
    localStorage.setItem("leaveRequests", JSON.stringify(updatedRequests));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">🛠️ Admin Panel</h2>
        <span className="badge bg-secondary">{leaveRequests.length} Requests</span>
      </div>

      {leaveRequests.length === 0 ? (
        <div className="alert alert-info">No leave requests found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((req, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{req.fromDate}</td>
                  <td>{req.toDate}</td>
                  <td>{req.reason}</td>
                  <td>
                    <span
                      className={`badge ${
                        req.status === "Approved"
                          ? "bg-success"
                          : req.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {req.status || "Pending"}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => updateStatus(index, "Approved")}
                      disabled={req.status === "Approved"}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => updateStatus(index, "Rejected")}
                      disabled={req.status === "Rejected"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;