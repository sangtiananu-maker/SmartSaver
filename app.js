function scrollToTarget(topPos, smooth = true) {
  const appMain = document.querySelector('.app-main');
  if (appMain) {
    appMain.scrollTo({ top: topPos, behavior: smooth ? 'smooth' : 'auto' });
  }
  window.scrollTo({ top: topPos, behavior: smooth ? 'smooth' : 'auto' });
}
// ==========================================================================
// SMARTSAVER — JAVASCRIPT LOGIC (iOS 26 LIQUID GLASS & ONE UI EDITION)
// Fluid Liquid Droplet Physics, 120FPS Transitions, Real-Time Calculations
// ==========================================================================

// ===== TRANSLATION DICTIONARY =====
const TRANSLATIONS = {
  "en": {
    "tabCompare": "Compare Prices",
    "tabDiscount": "Discount Calc",
    "compareBadgeText": "Value Comparison Mode",
    "featRealtime": "Real-Time Calc",
    "featAuto": "Auto Best-Value",
    "discountBadgeText": "Discount Pro-Rata",
    "featDiscountDist": "Fair Proportional Split",
    "featDiscountSummary": "Full Summary",
    "compareSummarySubtitle": "Best Choice Found",
    "compareH2": "Compare Product Prices",
    "compareDesc": "Fill in the price and quantity for each item. The cheapest product will highlight automatically.",
    "addAnotherProduct": "Add Another Product",
    "clearAll": "Clear All",
    "labelPrice": "Price",
    "labelQuantity": "Quantity",
    "labelUnitPrice": "Unit Price",
    "labelBestValue": "Best Value!",
    "labelCheapest": "🏆 Cheapest",
    "labelProductName": "Product Name",
    "labelProductDefault": "Product",
    "resultBestChoice": "🏆 {name} is the best choice!",
    "resultSavesAvg": "Saves you an average of {pct}% compared to others.",
    "resultTie": "⚖️ Tie between {names}",
    "resultTieSub": "Both offer the exact same unit price value.",
    "resultSavePct": "Save {pct}%",
    "labelOriginalTotal": "Original Total",
    "labelTotalSaved": "Total Saved",
    "labelHowMuch": "How much did you actually pay?",
    "labelPaidPrice": "Paid price",
    "discountH2": "Allocate Discount Pro-Rata",
    "discountDesc": "Enter the full price of each item. The app will calculate the exact price you paid for each item based on your discount.",
    "addAnotherItem": "Add Another Item",
    "labelItemName": "Item Name",
    "labelFullPrice": "Full Price",
    "labelPaid": "Paid",
    "labelSaved": "Saved {amount}",
    "labelPaidGtFull": "Paid > Full Price",
    "modalSupportTitle": "Support Developer",
    "modalSupportSub": "Send a tip to support development or leave a message",
    "labelSupportTiers": "Choose Support Level",
    "tierCoffeeName": "Instant Coffee",
    "tierCoffeeDesc": "1 pouch of instant coffee",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Instant Noodle Tomyum",
    "tierNoodleDesc": "1 pack of tomyum noodles",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Rice with Scrambled Egg",
    "tierEggDesc": "1 plate of creamy scrambled egg rice",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung",
    "tierTomyumDesc": "1 large hot pot of tomyum kung",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Feedback & Bug Report",
    "feedbackPlaceholder": "Type your feedback, bug report, or feature request here...",
    "btnSendFeedback": "Send Message",
    "toastFeedbackSent": "Thank you! Your feedback has been sent.",
    "toastFeedbackEmpty": "Please type your feedback before sending.",
    "toastFeedbackOffline": "⚠️ No internet connection. Please connect and try again.",
    "toastFeedback401": "🔒 Google Form is not public yet (Error 401: Requires Google Login)",
    "toastFeedbackError": "⚠️ Failed to send feedback. Please try again later.",
    "toastPurchaseSuccess": "Thank you very much for your kind support! 💖",
    "modalLangTitle": "Select Language",
    "modalLangSub": "Choose your preferred language",
    "iosA2hsHtml": "Install on iPhone: Tap <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> and select <strong>'Add to Home Screen'</strong>"
  },
  "th": {
    "tabCompare": "เปรียบราคา",
    "tabDiscount": "คำนวณส่วนลด",
    "compareBadgeText": "โหมดเปรียบเทียบความคุ้มค่า",
    "featRealtime": "คำนวณเรียลไทม์",
    "featAuto": "ไฮไลต์สินค้าประหยัดสุด",
    "discountBadgeText": "โหมดคำนวณส่วนลด",
    "featDiscountDist": "กระจายส่วนลดแม่นยำ",
    "featDiscountSummary": "สรุปยอดรวมสุทธิ",
    "compareSummarySubtitle": "พบตัวเลือกที่ดีที่สุด",
    "compareH2": "เปรียบเทียบราคาสินค้า",
    "compareDesc": "กรอกราคาและปริมาณของแต่ละสินค้า ระบบจะไฮไลต์สินค้าที่คุ้มค่าที่สุดให้อัตโนมัติ",
    "addAnotherProduct": "เพิ่มสินค้า",
    "clearAll": "ล้างข้อมูล",
    "labelPrice": "ราคา",
    "labelQuantity": "ปริมาณ",
    "labelUnitPrice": "ราคาต่อหน่วย",
    "labelBestValue": "คุ้มที่สุด!",
    "labelCheapest": "🏆 ถูกที่สุด",
    "labelProductName": "ชื่อสินค้า",
    "labelProductDefault": "สินค้า",
    "resultBestChoice": "🏆 {name} คือตัวเลือกที่คุ้มที่สุด!",
    "resultSavesAvg": "ประหยัดเฉลี่ย {pct}% เมื่อเทียบกับตัวเลือกอื่น",
    "resultTie": "⚖️ ราคาเท่ากันระหว่าง {names}",
    "resultTieSub": "ทั้งคู่ให้ราคาต่อหน่วยที่คุ้มค่าเท่ากันทุกประการ",
    "resultSavePct": "ประหยัด {pct}%",
    "labelOriginalTotal": "ราคาเต็มรวม",
    "labelTotalSaved": "ส่วนลดรวม",
    "labelHowMuch": "คุณจ่ายเงินจริงทั้งหมดเท่าไหร่?",
    "labelPaidPrice": "ยอดที่จ่ายจริง",
    "discountH2": "แบ่งส่วนลดตามสัดส่วน",
    "discountDesc": "กรอกราคาเต็มของแต่ละสินค้า ระบบจะคำนวณราคาที่คุณจ่ายจริงสำหรับแต่ละชิ้นให้อัตโนมัติ",
    "addAnotherItem": "เพิ่มสินค้า",
    "labelItemName": "ชื่อสินค้า",
    "labelFullPrice": "ราคาเต็ม",
    "labelPaid": "จ่ายจริง",
    "labelSaved": "ประหยัด {amount}",
    "labelPaidGtFull": "จ่ายเกินราคาเต็ม",
    "modalSupportTitle": "สนับสนุนผู้พัฒนา",
    "modalSupportSub": "ส่งกำลังใจค่าน้ำชา หรือส่งข้อความแนะนำติชม",
    "labelSupportTiers": "เลือกสนับสนุนผู้พัฒนา",
    "tierCoffeeName": "Instant Coffee",
    "tierCoffeeDesc": "กาแฟสำเร็จรูป 1 ซอง",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Instant Noodle Tomyum",
    "tierNoodleDesc": "บะหมี่กึ่งสำเร็จรูปต้มยำ 1 ซอง",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Rice with Scrambled Egg",
    "tierEggDesc": "ข้าวไข่ข้น 1 จาน",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung",
    "tierTomyumDesc": "ต้มยำกุ้งหม้อไฟชุดใหญ่",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "ข้อความแนะนำติชม & แจ้งปัญหา",
    "feedbackPlaceholder": "พิมพ์ข้อความติชม แจ้งปัญหา หรือเสนอแนะฟังก์ชันใหม่ได้เลยครับ...",
    "btnSendFeedback": "ส่งข้อความ",
    "toastFeedbackSent": "ขอบคุณครับ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว",
    "toastFeedbackEmpty": "กรุณาพิมพ์ข้อความก่อนกดส่งครับ",
    "toastFeedbackOffline": "⚠️ ไม่พบการเชื่อมต่ออินเทอร์เน็ต กรุณาลองใหม่อีกครั้ง",
    "toastFeedback401": "🔒 แบบฟอร์มยังไม่ได้เปิดเป็นสาธารณะ (Google Form ติดสิทธิ์ 401)",
    "toastFeedbackError": "⚠️ ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง",
    "toastPurchaseSuccess": "ขอบพระคุณสำหรับการสนับสนุนผู้พัฒนาอย่างยิ่งครับ! 💖",
    "modalLangTitle": "เลือกภาษา",
    "modalLangSub": "เลือกภาษาที่ต้องการใช้งาน",
    "iosA2hsHtml": "ติดตั้งบน iPhone: แตะไอคอนแชร์ <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> แล้วเลือก <strong>'เพิ่มไปยังหน้าจอโฮม'</strong>"
  },
  "lo": {
    "tabCompare": "ສົມທຽບລາຄາ",
    "tabDiscount": "ຄິດໄລ່ສ່ວນຫຼຸດ",
    "compareBadgeText": "ໂໝດສົມທຽບຄວາມຄຸ້ມຄ່າ",
    "featRealtime": "ຄິດໄລ່ແບບສົດໆ",
    "featAuto": "ໄຮໄລ້ສິນຄ້າທີ່ປະຢັດສຸດ",
    "discountBadgeText": "ໂໝດຄິດໄລ່ສ່ວນຫຼຸດ",
    "featDiscountDist": "ແບ່ງປັນສ່ວນຫຼຸດຢ່າງຍຸຕິທຳ",
    "featDiscountSummary": "ສະຫຼຸບຍອດລວມ",
    "compareSummarySubtitle": "ພົບຕົວເລືອກທີ່ດີທີ່ສຸດ",
    "compareH2": "ສົມທຽບລາຄາສິນຄ້າ",
    "compareDesc": "ປ້ອນລາຄາແລະປະລິມານຂອງແຕ່ລະສິນຄ້າ. ລະບົບຈະໄຮໄລ້ສິນຄ້າທີ່ຖືກທີ່ສຸດໂດຍອັດຕະໂນມັດ.",
    "addAnotherProduct": "ເພີ່ມສິນຄ້າ",
    "clearAll": "ລຶບທັງໝົດ",
    "labelPrice": "ລາຄາ",
    "labelQuantity": "ປະລິມານ",
    "labelUnitPrice": "ລາຄາຕໍ່ໜ່ວຍ",
    "labelBestValue": "ຄຸ້ມຄ່າທີ່ສຸດ!",
    "labelCheapest": "🏆 ຖືກທີ່ສຸດ",
    "labelProductName": "ຊື່ສິນຄ້າ",
    "labelProductDefault": "ສິນຄ້າ",
    "resultBestChoice": "🏆 {name} ແມ່ນຕົວເລືອກທີ່ດີທີ່ສຸດ!",
    "resultSavesAvg": "ປະຢັດສະເລ່ຍ {pct}% ເມື່ອທຽບກັບຕົວເລືອກອື່ນ.",
    "resultTie": "⚖️ ລາຄາເທົ່າກັນລະຫວ່າງ {names}",
    "resultTieSub": "ທັງສອງໃຫ້ມູນຄ່າລາຄາຕໍ່ໜ່ວຍເທົ່າກັນທຸກປະການ.",
    "resultSavePct": "ປະຢັດ {pct}%",
    "labelOriginalTotal": "ລາຄາເຕັມລວມ",
    "labelTotalSaved": "ສ່ວນຫຼຸດລວມ",
    "labelHowMuch": "ເຈົ້າຈ່າຍເງິນຕົວຈິງທັງໝົດເທົ່າໃດ?",
    "labelPaidPrice": "ຍອດທີ່ຈ່າຍຕົວຈິງ",
    "discountH2": "ແບ່ງສ່ວນຫຼຸດຕາມສັດສ່ວນ",
    "discountDesc": "ປ້ອນລາຄາເຕັມຂອງແຕ່ລະລາຍການ. ແອັບຈະຄິດໄລ່ລາຄາຕົວຈິງທີ່ເຈົ້າຈ່າຍສຳລັບແຕ່ລະລາຍການ.",
    "addAnotherItem": "ເພີ່ມລາຍການ",
    "labelItemName": "ຊື່ລາຍການ",
    "labelFullPrice": "ລາຄາເຕັມ",
    "labelPaid": "ຈ່າຍຕົວຈິງ",
    "labelSaved": "ປະຢັດ {amount}",
    "labelPaidGtFull": "ຈ່າຍເກີນລາຄາເຕັມ",
    "modalSupportTitle": "ສະໜັບສະໜູນນັກພັດທະນາ",
    "modalSupportSub": "ສົ່ງກຳລັງໃຈຄ່ານ້ຳຊາ ຫຼື ສົ່ງຄຳແນະນຳຕິຊົມ",
    "labelSupportTiers": "ເລືອກລະດັບການສະໜັບສະໜູນ",
    "tierCoffeeName": "Instant Coffee",
    "tierCoffeeDesc": "ກາເຟສຳເລັດຮູບ 1 ຊອງ",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Instant Noodle Tomyum",
    "tierNoodleDesc": "ໝີ່ສຳເລັດຮູບຕົ້ມຍຳ 1 ຊອງ",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Rice with Scrambled Egg",
    "tierEggDesc": "ເຂົ້າໄຂ່ຂົ້ນ 1 ຈານ",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung",
    "tierTomyumDesc": "ຕົ້ມຍຳກຸ້ງໝໍ້ໄຟຊຸດໃຫຍ່",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "ຄຳແນະນຳຕິຊົມ & ລາຍງານບັນຫາ",
    "feedbackPlaceholder": "ພິມຄຳຕິຊົມ ລາຍງານບັນຫາ ຫຼື ສະເໜີຟັງຊັນໃໝ່ໄດ້ເລີຍ...",
    "btnSendFeedback": "ສົ່ງຂໍ້ຄວາມ",
    "toastFeedbackSent": "ຂອບໃຈຫຼາຍໆ! ຂໍ້ຄວາມຂອງເຈົ້າຖືກສົ່ງແລ້ວ.",
    "toastFeedbackEmpty": "ກະລຸນາພິມຂໍ້ຄວາມກ່ອນກົດສົ່ງ.",
    "toastFeedbackOffline": "⚠️ ບໍ່ມີການເຊື່ອມຕໍ່ອິນເຕີເນັດ. ກະລຸນາລອງໃໝ່ອີກຄັ້ງ.",
    "toastFeedback401": "🔒 ແບບຟອມຍັງບໍ່ເປີດເປັນສາທາລະນະ (Error 401)",
    "toastFeedbackError": "⚠️ ບໍ່ສາມາດສົ່ງຂໍ້ຄວາມໄດ້. ກະລຸນາລອງໃໝ່ພາຍຫຼັງ.",
    "toastPurchaseSuccess": "ຂອບໃຈຫຼາຍໆສຳລັບການສະໜັບສະໜູນ! 💖",
    "modalLangTitle": "ເລືອກພາສາ",
    "modalLangSub": "ເລືອກພາສາທີ່ຕ້ອງການນຳໃຊ້",
    "iosA2hsHtml": "ຕິດຕັ້ງເທິງ iPhone: ແຕະໄອຄອນແບ່ງປັນ <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> ແລ້ວເລືອກ <strong>'ເພີ່ມໃສ່ໜ້າຈໍໂຮມ'</strong>"
  },
  "zh": {
    "tabCompare": "比价工具",
    "tabDiscount": "折扣分摊",
    "compareBadgeText": "性价比对比模式",
    "featRealtime": "实时计算",
    "featAuto": "自动选优",
    "discountBadgeText": "按比例均摊折扣",
    "featDiscountDist": "公平按比例拆分",
    "featDiscountSummary": "完整结算汇总",
    "compareSummarySubtitle": "已找到最佳方案",
    "compareH2": "商品单价对比",
    "compareDesc": "输入每件商品的价格和数量，系统将自动标记性价比最高的商品。",
    "addAnotherProduct": "添加商品",
    "clearAll": "全部清空",
    "labelPrice": "价格",
    "labelQuantity": "数量",
    "labelUnitPrice": "单价",
    "labelBestValue": "最划算!",
    "labelCheapest": "🏆 最便宜",
    "labelProductName": "商品名称",
    "labelProductDefault": "商品",
    "resultBestChoice": "🏆 {name} 是性价比最高之选！",
    "resultSavesAvg": "相比其他选项平均节省 {pct}%。",
    "resultTie": "⚖️ {names} 价格完全相同",
    "resultTieSub": "这些商品提供完全一致的单价性价比。",
    "resultSavePct": "省 {pct}%",
    "labelOriginalTotal": "原价总计",
    "labelTotalSaved": "节省总额",
    "labelHowMuch": "您实付了多少金额？",
    "labelPaidPrice": "实付金额",
    "discountH2": "按比例计算折后价",
    "discountDesc": "输入每件商品的原价，系统会根据总折扣自动均摊计算每件商品的实付价格。",
    "addAnotherItem": "添加项目",
    "labelItemName": "品名",
    "labelFullPrice": "原价",
    "labelPaid": "折后实付",
    "labelSaved": "省 {amount}",
    "labelPaidGtFull": "实付超过原价",
    "modalSupportTitle": "支持开发者",
    "modalSupportSub": "请开发者喝杯咖啡或发送意见反馈",
    "labelSupportTiers": "选择支持档位",
    "tierCoffeeName": "速溶咖啡",
    "tierCoffeeDesc": "1包速溶咖啡",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "冬阴功方便面",
    "tierNoodleDesc": "1包冬阴功风味面",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "滑蛋盖饭",
    "tierEggDesc": "1份美味滑蛋盖饭",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "冬阴功大虾汤",
    "tierTomyumDesc": "1份豪华冬阴功大虾火锅",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "意见反馈与问题汇报",
    "feedbackPlaceholder": "请输入您的反馈、发现的Bug或建议的新功能...",
    "btnSendFeedback": "发送反馈",
    "toastFeedbackSent": "感谢您的支持！反馈已成功发送。",
    "toastFeedbackEmpty": "发送前请输入反馈内容。",
    "toastFeedbackOffline": "⚠️ 网络连接已断开，请连接网络后重试。",
    "toastFeedback401": "🔒 谷歌表单尚未公开 (Error 401)",
    "toastFeedbackError": "⚠️ 发送失败，请稍后重试。",
    "toastPurchaseSuccess": "非常感谢您对开发者的大力支持！💖",
    "modalLangTitle": "选择语言",
    "modalLangSub": "请选择您常用的语言",
    "iosA2hsHtml": "添加到 iPhone 主屏幕：点击分享图标 <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> 并选择 <strong>“添加到主屏幕”</strong>"
  },
  "ja": {
    "tabCompare": "価格比較",
    "tabDiscount": "割引計算",
    "compareBadgeText": "お得度比較モード",
    "featRealtime": "リアルタイム計算",
    "featAuto": "自動最安ハイライト",
    "discountBadgeText": "按分割引モード",
    "featDiscountDist": "正確な按分計算",
    "featDiscountSummary": "合計サマリー",
    "compareSummarySubtitle": "ベストな選択が見つかりました",
    "compareH2": "商品価格の比較",
    "compareDesc": "各商品の価格と数量を入力してください。最もお得な商品が自動でハイライトされます。",
    "addAnotherProduct": "商品を追加",
    "clearAll": "すべてクリア",
    "labelPrice": "価格",
    "labelQuantity": "数量",
    "labelUnitPrice": "単価",
    "labelBestValue": "1番お得!",
    "labelCheapest": "🏆 最安値",
    "labelProductName": "商品名",
    "labelProductDefault": "商品",
    "resultBestChoice": "🏆 {name} が最もお得な選択肢です！",
    "resultSavesAvg": "他と比べて平均 {pct}% お得になります。",
    "resultTie": "⚖️ {names} は同額です",
    "resultTieSub": "どちらも全く同じ単価・お得度です。",
    "resultSavePct": "{pct}% お得",
    "labelOriginalTotal": "定価合計",
    "labelTotalSaved": "割引合計",
    "labelHowMuch": "実際のお支払い総額はいくらですか？",
    "labelPaidPrice": "支払総額",
    "discountH2": "按分での割引計算",
    "discountDesc": "各商品の定価を入力してください。割引額に応じて商品ごとの実質支払額を自動計算します。",
    "addAnotherItem": "項目を追加",
    "labelItemName": "品名",
    "labelFullPrice": "定価",
    "labelPaid": "実質支払",
    "labelSaved": "{amount} お得",
    "labelPaidGtFull": "支払額が定価を超えています",
    "modalSupportTitle": "開発者を応援",
    "modalSupportSub": "コーヒー代を寄付したり、ご意見・要望を送る",
    "labelSupportTiers": "応援レベルを選択",
    "tierCoffeeName": "インスタントコーヒー",
    "tierCoffeeDesc": "スティックコーヒー1杯分",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "トムヤムラーメン",
    "tierNoodleDesc": "インスタントラーメン1袋",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "ふわとろオムライス",
    "tierEggDesc": "美味しいふわとろ卵ご飯1食",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "特製トムヤムクン",
    "tierTomyumDesc": "大鍋の豪華トムヤムクンセット",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "ご意見・不具合報告",
    "feedbackPlaceholder": "改善要望、不具合報告、新機能の提案などをご記入ください...",
    "btnSendFeedback": "送信する",
    "toastFeedbackSent": "ありがとうございます！メッセージを送信しました。",
    "toastFeedbackEmpty": "メッセージを入力してから送信してください。",
    "toastFeedbackOffline": "⚠️ インターネット接続がありません。接続を確認してください。",
    "toastFeedback401": "🔒 フォームが一般公開されていません (Error 401)",
    "toastFeedbackError": "⚠️ 送信に失敗しました。後でもう一度お試しください。",
    "toastPurchaseSuccess": "心温まるご支援を本当にありがとうございます！💖",
    "modalLangTitle": "言語を選択",
    "modalLangSub": "お好みの言語をお選びください",
    "iosA2hsHtml": "iPhoneのホーム画面に追加：共有アイコン <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> をタップし、<strong>「ホーム画面に追加」</strong> を選択"
  },
  "ko": {
    "tabCompare": "가격 비교",
    "tabDiscount": "할인 계산",
    "compareBadgeText": "가성비 비교 모드",
    "featRealtime": "실시간 계산",
    "featAuto": "최저가 자동 강조",
    "discountBadgeText": "비례 할인 모드",
    "featDiscountDist": "정확한 비율 배분",
    "featDiscountSummary": "전체 정산 요약",
    "compareSummarySubtitle": "최고의 선택 발견",
    "compareH2": "상품 가격 비교",
    "compareDesc": "각 상품의 가격과 수량을 입력하세요. 가장 가성비 좋은 상품이 자동으로 강조됩니다.",
    "addAnotherProduct": "상품 추가",
    "clearAll": "전체 삭제",
    "labelPrice": "가격",
    "labelQuantity": "수량",
    "labelUnitPrice": "단가",
    "labelBestValue": "최고 가성비!",
    "labelCheapest": "🏆 최저가",
    "labelProductName": "상품명",
    "labelProductDefault": "상품",
    "resultBestChoice": "🏆 {name}이(가) 가장 좋은 선택입니다!",
    "resultSavesAvg": "다른 항목 대비 평균 {pct}% 절약됩니다.",
    "resultTie": "⚖️ {names} 동률",
    "resultTieSub": "모두 정확히 동일한 단가 가치를 제공합니다.",
    "resultSavePct": "{pct}% 절약",
    "labelOriginalTotal": "정가 총액",
    "labelTotalSaved": "총 할인액",
    "labelHowMuch": "실제 지불한 총 금액은 얼마인가요?",
    "labelPaidPrice": "실제 결제 금액",
    "discountH2": "할인액 비례 배분",
    "discountDesc": "각 상품의 정가를 입력하면 전체 할인에 따라 각 상품별 실제 결제액을 자동 계산합니다.",
    "addAnotherItem": "항목 추가",
    "labelItemName": "항목명",
    "labelFullPrice": "정가",
    "labelPaid": "실 결제",
    "labelSaved": "{amount} 절약",
    "labelPaidGtFull": "결제액이 정가보다 큼",
    "modalSupportTitle": "개발자 후원하기",
    "modalSupportSub": "따뜻한 커피 한 잔을 선물하거나 피드백을 남겨주세요",
    "labelSupportTiers": "후원 금액 선택",
    "tierCoffeeName": "인스턴트 커피",
    "tierCoffeeDesc": "커피 믹스 1포",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "똠얌 라면",
    "tierNoodleDesc": "얼큰한 똠얌 라면 1봉지",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "촉촉한 계란덮밥",
    "tierEggDesc": "든든하고 맛있는 계란덮밥 한 그릇",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "똠얌꿍 전골",
    "tierTomyumDesc": "푸짐한 똠얌꿍 특선 한 냄비",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "피드백 및 버그 신고",
    "feedbackPlaceholder": "소중한 의견, 버그 신고, 또는 원하는 새로운 기능을 입력해주세요...",
    "btnSendFeedback": "메시지 전송",
    "toastFeedbackSent": "감사합니다! 의견이 성공적으로 전송되었습니다.",
    "toastFeedbackEmpty": "메시지를 입력한 후 전송해 주세요.",
    "toastFeedbackOffline": "⚠️ 인터넷 연결이 없습니다. 연결 상태를 확인해주세요.",
    "toastFeedback401": "🔒 설문지가 공개되지 않았습니다 (Error 401)",
    "toastFeedbackError": "⚠️ 전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
    "toastPurchaseSuccess": "개발자를 응원해 주셔서 진심으로 감사드립니다! 💖",
    "modalLangTitle": "언어 선택",
    "modalLangSub": "사용할 언어를 선택하세요",
    "iosA2hsHtml": "iPhone 홈 화면에 추가: 공유 아이콘 <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> 탭 후 <strong>'홈 화면에 추가'</strong> 선택"
  },
  "es": {
    "tabCompare": "Comparar",
    "tabDiscount": "Descuentos",
    "compareBadgeText": "Modo Mejor Valor",
    "featRealtime": "Cálculo en Tiempo Real",
    "featAuto": "Auto Más Económico",
    "discountBadgeText": "Descuento Proporcional",
    "featDiscountDist": "División Justa y Exacta",
    "featDiscountSummary": "Resumen Completo",
    "compareSummarySubtitle": "Mejor opción encontrada",
    "compareH2": "Comparar Precios de Productos",
    "compareDesc": "Ingresa el precio y la cantidad de cada artículo. El más conveniente se resaltará automáticamente.",
    "addAnotherProduct": "Agregar Producto",
    "clearAll": "Limpiar Todo",
    "labelPrice": "Precio",
    "labelQuantity": "Cantidad",
    "labelUnitPrice": "Precio Unitario",
    "labelBestValue": "¡Mejor Valor!",
    "labelCheapest": "🏆 Más Barato",
    "labelProductName": "Nombre del Producto",
    "labelProductDefault": "Producto",
    "resultBestChoice": "🏆 ¡{name} es la mejor opción!",
    "resultSavesAvg": "Te ahorra un promedio de {pct}% en comparación con los demás.",
    "resultTie": "⚖️ Empate entre {names}",
    "resultTieSub": "Ambos ofrecen exactamente el mismo precio unitario.",
    "resultSavePct": "Ahorra {pct}%",
    "labelOriginalTotal": "Total Original",
    "labelTotalSaved": "Total Ahorrado",
    "labelHowMuch": "¿Cuánto pagaste en total en realidad?",
    "labelPaidPrice": "Precio pagado",
    "discountH2": "Distribuir Descuento Pro-Rata",
    "discountDesc": "Ingresa el precio de lista de cada artículo. La app calculará lo que pagaste por cada uno.",
    "addAnotherItem": "Agregar Artículo",
    "labelItemName": "Artículo",
    "labelFullPrice": "Precio Original",
    "labelPaid": "Pagado",
    "labelSaved": "Ahorras {amount}",
    "labelPaidGtFull": "Pagado > Precio Original",
    "modalSupportTitle": "Apoyar al Desarrollador",
    "modalSupportSub": "Invita un café o envía tus comentarios y sugerencias",
    "labelSupportTiers": "Selecciona el nivel de apoyo",
    "tierCoffeeName": "Café Instantáneo",
    "tierCoffeeDesc": "1 sobre de café instantáneo",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Fideos Tomyum",
    "tierNoodleDesc": "1 paquete de fideos picantes",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Arroz con Huevo",
    "tierEggDesc": "1 plato de arroz con huevos cremosos",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung",
    "tierTomyumDesc": "1 cazuela grande de sopa Tomyum Kung",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Comentarios y Reporte de Errores",
    "feedbackPlaceholder": "Escribe aquí tus sugerencias, reportes o ideas...",
    "btnSendFeedback": "Enviar Mensaje",
    "toastFeedbackSent": "¡Muchas gracias! Tus comentarios han sido enviados.",
    "toastFeedbackEmpty": "Por favor escribe un mensaje antes de enviar.",
    "toastFeedbackOffline": "⚠️ Sin conexión a internet. Revisa tu conexión.",
    "toastFeedback401": "🔒 El formulario no es público aún (Error 401)",
    "toastFeedbackError": "⚠️ Error al enviar. Intenta de nuevo más tarde.",
    "toastPurchaseSuccess": "¡Muchísimas gracias por tu generoso apoyo! 💖",
    "modalLangTitle": "Seleccionar Idioma",
    "modalLangSub": "Elige tu idioma preferido",
    "iosA2hsHtml": "Instalar en iPhone: Pulsa <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> y elige <strong>'Añadir a pantalla de inicio'</strong>"
  },
  "fr": {
    "tabCompare": "Comparer",
    "tabDiscount": "Réductions",
    "compareBadgeText": "Mode Meilleur Rapport",
    "featRealtime": "Calcul en Temps Réel",
    "featAuto": "Sélection Auto Éco",
    "discountBadgeText": "Répartition au Prorata",
    "featDiscountDist": "Partage Équitable",
    "featDiscountSummary": "Bilan Complet",
    "compareSummarySubtitle": "Meilleur choix identifié",
    "compareH2": "Comparer les Prix",
    "compareDesc": "Saisissez le prix et la quantité de chaque article. Le produit le plus avantageux sera mis en avant.",
    "addAnotherProduct": "Ajouter un Produit",
    "clearAll": "Tout Effacer",
    "labelPrice": "Prix",
    "labelQuantity": "Quantité",
    "labelUnitPrice": "Prix Unitaire",
    "labelBestValue": "Meilleure Affaire!",
    "labelCheapest": "🏆 Le Moins Cher",
    "labelProductName": "Nom du Produit",
    "labelProductDefault": "Produit",
    "resultBestChoice": "🏆 {name} est le meilleur choix !",
    "resultSavesAvg": "Économie moyenne de {pct}% par rapport aux autres.",
    "resultTie": "⚖️ Égalité entre {names}",
    "resultTieSub": "Tous offrent exactement le même prix unitaire.",
    "resultSavePct": "-{pct}%",
    "labelOriginalTotal": "Total Brut",
    "labelTotalSaved": "Total Économisé",
    "labelHowMuch": "Combien avez-vous réellement payé ?",
    "labelPaidPrice": "Montant payé",
    "discountH2": "Répartition de Remise au Prorata",
    "discountDesc": "Entrez le prix plein de chaque article. L'application calcule le montant payé pour chacun.",
    "addAnotherItem": "Ajouter un Article",
    "labelItemName": "Nom de l'Article",
    "labelFullPrice": "Prix Plein",
    "labelPaid": "Payé",
    "labelSaved": "Économie {amount}",
    "labelPaidGtFull": "Payé > Prix Plein",
    "modalSupportTitle": "Soutenir le Développeur",
    "modalSupportSub": "Offrez un café ou partagez vos suggestions et retours",
    "labelSupportTiers": "Choisir le montant du pourboire",
    "tierCoffeeName": "Café Instantané",
    "tierCoffeeDesc": "1 sachet de café soluble",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Nouilles Tomyum",
    "tierNoodleDesc": "1 sachet de nouilles asiatiques",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Riz aux Œufs Brouillés",
    "tierEggDesc": "1 délicieux bol de riz aux œufs",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Marmite Tomyum Kung",
    "tierTomyumDesc": "1 grand pot-au-feu thaïlandais aux crevettes",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Suggestions & Signalements",
    "feedbackPlaceholder": "Écrivez votre message, signalez un bug ou proposez une idée...",
    "btnSendFeedback": "Envoyer",
    "toastFeedbackSent": "Merci beaucoup ! Votre message a bien été envoyé.",
    "toastFeedbackEmpty": "Veuillez saisir votre message avant d'envoyer.",
    "toastFeedbackOffline": "⚠️ Aucune connexion Internet disponible.",
    "toastFeedback401": "🔒 Formulaire privé (Erreur 401)",
    "toastFeedbackError": "⚠️ Échec de l'envoi. Veuillez réessayer plus tard.",
    "toastPurchaseSuccess": "Un immense merci pour votre chaleureux soutien ! 💖",
    "modalLangTitle": "Choisir la Langue",
    "modalLangSub": "Sélectionnez votre langue préférée",
    "iosA2hsHtml": "Installer sur iPhone : Appuyez sur <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> puis <strong>'Sur l\'écran d\'accueil'</strong>"
  },
  "de": {
    "tabCompare": "Preisvergleich",
    "tabDiscount": "Rabatt-Rechner",
    "compareBadgeText": "Preis-Leistungs-Modus",
    "featRealtime": "Echtzeit-Berechnung",
    "featAuto": "Bester Sparpreis",
    "discountBadgeText": "Anteiliger Rabatt",
    "featDiscountDist": "Faire proportionale Aufteilung",
    "featDiscountSummary": "Vollständige Übersicht",
    "compareSummarySubtitle": "Beste Wahl gefunden",
    "compareH2": "Produktpreise vergleichen",
    "compareDesc": "Geben Sie Preis und Menge jedes Artikels ein. Das günstigste Produkt wird automatisch hervorgehoben.",
    "addAnotherProduct": "Produkt hinzufügen",
    "clearAll": "Alles zurücksetzen",
    "labelPrice": "Preis",
    "labelQuantity": "Menge",
    "labelUnitPrice": "Grundpreis",
    "labelBestValue": "Bester Wert!",
    "labelCheapest": "🏆 Günstigster",
    "labelProductName": "Produktname",
    "labelProductDefault": "Produkt",
    "resultBestChoice": "🏆 {name} ist die beste Wahl!",
    "resultSavesAvg": "Spart durchschnittlich {pct}% gegenüber anderen.",
    "resultTie": "⚖️ Gleichstand zwischen {names}",
    "resultTieSub": "Beide bieten exakt denselben Grundpreis.",
    "resultSavePct": "{pct}% sparen",
    "labelOriginalTotal": "Gesamter Originalpreis",
    "labelTotalSaved": "Gesamt gespart",
    "labelHowMuch": "Wie viel haben Sie tatsächlich bezahlt?",
    "labelPaidPrice": "Gezahlter Betrag",
    "discountH2": "Rabatt anteilig verteilen",
    "discountDesc": "Geben Sie den Originalpreis der Artikel ein. Die App berechnet den anteilig gezahlten Preis.",
    "addAnotherItem": "Artikel hinzufügen",
    "labelItemName": "Artikelname",
    "labelFullPrice": "Originalpreis",
    "labelPaid": "Gezahlt",
    "labelSaved": "{amount} gespart",
    "labelPaidGtFull": "Gezahlt > Originalpreis",
    "modalSupportTitle": "Entwickler unterstützen",
    "modalSupportSub": "Spendieren Sie einen Kaffee oder senden Sie Feedback",
    "labelSupportTiers": "Unterstützungsstufe wählen",
    "tierCoffeeName": "Instantkaffee",
    "tierCoffeeDesc": "1 Beutel Instantkaffee",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Tomyum Nudeln",
    "tierNoodleDesc": "1 Packung Tomyum Instantnudeln",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Reis mit Rührei",
    "tierEggDesc": "1 Teller cremiger Rühreireis",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung Topf",
    "tierTomyumDesc": "1 großer Feuertopf Tomyum Kung Garnelensuppe",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Feedback & Fehlermeldung",
    "feedbackPlaceholder": "Schreiben Sie hier Ihr Feedback oder neue Ideen...",
    "btnSendFeedback": "Nachricht senden",
    "toastFeedbackSent": "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
    "toastFeedbackEmpty": "Bitte geben Sie eine Nachricht ein.",
    "toastFeedbackOffline": "⚠️ Keine Internetverbindung.",
    "toastFeedback401": "🔒 Formular nicht öffentlich (Fehler 401)",
    "toastFeedbackError": "⚠️ Fehler beim Senden. Bitte später versuchen.",
    "toastPurchaseSuccess": "Herzlichen Dank für Ihre freundliche Unterstützung! 💖",
    "modalLangTitle": "Sprache auswählen",
    "modalLangSub": "Wählen Sie Ihre bevorzugte Sprache",
    "iosA2hsHtml": "Auf iPhone installieren: Tippe auf <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> und wähle <strong>'Zum Home-Bildschirm'</strong>"
  },
  "pt": {
    "tabCompare": "Comparar",
    "tabDiscount": "Descontos",
    "compareBadgeText": "Modo Custo-Benefício",
    "featRealtime": "Cálculo em Tempo Real",
    "featAuto": "Destaque Mais Barato",
    "discountBadgeText": "Desconto Proporcional",
    "featDiscountDist": "Divisão Justa Pro-Rata",
    "featDiscountSummary": "Resumo Completo",
    "compareSummarySubtitle": "Melhor escolha encontrada",
    "compareH2": "Comparar Preços de Produtos",
    "compareDesc": "Informe o preço e a quantidade de cada item. O produto mais vantajoso será destacado automaticamente.",
    "addAnotherProduct": "Adicionar Produto",
    "clearAll": "Limpar Tudo",
    "labelPrice": "Preço",
    "labelQuantity": "Quantidade",
    "labelUnitPrice": "Preço Unitário",
    "labelBestValue": "Melhor Custo!",
    "labelCheapest": "🏆 Mais Barato",
    "labelProductName": "Nome do Produto",
    "labelProductDefault": "Produto",
    "resultBestChoice": "🏆 {name} é a melhor opção!",
    "resultSavesAvg": "Economiza em média {pct}% em relação aos demais.",
    "resultTie": "⚖️ Empate entre {names}",
    "resultTieSub": "Ambos oferecem exatamente o mesmo preço unitário.",
    "resultSavePct": "Economize {pct}%",
    "labelOriginalTotal": "Total Original",
    "labelTotalSaved": "Total Economizado",
    "labelHowMuch": "Quanto você pagou de fato?",
    "labelPaidPrice": "Valor pago",
    "discountH2": "Dividir Desconto Proporcionalmente",
    "discountDesc": "Insira o preço original de cada item. O app calcula o valor proporcional pago por item.",
    "addAnotherItem": "Adicionar Item",
    "labelItemName": "Nome do Item",
    "labelFullPrice": "Preço Original",
    "labelPaid": "Pago",
    "labelSaved": "Economizou {amount}",
    "labelPaidGtFull": "Pago > Preço Original",
    "modalSupportTitle": "Apoiar o Desenvolvedor",
    "modalSupportSub": "Pague um café ou envie sugestões e comentários",
    "labelSupportTiers": "Escolha o nível de apoio",
    "tierCoffeeName": "Café Solúvel",
    "tierCoffeeDesc": "1 sachê de café solúvel",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Miojo Tomyum",
    "tierNoodleDesc": "1 pacote de macarrão instantâneo",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Arroz com Ovos Mexidos",
    "tierEggDesc": "1 prato de arroz quentinho com ovos",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung",
    "tierTomyumDesc": "1 panela grande de sopa especial de camarão",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Comentários e Sugestões",
    "feedbackPlaceholder": "Digite sua mensagem, sugestão ou reporte de erro...",
    "btnSendFeedback": "Enviar Mensagem",
    "toastFeedbackSent": "Muito obrigado! Sua mensagem foi enviada com sucesso.",
    "toastFeedbackEmpty": "Por favor, digite uma mensagem antes de enviar.",
    "toastFeedbackOffline": "⚠️ Sem conexão com a internet.",
    "toastFeedback401": "🔒 Formulário não público (Erro 401)",
    "toastFeedbackError": "⚠️ Falha ao enviar. Tente novamente mais tarde.",
    "toastPurchaseSuccess": "Muito obrigado pelo seu generoso apoio! 💖",
    "modalLangTitle": "Selecionar Idioma",
    "modalLangSub": "Escolha o seu idioma de preferência",
    "iosA2hsHtml": "Instalar no iPhone: Toque em <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> e escolha <strong>'Adicionar à Tela de Início'</strong>"
  },
  "id": {
    "tabCompare": "Bandingkan",
    "tabDiscount": "Hitung Diskon",
    "compareBadgeText": "Mode Perbandingan Hemat",
    "featRealtime": "Hitung Real-Time",
    "featAuto": "Paling Hemat Otomatis",
    "discountBadgeText": "Bagi Diskon Proporsional",
    "featDiscountDist": "Pembagian Rata & Akurat",
    "featDiscountSummary": "Ringkasan Total",
    "compareSummarySubtitle": "Pilihan Terbaik Ditemukan",
    "compareH2": "Bandingkan Harga Produk",
    "compareDesc": "Isi harga dan jumlah tiap barang. Produk paling hemat akan ditandai secara otomatis.",
    "addAnotherProduct": "Tambah Produk",
    "clearAll": "Hapus Semua",
    "labelPrice": "Harga",
    "labelQuantity": "Jumlah",
    "labelUnitPrice": "Harga per Satuan",
    "labelBestValue": "Paling Hemat!",
    "labelCheapest": "🏆 Paling Murah",
    "labelProductName": "Nama Produk",
    "labelProductDefault": "Produk",
    "resultBestChoice": "🏆 {name} adalah pilihan paling hemat!",
    "resultSavesAvg": "Menghemat rata-rata {pct}% dibandingkan yang lain.",
    "resultTie": "⚖️ Seri antara {names}",
    "resultTieSub": "Keduanya memberikan nilai harga per satuan yang sama persis.",
    "resultSavePct": "Hemat {pct}%",
    "labelOriginalTotal": "Total Harga Asli",
    "labelTotalSaved": "Total Hemat",
    "labelHowMuch": "Berapa total yang sebenarnya Anda bayar?",
    "labelPaidPrice": "Nominal dibayar",
    "discountH2": "Bagi Diskon Secara Proporsional",
    "discountDesc": "Masukkan harga asli tiap barang. Aplikasi akan menghitung harga bersih yang Anda bayar.",
    "addAnotherItem": "Tambah Barang",
    "labelItemName": "Nama Barang",
    "labelFullPrice": "Harga Asli",
    "labelPaid": "Dibayar",
    "labelSaved": "Hemat {amount}",
    "labelPaidGtFull": "Bayar > Harga Asli",
    "modalSupportTitle": "Dukung Pengembang",
    "modalSupportSub": "Traktir secangkir kopi atau kirim masukan dan saran",
    "labelSupportTiers": "Pilih Tingkat Dukungan",
    "tierCoffeeName": "Kopi Instan",
    "tierCoffeeDesc": "1 sachet kopi instan",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "Mie Instan Tomyum",
    "tierNoodleDesc": "1 bungkus mie instan tomyum",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "Nasi Telur Dadar Lembut",
    "tierEggDesc": "1 porsi nasi hangat dengan telur",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "Tomyum Kung Porsi Besar",
    "tierTomyumDesc": "1 mangkuk besar sup tomyum udang spesial",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "Saran & Laporan Masalah",
    "feedbackPlaceholder": "Tulis saran, kendala atau ide fitur baru di sini...",
    "btnSendFeedback": "Kirim Pesan",
    "toastFeedbackSent": "Terima kasih banyak! Pesan Anda telah terkirim.",
    "toastFeedbackEmpty": "Silakan ketik pesan terlebih dahulu.",
    "toastFeedbackOffline": "⚠️ Tidak ada koneksi internet.",
    "toastFeedback401": "🔒 Formulir belum terbuka untuk umum (Error 401)",
    "toastFeedbackError": "⚠️ Gagal mengirim pesan. Silakan coba lagi.",
    "toastPurchaseSuccess": "Terima kasih banyak atas dukungan luar biasa Anda! 💖",
    "modalLangTitle": "Pilih Bahasa",
    "modalLangSub": "Pilih bahasa yang Anda inginkan",
    "iosA2hsHtml": "Pasang di iPhone: Ketuk <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> dan pilih <strong>'Tambah ke Layar Utama'</strong>"
  },
  "hi": {
    "tabCompare": "मूल्य तुलना",
    "tabDiscount": "छूट गणना",
    "compareBadgeText": "सर्वोत्तम मूल्य मोड",
    "featRealtime": "रीयल-टाइम गणना",
    "featAuto": "ऑटो सबसे सस्ता",
    "discountBadgeText": "समानुपातिक छूट",
    "featDiscountDist": "सटीक आनुपातिक विभाजन",
    "featDiscountSummary": "पूर्ण सारांश",
    "compareSummarySubtitle": "सर्वश्रेष्ठ विकल्प मिला",
    "compareH2": "उत्पाद की कीमतों की तुलना करें",
    "compareDesc": "प्रत्येक वस्तु की कीमत और मात्रा दर्ज करें। सबसे किफायती वस्तु अपने आप हाइलाइट हो जाएगी।",
    "addAnotherProduct": "उत्पाद जोड़ें",
    "clearAll": "सब साफ करें",
    "labelPrice": "कीमत",
    "labelQuantity": "मात्रा",
    "labelUnitPrice": "प्रति इकाई मूल्य",
    "labelBestValue": "सबसे किफायती!",
    "labelCheapest": "🏆 सबसे सस्ता",
    "labelProductName": "उत्पाद का नाम",
    "labelProductDefault": "उत्पाद",
    "resultBestChoice": "🏆 {name} सबसे अच्छा विकल्प है!",
    "resultSavesAvg": "अन्य विकल्पों की तुलना में औसतन {pct}% की बचत होती है।",
    "resultTie": "⚖️ {names} के बीच बराबरी",
    "resultTieSub": "दोनों बिल्कुल समान प्रति इकाई मूल्य प्रदान करते हैं।",
    "resultSavePct": "{pct}% बचत",
    "labelOriginalTotal": "कुल मूल मूल्य",
    "labelTotalSaved": "कुल बचत",
    "labelHowMuch": "आपने वास्तव में कुल कितना भुगतान किया?",
    "labelPaidPrice": "भुगतान की गई राशि",
    "discountH2": "छूट को समानुपातिक रूप से बांटें",
    "discountDesc": "प्रत्येक वस्तु का मूल मूल्य दर्ज करें। ऐप आपके द्वारा चुकाई गई वास्तविक कीमत की गणना करेगा।",
    "addAnotherItem": "वस्तु जोड़ें",
    "labelItemName": "वस्तु का नाम",
    "labelFullPrice": "मूल मूल्य",
    "labelPaid": "भुगतान किया",
    "labelSaved": "{amount} की बचत",
    "labelPaidGtFull": "भुगतान > मूल मूल्य",
    "modalSupportTitle": "डेवलपर का समर्थन करें",
    "modalSupportSub": "चाय-कॉफ़ी के लिए टिप भेजें या अपने सुझाव साझा करें",
    "labelSupportTiers": "समर्थन स्तर चुनें",
    "tierCoffeeName": "इंस्टेंट कॉफ़ी",
    "tierCoffeeDesc": "1 पाउच इंस्टेंट कॉफ़ी",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "टॉमयम नूडल्स",
    "tierNoodleDesc": "1 पैकेट टॉमयम नूडल्स",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "अंडा राइस",
    "tierEggDesc": "1 प्लेट स्वादिष्ट अंडा चावल",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "टॉमयम कुंग सूप",
    "tierTomyumDesc": "1 बड़ा स्वादिष्ट टॉमयम सूप पॉट",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "प्रतिक्रिया और बग रिपोर्ट",
    "feedbackPlaceholder": "अपनी प्रतिक्रिया, समस्या या नए फीचर का सुझाव यहाँ लिखें...",
    "btnSendFeedback": "संदेश भेजें",
    "toastFeedbackSent": "धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक भेज दी गई है।",
    "toastFeedbackEmpty": "कृपया भेजने से पहले अपना संदेश लिखें।",
    "toastFeedbackOffline": "⚠️ कोई इंटरनेट कनेक्शन नहीं है।",
    "toastFeedback401": "🔒 फ़ॉर्म सार्वजनिक नहीं है (Error 401)",
    "toastFeedbackError": "⚠️ संदेश भेजने में विफल। कृपया बाद में प्रयास करें।",
    "toastPurchaseSuccess": "आपके बहुमूल्य समर्थन के लिए बहुत-बहुत धन्यवाद! 💖",
    "modalLangTitle": "भाषा चुनें",
    "modalLangSub": "अपनी पसंदीदा भाषा चुनें",
    "iosA2hsHtml": "iPhone पर जोड़ें: <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> टैप करें और <strong>'होम स्क्रीन पर जोड़ें'</strong> चुनें"
  },
  "ar": {
    "tabCompare": "مقارنة الأسعار",
    "tabDiscount": "حساب الخصم",
    "compareBadgeText": "وضع مقارنة القيمة",
    "featRealtime": "حساب فوري",
    "featAuto": "تحديد الأوفر تلقائياً",
    "discountBadgeText": "توزيع الخصم بالتناسب",
    "featDiscountDist": "تقسيم نسبي دقيق",
    "featDiscountSummary": "ملخص شامل",
    "compareSummarySubtitle": "تم العثور على الخيار الأفضل",
    "compareH2": "مقارنة أسعار المنتجات",
    "compareDesc": "أدخل سعر وكمية كل منتج. سيتم تمييز الخيار الأوفر والأكثر توفيراً تلقائياً.",
    "addAnotherProduct": "إضافة منتج",
    "clearAll": "مسح الكل",
    "labelPrice": "السعر",
    "labelQuantity": "الكمية",
    "labelUnitPrice": "سعر الوحدة",
    "labelBestValue": "الأفضل قيمة!",
    "labelCheapest": "🏆 الأرخص",
    "labelProductName": "اسم المنتج",
    "labelProductDefault": "منتج",
    "resultBestChoice": "🏆 {name} هو الخيار الأفضل!",
    "resultSavesAvg": "يوفر لك في المتوسط {pct}% مقارنة بالخيارات الأخرى.",
    "resultTie": "⚖️ تعادل بين {names}",
    "resultTieSub": "كلاهما يقدمان نفس سعر الوحدة تماماً.",
    "resultSavePct": "وفر {pct}%",
    "labelOriginalTotal": "إجمالي السعر الأصلي",
    "labelTotalSaved": "إجمالي التوفير",
    "labelHowMuch": "كم دفعت بالفعل في الإجمالي؟",
    "labelPaidPrice": "المبلغ المدفوع",
    "discountH2": "توزيع الخصم بالتناسب",
    "discountDesc": "أدخل السعر الكامل لكل عنصر. سيقوم التطبيق باحتساب السعر الفعلي المدفوع لكل عنصر.",
    "addAnotherItem": "إضافة عنصر",
    "labelItemName": "اسم العنصر",
    "labelFullPrice": "السعر الأصلي",
    "labelPaid": "المدفوع",
    "labelSaved": "وفرت {amount}",
    "labelPaidGtFull": "المدفوع أكبر من السعر الأصلي",
    "modalSupportTitle": "دعم المطور",
    "modalSupportSub": "أرسل دعماً معنوياً للمطور أو اترك اقتراحاتك",
    "labelSupportTiers": "اختر مستوى الدعم",
    "tierCoffeeName": "قهوة سريعة التحضير",
    "tierCoffeeDesc": "كيس واحد من القهوة سريعة التحضير",
    "tierCoffeePrice": "0.30 USD",
    "tierNoodleName": "نودلز توم يام",
    "tierNoodleDesc": "عبوة نودلز توم يام",
    "tierNoodlePrice": "0.50 USD",
    "tierEggName": "أرز مع بيض مخفوق",
    "tierEggDesc": "طبق أرز مع بيض مخفوق لذيذ",
    "tierEggPrice": "1.00 USD",
    "tierTomyumName": "شوربة توم يام كونغ",
    "tierTomyumDesc": "وعاء كبير من حساء توم يام بالجمبري",
    "tierTomyumPrice": "5.00 USD",
    "labelFeedbackTitle": "الملاحظات والإبلاغ عن الأخطاء",
    "feedbackPlaceholder": "اكتب ملاحظاتك، أو أبلغ عن خطأ، أو اقترح ميزات جديدة...",
    "btnSendFeedback": "إرسال الرسالة",
    "toastFeedbackSent": "شكراً جزيلاً لك! تم إرسال رسالتك بنجاح.",
    "toastFeedbackEmpty": "يرجى كتابة رسالة قبل الإرسال.",
    "toastFeedbackOffline": "⚠️ لا يوجد اتصال بالإنترنت. يرجى المحاولة لاحقاً.",
    "toastFeedback401": "🔒 النموذج غير متاح للعامة حالياً (خطأ 401)",
    "toastFeedbackError": "⚠️ تعذر إرسال الرسالة. يرجى المحاولة لاحقاً.",
    "toastPurchaseSuccess": "شكراً جزيلاً على دعمكم الكريم! 💖",
    "modalLangTitle": "اختر اللغة",
    "modalLangSub": "اختر لغتك المفضلة",
    "iosA2hsHtml": "التثبيت على iPhone: اضغط على <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> واختر <strong>'إضافة إلى الصفحة الرئيسية'</strong>"
  }
};

