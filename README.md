<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سعر الذهب اللحظي</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            direction: rtl;
            text-align: center;
            margin-top: 50px;
        }
        .result {
            font-size: 24px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1>سعر الذهب اللحظي</h1>
    <button onclick="getLiveGoldPrice()">احصل على السعر الآن</button>
    <div class="result" id="result">النتيجة ستظهر هنا</div>

    <script>
        function getLiveGoldPrice() {
            fetch("https://www.goldapi.io/api/XAU/USD", {
                method: "GET",
                headers: {
                    "x-access-token": "goldapi-38mjrsma55r00e-io",  // <--- غيّر هذا
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (!response.ok) throw new Error("خطأ في الاستجابة");
                return response.json();
            })
            .then(data => {
                let price = data.price;
                document.getElementById('result').textContent = `سعر الذهب الحالي: $${price.toFixed(2)} لكل أونصة`;
            })
            .catch(error => {
                console.error("حدث خطأ:", error);
                document.getElementById('result').textContent = 'حدث خطأ أثناء جلب السعر.';
            });
        }
    </script>

</body>
</html>
