// ============================================================
// 🖥️ server.js - الخادم الآمن لأسعار الذهب والفضة (Gold-API.com)
// ============================================================

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const OMR_RATE = parseFloat(process.env.OMR_EXCHANGE_RATE) || 0.3863;

// ============================================================
// 🧠 الذاكرة المؤقتة لتسريع الاستجابة
// ============================================================
let cache = {
    priceUSDGold: null,
    priceUSDSilver: null,
    lastFetchTime: 0
};
// تحديث الأسعار كل دقيقة واحدة (60,000 ملي ثانية)
const CACHE_DURATION_MS = 60000; 

app.get('/api/prices', async (req, res) => {
    console.log('-----------------------------------');
    console.log('📥 طلب جديد من الواجهة...');

    const currentTime = Date.now();

    // 1. الإرسال من الذاكرة إذا لم تمر دقيقة
    if (cache.priceUSDGold && cache.priceUSDSilver && (currentTime - cache.lastFetchTime < CACHE_DURATION_MS)) {
        console.log('⚡ إرسال الأسعار من الذاكرة المؤقتة بسلاسة');
        return res.json({ 
            success: true, 
            source: 'Gold-API.com (Cached)', 
            priceUSDGold: cache.priceUSDGold, 
            priceUSDSilver: cache.priceUSDSilver, 
            omrRate: OMR_RATE, 
            timestamp: new Date(cache.lastFetchTime).toISOString() 
        });
    }

    // 2. جلب أسعار جديدة
    try {
        console.log('🔄 جلب أسعار لحظية من Gold-API.com...');
        
        const [goldResponse, silverResponse] = await Promise.all([
            axios.get('https://api.gold-api.com/price/XAU', { timeout: 10000 }),
            axios.get('https://api.gold-api.com/price/XAG', { timeout: 10000 })
        ]);

        if (goldResponse.data?.price && silverResponse.data?.price) {
            const newPriceGold = parseFloat(goldResponse.data.price);
            const newPriceSilver = parseFloat(silverResponse.data.price);
            
            // 💾 حفظ الأسعار
            cache.priceUSDGold = newPriceGold;
            cache.priceUSDSilver = newPriceSilver;
            cache.lastFetchTime = currentTime;

            console.log('✅ تم جلب الأسعار بنجاح:', newPriceGold, newPriceSilver);
            
            return res.json({ 
                success: true, 
                source: 'Gold-API.com (Live)', 
                priceUSDGold: newPriceGold, 
                priceUSDSilver: newPriceSilver, 
                omrRate: OMR_RATE, 
                timestamp: new Date().toISOString() 
            });
        } else {
            throw new Error('البيانات المستلمة غير مكتملة');
        }
    } catch (error) {
        console.log('⚠️ فشل جلب الأسعار:', error.message);
        
        if (cache.priceUSDGold && cache.priceUSDSilver) {
            console.log('🛡️ تم تفعيل درع الحماية: إرسال آخر سعر محفوظ');
            return res.json({ 
                success: true, 
                source: 'Gold-API.com (Fallback)', 
                priceUSDGold: cache.priceUSDGold, 
                priceUSDSilver: cache.priceUSDSilver, 
                omrRate: OMR_RATE, 
                timestamp: new Date(cache.lastFetchTime).toISOString() 
            });
        }

        return res.status(503).json({ 
            success: false, 
            error: 'تعذر جلب الأسعار', 
            timestamp: new Date().toISOString() 
        });
    }
});

app.listen(PORT, () => console.log(`✅ الخادم يعمل على: http://localhost:${PORT}`));