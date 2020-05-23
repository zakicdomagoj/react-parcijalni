import React from "react";
import Search from "./Components/Search/Search";
import User from "./Components/User/User";
import PropTypes from "prop-types";
import "./App.css";

class App extends React.Component {
  state = {
    input: "",
    user: {},
    repos: [],
    isSubmitted: false,
    isLoaded: false,
  };

  setInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: true,
      isLoaded: true,
    });

    fetch(`https://api.github.com/users/${this.state.input}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      });

    fetch(`https://api.github.com/users/${this.state.input}/repos`)
      .then((response) => response.json())
      .then((data) => {
        let foundRepos = [];
        data.forEach((repo) =>
          foundRepos.push(
            <li className="repo" key={repo.name}>
              {repo.name}
            </li>
          )
        );
        this.setState({
          repos: foundRepos,
        });
      });
  };

  render() {
    if (this.isLoaded) {
      return <h4>Loading...</h4>;
    } else {
      return (
        <div className="App">
          <Search handleSubmit={this.handleSubmit} setInput={this.setInput} />
          {this.state.isSubmitted && (
            <User user={this.state.user} repos={this.state.repos} />
          )}
        </div>
      );
    }
  }
}

export default App;

App.propTypes = {
  input: PropTypes.string,
  user: PropTypes.object,
  repos: PropTypes.array,
  isSubmitted: PropTypes.bool,
  isLoaded: PropTypes.bool,
};