function updateModalTexts() {
  const elModalLangTitle = document.getElementById('modal-lang-title');
  if (elModalLangTitle) elModalLangTitle.textContent = t('modalLangTitle');
  const elModalLangSub = document.getElementById('modal-lang-sub');
  if (elModalLangSub) elModalLangSub.textContent = t('modalLangSub');

  const elMTitle = document.getElementById('modal-support-title');
  if (elMTitle) elMTitle.textContent = t('modalSupportTitle');
  const elMSub = document.getElementById('modal-support-sub');
  if (elMSub) elMSub.textContent = t('modalSupportSub');
  const elLTiers = document.getElementById('label-support-tiers');
  if (elLTiers) elLTiers.textContent = t('labelSupportTiers');
  const elLFeedback = document.getElementById('label-feedback-title');
  if (elLFeedback) elLFeedback.textContent = t('labelFeedbackTitle');
  const elFeedbackInput = document.getElementById('feedback-textarea');
  if (elFeedbackInput) elFeedbackInput.placeholder = t('feedbackPlaceholder');
  const elBtnSend = document.getElementById('btn-send-text');
  if (elBtnSend) elBtnSend.textContent = t('btnSendFeedback');
  const elCoffeeDesc = document.getElementById('tier-desc-coffee');
  if (elCoffeeDesc) elCoffeeDesc.textContent = t('tierCoffeeDesc');
  const elNoodleDesc = document.getElementById('tier-desc-noodle');
  if (elNoodleDesc) elNoodleDesc.textContent = t('tierNoodleDesc');
  const elEggDesc = document.getElementById('tier-desc-egg');
  if (elEggDesc) elEggDesc.textContent = t('tierEggDesc');
  const elTomyumDesc = document.getElementById('tier-desc-tomyum');
  if (elTomyumDesc) elTomyumDesc.textContent = t('tierTomyumDesc');
}

