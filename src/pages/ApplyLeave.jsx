import { useState } from "react";

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Applied:", formData);
    alert("Leave request submitted!");

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("leaveRequests")) || [];
    existing.push(formData);
    localStorage.setItem("leaveRequests", JSON.stringify(existing));

    setFormData({
      fromDate: "",
      toDate: "",
      reason: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <div className="mb-3">
          <label htmlFor="fromDate" className="form-label">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="toDate" className="form-label">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Reason:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            rows="4"
            className="form-control"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default ApplyLeave;