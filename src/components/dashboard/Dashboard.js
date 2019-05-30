import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { users } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={users} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    users: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(Dashboard);
