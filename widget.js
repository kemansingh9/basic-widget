define('MyWidget', [], function () {
  return {
    onLoad: function () {
      const el = document.createElement('div');
      el.id = 'my-app';
      document.body.appendChild(el);

      const script = document.createElement('script');
      script.src = './assets/index.js'; // This is your built app
      document.body.appendChild(script);
    }
  };
});
