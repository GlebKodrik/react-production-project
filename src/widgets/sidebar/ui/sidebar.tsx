import React, { useState } from 'react';
import cls from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../shared/ui/theme-switcher';
import { LanguageSwitcher } from '../../../shared/ui/language-switcher/ui/language-switcher';
import { Button } from '../../../shared/ui/button';
import { EButtonSize, EColorButton } from '../../../app/types/button';
import { Link } from '../../../shared/ui/link';
import { ELinkColor } from '../../../app/types/link';
import { ROUTES_PATH } from '../../../shared/config/routers-config/routers';
import Icon from '../../../shared/ui/icon';

export const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  const onToggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const renderButtonCollapse = () => (collapse ? '>' : '<');
  return (
    <div
      data-testid="sidebar"
      className={cls(styles.sidebar, { [styles.collapse]: collapse })}
    >
      <div className={styles.linkWrapper}>
        <Link
          color={ELinkColor.INVERTED}
          to={ROUTES_PATH.ABOUT}
        >
          <div className={styles.item}>
            <Icon name="home" className={styles.icon} />
            <span className={styles.linkText}>{t('aboutLink')}</span>
          </div>
        </Link>

        <Link
          color={ELinkColor.INVERTED}
          to={ROUTES_PATH.MAIN}
        >
          <div className={styles.item}>
            <Icon name="clarity-list" className={styles.icon} />
            <span className={styles.linkText}>{t('mainLink')}</span>
          </div>
        </Link>
      </div>

      <Button
        type="button"
        square
        onClick={onToggleCollapse}
        className={styles.button}
        size={EButtonSize.LARGE}
        color={EColorButton.INVERTED}
      >
        { renderButtonCollapse() }
      </Button>

      <div className={cls(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={styles.languageSwitcher}
          short={collapse}
        />
      </div>
    </div>
  );
};
