define('MyWidget', [], function () {
  return {
    onLoad: function () {
      console.debug('📦 Widget loaded');

      const el = document.createElement('div');
      el.id = 'my-app';
      document.body.appendChild(el);

      const script = document.createElement('script');
      script.src = './assets/index.js';
      script.onload = () => console.debug('✅ index.js loaded');
      document.body.appendChild(script);
    }
  };
});
