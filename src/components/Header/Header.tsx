import React from 'react';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg';
import { GITHUB_PROJECT_URL } from '../../constants';
import './header.scss';

const Header = () => {
  const handleOnClickGitHubIcon = () => {
    window.open(GITHUB_PROJECT_URL, '_blank');
  };

  return (
    <header className="header">
      <div className="header__brand-container">
        <span className="header__brand-name">DogsImagesGenerator</span>
        <GitHubIcon
          onClick={handleOnClickGitHubIcon}
          className="header__icon"
          target="_blank"
          width={36}
          height={36}
        />
      </div>
    </header>
  );
};

export default Header;
