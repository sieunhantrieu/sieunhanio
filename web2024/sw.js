self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// thong bao quyen

if ('Notification' in window) {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      console.log('Quyền thông báo đã được cấp!');
    } else {
      console.log('Quyền thông báo bị từ chối.');
    }
  });
}

// thong bao cai dat

if ('Notification' in window) {
  Notification.requestPermission().then(function(result) {
    if (result === 'granted') {
      var notification = new Notification('Cài đặt Siêu Nhân Triều !', {
        body: 'Cài đặt Siêu Nhân Triều để truy cập nhanh chóng và ngoại tuyến.',
        icon: 'ico/Icon-72x72.png'
      });
      notification.onclick = function() {
        window.location.href = 'https://sieunhan.xyz'; // Thay thế bằng URL website của bạn
      };
    }
  });
}