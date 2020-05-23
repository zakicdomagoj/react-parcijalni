import React from "react";
import "./Search.css";
import PropTypes from "prop-types";

class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <p>GitHub username:</p>
        <form onSubmit={this.props.handleSubmit}>
          <input
            className="input-info"
            type="text"
            placeholder="e.g. facebook"
            onChange={this.props.setInput}
          />
          <div>
            <button className="button" type="submit">
              GO!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func,
  setInput: PropTypes.func,
};
