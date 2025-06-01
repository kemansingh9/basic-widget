define('MyWidget', [], function () {
  'use strict';
  return {
    onLoad: function () {
      const appRoot = document.createElement('div');
      appRoot.id = 'my-app';
      document.body.appendChild(appRoot);

      const script = document.createElement('script');
      script.src = './assets/index.js'; // built by Vite
      document.body.appendChild(script);
    }
  };
});
