import { useState, useEffect } from "react";

const Dashboard = () => {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setLeaveData(storedLeaves);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Leave Dashboard</h2>

      {leaveData.length === 0 ? (
        <div className="alert alert-info text-center">No leave requests found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>From Date</th>
                <th>To Date</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.fromDate}</td>
                  <td>{leave.toDate}</td>
                  <td>{leave.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;