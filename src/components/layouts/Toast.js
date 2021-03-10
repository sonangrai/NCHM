import React from "react";
import { connect } from "react-redux";

const Toast = ({ alerts }) => {
  return (
    <div className="alerts">
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert ${alert.alertType} `}>
            {alert.msg}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Toast);