// ===== APP STATE =====
const state = {
  activeTab: 'compare',
  theme: 'light',
  lang: 'th',
  compareItems: [],
  discountItems: [],
  discountPaid: '',
  comparePhase: 1,
  discountPhase: 1
};

function t(key, vars) {
  const lang = state.lang || 'th';
  let str = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.split('{' + k + '}').join(vars[k] !== undefined && vars[k] !== null ? vars[k] : '');
    });
  }
  return str;
}

function createNewCompareItem(index) {
  return {
    id: 'c_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    index: index,
    name: `${t('labelProductDefault')} ${index}`,
    isCustomName: false,
    price: '',
    quantity: '1',
    unitPrice: null
  };
}

function createNewDiscountItem(index) {
  return {
    id: 'd_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    index: index,
    name: `${t('labelItemName')} ${index}`,
    isCustomName: false,
    fullPrice: '',
    paidPrice: null,
    savedPrice: null
  };
}

const STORAGE_KEY = 'smartsaver_state_v20';

function getDefaultTheme() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function getDefaultLang() {
  const supported = ['th', 'en', 'lo', 'zh', 'ja', 'ko', 'es', 'fr', 'de', 'pt', 'id', 'hi', 'ar'];
  const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (supported.includes(navLang)) return navLang;
  const prefix = navLang.split('-')[0];
  if (supported.includes(prefix)) return prefix;
  return 'en';
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.theme = parsed.theme ? parsed.theme : getDefaultTheme();
      state.lang = parsed.lang ? parsed.lang : getDefaultLang();
      state.hasExplicitTheme = !!parsed.theme;
      state.hasExplicitLang= !!parsed.lang;
      state.activeTab = parsed.activeTab || 'compare';
      const isDefaultCompareName = (name, idx) => {
        const trimmed = (name || '').trim();
        return Object.values(TRANSLATIONS).some(tr => tr.labelProductDefault && (trimmed === `${tr.labelProductDefault} ${idx}` || trimmed === `${tr.labelProductDefault}${idx}`));
      };
      const isDefaultDiscountName = (name, idx) => {
        const trimmed = (name || '').trim();
        return Object.values(TRANSLATIONS).some(tr => tr.labelItemName && (trimmed === `${tr.labelItemName} ${idx}` || trimmed === `${tr.labelItemName}${idx}`));
      };

      state.compareItems = Array.isArray(parsed.compareItems) && parsed.compareItems.length >= 2
        ? parsed.compareItems.map((it, i) => {
            const idx = it.index || (i + 1);
            return {
              ...it,
              index: idx,
              isCustomName: it.isCustomName !== undefined ? it.isCustomName : !isDefaultCompareName(it.name, idx)
            };
          })
        : [createNewCompareItem(1), createNewCompareItem(2)];

      state.discountItems = Array.isArray(parsed.discountItems) && parsed.discountItems.length >= 1
        ? parsed.discountItems.map((it, i) => {
            const idx = it.index || (i + 1);
            return {
              ...it,
              index: idx,
              isCustomName: it.isCustomName !== undefined ? it.isCustomName : !isDefaultDiscountName(it.name, idx)
            };
          })
        : [createNewDiscountItem(1)];
      state.discountPaid = parsed.discountPaid || '';
      return;
    }
  } catch (e) {
    console.warn('Failed to parse localStorage:', e);
  }

  state.theme = getDefaultTheme();
  state.lang = getDefaultLang();
  state.compareItems = [createNewCompareItem(1), createNewCompareItem(2)];
  state.discountItems = [createNewDiscountItem(1)];
  state.comparePhase = 1;
  state.discountPhase = 1;
}

