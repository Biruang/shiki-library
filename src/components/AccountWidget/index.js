import React, { Component } from 'react';

import './style.scss';
import '~/assets/icons/right-arrow.svg';
import { ReactComponent as Arrow } from '../../assets/icons/right-arrow.svg';
import { Link } from 'react-router-dom';

class AccountWidget extends Component {
  render() {
    const { user } = this.props;
    var content = null;

    if (!user.isLogged) {
      content = (
        <Link to="/login" className="account-widget-login">
          Войти
        </Link>
      );
    } else {
      var avatar = null;

      if (user.avatarUrl) {
        avatar = <img alt="Аватар акаунта" src={user.avatarUrl} />;
      } else {
        avatar = <span>{user.login.slice(0, 1)}</span>;
      }

      content = (
        <div className="account-widget">
          <div className="account-widget-main">
            <div className="account-widget-avatar">{avatar}</div>
            <div className="account-widget-login">{user.login}</div>
            <Arrow className="account-widget-arrow" />
          </div>
          <div className="account-widget-menu">
            <Link className="account-widget-menu-el" to="/profile">
              Профиль
            </Link>
            <Link className="account-widget-menu-el" to="/profile">
              Личная коллекция
            </Link>
            <Link className="account-widget-menu-el" to="/profile">
              Мои коллекции
            </Link>
            <Link className="account-widget-menu-el" to="/profile">
              Выход
            </Link>
          </div>
        </div>
      );
    }

    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default AccountWidget;
