import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, dismissToast}) {
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map(({variant, message, id}) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} message={message} id={id} dismiss={dismissToast} />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
