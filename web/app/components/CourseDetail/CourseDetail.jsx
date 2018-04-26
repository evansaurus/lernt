import React, { Component, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CourseDetail = ({title, id, price, author, description, videoUrl, setActiveCourse}) => (
  <StrictMode>
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <button
              className="btn btn-primary btn-icon btn-icon-mini btn-round text-center float-left"
            >
              <Link to="/">
                <i className="fas fa-arrow-left" style={{color: "white"}}/>
              </Link>
            </button>
            <h1 className="text-primary text-center">{title}</h1>
          </div>
          <p className="card-text float-left text-secondary">
            By: {author}
          </p>
          <p className="card-text float-right text-secondary">
            Price: ${price}
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title={title}
              className="embed-responsive-item"
              allowFullScreen
              src={videoUrl}
            />
          </div>
          <a>
            {}
          </a>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>
    </div>
  </StrictMode>
);

const mapStateToProps = state => ({ ...state.activeCourse });

export default connect(mapStateToProps)(CourseDetail);
