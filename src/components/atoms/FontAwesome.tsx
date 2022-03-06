import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';

type IconKind = 'github' | 'git-alt' | 'twitter' | 'email' | 'home';

type Props = {
  kind: IconKind;
  className?: string;
};

export const FontAwesome: FC<Props> = ({kind, className}) => {
  const icon: IconProp =
    kind === 'github'
      ? faGithub
      : kind === 'git-alt'
      ? faGitAlt
      : kind === 'twitter'
      ? faTwitter
      : kind === 'email'
      ? faEnvelope
      : kind === 'home'
      ? faHome
      : faGithub;

  return <FontAwesomeIcon className={className} icon={icon} />;
};
