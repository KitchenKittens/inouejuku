(function(){
  function registerMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');
    if (!btn || !nav) return false;

    // 明示的な関数で登録（DevTools でも見やすく）
    function navToggle() {
      btn.classList.toggle('open');
      nav.classList.toggle('hidden');
      document.body.classList.toggle('no-scroll');
      btn.setAttribute('aria-expanded', btn.classList.contains('open'));
    }

    if (!btn._menuInitialized) {
      btn.addEventListener('click', navToggle);
      btn._menuInitialized = true;
    } else {
      console.log('already initialized, skip registration');
    }
    return true;
  }

  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');
    // 即時試行
    if (registerMenu()) return;

    // 再試行ループ（挿入遅延がある場合のフォールバック）
    const start = Date.now();
    const interval = setInterval(function() {
      if (registerMenu()) {
        clearInterval(interval);
      } else if (Date.now() - start > 5000) {
        clearInterval(interval);
        console.warn('registerMenu failed after retries');
      }
    }, 200);
  });

  // jQuery に依存する固定ナビ処理は jQuery の存在を待って実行
    var _window = $(window), _nav = $('.navbar'), navBottom;
    _window.on('scroll',function(){
      navBottom = $('.navbar').outerHeight();
      if(_window.scrollTop() > navBottom){
        _nav.addClass('fixed');
      } else {
        _nav.removeClass('fixed');
      }
    });
    _window.trigger('scroll');
    
  // DOMContentLoaded 後に jQuery が読み込まれていれば実行。なければポーリングで実行
  document.addEventListener('DOMContentLoaded', function(){
    if (!initFixedNavbar()) {
      const jqStart = Date.now();
      const jqInterval = setInterval(function(){
        if (initFixedNavbar() || Date.now() - jqStart > 5000) {
          clearInterval(jqInterval);
        }
      }, 200);
    }
  });

  // 追加ワークアラウンド：document レベルでのクリック検知（ボタン要素に登録が無い場合の保険）
  document.addEventListener('click', function(e) {
    const clicked = e.target.closest && e.target.closest('#menu-btn');
    if (clicked) {
      const btn = document.getElementById('menu-btn');
      const nav = document.getElementById('menu');
      if (btn && nav) {
        btn.classList.toggle('open');
        nav.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
        btn.setAttribute('aria-expanded', btn.classList.contains('open'));
      }
    }
  });

})();