function saveState() {
  const data = {
    compareItems: state.compareItems,
    discountItems: state.discountItems,
    discountPaid: state.discountPaid,
    activeTab: state.activeTab,
    theme: state.theme,
    lang: state.lang
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ===== DOM REFERENCES =====
const themeToggleBtn         = document.getElementById('theme-toggle');
const langToggleBtn          = document.getElementById('lang-toggle');
const tabCompare             = document.getElementById('tab-compare');
const tabDiscount            = document.getElementById('tab-discount');
const comparePage            = document.getElementById('compare-page');
const discountPage           = document.getElementById('discount-page');
const liquidTabIndicator     = document.getElementById('liquid-tab-indicator');

const compareListContainer   = document.getElementById('compare-list');
const addCompareItemBtn      = document.getElementById('add-compare-item-btn');
const clearCompareBtn        = document.getElementById('clear-compare-btn');

const discountListContainer  = document.getElementById('discount-list');
const addDiscountItemBtn     = document.getElementById('add-discount-item-btn');
const clearDiscountBtn       = document.getElementById('clear-discount-btn');
const discountPaidInput       = document.getElementById('discount-total-paid');

const compareSummaryCard     = document.getElementById('compare-summary-card');
const compareBestResult      = document.getElementById('compare-best-result');
const compareSavingsDetails  = document.getElementById('compare-savings-details');
const compareSummarySubtitle = document.getElementById('compare-summary-subtitle');

const discountTotalOriginal  = document.getElementById('discount-total-original');
const discountTotalSaved     = document.getElementById('discount-total-saved');
const discountPercentBadge   = document.getElementById('discount-percent-badge');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme();
  applyLang();
  applyTabInstant();
  initIosA2hs();

  discountPaidInput.value = state.discountPaid;

  updateModalTexts();

  renderCompareList();
  renderDiscountList();
  calculateCompare();
  calculateDiscount();

  discountPaidInput.addEventListener('input', (e) => {
    state.discountPaid = e.target.value;
    calculateDiscount();
  });

  window.addEventListener('resize', () => {
    const activeTabBtn = state.activeTab === 'compare' ? tabCompare : tabDiscount;
    updateLiquidTabIndicator(activeTabBtn, false);
  });
});

