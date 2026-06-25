<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سعر الذهب في عمان - أصالة للمجوهرات</title>
    <link rel="stylesheet"
        href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css">

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 10px;
            color: #333;
        }

        .container {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            text-align: center;
            max-width: 480px;
            /* تم توسيعه قليلاً ليتناسب مع الجداول */
            width: 100%;
        }

        h1 {
            font-size: 26px;
            margin-bottom: 5px;
            color: #d4af37;
        }

        h4 {
            font-size: 13px;
            font-weight: normal;
            color: #7f8c8d;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

        h4 i {
            color: #d4af37;
            position: relative;
            top: 2px;
        }

        button {
            background-color: #d4af37;
            color: white;
            border: none;
            padding: 14px 25px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 75%;
            box-shadow: 0 4px 10px rgba(212, 175, 55, 0.2);
        }

        button:hover {
            background-color: #aa8c2c;
            transform: translateY(-2px);
        }

        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .result {
            margin-top: 25px;
            padding: 5px;
            border-radius: 8px;
            min-height: 120px;
        }

        .initial-text {
            padding: 20px;
            background-color: #fcf9f2;
            border: 1px solid #f1e6c7;
            border-radius: 8px;
            color: #7f8c8d;
        }

        .price-usd {
            font-size: smaller;
            color: #95a5a6;
            margin-bottom: 15px;
            text-align: middle;
        }
		
        .price-title {
            font-size: 10px;
            color: #95a5a6;
            margin-bottom: 12px;
            text-align: right;
        }

        /* تصميم جدول العيارات */
        .karat-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            background-color: #fdfbf7;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid #f1e6c7;
			margin: 5px;
        }

        .karat-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #f1e6c7;
        }

        .karat-table tr:last-child td {
            border-bottom: none;
        }

        .karat-title {
            font-weight: 600;
            color: #2c3e50;
            text-align: right;
            font-size: small;
        }

        .karat-value {
            font-weight: bold;
            color: #2c3e50;
            text-align: left;
            font-size: 16px;
        }

        .karat-table tr:first-child .karat-value {
            color: #b89214;
            /* تمييز عيار 24 بلون ذهبي غامق */
        }

        /* قسم السبائك */
        .section-title {
            font-size: 14px;
            font-weight: bold;
            color: #7f8c8d;
            margin: 15px 0 10px 0;
            text-align: right;
            border-right: 3px solid #d4af37;
            padding-right: 8px;
        }

        .bars-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 15px;
        }

        .bar-card {
            background: #fff;
            border: 1px solid #eef2f5;
            padding: 10px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
        }

        .bar-name {
            font-size: 12px;
            color: #7f8c8d;
            margin-bottom: 4px;
        }

        .bar-price {
            font-size: 14px;
            font-weight: bold;
            color: #2c3e50;
        }

        .global-price {
            font-size: 12px;
            color: #2c3e50;
        }

        .request-time {
            font-size: 10px;
            color: #95a5a6;
            margin-top: 15px;
            border-top: 1px dashed #e6dec9;
            padding-top: 8px;
            width: 100%;
            text-align: center;
        }

        .error {
            color: #e74c3c;
            background-color: #fde8e7;
            border: 1px solid #f5c6cb;
            padding: 15px;
            border-radius: 8px;
            font-size: 15px;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>سعر الذهب</h2>
        <h6><i class="fi fi-rr-phone-call"></i> +968 77101161 | أصالة للمجوهرات</h6>

        <button id="fetchBtn">احصل على السعر الآن</button>

        <div class="result" id="result">
            <div class="initial-text">اضغط على الزر لعرض السعر الحالي للجرام والسبائك</div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const fetchBtn = document.getElementById('fetchBtn');
            const resultDiv = document.getElementById('result');

            fetchBtn.addEventListener('click', async () => {

                fetchBtn.disabled = true;
                fetchBtn.textContent = "جاري التحميل...";
                resultDiv.innerHTML = '<div class="initial-text">جاري جلب البيانات من البورصة وتحديث الأسعار...</div>';

                try {
                    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
                        method: "GET",
                        headers: {
                            "x-access-token": "goldapi-38mjrsma55r00e-io",
                            "Content-Type": "application/json"
                        }
                    });

                    if (!response.ok) {
                        throw new Error("فشل الاتصال بالخادم");
                    }

                    /* تم تصحيح الخطأ هنا: تم إزالة تعليقات الـ HTML التي كانت مدمجة في الجافا سكريبت 
                       ويمكنك مستقبلاً إضافة كود الفضة هنا باستخدام تعليقات الـ JS العادية مثل هذا السطر.
                    */

                    const data = await response.json();

                    if (data && data.price) {
                        const priceUSD = data.price;
                        const omrExchangeRate = 0.3863;
                        const oneGram = 31.1034;
                        const twntiOne = 0.875;

                        const priceOMR = priceUSD * omrExchangeRate;
                        const gramOMR = priceOMR / oneGram;
                        const omaniType = gramOMR * twntiOne;

                        // حسابات السبائك الخاصة بك بناءً على معادلاتك الدقيقة
                        const parOne = gramOMR + 8;
                        const parTow = (gramOMR * 2.5) + 9;
                        const parFiv = (gramOMR * 5) + 10;
                        const parTan = (gramOMR * 10) + 12;
                        const parTwin = (gramOMR * 20) + 15;
                        const parOunce = (gramOMR * oneGram) + 20;

                        // الوقت والتاريخ اللحظي
                        const now = new Date();
                        const timeString = now.toLocaleTimeString('ar-OM', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                        const dateString = now.toLocaleDateString('ar-OM', { year: 'numeric', month: 'numeric', day: 'numeric' });

                        // عرض النتائج بهيكلية UI/UX احترافية ومنظمة ومريحة للعين
                        resultDiv.innerHTML = `
                            <div class="price-usd">السعر العالمي: <span class="global-price">${priceUSD.toFixed(2)}</span> دولار للأونصة</div>
                            
                            <table class="karat-table">
                                <tr>
                                    <td class="karat-title">عيار 24</td>
                                    <td class="price-title">(999.)</td>
                                    <td class="karat-value">${gramOMR.toFixed(3)} ر.ع.</td>
                                    <td class="price-title">لكل جرام</td>
                                </tr>
                                <tr>
                                    <td class="karat-title">عيار 21</td>
                                    <td class="price-title">(875.)</td>
                                    <td class="karat-value">${omaniType.toFixed(3)} ر.ع.</td>
                                     <td class="price-title">لكل جرام</td>
                                </tr>
                            </table>

                            <div class="section-title">أسعار سبائك الاستثمار (عيار 24)</div>
                            
                            <div class="bars-grid">
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة جرام واحد</span>
                                    <span class="bar-price">${parOne.toFixed(3)} ر.ع.</span>
                                </div>
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة جرامين ونصف</span>
                                    <span class="bar-price">${parTow.toFixed(3)} ر.ع.</span>
                                </div>
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة 5 جرام</span>
                                    <span class="bar-price">${parFiv.toFixed(3)} ر.ع.</span>
                                </div>
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة 10 جرام</span>
                                    <span class="bar-price">${parTan.toFixed(3)} ر.ع.</span>
                                </div>
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة 20 جرام</span>
                                    <span class="bar-price">${parTwin.toFixed(3)} ر.ع.</span>
                                </div>
                                <div class="bar-card">
                                    <span class="bar-name">سبيكة أنوصة واحدة</span>
                                    <span class="bar-price">${parOunce.toFixed(3)} ر.ع.</span>
                                </div>
                            </div>

                            <div class="request-time">آخر تحديث للأسعار: ${dateString} في ${timeString}</div>
                        `;
                    } else {
                        throw new Error("البيانات المستلمة غير مكتملة");
                    }

                } catch (error) {
                    console.error("حدث خطأ أثناء جلب البيانات:", error);
                    resultDiv.innerHTML = `<div class="error">عذراً، حدث خطأ أثناء تحديث الأسعار الحية. يرجى التحقق من اتصال الإنترنت والمحاولة مجدداً.</div>`;
                } finally {
                    fetchBtn.disabled = false;
                    fetchBtn.textContent = "احصل على السعر الآن";
                }
            });
        });
    </script>

</body>

</html>
