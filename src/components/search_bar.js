import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'react' };

    // This binding is necessary to make `this` work in the callback
    // this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
        <div className="search-bar">
          <input
              value={this.state.term}
              onChange={e => this.onInputChange(e.target.value)} />
        </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;