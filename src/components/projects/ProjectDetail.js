import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const ProjectDetail = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title} </span>
            <p>{project.content} </p>
          </div>
          <div className="card-action gret lighen-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}{" "}
            </div>
            <div>2nd september, 2pm</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>loading project, please wait....</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
