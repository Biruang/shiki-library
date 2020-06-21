import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';
import { Link } from 'react-router-dom';
import AccountWidget from '../../components/AccountWidget';

class SearchContainer extends Component {
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <header className="search-header">
          <div className="search-header-container">
            <Link className="search-header-logo" to="/">
              <h1>Logo</h1>
            </Link>
            <AccountWidget user={user} />
          </div>
        </header>
        <main className="search-main">search</main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};

export default connect(mapStateToProps)(SearchContainer);