// ===== THEME TOGGLE & ANDROID NATIVE BRIDGE =====
themeToggleBtn.addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
});

function applyTheme() {
  const isDark = state.theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  const metaTheme = document.getElementById('theme-color-meta') || document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#070B14' : '#F8FAFC');
  }

  if (window.AndroidBridge && typeof window.AndroidBridge.setDarkMode === 'function') {
    try {
      window.AndroidBridge.setDarkMode(isDark);
    } catch (err) {
      console.warn('AndroidBridge call failed:', err);
    }
  }
}

// ===== LANGUAGE TOGGLE =====
const langModalBackdrop = document.getElementById('language-modal-backdrop');
const langModalCloseBtn = document.getElementById('lang-modal-close-btn');
const langSelectItems = document.querySelectorAll('.lang-select-item');

function openLanguageModal() {
  if (langModalBackdrop) {
    langSelectItems.forEach(item => {
      const l = item.getAttribute('data-lang');
      if (l === state.lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    langModalBackdrop.classList.remove('hidden');
  }
}

function closeLanguageModal() {
  if (langModalBackdrop) {
    langModalBackdrop.classList.add('hidden');
  }
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', openLanguageModal);
}

if (langModalCloseBtn) {
  langModalCloseBtn.addEventListener('click', closeLanguageModal);
}

if (langModalBackdrop) {
  langModalBackdrop.addEventListener('click', (e) => {
    if (e.target === langModalBackdrop) {
      closeLanguageModal();
    }
  });
}

langSelectItems.forEach(btn => {
  btn.getAttribute && btn.addEventListener('click', () => {
    const selLang = btn.getAttribute('data-lang');
    if (selLang) {
      state.lang = selLang;
      state.hasExplicitLang= true;
      applyLang();
      saveState();
      closeLanguageModal();
    }
  });
});

function getLangBadge(lang) {
  return (lang || 'th').toUpperCase();
}

function applyLang() {
  const langTextEl = langToggleBtn ? langToggleBtn.querySelector('.lang-text') : null;
  if (langTextEl) langTextEl.textContent = getLangBadge(state.lang);
  document.documentElement.lang = state.lang || 'th';
  if (state.lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Translate non-custom names seamlessly
  state.compareItems.forEach((item, index) => {
    const idx = item.index || (index + 1);
    item.index = idx;
    if (!item.isCustomName) {
      item.name = `${t('labelProductDefault')} ${idx}`;
    }
  });

  state.discountItems.forEach((item, index) => {
    const idx = item.index || (index + 1);
    item.index = idx;
    if (!item.isCustomName) {
      item.name = `${t('labelItemName')} ${idx}`;
    }
  });

  // Static Tabs
  document.querySelector('.tab-label[data-tab="compare"]').textContent = t('tabCompare');
  document.querySelector('.tab-label[data-tab="discount"]').textContent = t('tabDiscount');

  // Redesigned Badges & Chips
  const compareBadge = document.getElementById('compare-badge-text');
  if (compareBadge) compareBadge.textContent = t('compareBadgeText');
  const featRealtime = document.getElementById('feat-realtime');
  if (featRealtime) featRealtime.textContent = t('featRealtime');
  const featAuto = document.getElementById('feat-auto');
  if (featAuto) featAuto.textContent = t('featAuto');

  const discountBadge = document.getElementById('discount-badge-text');
  if (discountBadge) discountBadge.textContent = t('discountBadgeText');
  const featDiscDist = document.getElementById('feat-discount-dist');
  if (featDiscDist) featDiscDist.textContent = t('featDiscountDist');
  const featDiscSummary = document.getElementById('feat-discount-summary');
  if (featDiscSummary) featDiscSummary.textContent = t('featDiscountSummary');

  // Compare Page Static Texts
  document.getElementById('compare-h2').textContent = t('compareH2');
  document.getElementById('add-compare-item-btn').querySelector('span').textContent = t('addAnotherProduct');
  document.getElementById('clear-compare-btn').textContent = t('clearAll');
  if (compareSummarySubtitle) compareSummarySubtitle.textContent = t('compareSummarySubtitle');

  // Discount Page Static Texts
  document.getElementById('discount-h2').textContent = t('discountH2');
  document.getElementById('label-original-total').textContent = t('labelOriginalTotal');
  document.getElementById('label-total-saved').textContent = t('labelTotalSaved');
  document.getElementById('label-how-much').textContent = t('labelHowMuch');
  discountPaidInput.placeholder = t('labelPaidPrice');
  document.getElementById('add-discount-item-btn').querySelector('span').textContent = t('addAnotherItem');
  document.getElementById('clear-discount-btn').textContent = t('clearAll');

  renderCompareList();
  renderDiscountList();
  calculateCompare();
  calculateDiscount();
  updateModalTexts();

  const a2hsTextEl = document.getElementById('ios-a2hs-text');
  if (a2hsTextEl && TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang].iosA2hsHtml) {
    a2hsTextEl.innerHTML = TRANSLATIONS[state.lang].iosA2hsHtml;
  }

  setTimeout(adjustRestingLayout, 100);
}

// ===== TAB NAVIGATION WITH LIQUID DROPLET INDICATOR & SPRING SLIDE =====
tabCompare.addEventListener('click', () => switchTab('compare'));
tabDiscount.addEventListener('click', () => switchTab('discount'));

function updateLiquidTabIndicator(targetTab, animate = true) {
  if (!liquidTabIndicator || !targetTab) return;
  const navContainer = targetTab.parentElement;
  const navRect = navContainer.getBoundingClientRect();
  const tabRect = targetTab.getBoundingClientRect();
  const leftOffset = tabRect.left - navRect.left;
  const width = tabRect.width;

  liquidTabIndicator.style.width = `${width}px`;

  if (animate) {
    liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scaleX(1.18) scaleY(0.88)`;
    setTimeout(() => {
      liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scale(1)`;
    }, 180);
  } else {
    liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scale(1)`;
  }
}

function applyTabInstant() {
  const isCompare = state.activeTab === 'compare';
  tabCompare.classList.toggle('active', isCompare);
  tabDiscount.classList.toggle('active', !isCompare);
  comparePage.classList.toggle('active', isCompare);
  discountPage.classList.toggle('active', !isCompare);

  const compareActionsBar = document.getElementById('compare-actions-bar');
  const discountActionsBar = document.getElementById('discount-actions-bar');
  if (compareActionsBar) compareActionsBar.classList.toggle('hidden', !isCompare);
  if (discountActionsBar) discountActionsBar.classList.toggle('hidden', isCompare);

  const floatingNav = document.getElementById('floating-glass-nav');
  if (floatingNav) floatingNav.setAttribute('data-active', state.activeTab);

  requestAnimationFrame(() => {
    updateLiquidTabIndicator(isCompare ? tabCompare : tabDiscount, false);
    adjustRestingLayout();
  });
}

function switchTab(newTabName) {
  if (state.activeTab === newTabName) return;
  const oldTabName = state.activeTab;
  state.activeTab = newTabName;

  const oldPage = oldTabName === 'compare' ? comparePage : discountPage;
  const newPage = newTabName === 'compare' ? comparePage : discountPage;
  const targetTabBtn = newTabName === 'compare' ? tabCompare : tabDiscount;

  updateLiquidTabIndicator(targetTabBtn, true);

  tabCompare.classList.toggle('active', newTabName === 'compare');
  tabDiscount.classList.toggle('active', newTabName === 'discount');

  const compareActionsBar = document.getElementById('compare-actions-bar');
  const discountActionsBar = document.getElementById('discount-actions-bar');
  const isCompare = newTabName === 'compare';
  if (compareActionsBar) compareActionsBar.classList.toggle('hidden', !isCompare);
  if (discountActionsBar) discountActionsBar.classList.toggle('hidden', isCompare);

  const floatingNav = document.getElementById('floating-glass-nav');
  if (floatingNav) floatingNav.setAttribute('data-active', newTabName);

  const isForward = newTabName === 'discount';
  oldPage.classList.remove('active', 'slide-in-left', 'slide-in-right');
  oldPage.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');

  newPage.classList.remove('slide-out-left', 'slide-out-right');
  newPage.classList.add('active', isForward ? 'slide-in-right' : 'slide-in-left');

  setTimeout(() => {
    oldPage.classList.remove('slide-out-left', 'slide-out-right');
    newPage.classList.remove('slide-in-left', 'slide-in-right');
    const isNewCompare = newTabName === 'compare';
    if ((isNewCompare && state.comparePhase === 1) || (!isNewCompare && state.discountPhase === 1)) {
      const appMain = document.querySelector('.app-main');
      if (appMain) appMain.scrollTop = 0;
    }
    adjustRestingLayout();
  }, 250);

  saveState();
}

// ===== NUMBER FORMATTERS =====
function formatCurrency(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return '0.00';
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatUnitPrice(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return '-';
  if (num < 0.01 && num > 0) return num.toFixed(4);
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}



// ==========================================================================
// PRICE COMPARISON PAGE LOGIC
// ==========================================================================
function renderCompareList(newlyAddedId = null) {
  compareListContainer.innerHTML = '';

  state.compareItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card compare-card';
    if (item.id === newlyAddedId) {
      card.classList.add('newly-spawned');
    }
    card.id = `comp_card_${item.id}`;

    const defaultName = `${t('labelProductDefault')} ${index + 1}`;

    card.innerHTML = `
      <div class="card-header">
        <input type="text" class="card-title-field" value="${item.name}" placeholder="${defaultName}" data-id="${item.id}" data-field="name">
        ${state.compareItems.length > 2 ? `
          <button class="btn-remove-card" data-id="${item.id}" aria-label="Remove Product">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        ` : ''}
      </div>

      <div class="input-group">
        <label class="field-label">${t('labelPrice')}</label>
        <input type="number" class="input-field price-input" placeholder="0.00" value="${item.price}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="price">
      </div>

      <div class="input-group">
        <label class="field-label">${t('labelQuantity')}</label>
        <input type="number" class="input-field qty-input" placeholder="1" value="${item.quantity || '1'}" min="0.001" step="any" inputmode="decimal" data-id="${item.id}" data-field="quantity">
      </div>

      <div class="unit-price-display">
        <span class="unit-price-label">${t('labelUnitPrice')}</span>
        <span class="unit-price-val" id="comp_unit_${item.id}">-</span>
      </div>
    `;

    compareListContainer.appendChild(card);
  });

  // Remove card listeners
  compareListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.compareItems = state.compareItems.filter(x => x.id !== id);
      renderCompareList();
      calculateCompare();
      if (state.compareItems.length <= 2) {
        expandOneUIHeaders();
      } else {
        adjustRestingLayout();
      }
    });
  });

  // Instant input replacement without backspacing
  compareListContainer.querySelectorAll('.price-input, .qty-input, .card-title-field').forEach(input => {
    input.addEventListener('focus', () => {
      input.select();
    });

    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const item = state.compareItems.find(x => x.id === id);
      if (item) {
        item[field] = e.target.value;
        if (field === 'name') {
          const val = e.target.value.trim();
          const isDefaultName = val === '' || Object.values(TRANSLATIONS).some(tr => tr.labelProductDefault && val === `${tr.labelProductDefault} ${item.index}`);
          if (isDefaultName) {
            item.isCustomName = false;
          } else {
            item.isCustomName = true;
          }
        }
        calculateCompare();
      }
    });
  });
}

function calculateCompare() {
  let validItems = [];

  state.compareItems.forEach(item => {
    const price = parseFloat(item.price);
    const qty   = parseFloat(item.quantity);
    const unitPriceEl = document.getElementById(`comp_unit_${item.id}`);
    const cardEl = document.getElementById(`comp_card_${item.id}`);

    if (cardEl) {
      cardEl.classList.remove('cheapest-active');
      const existingBadge = cardEl.querySelector('.cheapest-badge');
      if (existingBadge) existingBadge.remove();
    }

    if (!isNaN(price) && price > 0 && !isNaN(qty) && qty > 0) {
      const unitVal = price / qty;
      item.unitPrice = unitVal;
      if (unitPriceEl) unitPriceEl.innerText = formatUnitPrice(unitVal);
      validItems.push(item);
    } else {
      item.unitPrice = null;
      if (unitPriceEl) unitPriceEl.innerText = '-';
    }
  });

  if (validItems.length < 2) {
    const wasHidden = compareSummaryCard.classList.contains('hidden');
    compareSummaryCard.classList.add('hidden');
    if (!wasHidden && state.activeTab === 'compare' && state.comparePhase === 1 && state.compareItems.length <= 2) {
      adjustRestingLayout();
    }
    return;
  }

  let minUnitPrice = Infinity;
  validItems.forEach(item => {
    if (item.unitPrice < minUnitPrice) {
      minUnitPrice = item.unitPrice;
    }
  });

  const cheapestItems = validItems.filter(item => Math.abs(item.unitPrice - minUnitPrice) < 0.00001);

  cheapestItems.forEach(item => {
    const cardEl = document.getElementById(`comp_card_${item.id}`);
    if (cardEl) {
      cardEl.classList.add('cheapest-active');
      const badge = document.createElement('div');
      badge.className = 'cheapest-badge';
      badge.innerText = t('labelCheapest');
      cardEl.appendChild(badge);
    }
  });

  compareSummaryCard.classList.remove('hidden');

  if (cheapestItems.length === 1) {
    const winner = cheapestItems[0];
    compareBestResult.innerText = t('resultBestChoice', { name: winner.name || t('labelProductDefault') });

    const others = validItems.filter(x => x.id !== winner.id);
    if (others.length > 0) {
      const avgOtherPrice = others.reduce((sum, x) => sum + x.unitPrice, 0) / others.length;
      const savingPct = ((avgOtherPrice - winner.unitPrice) / avgOtherPrice) * 100;
      if (savingPct > 0) {
        compareSavingsDetails.innerText = t('resultSavesAvg', { pct: savingPct.toFixed(1) });
      } else {
        compareSavingsDetails.innerText = '';
      }
    }
  } else {
    const names = cheapestItems.map(x => x.name || t('labelProductDefault')).join(' & ');
    compareBestResult.innerText = t('resultTie', { names });
    compareSavingsDetails.innerText = t('resultTieSub');
  }

  if (state.activeTab === 'compare' && state.comparePhase === 1 && state.compareItems.length <= 2) {
    adjustRestingLayout();
  }
}

// Add Compare Item (Smooth Ease-in, No Droplet)
addCompareItemBtn.addEventListener('click', () => {
  if (state.compareItems.length >= 10) return;
  const newItem = createNewCompareItem(state.compareItems.length + 1);
  state.compareItems.push(newItem);
  renderCompareList(newItem.id);
  calculateCompare();
  if (state.compareItems.length > 2) {
    state.comparePhase = 2;
    collapseOneUIHeaders();
  }
  adjustRestingLayout();

  // Phase 3 & 4: Items 3 & 4 do not scroll. Items 5+ auto-scroll to bottom.
  if (state.compareItems.length >= 5) {
    setTimeout(() => {
      const appMain = document.querySelector('.app-main');
      const targetY = appMain ? appMain.scrollHeight : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      scrollToTarget(targetY, true);
    }, 60);
  }
});

// Clear All Compare Items
clearCompareBtn.addEventListener('click', () => {
  state.compareItems = [createNewCompareItem(1), createNewCompareItem(2)];
  state.comparePhase = 1;
  renderCompareList();
  calculateCompare();
  expandOneUIHeaders();
  scrollToTarget(0, false);
  setTimeout(adjustRestingLayout, 80);
});

// ==========================================================================
// DISCOUNT PRO-RATA CALCULATION PAGE LOGIC
// ==========================================================================
function renderDiscountList(newlyAddedId = null) {
  discountListContainer.innerHTML = '';

  state.discountItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card discount-row-card';
    if (item.id === newlyAddedId) card.classList.add('newly-spawned');
    card.id = `disc_card_${item.id}`;

    const defaultName = `${t('labelItemName')} ${index + 1}`;

    card.innerHTML = `
      <div class="discount-item-inputs">
        <div class="input-group">
          <label class="field-label">${t('labelItemName')}</label>
          <input type="text" class="input-field card-title-field" value="${item.name}" placeholder="${defaultName}" data-id="${item.id}" data-field="name">
        </div>
        <div class="input-group">
          <label class="field-label">${t('labelFullPrice')}</label>
          <input type="number" class="input-field discount-input" placeholder="0.00" value="${item.fullPrice}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="fullPrice">
        </div>
      </div>

      <div class="discount-price-output">
        <div class="discount-calculated-label">${t('labelPaid')}</div>
        <div class="discount-calculated-price" id="disc_out_price_${item.id}">-</div>
        <div class="discount-saving-subtext" id="disc_out_saved_${item.id}"></div>
      </div>

      ${state.discountItems.length > 2 ? `
        <button class="btn-remove-card" data-id="${item.id}" aria-label="Remove Item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      ` : ''}
    `;

    discountListContainer.appendChild(card);
  });

  discountListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.discountItems = state.discountItems.filter(x => x.id !== id);
      renderDiscountList();
      calculateDiscount();
      if (state.discountItems.length <= 1) {
        expandOneUIHeaders();
      } else {
        adjustRestingLayout();
      }
    });
  });

  discountListContainer.querySelectorAll('.discount-input, .card-title-field').forEach(input => {
    input.addEventListener('focus', () => {
      input.select();
    });

    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const item = state.discountItems.find(x => x.id === id);
      if (item) {
        item[field] = e.target.value;
        if (field === 'name') {
          const val = e.target.value.trim();
          const isDefaultName = val === '' || Object.values(TRANSLATIONS).some(tr => tr.labelItemName && val === `${tr.labelItemName} ${item.index}`);
          if (isDefaultName) {
            item.isCustomName = false;
          } else {
            item.isCustomName = true;
          }
        }
        calculateDiscount();
      }
    });
  });
}

function calculateDiscount() {
  let totalOriginalVal = 0;
  const validItems = [];

  state.discountItems.forEach(item => {
    const fullPrice = parseFloat(item.fullPrice);
    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);
    if (outPriceEl) outPriceEl.innerText = '-';
    if (outSavedEl) outSavedEl.innerText = '';

    if (!isNaN(fullPrice) && fullPrice > 0) {
      totalOriginalVal += fullPrice;
      validItems.push({ id: item.id, fullPrice });
    }
  });

  discountTotalOriginal.innerText = formatCurrency(totalOriginalVal);

  const paidPrice = parseFloat(state.discountPaid);
  if (isNaN(paidPrice) || paidPrice < 0 || totalOriginalVal <= 0 || paidPrice > totalOriginalVal) {
    discountTotalSaved.innerText = '0.00';
    discountPercentBadge.classList.add('hidden');
    if (paidPrice > totalOriginalVal) {
      discountTotalSaved.innerText = t('labelPaidGtFull');
      discountTotalSaved.style.fontSize = '1.05rem';
    } else {
      discountTotalSaved.style.fontSize = '1.8rem';
    }
    return;
  }

  discountTotalSaved.style.fontSize = '1.8rem';
  const totalSavedVal = totalOriginalVal - paidPrice;
  discountTotalSaved.innerText = formatCurrency(totalSavedVal);

  const discountPercent = (totalSavedVal / totalOriginalVal) * 100;
  if (discountPercent > 0) {
    discountPercentBadge.innerText = `${discountPercent.toFixed(0)}% OFF`;
    discountPercentBadge.classList.remove('hidden');
  } else {
    discountPercentBadge.classList.add('hidden');
  }

  const discountRate = totalSavedVal / totalOriginalVal;
  validItems.forEach(item => {
    const savedForThis = item.fullPrice * discountRate;
    const paidForThis  = item.fullPrice - savedForThis;
    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);
    if (outPriceEl) outPriceEl.innerText = formatCurrency(paidForThis);
    if (outSavedEl && savedForThis > 0) {
      outSavedEl.innerText = t('labelSaved', { amount: formatCurrency(savedForThis) });
    }
  });
}

// Add Discount Item
addDiscountItemBtn.addEventListener('click', () => {
  const newItem = createNewDiscountItem(state.discountItems.length + 1);
  state.discountItems.push(newItem);
  renderDiscountList(newItem.id);
  calculateDiscount();
  if (state.discountItems.length > 1) {
    state.discountPhase = 2;
    collapseOneUIHeaders();
  }
  adjustRestingLayout();

  // Phase 3 & 4: Item 2 does not scroll. Items 3+ auto-scroll to bottom.
  if (state.discountItems.length >= 3) {
    setTimeout(() => {
      const appMain = document.querySelector('.app-main');
      const targetY = appMain ? appMain.scrollHeight : Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      scrollToTarget(targetY, true);
    }, 60);
  }
});

// Clear All Discount Items
clearDiscountBtn.addEventListener('click', () => {
  state.discountItems = [createNewDiscountItem(1)];
  state.discountPaid = '';
  discountPaidInput.value = '';
  state.discountPhase = 1;
  renderDiscountList();
  calculateDiscount();
  expandOneUIHeaders();
  scrollToTarget(0, false);
  setTimeout(adjustRestingLayout, 80);
});
// ===== DYNAMIC RESTING LAYOUT & ONE UI CONTROLLER =====
let cachedCompareHalfSpacer = 122;
let cachedDiscountHalfSpacer = 63;
let isTransitioning = false;

function updateCachedSpacers() {
  const headerIsland = document.querySelector('.header-island-wrapper');
  const appMain = document.querySelector('.app-main');
  const compareAction = document.getElementById('compare-actions-bar');
  const discountAction = document.getElementById('discount-actions-bar');
  
  if (!headerIsland) return;
  const headerBottom = headerIsland.getBoundingClientRect().bottom;

  // Maintain sticky summary top offset to pin directly below floating logo bar
  const mainPaddingTop = appMain ? (parseFloat(window.getComputedStyle(appMain).paddingTop) || 0) : 0;
  const stickyTop = Math.max(4, Math.round(headerBottom - mainPaddingTop + 4));
  document.documentElement.style.setProperty('--sticky-summary-top', `${stickyTop}px`);

  // Compare Spacer calculation
  if (compareAction) {
    const actionTop = compareAction.getBoundingClientRect().top;
    const availableSpace = actionTop - headerBottom;
    const listEl = document.getElementById('compare-list');
    const headerEl = document.getElementById('compare-oneui-header');
    const summaryEl = document.getElementById('compare-summary-card');
    if (listEl && headerEl) {
      const wasCollapsed = headerEl.classList.contains('oneui-collapsed');
      if (wasCollapsed) {
        headerEl.classList.remove('oneui-collapsed', 'is-scrolled');
      }
      const headerHeight = headerEl.offsetHeight || 94;
      const listHeight = listEl.offsetHeight || 216;
      const summaryVisible = summaryEl && !summaryEl.classList.contains('hidden');
      const summaryHeight = summaryVisible ? (summaryEl.offsetHeight || 76) + 12 : 0;
      if (wasCollapsed) {
        headerEl.classList.add('oneui-collapsed', 'is-scrolled');
      }
      const totalEmpty = Math.max(0, availableSpace - headerHeight - listHeight - summaryHeight - 16);
      cachedCompareHalfSpacer = Math.round(totalEmpty / 2);
    }
  }

  // Discount Spacer calculation
  if (discountAction) {
    const actionTop = discountAction.getBoundingClientRect().top;
    const availableSpace = actionTop - headerBottom;
    const headerEl = document.getElementById('discount-oneui-header');
    const summaryGrid = document.querySelector('.discount-summary-grid');
    const paidCard = document.querySelector('.paid-amount-card');
    const listEl = document.getElementById('discount-list');
    if (headerEl && summaryGrid && paidCard && listEl) {
      const wasCollapsed = headerEl.classList.contains('oneui-collapsed');
      if (wasCollapsed) {
        headerEl.classList.remove('oneui-collapsed', 'is-scrolled');
      }
      const headerHeight = headerEl.offsetHeight || 94;
      const fixedHeights = summaryGrid.offsetHeight + 10 + paidCard.offsetHeight + 10 + listEl.offsetHeight;
      if (wasCollapsed) {
        headerEl.classList.add('oneui-collapsed', 'is-scrolled');
      }
      const totalEmpty = Math.max(0, availableSpace - headerHeight - fixedHeights - 16);
      cachedDiscountHalfSpacer = Math.round(totalEmpty / 2);
    }
  }
}

function adjustRestingLayout() {
  updateCachedSpacers();
  const isCompare = state.activeTab === 'compare';
  const appMain = document.querySelector('.app-main');

  if (isCompare) {
    const topSpacerEl = document.getElementById('compare-top-spacer');
    const bottomSpacerEl = document.getElementById('compare-bottom-spacer');
    const headerEl = document.getElementById('compare-oneui-header');
    const comparePageEl = document.getElementById('compare-page');
    const isResting = state.compareItems.length <= 2;

    if (appMain) {
      appMain.style.overflowY = isResting ? 'hidden' : 'auto';
    }

    if (topSpacerEl && bottomSpacerEl && headerEl) {
      if (isResting && state.comparePhase === 1) {
        headerEl.classList.remove('oneui-collapsed', 'is-scrolled');
        topSpacerEl.style.height = cachedCompareHalfSpacer + 'px';
        bottomSpacerEl.style.height = cachedCompareHalfSpacer + 'px';
        if (comparePageEl) comparePageEl.style.paddingBottom = '145px';
      } else {
        topSpacerEl.style.height = '0px';
        bottomSpacerEl.style.height = '0px';
        if (comparePageEl) comparePageEl.style.paddingBottom = isResting ? '145px' : '155px';
        if (state.comparePhase === 2) {
          headerEl.classList.add('oneui-collapsed', 'is-scrolled');
        }
      }
    }
  } else {
    const topSpacerEl = document.getElementById('discount-top-spacer');
    const bottomSpacerEl = document.getElementById('discount-bottom-spacer');
    const headerEl = document.getElementById('discount-oneui-header');
    const discountPageEl = document.getElementById('discount-page');
    const isResting = state.discountItems.length <= 1;

    if (appMain) {
      appMain.style.overflowY = isResting ? 'hidden' : 'auto';
    }

    if (topSpacerEl && bottomSpacerEl && headerEl) {
      if (isResting && state.discountPhase === 1) {
        headerEl.classList.remove('oneui-collapsed', 'is-scrolled');
        topSpacerEl.style.height = cachedDiscountHalfSpacer + 'px';
        bottomSpacerEl.style.height = cachedDiscountHalfSpacer + 'px';
        if (discountPageEl) discountPageEl.style.paddingBottom = '145px';
      } else {
        topSpacerEl.style.height = '0px';
        bottomSpacerEl.style.height = '0px';
        if (discountPageEl) discountPageEl.style.paddingBottom = isResting ? '145px' : '155px';
        if (state.discountPhase === 2) {
          headerEl.classList.add('oneui-collapsed', 'is-scrolled');
        }
      }
    }
  }
}

function collapseOneUIHeaders() {
  document.querySelectorAll('.oneui-header-container').forEach(el => {
    el.classList.add('oneui-collapsed', 'is-scrolled');
    el.style.minHeight = '';
  });
}

function expandOneUIHeaders() {
  document.querySelectorAll('.oneui-header-container').forEach(el => {
    el.classList.remove('oneui-collapsed', 'is-scrolled');
    el.style.minHeight = '';
  });
  adjustRestingLayout();
}

function transitionToPhase2(isCompare) {
  if (isTransitioning) return;
  isTransitioning = true;

  if (isCompare) {
    state.comparePhase = 2;
    const topSpacer = document.getElementById('compare-top-spacer');
    const bottomSpacer = document.getElementById('compare-bottom-spacer');
    const header = document.getElementById('compare-oneui-header');
    if (topSpacer) topSpacer.style.height = '0px';
    if (bottomSpacer) bottomSpacer.style.height = '0px';
    if (header) header.classList.add('oneui-collapsed', 'is-scrolled');
    const comparePageEl = document.getElementById('compare-page');
    if (comparePageEl) comparePageEl.style.paddingBottom = (state.compareItems.length <= 2) ? '145px' : '155px';
  } else {
    state.discountPhase = 2;
    const topSpacer = document.getElementById('discount-top-spacer');
    const bottomSpacer = document.getElementById('discount-bottom-spacer');
    const header = document.getElementById('discount-oneui-header');
    if (topSpacer) topSpacer.style.height = '0px';
    if (bottomSpacer) bottomSpacer.style.height = '0px';
    if (header) header.classList.add('oneui-collapsed', 'is-scrolled');
    const discountPageEl = document.getElementById('discount-page');
    if (discountPageEl) discountPageEl.style.paddingBottom = (state.discountItems.length <= 1) ? '145px' : '155px';
  }

  const appMain = document.querySelector('.app-main');
  if (appMain && appMain.scrollTop > 0) {
    appMain.scrollTop = 0;
  }

  setTimeout(() => {
    isTransitioning = false;
  }, 320);
}

function transitionToPhase1(isCompare) {
  if (isTransitioning) return;
  isTransitioning = true;

  if (isCompare) {
    state.comparePhase = 1;
    const header = document.getElementById('compare-oneui-header');
    const topSpacer = document.getElementById('compare-top-spacer');
    const bottomSpacer = document.getElementById('compare-bottom-spacer');
    if (header) header.classList.remove('oneui-collapsed', 'is-scrolled');
    if (state.compareItems.length <= 2) {
      if (topSpacer) topSpacer.style.height = cachedCompareHalfSpacer + 'px';
      if (bottomSpacer) bottomSpacer.style.height = cachedCompareHalfSpacer + 'px';
      const comparePageEl = document.getElementById('compare-page');
      if (comparePageEl) comparePageEl.style.paddingBottom = '145px';
    }
  } else {
    state.discountPhase = 1;
    const header = document.getElementById('discount-oneui-header');
    const topSpacer = document.getElementById('discount-top-spacer');
    const bottomSpacer = document.getElementById('discount-bottom-spacer');
    if (header) header.classList.remove('oneui-collapsed', 'is-scrolled');
    if (state.discountItems.length <= 1) {
      if (topSpacer) topSpacer.style.height = cachedDiscountHalfSpacer + 'px';
      if (bottomSpacer) bottomSpacer.style.height = cachedDiscountHalfSpacer + 'px';
      const discountPageEl = document.getElementById('discount-page');
      if (discountPageEl) discountPageEl.style.paddingBottom = '145px';
    }
  }

  const appMain = document.querySelector('.app-main');
  if (appMain && appMain.scrollTop > 0) {
    appMain.scrollTop = 0;
  }

  setTimeout(() => {
    isTransitioning = false;
  }, 320);
}

function handleOneUIScroll() {
  if (isTransitioning) return;
  const appMain = document.querySelector('.app-main');
  if (!appMain) return;
  const y = appMain.scrollTop;
  const isCompare = state.activeTab === 'compare';
  const itemCount = isCompare ? state.compareItems.length : state.discountItems.length;
  const restingThreshold = isCompare ? 2 : 1;
  const currentPhase = isCompare ? state.comparePhase : state.discountPhase;

  if (itemCount > restingThreshold) {
    if (y > 10 && currentPhase === 1) {
      transitionToPhase2(isCompare);
    }
  }
}

// Touch gesture support for instant 120fps Phase 1 <-> Phase 2 transitions
let touchStartY = 0;
let touchStartX = 0;

function handleTouchStart(e) {
  if (!e.touches || e.touches.length === 0) return;
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  if (isTransitioning || !e.touches || e.touches.length === 0) return;
  const currentY = e.touches[0].clientY;
  const currentX = e.touches[0].clientX;
  const deltaY = currentY - touchStartY;
  const deltaX = currentX - touchStartX;

  if (Math.abs(deltaY) < Math.abs(deltaX)) return;

  const appMain = document.querySelector('.app-main');
  const scrollTop = appMain ? appMain.scrollTop : 0;
  const isCompare = state.activeTab === 'compare';
  const itemCount = isCompare ? state.compareItems.length : state.discountItems.length;
  const restingThreshold = isCompare ? 2 : 1;
  const currentPhase = isCompare ? state.comparePhase : state.discountPhase;

  // In resting state (items <= threshold):
  if (itemCount <= restingThreshold) {
    // Swipe UP gesture (scroll down) -> snap to Phase 2 immediately
    if (deltaY < -18 && currentPhase === 1) {
      transitionToPhase2(isCompare);
      touchStartY = currentY;
    }
    // Swipe DOWN gesture (scroll up) -> snap to Phase 1
    else if (deltaY > 18 && currentPhase === 2) {
      transitionToPhase1(isCompare);
      touchStartY = currentY;
    }
  } else {
    // For tall content: Swipe DOWN while at top -> Expand to Phase 1
    if (deltaY > 20 && scrollTop <= 3 && currentPhase === 2) {
      transitionToPhase1(isCompare);
      touchStartY = currentY;
    }
  }
}

function handleWheel(e) {
  if (isTransitioning) return;
  const appMain = document.querySelector('.app-main');
  const scrollTop = appMain ? appMain.scrollTop : 0;
  const isCompare = state.activeTab === 'compare';
  const itemCount = isCompare ? state.compareItems.length : state.discountItems.length;
  const restingThreshold = isCompare ? 2 : 1;
  const currentPhase = isCompare ? state.comparePhase : state.discountPhase;

  if (e.deltaY > 8) {
    if (itemCount <= restingThreshold && currentPhase === 1) {
      transitionToPhase2(isCompare);
    }
  } else if (e.deltaY < -8) {
    if (currentPhase === 2 && (itemCount > restingThreshold ? scrollTop <= 3 : true)) {
      transitionToPhase1(isCompare);
    }
  }
}

let scrollTicking = false;
function onScrollThrottled() {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      handleOneUIScroll();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}

function attachOneUIListeners() {
  const appMain = document.querySelector('.app-main');
  if (appMain) {
    appMain.addEventListener('scroll', onScrollThrottled, { passive: true });
    appMain.addEventListener('touchstart', handleTouchStart, { passive: true });
    appMain.addEventListener('touchmove', handleTouchMove, { passive: true });
    appMain.addEventListener('wheel', handleWheel, { passive: true });
  }
  window.addEventListener('resize', () => {
    adjustRestingLayout();
  });
}

document.addEventListener('DOMContentLoaded', attachOneUIListeners);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  attachOneUIListeners();
}


// ==========================================================================
// SUPPORT DEVELOPER & FEEDBACK GOOGLE FORM INTEGRATION
// ==========================================================================
const GOOGLE_FORM_CONFIG = {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScsVJrSg2V47tYNGpOCePXaKi4V26F0cARc784fcsj6-iJOWQ/formResponse',
  entryId: 'entry.1767758115'
};

function showToast(message, isError = false, duration = 3400) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  toast.innerText = message;
  if (isError) {
    toast.classList.add('error-toast');
  } else {
    toast.classList.remove('error-toast');
  }
  toast.classList.remove('hidden');
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}

const donateBtn = document.getElementById('donate-btn');
const supportModalBackdrop = document.getElementById('support-modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close-btn');

function openSupportModal() {
  if (supportModalBackdrop) {
    supportModalBackdrop.classList.remove('hidden');
  }
}

function closeSupportModal() {
  if (supportModalBackdrop) {
    supportModalBackdrop.classList.add('hidden');
  }
}

if (donateBtn) {
  donateBtn.addEventListener('click', openSupportModal);
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeSupportModal);
}

if (supportModalBackdrop) {
  supportModalBackdrop.addEventListener('click', (e) => {
    if (e.target === supportModalBackdrop) {
      closeSupportModal();
    }
  });
}

// In-App Support Tiers Purchase Handlers
document.querySelectorAll('.support-tier-card').forEach(card => {
  card.addEventListener('click', () => {
    const productId = card.getAttribute('data-product-id');
    if (window.AndroidBridge && typeof window.AndroidBridge.buyProduct === 'function') {
      window.AndroidBridge.buyProduct(productId);
    } else {
      showToast(t('toastPurchaseSuccess'));
    }
  });
});

window.onPurchaseResult = function(productId, success, reason) {
  if (success) {
    showToast(t('toastPurchaseSuccess'));
  }
};

// Direct Feedback / Bug Report Submission via Native Bridge or Web Fallback
const feedbackSendBtn = document.getElementById('feedback-send-btn');
const feedbackTextarea = document.getElementById('feedback-textarea');

window.onFeedbackResult = function(success, code) {
  if (feedbackSendBtn) feedbackSendBtn.disabled = false;
  const btnTextEl = document.getElementById('btn-send-text');
  if (btnTextEl) btnTextEl.innerText = t('btnSendFeedback');

  if (success) {
    if (feedbackTextarea) feedbackTextarea.value = '';
    showToast(t('toastFeedbackSent'), false);
    setTimeout(closeSupportModal, 900);
  } else {
    if (code === 'OFFLINE') {
      showToast(t('toastFeedbackOffline'), true);
    } else if (code === 'UNAUTHORIZED_401') {
      showToast(t('toastFeedback401'), true);
    } else {
      showToast(t('toastFeedbackError'), true);
    }
  }
};

if (feedbackSendBtn && feedbackTextarea) {
  feedbackSendBtn.addEventListener('click', async () => {
    const text = feedbackTextarea.value.trim();
    if (!text) {
      showToast(t('toastFeedbackEmpty'));
      return;
    }

    if (!navigator.onLine) {
      showToast(t('toastFeedbackOffline'), true);
      return;
    }

    feedbackSendBtn.disabled = true;
    const btnTextEl = document.getElementById('btn-send-text');
    if (btnTextEl) btnTextEl.innerText = state.lang === 'th' ? 'กำลังส่ง...' : 'Sending...';

    if (window.AndroidBridge && typeof window.AndroidBridge.sendFeedback === 'function') {
      window.AndroidBridge.sendFeedback(text);
    } else {
      // Fallback for standalone browser testing
      try {
        const formData = new FormData();
        formData.append(GOOGLE_FORM_CONFIG.entryId, text);

        await fetch(GOOGLE_FORM_CONFIG.formUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });

        feedbackTextarea.value = '';
        showToast(t('toastFeedbackSent'));
        setTimeout(closeSupportModal, 900);
      } catch (err) {
        showToast(t('toastFeedbackError'));
      } finally {
        feedbackSendBtn.disabled = false;
        if (btnTextEl) btnTextEl.innerText = t('btnSendFeedback');
      }
    }
  });
}


// ===== iOS SAFARI ADD TO HOME SCREEN PROMPT =====
function initIosA2hs() {
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
  const banner = document.getElementById('ios-a2hs-banner');
  const closeBtn = document.getElementById('ios-a2hs-close');

  if (!banner) return;

  if (isIos && !isStandalone && !localStorage.getItem('smartsaver_ios_a2hs_dismissed')) {
    setTimeout(() => {
      banner.classList.remove('hidden');
    }, 1500);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
      localStorage.setItem('smartsaver_ios_a2hs_dismissed', 'true');
    });
  }
}


// ===== iOS Standalone PWA Link Lock (Prevents Safari Bottom Navigation Toolbar) =====
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  if (anchor) {
    const href = anchor.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('#') && !anchor.getAttribute('target')) {
      e.preventDefault();
      window.location.assign(href);
    }
  }
}, false);
