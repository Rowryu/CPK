// ホーム画面への追加（インストール）に必要な最小のサービスワーカー。何もキャッシュしない
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
