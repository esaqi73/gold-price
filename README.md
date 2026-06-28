<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شاشة أسعار الذهب والفضة المباشرة - أصالة للمجوهرات</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css">

    <style>
        :root {
            --primary-gold: #c5a059;
            --dark-gold: #a3803b;
            --light-gold: #fdfaf2;
            --silver: #8a95a5;
            --light-silver: #f4f6f9;
            --text-main: #232b35;
            --text-muted: #697585;
            --bg-page: #f8f9fa;
            --card-bg: #ffffff;
            --radius-lg: 20px;
            --radius-md: 12px;
            --shadow-premium: 0 15px 35px rgba(197, 160, 89, 0.08), 0 5px 15px rgba(0, 0, 0, 0.03);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Tajawal', sans-serif;
            background-color: var(--bg-page);
            background-image: radial-gradient(circle at top right, rgba(197, 160, 89, 0.05) 0%, transparent 40%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px 15px;
            color: var(--text-main);
        }

        .container {
            background-color: var(--card-bg);
            padding: 30px 24px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-premium);
            text-align: center;
            max-width: 460px;
            width: 100%;
            border: 1px solid rgba(197, 160, 89, 0.12);
            position: relative;
        }

        .container::before {
            content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px;
            background: linear-gradient(90deg, var(--primary-gold), #e9d5af, var(--primary-gold));
            border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        h2 { font-size: 24px; font-weight: 700; margin-bottom: 6px; }

        h6 {
            font-size: 13px; font-weight: 500; color: var(--text-muted); margin-bottom: 20px;
            display: flex; justify-content: center; align-items: center; gap: 6px;
            background-color: var(--light-gold); padding: 6px 12px; border-radius: 50px;
            width: fit-content; margin: 0 auto 20px auto; border: 1px solid rgba(197, 160, 89, 0.15);
        }
        h6 i { color: var(--primary-gold); }

        .live-status {
            display: flex; justify-content: space-between; align-items: center;
            background: #1e252f; color: #fff; padding: 10px 16px;
            border-radius: var(--radius-md); margin-bottom: 20px; font-size: 12px;
        }
        .live-pulse {
            display: flex; align-items: center; gap: 8px; font-weight: bold; color: #2ecc71;
        }
        .pulse-dot {
            width: 8px; height: 8px; background-color: #2ecc71; border-radius: 50%;
            animation: pulse-animation 1s infinite;
        }
        @keyframes pulse-animation {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(46, 204, 113, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
        }
        
        #liveTimeText {
            font-family: monospace; font-size: 13px; color: #e9d5af; font-weight: bold; direction: ltr;
        }

        .price-usd {
            font-size: 13px; font-weight: 500; color: var(--text-muted); margin-bottom: 20px;
            background: var(--bg-page); padding: 8px; border-radius: 8px; border: 1px solid #eef1f5;
        }
        .global-price { font-weight: 700; color: var(--text-main); }

        .section-title {
            font-size: 14px; font-weight: 700; color: var(--dark-gold); margin: 20px 0 10px 0;
            text-align: right; display: flex; align-items: center; gap: 6px;
        }
        .section-title::before { content: ''; display: inline-block; width: 4px; height: 14px; background-color: var(--primary-gold); border-radius: 2px; }
        .section-title.silver-border { color: #566273; }
        .section-title.silver-border::before { background-color: var(--silver); }

        .karat-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 15px; background-color: var(--card-bg); border-radius: var(--radius-md); overflow: hidden; border: 1px solid #eef1f5; }
        .karat-table td { padding: 14px 16px; border-bottom: 1px solid #eef1f5; font-size: 14px; transition: background-color 0.4s ease; }
        .karat-table tr:last-child td { border-bottom: none; }
        
        .karat-title { font-weight: 700; color: var(--text-main); text-align: right; }
        .karat-value { font-weight: 700; color: var(--dark-gold); text-align: left; font-size: 16px; }
        .silver-table .karat-value { color: #3e4854; }

        .karat-table tr.sub-karat td { padding: 10px 16px; background-color: #fafbfc; }
        .karat-table tr.sub-karat .karat-title { color: var(--text-muted); font-weight: 500; font-size: 13px; }
        .karat-table tr.sub-karat .karat-value { color: #7e8b9b; font-size: 14px; font-weight: 600; }

        @keyframes flash-up { 0% { background-color: rgba(46, 204, 113, 0.35); } 100% { background-color: transparent; } }
        @keyframes flash-down { 0% { background-color: rgba(231, 76, 60, 0.35); } 100% { background-color: transparent; } }
        .bg-flash-up td { animation: flash-up 1s ease-out forwards; }
        .bg-flash-down td { animation: flash-down 1s ease-out forwards; }

        .accordion-header { font-size: 13px; font-weight: 700; color: var(--text-main); margin-top: 12px; padding: 14px 16px; background: var(--light-gold); border: 1px solid rgba(197, 160, 89, 0.2); cursor: pointer; display: flex; justify-content: space-between; align-items: center; border-radius: var(--radius-md); transition: var(--transition); user-select: none; }
        .accordion-header:hover { background: #f7f1e1; border-color: var(--primary-gold); }
        .accordion-header.silver-accordion { background: var(--light-silver); border: 1px solid #e2e7ee; }
        .accordion-header.silver-accordion:hover { background: #e9ecf2; border-color: var(--silver); }
        .toggle-icon { font-size: 11px; color: var(--text-muted); transition: transform 0.3s; }
        
        .accordion-content { display: none; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; padding: 2px; }
        .accordion-content.show { display: grid; }

        .bar-card { background: var(--card-bg); border: 1px solid #eef1f5; padding: 12px 14px; border-radius: var(--radius-md); display: flex; flex-direction: column; gap: 4px; transition: var(--transition); }
        .bar-card:hover { transform: translateY(-3px); border-color: rgba(197, 160, 89, 0.3); }
        .bar-name { font-size: 12px; font-weight: 500; color: var(--text-muted); text-align: right; }
        .bar-price { font-size: 14px; font-weight: 700; color: var(--text-main); text-align: left; }

        .request-time { font-size: 11px; color: var(--text-muted); margin-top: 25px; border-top: 1px dashed #e2e7ee; padding-top: 12px; text-align: center; }
        .initial-text { padding: 30px 20px; background-color: var(--light-gold); border: 1px dashed rgba(197, 160, 89, 0.3); border-radius: var(--radius-md); color: var(--text-muted); font-size: 14px; line-height: 1.6; }
    </style>
</head>

<body>

    <div class="container">
        <h2>أصالة للمجوهرات</h2>
        <h6><i class="fi fi-rr-phone-call"></i> +968 77101161</h6>

        <div class="live-status">
            <div class="live-pulse">
                <div class="pulse-dot"></div>
                <span>البورصة الحية</span>
            </div>
            <div id="liveTimeText">--:--:--</div>
        </div>

        <div id="mainDashboard">
            <div class="initial-text">جاري جلب أسعار الذهب والفضة المباشرة لسلطنة عمان...</div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const mainDashboard = document.getElementById('mainDashboard');
            const liveTimeText = document.getElementById('liveTimeText');
            
            // مفتاح باقة UniRate الاحتياطية الخاصة بك (تأكد من كتابته هنا بشكل صحيح)
            const UNIRATE_API_KEY = "Avww0sIzaEZMC2OqqbSRVbJNvcA7lNuR1f8s7zQdF1ubikTxo4CgSd2MguekplF1"; 
            
            // وقت التحديث التلقائي (35 ثانية)
            const UPDATE_INTERVAL_MS = 35000; 

            let oldGold24 = null, oldGold22 = null, oldGold21 = null, oldGold18 = null, oldSilver999 = null, oldSilver925 = null;

            async function fetchLivePrices() {
                let priceUSDGold = null;
                let priceUSDSilver = null;

                // 1. المحاولة الأولى والأساسية: السحب المباشر والمضمون من GoldAPI الخاص بك
                try {
                    const [goldResponse, silverResponse] = await Promise.all([
                        fetch("https://www.goldapi.io/api/XAU/USD", {
                            method: "GET", headers: { "x-access-token": "goldapi-38mjrsma55r00e-io", "Content-Type": "application/json" }
                        }),
                        fetch("https://www.goldapi.io/api/XAG/USD", {
                            method: "GET", headers: { "x-access-token": "goldapi-38mjrsma55r00e-io", "Content-Type": "application/json" }
                        })
                    ]);

                    if (goldResponse.ok && silverResponse.ok) {
                        const goldData = await goldResponse.json();
                        const silverData = await silverResponse.json();
                        priceUSDGold = goldData.price;
                        priceUSDSilver = silverData.price;
                    }
                } catch (e) {
                    console.log("حدث ضغط على سيرفر GoldAPI، جاري الانتقال فوراً للشبكة البديلة UniRate...");
                }

                // 2. المحاولة الاحتياطية: في حال تعطل الأول، اسحب من سيرفر UniRate الاحترافي الخاص بك
                if (!priceUSDGold || !priceUSDSilver) {
                    try {
                        const response = await fetch(`https://api.unirateapi.com/v1/rates/latest?api_key=${UNIRATE_API_KEY}`);
                        if (response.ok) {
                            const data = await response.json();
                            // قراءة الأسعار وفق البنية الدقيقة لمزود البيانات الاحترافي
                            if (data.rates) {
                                priceUSDGold = 1 / data.rates.XAU;
                                priceUSDSilver = 1 / data.rates.XAG;
                            }
                        }
                    } catch (fallbackError) {
                        console.error("تعذر الاتصال بكلا السيرفرين", fallbackError);
                    }
                }

                // 3. عرض وتحديث واجهة الشاشة بالأسعار الصحيحة
                if (priceUSDGold && priceUSDSilver) {
                    renderDashboard(priceUSDGold, priceUSDSilver);
                } else {
                    // حماية الشاشة من التوقف في حال انقطاع النت بالمحل كلياً بـعرض آخر تحديث محفوظ
                    if(oldGold24) {
                        renderDashboard(oldGold24 / (0.3863 / 31.1034), oldSilver999 / (0.3863 / 31.1034));
                    } else {
                        mainDashboard.innerHTML = `<div style="color:#d93838; padding:15px; background:#fff5f5; border:1px solid #fecdcd; border-radius:12px; font-size:14px;">⚠️ تعذر تحديث الأسعار الحية، يرجى التحقق من اتصال شاشة العرض بالإنترنت.</div>`;
                    }
                }
            }

            function renderDashboard(priceUSDGold, priceUSDSilver) {
                const omrExchangeRate = 0.3863;
                const oneGram = 31.1034; 

                const gramOMRGold = (priceUSDGold * omrExchangeRate) / oneGram; 
                const gramOMRGold22 = gramOMRGold * (22 / 24);                  
                const omaniTypeGold = gramOMRGold * 0.875;                      
                const gramOMRGold18 = gramOMRGold * (18 / 24);                  

                const gramOMRSilver999 = (priceUSDSilver * omrExchangeRate) / oneGram; 
                const gramOMRSilver925 = gramOMRSilver999 * 0.925; 

                const parOneGold = gramOMRGold + 8;
                const parTowGold = (gramOMRGold * 2.5) + 9;
                const parFivGold = (gramOMRGold * 5) + 10;
                const parTanGold = (gramOMRGold * 10) + 12;
                const parTwinGold = (gramOMRGold * 20) + 15;
                const parOunceGold = (gramOMRGold * oneGram) + 20;

                const silverBar10g = (gramOMRSilver999 * 10) + 1.5;
                const silverBarOunce = (gramOMRSilver999 * oneGram) + 2.0;
                const silverBar100g = (gramOMRSilver999 * 100) + 5.0;
                const silverBar250g = (gramOMRSilver999 * 250) + 8.0;
                const silverBar500g = (gramOMRSilver999 * 500) + 12.0;
                const silverBarKilo = (gramOMRSilver999 * 1000) + 20.0;

                const now = new Date();
                const timeString = now.toLocaleTimeString('ar-OM', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                const dateString = now.toLocaleDateString('ar-OM', { year: 'numeric', month: 'short', day: 'numeric' });
                
                liveTimeText.textContent = timeString;

                const gold24Class = getFlashClass(gramOMRGold, oldGold24);
                const gold22Class = getFlashClass(gramOMRGold22, oldGold22);
                const gold21Class = getFlashClass(amaniTypeGold, oldGold21);
                const gold18Class = getFlashClass(gramOMRGold18, oldGold18);
                const silver999Class = getFlashClass(gramOMRSilver999, oldSilver999);
                const silver925Class = getFlashClass(gramOMRSilver925, oldSilver925);

                oldGold24 = gramOMRGold; oldGold22 = gramOMRGold22; 
                oldGold21 = omaniTypeGold; oldGold18 = gramOMRGold18;
                oldSilver999 = gramOMRSilver999; oldSilver925 = gramOMRSilver925;

                const isGoldOpen = document.getElementById('goldAccordionContent')?.classList.contains('show');
                const isSilverOpen = document.getElementById('silverAccordionContent')?.classList.contains('show');

                mainDashboard.innerHTML = `
                    <div class="price-usd">
                        أونصة الذهب: <span class="global-price">${priceUSDGold.toFixed(2)} $</span> &nbsp;|&nbsp; 
                        أونصة الفضة: <span class="global-price">${priceUSDSilver.toFixed(2)} $</span>
                    </div>
                    
                    <div class="section-title">أسعار جرام الذهب</div>
                    <table class="karat-table">
                        <tr class="${gold24Class}">
                            <td class="karat-title">عيار 24 <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">(999.)</span></td>
                            <td class="karat-value">${gramOMRGold.toFixed(3)} ر.ع.</td>
                        </tr>
                        <tr class="sub-karat ${gold22Class}">
                            <td class="karat-title">عيار 22 <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">(916.)</span></td>
                            <td class="karat-value">${gramOMRGold22.toFixed(3)} ر.ع.</td>
                        </tr>
                        <tr class="${gold21Class}">
                            <td class="karat-title">عيار 21 <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">(875.)</span></td>
                            <td class="karat-value">${amaniTypeGold.toFixed(3)} ر.ع.</td>
                        </tr>
                        <tr class="sub-karat ${gold18Class}">
                            <td class="karat-title">عيار 18 <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">(750.)</span></td>
                            <td class="karat-value">${gramOMRGold18.toFixed(3)} ر.ع.</td>
                        </tr>
                    </table>

                    <div class="section-title silver-border">أسعار جرام الفضة</div>
                    <table class="karat-table silver-table">
                        <tr class="${silver999Class}">
                            <td class="karat-title">فضة نقية <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">عيار 999</span></td>
                            <td class="karat-value">${gramOMRSilver999.toFixed(3)} ر.ع.</td>
                        </tr>
                        <tr class="${silver925Class}">
                            <td class="karat-title">فضة إسترليني <span style="font-weight:normal; font-size:11px; color:var(--text-muted);">عيار 925</span></td>
                            <td class="karat-value">${gramOMRSilver925.toFixed(3)} ر.ع.</td>
                        </tr>
                    </table>

                    <div class="accordion-header" id="goldHeader">
                        <span><i class="fi fi-rr-box" style="vertical-align:middle; margin-left:6px; color:var(--primary-gold)"></i> سبائك الذهب الاستثمارية (24)</span>
                        <span class="toggle-icon">${isGoldOpen ? '▲' : '▼'}</span>
                    </div>
                    <div class="accordion-content ${isGoldOpen ? 'show' : ''}" id="goldAccordionContent">
                        <div class="bar-card"><span class="bar-name">سبيكة 1 جرام</span><span class="bar-price">${parOneGold.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 2.5 جرام</span><span class="bar-price">${parTowGold.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 5 جرام</span><span class="bar-price">${parFivGold.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 10 جرام</span><span class="bar-price">${parTanGold.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 20 جرام</span><span class="bar-price">${parTwinGold.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة أونصة</span><span class="bar-price">${parOunceGold.toFixed(3)} ر.ع.</span></div>
                    </div>

                    <div class="accordion-header silver-accordion" id="silverHeader">
                        <span><i class="fi fi-rr-box" style="vertical-align:middle; margin-left:6px; color:var(--silver)"></i> سبائك الفضة الاستثمارية</span>
                        <span class="toggle-icon">${isSilverOpen ? '▲' : '▼'}</span>
                    </div>
                    <div class="accordion-content ${isSilverOpen ? 'show' : ''}" id="silverAccordionContent">
                        <div class="bar-card"><span class="bar-name">سبيكة 10 جرام</span><span class="bar-price">${silverBar10g.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة أونصة</span><span class="bar-price">${silverBarOunce.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 100 جرام</span><span class="bar-price">${silverBar100g.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 250 جرام</span><span class="bar-price">${silverBar250g.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 500 جرام</span><span class="bar-price">${silverBar500g.toFixed(3)} ر.ع.</span></div>
                        <div class="bar-card"><span class="bar-name">سبيكة 1 كيلو</span><span class="bar-price">${silverBarKilo.toFixed(3)} ر.ع.</span></div>
                    </div>

                    <div class="request-time">تاريخ اليوم: ${dateString}</div>
                `;

                setupAccordions();
            }

            function getFlashClass(newPrice, oldPrice) {
                if (!oldPrice) return "";
                if (newPrice.toFixed(3) > oldPrice.toFixed(3)) return "bg-flash-up";
                if (newPrice.toFixed(3) < oldPrice.toFixed(3)) return "bg-flash-down";
                return "";
            }

            function setupAccordions() {
                document.getElementById('goldHeader').addEventListener('click', () => toggleAccordion('goldAccordionContent', 'goldHeader'));
                document.getElementById('silverHeader').addEventListener('click', () => toggleAccordion('silverAccordionContent', 'silverHeader'));
            }

            function toggleAccordion(contentId, headerId) {
                const content = document.getElementById(contentId);
                const icon = document.getElementById(headerId).querySelector('.toggle-icon');
                content.classList.toggle('show');
                icon.textContent = content.classList.contains('show') ? '▲' : '▼';
            }

            fetchLivePrices();
            setInterval(fetchLivePrices, UPDATE_INTERVAL_MS);
        });
    </script>

</body>

</html>
