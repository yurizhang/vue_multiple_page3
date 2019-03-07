import React from 'react';
import ReactDOM from 'react-dom';

import Notification from './Notification.js';
import '../Common/css/Notification.css';
const className = '.ishow-notification';

export default function NotificationCenter(props = {}, type) {
  const div = document.createElement('div');

  document.body.appendChild(div);

  if (typeof props === 'string' || React.isValidElement(props)) {
    props = {
      message: props
    };
  }

  if (type) {
    props.type = type;
  }

  if (!props.offset) {
    props.offset = 0
  }

  const instances = document.querySelectorAll(className)

  const lastInstance = instances[instances.length - 1];

  props.top = (lastInstance ? (parseInt(lastInstance.style.top,10) + lastInstance.offsetHeight) : props.offset) + 16;

  const element = React.createElement(Notification, Object.assign({}, props, {
    willUnmount(height, top) {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);

      requestAnimationFrame(() => {
        const instances = document.querySelectorAll(className);

        for (let i = 0, len = instances.length; i < len; i++) {
          const element = instances[i];
          const elementTop = parseInt(element.style.top,10);

          if (elementTop > top) {
            element.style.top = `${elementTop - height - 16}px`;
          }
        }
      })
    }
  }));

  ReactDOM.render(element, div);
}

/* eslint-disable */
['success', 'warning', 'info', 'error'].forEach(type => {
  NotificationCenter[type] = (options = {}) => {
    return NotificationCenter(options, type);
  };
});
/* eslint-enable */
