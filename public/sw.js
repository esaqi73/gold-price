const CACHE_NAME = 'asalaa-gold-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/favicon.png'
];

// 1. تثبيت التطبيق وحفظ الملفات الأساسية في ذاكرة الهاتف
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// 2. تنشيط التطبيق وتنظيف أي نسخ قديمة
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. اعتراض الطلبات (جلب البيانات من الإنترنت أولاً لضمان تحديث الأسعار)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // إذا انقطع الإنترنت، اعرض النسخة المحفوظة
            return caches.match(event.request);
        })
    );
});