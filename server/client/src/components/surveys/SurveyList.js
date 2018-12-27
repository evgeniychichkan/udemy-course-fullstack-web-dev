import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchSurveys }  from "../../actions";

class SurveyList extends Component {
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveys(){
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content grey lighten-5">
            <span className="card-title"><b>{survey.title}</b></span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: <i>{new Date(survey.dateSend).toLocaleDateString()}</i>
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: <b>{survey.yes}</b></a>
            <a href="#">No: <b>{survey.no}</b></a>
          </div>
        </div>
      );
    });
  }

  render(){
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);