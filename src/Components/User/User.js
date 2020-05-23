import React from "react";
import "./User.css";
import PropTypes from "prop-types";

const User = (props) => {
  return (
    <div className="container">
      <div className="header">
        <img
          className="avatar"
          src={props.user.avatar_url}
          alt={props.user.name}
          width="200"
          height="200"
        />
        <h1 className="text">{props.user.name}</h1>
      </div>
      <div>
        <p>
          <span>BIO: </span>
          {props.user.bio}
        </p>
        <p>
          <span>LOCATION :</span> {props.user.location}
        </p>
        <span>REPOSITORIES: </span>
        <ul className="repos">{props.repos}</ul>
      </div>
    </div>
  );
};

export default User;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    repos: PropTypes.array,
  }),
};
