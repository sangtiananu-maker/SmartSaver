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
    "labelPrice": "Price ($)",
    "labelQuantity": "Quantity (pcs/g/ml)",
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
    "iosA2hsHtml": "Install on iPhone: Tap <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> and select <strong>'Add to Home Screen'</strong>",
    "compareUseCase": "Compare package sizes or brands (e.g. small vs large) to find the best price per unit and save money.",
    "discountUseCase": "Split bill discounts or vouchers fairly by item prices, perfect for shared dinners or group shopping."
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
    "labelPrice": "ราคา (บาท)",
    "labelQuantity": "ปริมาณ (ชิ้น/กรัม/มล.)",
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
    "iosA2hsHtml": "ติดตั้งบน iPhone: แตะไอคอนแชร์ <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> แล้วเลือก <strong>'เพิ่มไปยังหน้าจอโฮม'</strong>",
    "compareUseCase": "เปรียบเทียบขนาดหรือแพ็กเกจสินค้า เช่น เล็ก vs ใหญ่ เพื่อค้นหาราคาต่อหน่วยที่คุ้มค่าและประหยัดเงินจริง",
    "discountUseCase": "ปันส่วนลดตามสัดส่วนราคาสินค้าจริง เช่น หารค่าอาหารรวมส่วนลดหรือช้อปปิ้งรวมบิลกับเพื่อนอย่างเป็นธรรม"
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
    "labelPrice": "ລາຄາ (ກີບ)",
    "labelQuantity": "ປະລິມານ (ອັນ/ກຣາມ/ມລ)",
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
    "iosA2hsHtml": "ຕິດຕັ້ງເທິງ iPhone: ແຕະໄອຄອນແບ່ງປັນ <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> ແລ້ວເລືອກ <strong>'ເພີ່ມໃສ່ໜ້າຈໍໂຮມ'</strong>",
    "compareUseCase": "ສົມທຽບຂະໝາດຫຼືແພັກເກັດສິນຄ້າ ເຊື່ນ ນ້ອຊj ໃຫຍ່ ເພື່ອຊອກຫາລາຄາຕ່ອຫນ່ວຍທີ່ປະຍັດເງິນແທ້",
    "discountUseCase": "ແບ່ງປັນສ່ວນຫຼຸດຕາມສັດສ່ວນລາຄາຕົວຈິງ ເຊື່ນ ຫານຄ່າອາຫາຩຫຼືຊື້ເຄື່ອງຮ່ວມກັນຢ່າງຍຸຕິທໍາ"
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
    "labelPrice": "价格 (元)",
    "labelQuantity": "数量 (件/克/毫升)",
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
    "iosA2hsHtml": "添加到 iPhone 主屏幕：点击分享图标 <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> 并选择 <strong>“添加到主屏幕”</strong>",
    "compareUseCase": "对比不同规格或包装（如大包vs小包），快速计算每单位真实单价，聪明省钱。",
    "discountUseCase": "按商品实际价格公平成比例分摄整单折扣，聚餐AA制或拼单购物分账更省心。"
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
    "labelPrice": "価格 (円)",
    "labelQuantity": "数量 (個/g/ml)",
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
    "iosA2hsHtml": "iPhoneのホーム画面に追加：共有アイコン <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> をタップし、<strong>「ホーム画面に追加」</strong> を選択",
    "compareUseCase": "大袋と小袋などパッケージサイズを比較し、最も単価がお得な商品を瞬時に見つけて節約。",
    "discountUseCase": "会計全体の割引を商品価格の比率に応じて公平に按分。割り勘や共同購入の計算に最適。"
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
    "labelPrice": "가격 (원)",
    "labelQuantity": "수량 (개/g/ml)",
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
    "iosA2hsHtml": "iPhone 홈 화면에 추가: 공유 아이콘 <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> 탭 후 <strong>'홈 화면에 추가'</strong> 선택",
    "compareUseCase": "소용량 vs 대용량 등 포장 규격별 단가를 비교하여 가장 알뜰한 상품을 쉽게 찾아보세요.",
    "discountUseCase": "총 할인 금액을 각 상품 가격 비율에 맞춰 공정하게 분배하여 더치페이와 공동구매를 지원합니다."
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
    "labelPrice": "Precio (€/$)",
    "labelQuantity": "Cantidad (ud/g/ml)",
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
    "iosA2hsHtml": "Instalar en iPhone: Pulsa <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> y elige <strong>'Añadir a pantalla de inicio'</strong>",
    "compareUseCase": "Compara tamaños de envases (pequeño vs grande) para descubrir el precio por unidad más económico.",
    "discountUseCase": "Distribuye descuentos globales de forma proporcional y justa, ideal para cenas o compras compartidas."
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
    "labelPrice": "Prix (€)",
    "labelQuantity": "Quantité (pce/g/ml)",
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
    "iosA2hsHtml": "Installer sur iPhone : Appuyez sur <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> puis <strong>'Sur l\'écran d\'accueil'</strong>",
    "compareUseCase": "Comparez les formats de produits (petit vs grand) pour trouver le meilleur prix au kilo/litre et économiser.",
    "discountUseCase": "Répartissez équitablement une remise globale au prorata du prix de chaque article pour vos sorties partagées."
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
    "labelPrice": "Preis (€)",
    "labelQuantity": "Menge (Stk/g/ml)",
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
    "iosA2hsHtml": "Auf iPhone installieren: Tippe auf <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> und wähle <strong>'Zum Home-Bildschirm'</strong>",
    "compareUseCase": "Vergleichen Sie Packungsgrößen (z. B. klein vs. groß), um den günstigsten Grundpreis zu ermitteln.",
    "discountUseCase": "Teilen Sie Gesamtrabatte fair und anteilig auf einzelne Artikel auf – perfekt für Gruppenrechnungen."
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
    "labelPrice": "Preço (R$/€)",
    "labelQuantity": "Quantidade (un/g/ml)",
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
    "iosA2hsHtml": "Instalar no iPhone: Toque em <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> e escolha <strong>'Adicionar à Tela de Início'</strong>",
    "compareUseCase": "Compare tamanhos de embalagens (pequena vs grande) para achar o menor preço unitário e economizar.",
    "discountUseCase": "Divida descontos totais de forma proporcional e justa entre os itens, ideal para dividir contas com amigos."
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
    "labelPrice": "Harga (Rp)",
    "labelQuantity": "Jumlah (pcs/g/ml)",
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
    "iosA2hsHtml": "Pasang di iPhone: Ketuk <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> dan pilih <strong>'Tambah ke Layar Utama'</strong>",
    "compareUseCase": "Bandingkan ukuran kemasan (misal kecil vs besar) untuk menemukan harga per unit termurah saat belanja.",
    "discountUseCase": "Bagi diskon total secara proporsional dan adil per barang, cocok untuk patungan makan atau belanja bersama."
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
    "labelPrice": "मूल्य (₹)",
    "labelQuantity": "मात्रा (नग/ग्राम/मिली)",
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
    "iosA2hsHtml": "iPhone पर जोड़ें: <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> टैप करें और <strong>'होम स्क्रीन पर जोड़ें'</strong> चुनें",
    "compareUseCase": "पैकेट के आकारों की तुलना करें ताकि प्रति यूनिट सबसे किफायती दाम पता चल सके।",
    "discountUseCase": "कुल छूट को प्रत्येक वस्तु की कीमत के अनुसार निष्पक्ष रूप से बांटें।"
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
    "labelPrice": "السعر (ر.س/د.إ/ج.م)",
    "labelQuantity": "الكمية (قطعة/جرام/مل)",
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
    "iosA2hsHtml": "التثبيت على iPhone: اضغط على <svg class=\"ios-share-svg\" viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"/></svg> واختر <strong>'إضافة إلى الصفحة الرئيسية'</strong>",
    "compareUseCase": "قارن بين أحجام العبوات (مثل صغيرة مقابل كبيرة) لمعرفة أفضل سعر للوحدة والتوفير الحقيقي أثناء التسوق.",
    "discountUseCase": "وزّع الخصم الإجمالي على المنتجات بنسب عادلة، مثالي لحساب الفواتير المشتركة بين الأصدقاء."
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
  discountPhase: 1,
  splitPhase: 1
};
window.state = state;

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
  state.splitPhase = 1;
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
const tabSplit               = document.getElementById('tab-split');
const splitPage              = document.getElementById('split-page');

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
  if (typeof applySplitLang === 'function') applySplitLang();

  discountPaidInput.addEventListener('input', (e) => {
    state.discountPaid = e.target.value;
    calculateDiscount();
  });

  window.addEventListener('resize', () => {
    const activeTabBtn = state.activeTab === 'compare' ? tabCompare : (state.activeTab === 'split' ? tabSplit : tabDiscount);
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
  triggerModalClosingCooldown();
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

  // Update One UI Header Use-Case Descriptions
  const compDescEl = document.getElementById('compare-usecase-desc');
  if (compDescEl) compDescEl.textContent = t('compareUseCase') || '';
  const discDescEl = document.getElementById('discount-usecase-desc');
  if (discDescEl) discDescEl.textContent = t('discountUseCase') || '';

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
  if (typeof applySplitLang === 'function') applySplitLang();
  updateModalTexts();

  const a2hsTextEl = document.getElementById('ios-a2hs-text');
  if (a2hsTextEl && TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang].iosA2hsHtml) {
    a2hsTextEl.innerHTML = TRANSLATIONS[state.lang].iosA2hsHtml;
  }

  setTimeout(adjustRestingLayout, 100);
}

// ===== TAB NAVIGATION WITH FAST RESPONSIVE TOUCH & SPRING SLIDE =====
[
  { btn: tabCompare, name: 'compare' },
  { btn: tabDiscount, name: 'discount' },
  { btn: tabSplit, name: 'split' }
].forEach(item => {
  if (!item.btn) return;
  let lastTap = 0;
  const doSwitch = (e) => {
    const now = Date.now();
    if (now - lastTap < 180) return;
    lastTap = now;
    switchTab(item.name);
  };
  item.btn.addEventListener('click', doSwitch);
  item.btn.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      doSwitch(e);
    }
  });
});

function updateLiquidTabIndicator(targetTab, animate = true) {
  if (!liquidTabIndicator || !targetTab) return;
  const isRtl = document.documentElement.dir === 'rtl';
  const navContainer = targetTab.parentElement;
  const navRect = navContainer.getBoundingClientRect();
  const tabRect = targetTab.getBoundingClientRect();
  const width = tabRect.width;

  liquidTabIndicator.style.width = `${width}px`;

  if (isRtl) {
    const rightOffset = navRect.right - tabRect.right;
    const targetX = -rightOffset;
    if (animate) {
      liquidTabIndicator.style.transform = `translateX(${targetX}px) scaleX(1.18) scaleY(0.88)`;
      setTimeout(() => {
        liquidTabIndicator.style.transform = `translateX(${targetX}px) scale(1)`;
      }, 180);
    } else {
      liquidTabIndicator.style.transform = `translateX(${targetX}px) scale(1)`;
    }
  } else {
    const leftOffset = tabRect.left - navRect.left;
    if (animate) {
      liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scaleX(1.18) scaleY(0.88)`;
      setTimeout(() => {
        liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scale(1)`;
      }, 180);
    } else {
      liquidTabIndicator.style.transform = `translateX(${leftOffset}px) scale(1)`;
    }
  }
}

function applyTabInstant() {
  const isCompare = state.activeTab === 'compare';
  const isDiscount = state.activeTab === 'discount';
  const isSplit = state.activeTab === 'split';

  tabCompare.classList.toggle('active', isCompare);
  tabDiscount.classList.toggle('active', isDiscount);
  if (tabSplit) tabSplit.classList.toggle('active', isSplit);

  comparePage.classList.toggle('active', isCompare);
  discountPage.classList.toggle('active', isDiscount);
  if (splitPage) splitPage.classList.toggle('active', isSplit);

  const compareActionsBar = document.getElementById('compare-actions-bar');
  const discountActionsBar = document.getElementById('discount-actions-bar');
  const splitActionsBar = document.getElementById('split-actions-bar');
  if (compareActionsBar) compareActionsBar.classList.toggle('hidden', !isCompare);
  if (discountActionsBar) discountActionsBar.classList.toggle('hidden', !isDiscount);
  if (splitActionsBar) splitActionsBar.classList.toggle('hidden', !isSplit);

  const floatingNav = document.getElementById('floating-glass-nav');
  if (floatingNav) floatingNav.setAttribute('data-active', state.activeTab);

  requestAnimationFrame(() => {
    const activeBtn = isCompare ? tabCompare : (isDiscount ? tabDiscount : tabSplit);
    if (activeBtn) updateLiquidTabIndicator(activeBtn, false);
    adjustRestingLayout();
    if (isSplit && typeof renderSplitter === 'function') {
      renderSplitter();
    }
  });
}

function switchTab(newTabName) {
  if (state.activeTab === newTabName) return;
  const oldTabName = state.activeTab;
  state.activeTab = newTabName;

  const getPage = (name) => name === 'compare' ? comparePage : (name === 'discount' ? discountPage : splitPage);
  const getTabBtn = (name) => name === 'compare' ? tabCompare : (name === 'discount' ? tabDiscount : tabSplit);

  const oldPage = getPage(oldTabName);
  const newPage = getPage(newTabName);
  const targetTabBtn = getTabBtn(newTabName);

  updateLiquidTabIndicator(targetTabBtn, true);

  tabCompare.classList.toggle('active', newTabName === 'compare');
  tabDiscount.classList.toggle('active', newTabName === 'discount');
  if (tabSplit) tabSplit.classList.toggle('active', newTabName === 'split');

  const compareActionsBar = document.getElementById('compare-actions-bar');
  const discountActionsBar = document.getElementById('discount-actions-bar');
  const splitActionsBar = document.getElementById('split-actions-bar');
  if (compareActionsBar) compareActionsBar.classList.toggle('hidden', newTabName !== 'compare');
  if (discountActionsBar) discountActionsBar.classList.toggle('hidden', newTabName !== 'discount');
  if (splitActionsBar) splitActionsBar.classList.toggle('hidden', newTabName !== 'split');

  const floatingNav = document.getElementById('floating-glass-nav');
  if (floatingNav) floatingNav.setAttribute('data-active', newTabName);

  const tabOrder = { 'compare': 0, 'discount': 1, 'split': 2 };
  const isForward = (tabOrder[newTabName] || 0) > (tabOrder[oldTabName] || 0);

  if (oldPage) {
    oldPage.classList.remove('active', 'slide-in-left', 'slide-in-right');
    oldPage.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
  }
  if (newPage) {
    newPage.classList.remove('slide-out-left', 'slide-out-right');
    newPage.classList.add('active', isForward ? 'slide-in-right' : 'slide-in-left');
  }

  setTimeout(() => {
    if (oldPage) oldPage.classList.remove('slide-out-left', 'slide-out-right');
    if (newPage) newPage.classList.remove('slide-in-left', 'slide-in-right');
    if (newTabName === 'split' && typeof renderSplitter === 'function') {
      renderSplitter();
    }
    const appMain = document.querySelector('.app-main');
    if (appMain) appMain.scrollTop = 0;
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
        <input type="text" class="input-field price-input" placeholder="0.00" value="${item.price}" inputmode="decimal" data-id="${item.id}" data-field="price">

      </div>

      <div class="input-group">
        <label class="field-label">${t('labelQuantity')}</label>
        <input type="text" class="input-field qty-input" placeholder="1" value="${item.quantity || '1'}" inputmode="decimal" data-id="${item.id}" data-field="quantity">
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

    // Auto commit calculated math result on blur, change, or Enter key
    if (input.classList.contains('price-input') || input.classList.contains('qty-input')) {
      const commitMathResult = () => {
        const val = input.value;
        const evaluated = evaluateMathExpression(val);
        if (!isNaN(evaluated) && evaluated > 0) {
          const cleanVal = Number.isInteger(evaluated) ? evaluated.toString() : parseFloat(evaluated.toFixed(4)).toString();
          if (input.value !== cleanVal) {
            input.value = cleanVal;
            const id = input.getAttribute('data-id');
            const field = input.getAttribute('data-field');
            const item = state.compareItems.find(x => x.id === id);
            if (item) {
              item[field] = cleanVal;
              calculateCompare();
            }
          }
        }
      };

      input.addEventListener('blur', commitMathResult);
      input.addEventListener('change', commitMathResult);
      input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') {
          commitMathResult();
          input.blur();
        }
      });
    }

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


// ===== SAFE MATH EXPRESSION EVALUATOR =====
function evaluateMathExpression(str) {
  if (typeof str === 'number') return isFinite(str) ? str : NaN;
  if (!str || typeof str !== 'string') return NaN;
  let s = str.trim();
  if (!s) return NaN;

  // Replace common multiplication and division symbols (unicode \u00D7 and \u00F7)
  s = s.replace(/[\u00D7xX]/g, '*').replace(/[\u00F7]/g, '/');

  // Security sanitize: allow only digits, decimal dots, operators +, -, *, /, (, ), and spaces
  if (!/^[\d\.\s\+\-\*/\(\)]+$/.test(s)) {
    return NaN;
  }

  // If simple single number without operators, parse directly
  if (!/[\+\-\*/]/.test(s)) {
    const val = parseFloat(s);
    return isNaN(val) ? NaN : val;
  }

  // Prevent consecutive operators like ** or //
  if (/\*{2,}|\/{2,}|\+{2,}|\-{2,}/.test(s)) {
    return NaN;
  }

  try {
    const res = new Function(`'use strict'; return (${s})`)();
    if (typeof res === 'number' && isFinite(res) && !isNaN(res)) {
      return res;
    }
  } catch (err) {
    return NaN;
  }
  return NaN;
}

function calculateCompare() {
  let validItems = [];

  state.compareItems.forEach(item => {
    const price = evaluateMathExpression(item.price);
    const qty   = evaluateMathExpression(item.quantity);
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

  // Calculate & display pastel red difference % for losing items
  validItems.forEach(item => {
    const isCheapest = cheapestItems.some(x => x.id === item.id);
    const unitPriceEl = document.getElementById(`comp_unit_${item.id}`);
    if (!unitPriceEl) return;

    const oldDiff = unitPriceEl.querySelector('.unit-price-diff');
    if (oldDiff) oldDiff.remove();

    if (!isCheapest && minUnitPrice > 0 && item.unitPrice > minUnitPrice) {
      const pctMore = ((item.unitPrice - minUnitPrice) / minUnitPrice) * 100;
      if (pctMore >= 0.05) {
        const diffSpan = document.createElement('span');
        diffSpan.className = 'unit-price-diff';
        diffSpan.innerText = `(+${pctMore.toFixed(1)}%)`;
        diffSpan.title = `+${pctMore.toFixed(1)}%`;
        unitPriceEl.appendChild(diffSpan);
      }
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
  const appMain = document.querySelector('.app-main');
  if (state.activeTab === 'split') {
    if (appMain) appMain.style.overflowY = 'auto';
    const splitPageEl = document.getElementById('split-page');
    if (splitPageEl) splitPageEl.style.paddingBottom = '180px';
    const splitHeader = document.getElementById('split-oneui-header');
    const topSpacer = document.getElementById('split-top-spacer');
    if (state.splitPhase === 2) {
      if (splitHeader) splitHeader.classList.add('oneui-collapsed', 'is-scrolled');
      if (topSpacer) topSpacer.style.height = '0px';
    } else {
      state.splitPhase = 1;
      if (splitHeader) splitHeader.classList.remove('oneui-collapsed', 'is-scrolled');
      if (topSpacer) topSpacer.style.height = '32px';
    }
    return;
  }
  updateCachedSpacers();
  const isCompare = state.activeTab === 'compare';

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
  state.splitPhase = 2;
  const topSpacer = document.getElementById('split-top-spacer');
  if (topSpacer) topSpacer.style.height = '0px';
}

function expandOneUIHeaders() {
  document.querySelectorAll('.oneui-header-container').forEach(el => {
    el.classList.remove('oneui-collapsed', 'is-scrolled');
    el.style.minHeight = '';
  });
  state.splitPhase = 1;
  const topSpacer = document.getElementById('split-top-spacer');
  if (topSpacer) topSpacer.style.height = '32px';
  adjustRestingLayout();
}

function transitionSplitPhase(targetPhase) {
  if (isTransitioning) return;
  const currentPhase = state.splitPhase || 1;
  if (currentPhase === targetPhase) return;

  isTransitioning = true;
  state.splitPhase = targetPhase;

  const header = document.getElementById('split-oneui-header');
  const topSpacer = document.getElementById('split-top-spacer');

  if (targetPhase === 2) {
    if (topSpacer) topSpacer.style.height = '0px';
    if (header) header.classList.add('oneui-collapsed', 'is-scrolled');
  } else {
    if (topSpacer) topSpacer.style.height = '32px';
    if (header) header.classList.remove('oneui-collapsed', 'is-scrolled');
  }

  setTimeout(() => {
    isTransitioning = false;
  }, 320);
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

  if (state.activeTab === 'split') {
    const currentPhase = state.splitPhase || 1;
    if (y > 20 && currentPhase === 1) {
      transitionSplitPhase(2);
    } else if (y <= 5 && currentPhase === 2) {
      transitionSplitPhase(1);
    }
    return;
  }

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

  if (state.activeTab === 'split') {
    const splitPhaseNow = state.splitPhase || 1;
    if (splitPhaseNow === 2 && deltaY < 0) return;
    if (splitPhaseNow === 2 && scrollTop > 10) return;

    if (deltaY < -18 && splitPhaseNow === 1) {
      transitionSplitPhase(2);
      touchStartY = currentY;
    } else if (deltaY > 18 && scrollTop <= 5 && splitPhaseNow === 2) {
      transitionSplitPhase(1);
      touchStartY = currentY;
    }
    return;
  }

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

  if (state.activeTab === 'split') {
    const currentPhase = state.splitPhase || 1;
    if (e.deltaY > 8 && currentPhase === 1) {
      transitionSplitPhase(2);
    } else if (e.deltaY < -8 && currentPhase === 2 && scrollTop <= 5) {
      transitionSplitPhase(1);
    }
    return;
  }

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
  triggerModalClosingCooldown();
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


// ===== SMART BILL SPLITTER TRANSLATIONS (13 LANGUAGES) =====
const SPLIT_TRANSLATIONS = {
  "en": {
    "tabSplit": "Split Bill",
    "splitH2": "Smart Bill Splitter",
    "splitUseCase": "Split dine-in bills and delivery meals fairly with taxes and export cleanly to messaging apps.",
    "featSplitFast": "Tap-first Speed",
    "featSplitTaxes": "Full Tax & Delivery",
    "featSplitOffline": "100% Offline",
    "splitPennyMatch": "\u2713 Exact Penny Match",
    "splitGrandLabel": "Grand Total",
    "splitSubtotalLabel": "Food Subtotal:",
    "splitDiscountLabel": "Discount:",
    "splitScLabel": "SC:",
    "splitVatLabel": "VAT:",
    "splitDeliveryLabel": "Delivery:",
    "splitSettingsToggle": "\u2699\ufe0f Discount / Tax / Delivery Settings",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f Bill Discount",
    "splitCurrencyFlat": "Flat",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Service Charge",
    "splitSettingVat": "\ud83c\udfdb\ufe0f VAT",
    "splitSettingDelivery": "\ud83d\udef5 Delivery Fee",
    "splitDeliveryEqual": "Equal",
    "splitDeliveryProp": "Proportional",
    "splitPeopleTitle": "Participants",
    "splitPeopleUnit": "people",
    "splitAddPersonBtn": "+ Add Friend",
    "splitEntryTitle": "Add Food Item",
    "splitItemNameLabel": "Item Name (optional)",
    "splitItemNamePlaceholder": "e.g. Pad Thai, Pizza",
    "splitItemPriceLabel": "Price *",
    "splitItemPricePlaceholder": "0 or 50*2",
    "splitWhoAte": "Who shared this item?",
    "splitEveryone": "\u2728 Everyone",
    "splitBtnConfirmAdd": "+ Add This Item",
    "splitItemsTitle": "Added Items",
    "splitItemsUnit": "items",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f No items added yet. Enter price above and tap add.",
    "splitBreakdownTitle": "Individual Breakdown",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f Add food items above to see per-person breakdown.",
    "splitBankLabel": "Bank / Transfer Service",
    "splitBankPlaceholder": "Specify bank or service",
    "splitAccountLabel": "Account Number or Phone",
    "splitAccountPlaceholder": "e.g. 081-xxx-xxxx or 123-4-56789-0",
    "splitBtnCopyMessage": "Copy Message",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Offline \u2022 Zero Tracking \u2022 Maximum Privacy",
    "splitModalAddTitle": "Add Participant",
    "splitModalAddSub": "Add Bill Participant",
    "splitModalNameLabel": "Friend's Name",
    "splitModalNamePlaceholder": "e.g. Alice, Bob, Charlie",
    "splitModalColorLabel": "Choose Avatar Color",
    "splitModalConfirmBtn": "+ Add Participant",
    "splitModalEditTitle": "Edit Food Item",
    "splitModalEditSub": "Edit Food Item & Shares",
    "splitModalSaveBtn": "Save Changes",
    "splitModalClearTitle": "Clear All Split Data",
    "splitModalClearDesc": "Are you sure you want to clear all bill splitter items and settings?",
    "splitModalClearConfirmBtn": "Clear Data",
    "splitModalClearCancelBtn": "Cancel",
    "splitFriendDefault": "Friend",
    "splitInvalidPrice": "Please enter a valid price.",
    "splitShareTextEveryone": "Everyone ({n} people)",
    "splitShareTextSome": "{names} ({n} people)",
    "splitDividedBy": "split {n}",
    "splitDiscountReceived": "Discount received",
    "splitDeliveryFee": "Delivery fee",
    "splitItemDefault": "Item",
    "splitBtnAddQuick": "Add Item",
    "splitPersonAdded": "Added {name}! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe Bill Split Summary",
    "splitLineGrand": "\ud83d\udcb0 Grand Total",
    "splitLineFood": "\ud83c\udf72 Food Subtotal",
    "splitLineDiscount": "\ud83c\udff7\ufe0f Discount",
    "splitLineSc": "\ud83c\udf7d\ufe0f Service Charge",
    "splitLineVat": "\ud83c\udfdb\ufe0f VAT",
    "splitLineDelivery": "\ud83d\udef5 Delivery",
    "splitLinePayment": "\ud83d\udcb3 Payment Details",
    "splitLineEachPerson": "\ud83d\udc65 Per-Person Amount",
    "splitLineFooter": "Calculated with SmartSaver App",
    "toastMessageCopied": "Summary message copied! \ud83d\udccb",
    "splitSharedWord": "Shared:",
    "splitBankOther": "Other / Specify...",
    "splitSelectPayer": "Who ate?"
  },
  "th": {
    "tabSplit": "\u0e2b\u0e32\u0e23\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitH2": "\u0e2b\u0e32\u0e23\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e41\u0e25\u0e30\u0e40\u0e14\u0e25\u0e34\u0e40\u0e27\u0e2d\u0e23\u0e35",
    "splitUseCase": "\u0e2b\u0e32\u0e23\u0e1a\u0e34\u0e25\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e14\u0e25\u0e34\u0e40\u0e27\u0e2d\u0e23\u0e35 \u0e41\u0e22\u0e01\u0e23\u0e32\u0e22\u0e04\u0e19 \u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2a\u0e48\u0e07\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e02\u0e49\u0e32\u0e41\u0e0a\u0e17",
    "featSplitFast": "\u0e2b\u0e32\u0e23\u0e40\u0e23\u0e47\u0e27\u0e41\u0e15\u0e48\u0e07\u0e48\u0e32\u0e22",
    "featSplitTaxes": "\u0e20\u0e32\u0e29\u0e35 & \u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07\u0e04\u0e23\u0e1a",
    "featSplitOffline": "\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c 100%",
    "splitPennyMatch": "\u2713 \u0e40\u0e28\u0e29\u0e2a\u0e15\u0e32\u0e07\u0e04\u0e4c\u0e25\u0e07\u0e15\u0e31\u0e27\u0e1e\u0e2d\u0e14\u0e35",
    "splitGrandLabel": "\u0e22\u0e2d\u0e14\u0e23\u0e27\u0e21\u0e2a\u0e38\u0e17\u0e18\u0e34\u0e17\u0e31\u0e49\u0e07\u0e1a\u0e34\u0e25",
    "splitSubtotalLabel": "\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23:",
    "splitDiscountLabel": "\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14:",
    "splitScLabel": "SC:",
    "splitVatLabel": "VAT:",
    "splitDeliveryLabel": "\u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07:",
    "splitSettingsToggle": "\u2699\ufe0f \u0e1b\u0e23\u0e31\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14 / \u0e20\u0e32\u0e29\u0e35 / \u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14\u0e1a\u0e34\u0e25",
    "splitCurrencyFlat": "\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u0e04\u0e48\u0e32\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 (SC)",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21 (VAT)",
    "splitSettingDelivery": "\ud83d\udef5 \u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07\u0e40\u0e14\u0e25\u0e34\u0e40\u0e27\u0e2d\u0e23\u0e35",
    "splitDeliveryEqual": "\u0e2b\u0e32\u0e23\u0e40\u0e17\u0e48\u0e32",
    "splitDeliveryProp": "\u0e15\u0e32\u0e21\u0e2a\u0e31\u0e14\u0e2a\u0e48\u0e27\u0e19",
    "splitPeopleTitle": "\u0e1c\u0e39\u0e49\u0e23\u0e48\u0e27\u0e21\u0e1a\u0e34\u0e25",
    "splitPeopleUnit": "\u0e04\u0e19",
    "splitAddPersonBtn": "+ \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
    "splitEntryTitle": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitItemNameLabel": "\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e21\u0e19\u0e39 (\u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e01\u0e47\u0e44\u0e14\u0e49)",
    "splitItemNamePlaceholder": "\u0e40\u0e0a\u0e48\u0e19 \u0e2a\u0e49\u0e21\u0e15\u0e33, \u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14",
    "splitItemPriceLabel": "\u0e23\u0e32\u0e04\u0e32 *",
    "splitItemPricePlaceholder": "0 \u0e2b\u0e23\u0e37\u0e2d 50*2",
    "splitWhoAte": "\u0e43\u0e04\u0e23\u0e01\u0e34\u0e19\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e19\u0e35\u0e49\u0e1a\u0e49\u0e32\u0e07?",
    "splitEveryone": "\u2728 \u0e17\u0e38\u0e01\u0e04\u0e19",
    "splitBtnConfirmAdd": "+ \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e19\u0e35\u0e49",
    "splitItemsTitle": "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",
    "splitItemsUnit": "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23 \u0e01\u0e23\u0e2d\u0e01\u0e23\u0e32\u0e04\u0e32\u0e41\u0e25\u0e49\u0e27\u0e01\u0e14\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22",
    "splitBreakdownTitle": "\u0e2a\u0e23\u0e38\u0e1b\u0e22\u0e2d\u0e14\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e48\u0e32\u0e22\u0e41\u0e22\u0e01\u0e23\u0e32\u0e22\u0e04\u0e19",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e2a\u0e23\u0e38\u0e1b\u0e22\u0e2d\u0e14\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19",
    "splitBankLabel": "\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23 / \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e42\u0e2d\u0e19",
    "splitBankPlaceholder": "\u0e23\u0e30\u0e1a\u0e38\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23 / \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23",
    "splitAccountLabel": "\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e0d\u0e0a\u0e35 \u0e2b\u0e23\u0e37\u0e2d \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",
    "splitAccountPlaceholder": "\u0e40\u0e0a\u0e48\u0e19 081-xxx-xxxx \u0e2b\u0e23\u0e37\u0e2d 123-4-56789-0",
    "splitBtnCopyMessage": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e2a\u0e23\u0e38\u0e1b\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
    "splitOfflineGuarantee": "\ud83d\udd12 \u0e17\u0e33\u0e07\u0e32\u0e19\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c 100% \u0e44\u0e21\u0e48\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e2d\u0e01\u0e19\u0e2d\u0e01\u0e40\u0e02\u0e37\u0e48\u0e2d\u0e07 \u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",
    "splitModalAddTitle": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1c\u0e39\u0e49\u0e23\u0e48\u0e27\u0e21\u0e1a\u0e34\u0e25",
    "splitModalAddSub": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e23\u0e48\u0e27\u0e21\u0e1a\u0e34\u0e25\u0e2b\u0e32\u0e23\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitModalNameLabel": "\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
    "splitModalNamePlaceholder": "\u0e40\u0e0a\u0e48\u0e19 \u0e19\u0e34\u0e14, \u0e01\u0e49\u0e2d\u0e07, \u0e41\u0e19\u0e19",
    "splitModalColorLabel": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e35\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27",
    "splitModalConfirmBtn": "+ \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
    "splitModalEditTitle": "\u0e41\u0e01\u0e49\u0e44\u0e02\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitModalEditSub": "\u0e41\u0e01\u0e49\u0e44\u0e02\u0e0a\u0e37\u0e48\u0e2d \u0e23\u0e32\u0e04\u0e32 \u0e41\u0e25\u0e30\u0e04\u0e19\u0e2b\u0e32\u0e23",
    "splitModalSaveBtn": "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02",
    "splitModalClearTitle": "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e25\u0e49\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
    "splitModalClearDesc": "\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e25\u0e49\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e32\u0e23\u0e2b\u0e32\u0e23\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?",
    "splitModalClearConfirmBtn": "\u0e25\u0e49\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
    "splitModalClearCancelBtn": "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",
    "splitFriendDefault": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
    "splitInvalidPrice": "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e23\u0e32\u0e04\u0e32\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e1a",
    "splitShareTextEveryone": "\u0e17\u0e38\u0e01\u0e04\u0e19 ({n} \u0e04\u0e19)",
    "splitShareTextSome": "{names} ({n} \u0e04\u0e19)",
    "splitDividedBy": "\u0e2b\u0e32\u0e23 {n}",
    "splitDiscountReceived": "\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a",
    "splitDeliveryFee": "\u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07",
    "splitItemDefault": "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",
    "splitBtnAddQuick": "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",
    "splitPersonAdded": "\u0e40\u0e1e\u0e34\u0e48\u0e21 {name} \u0e41\u0e25\u0e49\u0e27! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u0e2a\u0e23\u0e38\u0e1b\u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitLineGrand": "\ud83d\udcb0 \u0e22\u0e2d\u0e14\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e1a\u0e34\u0e25",
    "splitLineFood": "\ud83c\udf72 \u0e04\u0e48\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u0e04\u0e48\u0e32\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 (SC)",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u0e20\u0e32\u0e29\u0e35\u0e21\u0e39\u0e25\u0e04\u0e48\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21 (VAT)",
    "splitLineDelivery": "\ud83d\udef5 \u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07",
    "splitLinePayment": "\ud83d\udcb3 \u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e42\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19",
    "splitLineEachPerson": "\ud83d\udc65 \u0e22\u0e2d\u0e14\u0e41\u0e22\u0e01\u0e23\u0e32\u0e22\u0e04\u0e19",
    "splitLineFooter": "\u26a1 \u0e04\u0e33\u0e19\u0e27\u0e13\u0e14\u0e49\u0e27\u0e22 SmartSaver App (\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c 100% \u0e40\u0e28\u0e29\u0e2a\u0e15\u0e32\u0e07\u0e04\u0e4c\u0e25\u0e07\u0e15\u0e31\u0e27)",
    "toastMessageCopied": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e2a\u0e23\u0e38\u0e1b\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e41\u0e25\u0e49\u0e27! \ud83d\udccb",
    "splitSharedWord": "\u0e41\u0e0a\u0e23\u0e4c:",
    "splitBankOther": "\u0e2d\u0e37\u0e48\u0e19\u0e46 (\u0e23\u0e30\u0e1a\u0e38\u0e40\u0e2d\u0e07)...",
    "splitSelectPayer": "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e19\u0e01\u0e34\u0e19"
  },
  "lo": {
    "tabSplit": "\u0eab\u0eb2\u0e99\u0e84\u0ec8\u0e2d\u0eb2\u0eab\u0eb2\u0e99",
    "splitH2": "\u0eab\u0eb2\u0e99\u0e84\u0ec8\u0e2d\u0eb2\u0eab\u0eb2\u0e99 \u0ec1\u0ea5\u0eb0 \u0ec0\u0e94\u0ea5\u0eb4\u0ec0\u0ea7\u0eb5\u0ea3\u0eb5",
    "splitUseCase": "\u0eab\u0eb2\u0e99\u0e9a\u0eb4\u0e99\u0eae\u0ec9\u0eb2\u0e99\u0ead\u0eb2\u0eab\u0eb2\u0e99 \u0eab\u0ea5\u0eb7 \u0ec0\u0e94\u0ea5\u0eb4\u0ec0\u0ea7\u0eb5\u0ea3\u0eb5 \u0ec1\u0e8d\u0e81\u0ea5\u0eb2\u0e8d\u0e84\u0ebb\u0e99 \u0ea5\u0eb0\u0ead\u0ebd\u0e94\u0e8a\u0eb1\u0e94\u0ec0\u0e88\u0e99 \u0e9e\u0ec9\u0ead\u0ea1\u0e8a\u0ebb\u0ec8\u0e87\u0eaa\u0eb0\u0eab\u0ebc\u0eb8\u0e9a\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0ec1\u0e8a\u0eb1\u0e94",
    "featSplitFast": "\u0eab\u0eb2\u0e99\u0ec4\u0ea7\u0ec1\u0e95\u0eb0\u0e87\u0ec8\u0eb2\u0e8d",
    "featSplitTaxes": "\u0e9e\u0eb2\u0eaa\u0eb5 & \u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87\u0e84\u0ebb\u0e9a",
    "featSplitOffline": "\u0ead\u0ead\u0e9a\u0ea5\u0eb2\u0e8d 100%",
    "splitPennyMatch": "\u2713 \u0ec0\u0eaa\u0e94\u0ec0\u0e87\u0eb4\u0e99\u0ea5\u0ebb\u0e87\u0e95\u0ebb\u0ea7\u0e9e\u0ecd\u0e94\u0eb5",
    "splitGrandLabel": "\u0e8d\u0ead\u0e94\u0ea5\u0ea7\u0ea1\u0e97\u0eb1\u0e87\u0eab\u0ea1\u0ebb\u0e94",
    "splitSubtotalLabel": "\u0e84\u0ec8\u0eb2\u0ead\u0eb2\u0eab\u0eb2\u0e99:",
    "splitDiscountLabel": "\u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0ebc\u0eb8\u0e94:",
    "splitScLabel": "SC:",
    "splitVatLabel": "VAT:",
    "splitDeliveryLabel": "\u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87:",
    "splitSettingsToggle": "\u2699\ufe0f \u0e9b\u0eb1\u0e9a\u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0ebc\u0eb8\u0e94 / \u0e9e\u0eb2\u0eaa\u0eb5 / \u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0ebc\u0eb8\u0e94\u0e9a\u0eb4\u0e99",
    "splitCurrencyFlat": "\u0e88\u0eb3\u0e99\u0ea7\u0e99\u0ec0\u0e87\u0eb4\u0e99",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u0e84\u0ec8\u0eb2\u0e9a\u0ecd\u0ea5\u0eb4\u0e81\u0eb2\u0e99 (SC)",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u0ead\u0eb2\u0e81\u0ead\u0e99\u0ea1\u0eb9\u0ea5\u0e84\u0ec8\u0eb2\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1 (VAT)",
    "splitSettingDelivery": "\ud83d\udef5 \u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87\u0ec0\u0e94\u0ea5\u0eb4\u0ec0\u0ea7\u0eb5\u0ea3\u0eb5",
    "splitDeliveryEqual": "\u0eab\u0eb2\u0e99\u0ec0\u0e97\u0ebb\u0ec8\u0eb2",
    "splitDeliveryProp": "\u0e95\u0eb2\u0ea1\u0eaa\u0eb1\u0e94\u0eaa\u0ec8\u0ea7\u0e99",
    "splitPeopleTitle": "\u0e9c\u0eb9\u0ec9\u0eae\u0ec8\u0ea7\u0ea1\u0e9a\u0eb4\u0e99",
    "splitPeopleUnit": "\u0e84\u0ebb\u0e99",
    "splitAddPersonBtn": "+ \u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0eab\u0ea1\u0eb9\u0ec8",
    "splitEntryTitle": "\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0ead\u0eb2\u0eab\u0eb2\u0e99",
    "splitItemNameLabel": "\u0e8a\u0eb7\u0ec8\u0ec0\u0ea1\u0e99\u0eb9 (\u0e9a\u0ecd\u0ec8\u0ec3\u0eaa\u0ec8\u0e81\u0ecd\u0ec4\u0e94\u0ec9)",
    "splitItemNamePlaceholder": "\u0ec0\u0e8a\u0eb1\u0ec8\u0e99: \u0e95\u0eb3\u0eab\u0ea1\u0eb2\u0e81\u0e87\u0eb8\u0ec8\u0e87, \u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0e9c\u0eb1\u0e94",
    "splitItemPriceLabel": "\u0ea5\u0eb2\u0e84\u0eb2 *",
    "splitItemPricePlaceholder": "0 \u0eab\u0ea5\u0eb7 50*2",
    "splitWhoAte": "\u0ec3\u0e9c\u0e81\u0eb4\u0e99\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec1\u0e94\u0ec8?",
    "splitEveryone": "\u2728 \u0e97\u0eb8\u0e81\u0e84\u0ebb\u0e99",
    "splitBtnConfirmAdd": "+ \u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0e99\u0eb5\u0ec9",
    "splitItemsTitle": "\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0e97\u0eb5\u0ec8\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81",
    "splitItemsUnit": "\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u0e8d\u0eb1\u0e87\u0e9a\u0ecd\u0ec8\u0ea1\u0eb5\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0ead\u0eb2\u0eab\u0eb2\u0e99 \u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ec3\u0eaa\u0ec8\u0ea5\u0eb2\u0e84\u0eb2\u0ec1\u0ea5\u0ec9\u0ea7\u0e81\u0ebb\u0e94\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1",
    "splitBreakdownTitle": "\u0eaa\u0eb0\u0eab\u0ebc\u0eb8\u0e9a\u0e8d\u0ead\u0e94\u0e97\u0eb5\u0ec8\u0e95\u0ec9\u0ead\u0e87\u0e88\u0ec8\u0eb2\u0e8d\u0ec1\u0e8d\u0e81\u0ea5\u0eb2\u0e8d\u0e84\u0ebb\u0e99",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0ead\u0eb2\u0eab\u0eb2\u0e99\u0e82\u0ec9\u0eb2\u0e87\u0ec0\u0e97\u0eb4\u0e87\u0ec0\u0e9e\u0eb7\u0ec8\u0ec0\u0e9a\u0eb4\u0ec8\u0e87\u0e8d\u0ead\u0e94\u0ec1\u0e95\u0ec8\u0ea5\u0eb0\u0e84\u0ebb\u0e99",
    "splitBankLabel": "\u0e97\u0eb0\u0e99\u0eb2\u0e84\u0eb2\u0e99 / \u0e9a\u0ecd\u0ea5\u0eb4\u0e81\u0eb2\u0e99\u0ec2\u0ead\u0e99\u0ec0\u0e87\u0eb4\u0e99",
    "splitBankPlaceholder": "\u0ea5\u0eb0\u0e9a\u0eb8\u0e97\u0eb0\u0e99\u0eb2\u0e84\u0eb2\u0e99 / \u0e9a\u0ecd\u0ea5\u0eb4\u0e81\u0eb2\u0e99",
    "splitAccountLabel": "\u0ec0\u0ea5\u0e81\u0e9a\u0eb1\u0e99\u0e8a\u0eb5 \u0eab\u0ea5\u0eb7 \u0ec0\u0e9a\u0eb5\u0ec2\u0e97\u0ea5\u0eb0\u0eaa\u0eb1\u0e9a",
    "splitAccountPlaceholder": "\u0ec0\u0e8a\u0eb1\u0ec8\u0e99: 020-xxx-xxxx",
    "splitBtnCopyMessage": "\u0e84\u0eb1\u0e94\u0ea5\u0ead\u0e81\u0e82\u0ec9\u0ead\u0e84\u0ea7\u0eb2\u0ea1\u0eaa\u0eb0\u0eab\u0ebc\u0eb8\u0e9a",
    "splitOfflineGuarantee": "\ud83d\udd12 \u0ead\u0ead\u0e9a\u0ea5\u0eb2\u0e8d 100% \u0e9a\u0ecd\u0ec8\u0ea1\u0eb5\u0e81\u0eb2\u0e99\u0eaa\u0ebb\u0ec8\u0e87\u0e82\u0ec9\u0ead\u0ea1\u0eb9\u0ea5\u0ead\u0ead\u0e81 \u0e9b\u0ead\u0e94\u0ec4\u0e9e\u0eaa\u0eb9\u0e87\u0eaa\u0eb8\u0e94",
    "splitModalAddTitle": "\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0e9c\u0eb9\u0ec9\u0eae\u0ec8\u0ea7\u0ea1\u0e9a\u0eb4\u0e99",
    "splitModalAddSub": "\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0eab\u0ea1\u0eb9\u0ec8\u0eae\u0ec8\u0ea7\u0ea1\u0e9a\u0eb4\u0e99\u0eab\u0eb2\u0e99\u0e84\u0ec8\u0eb2\u0ead\u0eb2\u0eab\u0eb2\u0e99",
    "splitModalNameLabel": "\u0e8a\u0eb7\u0ec8\u0eab\u0ea1\u0eb9\u0ec8",
    "splitModalNamePlaceholder": "\u0ec0\u0e8a\u0eb1\u0ec8\u0e99: \u0e99\u0eb4\u0e94, \u0e81\u0ec9\u0ead\u0e87",
    "splitModalColorLabel": "\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0eaa\u0eb5\u0e9b\u0eb0\u0e88\u0eb3\u0e95\u0ebb\u0ea7",
    "splitModalConfirmBtn": "+ \u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0eab\u0ea1\u0eb9\u0ec8",
    "splitModalEditTitle": "\u0ec1\u0e81\u0ec9\u0ec4\u0e82\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0ead\u0eb2\u0eab\u0eb2\u0e99",
    "splitModalEditSub": "\u0ec1\u0e81\u0ec9\u0ec4\u0e82\u0e8a\u0eb7\u0ec8 \u0ea5\u0eb2\u0e84\u0eb2 \u0ec1\u0ea5\u0eb0 \u0e84\u0ebb\u0e99\u0eab\u0eb2\u0e99",
    "splitModalSaveBtn": "\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0e81\u0eb2\u0e99\u0ec1\u0e81\u0ec9\u0ec4\u0e82",
    "splitModalClearTitle": "\u0ea2\u0eb7\u0e99\u0ea2\u0eb1\u0e99\u0ea5\u0ec9\u0eb2\u0e87\u0e82\u0ec9\u0ead\u0ea1\u0eb9\u0ea5",
    "splitModalClearDesc": "\u0e97\u0ec8\u0eb2\u0e99\u0e95\u0ec9\u0ead\u0e87\u0e81\u0eb2\u0e99\u0ea5\u0ec9\u0eb2\u0e87\u0e82\u0ec9\u0ead\u0ea1\u0eb9\u0ea5\u0e81\u0eb2\u0e99\u0eab\u0eb2\u0e99\u0e84\u0ec8\u0eb2\u0ead\u0eb2\u0eab\u0eb2\u0e99\u0e97\u0eb1\u0e87\u0eab\u0ea1\u0ebb\u0e94\u0ec1\u0e97\u0ec9\u0e9a\u0ecd\u0ec8?",
    "splitModalClearConfirmBtn": "\u0ea5\u0ec9\u0eb2\u0e87\u0e82\u0ec9\u0ead\u0ea1\u0eb9\u0ea5",
    "splitModalClearCancelBtn": "\u0e8d\u0ebb\u0e81\u0ec0\u0ea5\u0eb5\u0e81",
    "splitFriendDefault": "\u0eab\u0ea1\u0eb9\u0ec8",
    "splitInvalidPrice": "\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ec3\u0eaa\u0ec8\u0ea5\u0eb2\u0e84\u0eb2\u0e97\u0eb5\u0ec8\u0e96\u0eb7\u0e81\u0e95\u0ec9\u0ead\u0e87",
    "splitShareTextEveryone": "\u0e97\u0eb8\u0e81\u0e84\u0ebb\u0e99 ({n} \u0e84\u0ebb\u0e99)",
    "splitShareTextSome": "{names} ({n} \u0e84\u0ebb\u0e99)",
    "splitDividedBy": "\u0eab\u0eb2\u0e99 {n}",
    "splitDiscountReceived": "\u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0ebc\u0eb8\u0e94\u0e97\u0eb5\u0ec8\u0ec4\u0e94\u0ec9\u0eae\u0eb1\u0e9a",
    "splitDeliveryFee": "\u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87",
    "splitItemDefault": "\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99",
    "splitBtnAddQuick": "\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99",
    "splitPersonAdded": "\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1 {name} \u0ec1\u0ea5\u0ec9\u0ea7! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u0eaa\u0eb0\u0eab\u0ebc\u0eb8\u0e9a\u0eab\u0eb2\u0e99\u0e84\u0ec8\u0eb2\u0ead\u0eb2\u0eab\u0eb2\u0e99",
    "splitLineGrand": "\ud83d\udcb0 \u0e8d\u0ead\u0e94\u0ea5\u0ea7\u0ea1\u0e97\u0eb1\u0e87\u0eab\u0ea1\u0ebb\u0e94",
    "splitLineFood": "\ud83c\udf72 \u0e84\u0ec8\u0eb2\u0ead\u0eb2\u0eab\u0eb2\u0e99",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u0eaa\u0ec8\u0ea7\u0e99\u0eab\u0ebc\u0eb8\u0e94",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u0e84\u0ec8\u0eb2\u0e9a\u0ecd\u0ea5\u0eb4\u0e81\u0eb2\u0e99 (SC)",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u0ead\u0eb2\u0e81\u0ead\u0e99 (VAT)",
    "splitLineDelivery": "\ud83d\udef5 \u0e84\u0ec8\u0eb2\u0eaa\u0ebb\u0ec8\u0e87",
    "splitLinePayment": "\ud83d\udcb3 \u0e8a\u0ec8\u0ead\u0e87\u0e97\u0eb2\u0e87\u0ec2\u0ead\u0e99\u0ec0\u0e87\u0eb4\u0e99",
    "splitLineEachPerson": "\ud83d\udc65 \u0e8d\u0ead\u0e94\u0ec1\u0e8d\u0e81\u0ea5\u0eb2\u0e8d\u0e84\u0ebb\u0e99",
    "splitLineFooter": "\u26a1 \u0e84\u0eb3\u0e99\u0ea7\u0e99\u0e94\u0ec9\u0ea7\u0e8d SmartSaver App (\u0ead\u0ead\u0e9a\u0ea5\u0eb2\u0e8d 100% \u0ec0\u0eaa\u0e94\u0ec0\u0e87\u0eb4\u0e99\u0ea5\u0ebb\u0e87\u0e95\u0ebb\u0ea7)",
    "toastMessageCopied": "\u0e84\u0eb1\u0e94\u0ea5\u0ead\u0e81\u0e82\u0ec9\u0ead\u0e84\u0ea7\u0eb2\u0ea1\u0ec1\u0ea5\u0ec9\u0ea7! \ud83d\udccb",
    "splitSharedWord": "\u0ec1\u0e9a\u0ec8\u0e87:",
    "splitBankOther": "\u0ead\u0eb7\u0ec8\u0e99\u0ec6 (\u0ea5\u0eb0\u0e9a\u0eb8\u0ec0\u0ead\u0e87)...",
    "splitSelectPayer": "\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0e84\u0ebb\u0e99\u0e81\u0eb4\u0e99"
  },
  "zh": {
    "tabSplit": "\u5206\u8d26\u52a9\u624b",
    "splitH2": "\u667a\u80fd\u8d26\u5355\u4e0e\u5916\u5356\u5206\u6447",
    "splitUseCase": "\u7cbe\u51c6\u8ba1\u7b97\u5802\u98df\u4e0e\u5916\u5356\u5206\u6447\uff0c\u5305\u542b\u7a0e\u8d39\u914d\u9001\u8d39\uff0c\u4e00\u952e\u751f\u6210\u660e\u7ec6\u5e76\u590d\u5236\u3002",
    "featSplitFast": "\u6781\u901f\u70b9\u9009",
    "featSplitTaxes": "\u7a0e\u8d39\u914d\u9001\u5168\u5305",
    "featSplitOffline": "100% \u79bb\u7ebf",
    "splitPennyMatch": "\u2713 \u5206\u6beb\u4e0d\u5dee\u7cbe\u786e\u5bf9\u8d26",
    "splitGrandLabel": "\u8d26\u5355\u603b\u91d1\u989d",
    "splitSubtotalLabel": "\u9910\u54c1\u5c0f\u8ba1:",
    "splitDiscountLabel": "\u6298\u6263\u4f18\u60e0:",
    "splitScLabel": "\u670d\u52a1\u8d39:",
    "splitVatLabel": "\u589e\u503c\u7a0e:",
    "splitDeliveryLabel": "\u914d\u9001\u8d39:",
    "splitSettingsToggle": "\u2699\ufe0f \u6298\u6263 / \u7a0e\u8d39 / \u914d\u9001\u8d39\u8bbe\u7f6e",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u8d26\u5355\u6298\u6263",
    "splitCurrencyFlat": "\u56fa\u5b9a\u91d1\u989d",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u670d\u52a1\u8d39 (SC)",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u589e\u503c\u7a0e (VAT)",
    "splitSettingDelivery": "\ud83d\udef5 \u5916\u5356\u914d\u9001\u8d39",
    "splitDeliveryEqual": "\u5747\u6447",
    "splitDeliveryProp": "\u6309\u6bd4\u4f8b",
    "splitPeopleTitle": "\u540c\u884c\u597d\u53cb",
    "splitPeopleUnit": "\u4eba",
    "splitAddPersonBtn": "+ \u6dfb\u52a0\u597d\u53cb",
    "splitEntryTitle": "\u6dfb\u52a0\u9910\u54c1",
    "splitItemNameLabel": "\u9910\u54c1\u540d\u79f0 (\u9009\u586b)",
    "splitItemNamePlaceholder": "\u4f8b\u5982\uff1a\u62ab\u8428\u3001\u7092\u996d",
    "splitItemPriceLabel": "\u4ef7\u683c *",
    "splitItemPricePlaceholder": "0 \u6216 50*2",
    "splitWhoAte": "\u8c01\u5403\u4e86\u8fd9\u9053\u83dc\uff1f",
    "splitEveryone": "\u2728 \u5168\u5458",
    "splitBtnConfirmAdd": "+ \u786e\u8ba4\u6dfb\u52a0",
    "splitItemsTitle": "\u5df2\u5f55\u5165\u9910\u54c1",
    "splitItemsUnit": "\u9879",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u6682\u65e0\u9910\u54c1\uff0c\u5728\u4e0a\u65b9\u8f93\u5165\u4ef7\u683c\u540e\u70b9\u51fb\u6dfb\u52a0\u5373\u53ef\u3002",
    "splitBreakdownTitle": "\u4e2a\u4eba\u5e94\u4ed8\u660e\u7ec6",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u5728\u4e0a\u65b9\u6dfb\u52a0\u9910\u54c1\u4ee5\u67e5\u770b\u6bcf\u4eba\u5e94\u4ed8\u660e\u7ec6\u3002",
    "splitBankLabel": "\u6536\u6b3e\u94f6\u884c / \u652f\u4ed8\u65b9\u5f0f",
    "splitBankPlaceholder": "\u586b\u5199\u94f6\u884c\u6216\u652f\u4ed8\u65b9\u5f0f",
    "splitAccountLabel": "\u94f6\u884c\u5361\u53f7 / \u624b\u673a\u53f7",
    "splitAccountPlaceholder": "\u4f8b\u5982: 6222... \u6216 138....",
    "splitBtnCopyMessage": "\u590d\u5236\u8d26\u5355\u660e\u7ec6",
    "splitOfflineGuarantee": "\ud83d\udd12 100% \u672c\u5730\u79bb\u7ebf\u8fd0\u884c \u2022 \u65e0\u4efb\u4f55\u6570\u636e\u4e0a\u4f20 \u2022 \u9690\u79c1\u5b89\u5168",
    "splitModalAddTitle": "\u6dfb\u52a0\u53c2\u4e0e\u4eba",
    "splitModalAddSub": "\u6dfb\u52a0\u5171\u540c\u5206\u6447\u8d26\u5355\u7684\u597d\u53cb",
    "splitModalNameLabel": "\u597d\u53cb\u540d\u79f0",
    "splitModalNamePlaceholder": "\u4f8b\u5982\uff1a\u5c0f\u5f20\u3001\u5c0f\u674e",
    "splitModalColorLabel": "\u9009\u62e9\u5934\u50cf\u989c\u8272",
    "splitModalConfirmBtn": "+ \u786e\u8ba4\u6dfb\u52a0",
    "splitModalEditTitle": "\u7f16\u8f91\u9910\u54c1",
    "splitModalEditSub": "\u4fee\u6539\u540d\u79f0\u3001\u91d1\u989d\u4e0e\u5206\u6447\u4eba",
    "splitModalSaveBtn": "\u4fdd\u5b58\u4fee\u6539",
    "splitModalClearTitle": "\u786e\u8ba4\u6e05\u7a7a\u8d26\u5355",
    "splitModalClearDesc": "\u786e\u5b9a\u8981\u6e05\u7a7a\u5f53\u524d\u6240\u6709\u9910\u54c1\u4e0e\u5206\u6447\u8bbe\u7f6e\u5417\uff1f",
    "splitModalClearConfirmBtn": "\u786e\u8ba4\u6e05\u7a7a",
    "splitModalClearCancelBtn": "\u53d6\u6d88",
    "splitFriendDefault": "\u597d\u53cb",
    "splitInvalidPrice": "\u8bf7\u8f93\u5165\u6709\u6548\u91d1\u989d",
    "splitShareTextEveryone": "\u5168\u5458 ({n} \u4eba)",
    "splitShareTextSome": "{names} ({n} \u4eba)",
    "splitDividedBy": "{n}\u4eba\u5206\u6447",
    "splitDiscountReceived": "\u5206\u6447\u6298\u6263",
    "splitDeliveryFee": "\u914d\u9001\u8d39",
    "splitItemDefault": "\u9910\u54c1",
    "splitBtnAddQuick": "\u6dfb\u52a0\u9910\u54c1",
    "splitPersonAdded": "\u5df2\u6dfb\u52a0 {name}\uff01\ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u805a\u9910\u8d26\u5355\u660e\u7ec6",
    "splitLineGrand": "\ud83d\udcb0 \u8d26\u5355\u603b\u989d",
    "splitLineFood": "\ud83c\udf72 \u9910\u54c1\u5c0f\u8ba1",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u4f18\u60e0\u7acb\u51cf",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u670d\u52a1\u8d39",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u7a0e\u8d39",
    "splitLineDelivery": "\ud83d\udef5 \u914d\u9001\u8d39",
    "splitLinePayment": "\ud83d\udcb3 \u8f6c\u8d26\u6536\u6b3e\u4fe1\u606f",
    "splitLineEachPerson": "\ud83d\udc65 \u6bcf\u4eba\u5e94\u4ed8",
    "splitLineFooter": "\u26a1 \u7531 SmartSaver \u8ba1\u7b97 (100% \u672c\u5730\u79bb\u7ebf \u2022 \u5206\u6beb\u65e0\u5dee)",
    "toastMessageCopied": "\u5df2\u590d\u5236\u8d26\u5355\u660e\u7ec6\uff01\ud83d\udccb",
    "splitSharedWord": "\u5206\u6447:",
    "splitBankOther": "\u5176\u4ed6 (\u81ea\u884c\u586b\u5199)...",
    "splitSelectPayer": "\u9009\u62e9\u5c31\u9910\u8005"
  },
  "ja": {
    "tabSplit": "\u5272\u308a\u52d8",
    "splitH2": "\u30b9\u30de\u30fc\u30c8\u5272\u308a\u52d8\u30fb\u51fa\u524d\u8a08\u7b97",
    "splitUseCase": "\u5916\u98df\u3084\u30c7\u30ea\u30d0\u30ea\u30fc\u306e\u5272\u308a\u52d8\u3092\u6b63\u78ba\u306b\u8a08\u7b97\u3002\u7a0e\u91d1\u3084\u914d\u9001\u6599\u3082\u516c\u5e73\u306b\u5206\u62c5\u3057\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3078\u7c21\u5358\u5171\u6709\u3002",
    "featSplitFast": "\u30bf\u30c3\u30d7\u3067\u7d20\u65e9\u304f",
    "featSplitTaxes": "\u7a0e\u30fb\u9001\u6599\u306b\u5bfe\u5fdc",
    "featSplitOffline": "\u5b8c\u5168\u30aa\u30d7\u30e9\u30a4\u30f3",
    "splitPennyMatch": "\u2713 1\u5186\u306e\u7aef\u6570\u3082\u5b8c\u5168\u4e00\u81f4",
    "splitGrandLabel": "\u5408\u8a08\u91d1\u984d",
    "splitSubtotalLabel": "\u6599\u7406\u5c0f\u8a08:",
    "splitDiscountLabel": "\u5272\u5f15:",
    "splitScLabel": "\u30b5\u30fc\u30d3\u30b9\u6599:",
    "splitVatLabel": "\u6d88\u8cbb\u7a0e:",
    "splitDeliveryLabel": "\u914d\u9001\u6599:",
    "splitSettingsToggle": "\u2699\ufe0f \u5272\u5f15\u30fb\u7a0e\u30fb\u914d\u9001\u8cbb\u306e\u8a2d\u5b9a",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u5272\u5f15\u984d",
    "splitCurrencyFlat": "\u5b9a\u984d",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u30b5\u30fc\u30d3\u30b9\u6599",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u6d88\u8cbb\u7a0e (VAT)",
    "splitSettingDelivery": "\ud83d\udef5 \u914d\u9001\u6599",
    "splitDeliveryEqual": "\u5747\u7b49",
    "splitDeliveryProp": "\u5272\u5408",
    "splitPeopleTitle": "\u53c2\u52a0\u30e1\u30f3\u30d0\u30fc",
    "splitPeopleUnit": "\u4eba",
    "splitAddPersonBtn": "+ \u30e1\u30f3\u30d0\u30fc\u8ffd\u52a0",
    "splitEntryTitle": "\u54c1\u76ee\u3092\u8ffd\u52a0",
    "splitItemNameLabel": "\u6599\u7406\u540d (\u7701\u7565\u53ef)",
    "splitItemNamePlaceholder": "\u4f8b\uff1a\u30e9\u30fc\u30e1\u30f3\u3001\u30ab\u30ec\u30fc",
    "splitItemPriceLabel": "\u4fa1\u683c *",
    "splitItemPricePlaceholder": "0 \u307e\u305f\u306f 50*2",
    "splitWhoAte": "\u8ab0\u304c\u3053\u306e\u6599\u7406\u3092\u98df\u3079\u305f\uff1f",
    "splitEveryone": "\u2728 \u5168\u54e1",
    "splitBtnConfirmAdd": "+ \u3053\u306e\u54c1\u76ee\u3092\u8ffd\u52a0",
    "splitItemsTitle": "\u767b\u9332\u3057\u305f\u54c1\u76ee",
    "splitItemsUnit": "\u54c1",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u307e\u3060\u54c1\u76ee\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u4e0a\u3067\u91d1\u984d\u3092\u5165\u529b\u3057\u3066\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
    "splitBreakdownTitle": "1\u4eba\u3042\u305f\u308a\u306e\u652f\u6255\u984d",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u4e0a\u3067\u54c1\u76ee\u3092\u8ffd\u52a0\u3059\u308b\u3068\u5404\u4eba\u306e\u652f\u6255\u984d\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",
    "splitBankLabel": "\u53d7\u53d6\u53e3\u5ea7\u30fb\u9001\u91d1\u30b5\u30fc\u30d3\u30b9",
    "splitBankPlaceholder": "\u9280\u884c\u540d\u307e\u305f\u306f\u9001\u91d1\u30b5\u30fc\u30d3\u30b9",
    "splitAccountLabel": "\u53e3\u5ea7\u756a\u53f7\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7",
    "splitAccountPlaceholder": "\u4f8b\uff1a090-xxxx-xxxx \u307e\u305f\u306f\u53e3\u5ea7\u756a\u53f7",
    "splitBtnCopyMessage": "\u8acb\u6c42\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b3\u30d4\u30fc",
    "splitOfflineGuarantee": "\ud83d\udd12 100% \u30aa\u30d5\u30e9\u30a4\u30f3\u52d5\u4f5c \u2022 \u5916\u90e8\u9001\u4fe1\u306a\u3057 \u2022 \u5b89\u5fc3\u306e\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc",
    "splitModalAddTitle": "\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0",
    "splitModalAddSub": "\u5272\u308a\u52d8\u306b\u53c2\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0",
    "splitModalNameLabel": "\u304a\u540d\u524d",
    "splitModalNamePlaceholder": "\u4f8b\uff1a\u4f50\u85e4\u3001\u7530\u4e2d",
    "splitModalColorLabel": "\u30a2\u30a4\u30b3\u30f3\u30ab\u30e9\u30fc\u3092\u9078\u629e",
    "splitModalConfirmBtn": "+ \u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0",
    "splitModalEditTitle": "\u54c1\u76ee\u3092\u7de8\u96c6",
    "splitModalEditSub": "\u6599\u7406\u540d\u30fb\u4fa1\u683c\u30fb\u5272\u308a\u52d8\u5bfe\u8c61\u3092\u5909\u66f4",
    "splitModalSaveBtn": "\u5909\u66f4\u3092\u4fdd\u5b58",
    "splitModalClearTitle": "\u5272\u308a\u52d8\u30c7\u30fc\u30bf\u306e\u521d\u671f\u5316",
    "splitModalClearDesc": "\u767b\u9332\u3057\u305f\u54c1\u76ee\u3068\u5272\u308a\u52d8\u8a2d\u5b9a\u3092\u3059\u3079\u3066\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u304b\uff1f",
    "splitModalClearConfirmBtn": "\u30ea\u30bb\u30c3\u30c8\u3059\u308b",
    "splitModalClearCancelBtn": "\u30ad\u30e3\u30f3\u30bb\u30eb",
    "splitFriendDefault": "\u30e1\u30f3\u30d0\u30fc",
    "splitInvalidPrice": "\u6b63\u3057\u3044\u91d1\u984d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
    "splitShareTextEveryone": "\u5168\u54e1 ({n} \u4eba)",
    "splitShareTextSome": "{names} ({n} \u4eba)",
    "splitDividedBy": "{n}\u4eba\u3067\u5272\u308b",
    "splitDiscountReceived": "\u5272\u5f15\u9069\u7528",
    "splitDeliveryFee": "\u914d\u9001\u6599",
    "splitItemDefault": "\u54c1\u76ee",
    "splitBtnAddQuick": "\u54c1\u76ee\u3092\u8ffd\u52a0",
    "splitPersonAdded": "{name} \u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\uff01\ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u5272\u308a\u52d8\u7cbe\u7b97\u30ec\u30b7\u30fc\u30c8",
    "splitLineGrand": "\ud83d\udcb0 \u652f\u6255\u7dcf\u984d",
    "splitLineFood": "\ud83c\udf72 \u6599\u7406\u4ee3\u91d1",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u5272\u5f15",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u30b5\u30fc\u30d3\u30b9\u6599",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u6d88\u8cbb\u7a0e",
    "splitLineDelivery": "\ud83d\udef5 \u9001\u6599",
    "splitLinePayment": "\ud83d\udcb3 \u9001\u91d1\u5148\u53e3\u5ea7",
    "splitLineEachPerson": "\ud83d\udc65 \u5404\u81ea\u306e\u304a\u652f\u6255\u3044\u984d",
    "splitLineFooter": "\u26a1 SmartSaver \u3067\u8a08\u7b97 (\u5b8c\u5168\u30aa\u30d5\u30e9\u30a4\u30f3 \u2022 1\u5186\u306e\u30ba\u30ec\u306a\u3057)",
    "toastMessageCopied": "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\uff01\ud83d\udccb",
    "splitSharedWord": "\u5206\u62c5:",
    "splitBankOther": "\u305d\u306e\u4ed6 (\u624b\u5165\u529b)...",
    "splitSelectPayer": "\u98df\u3079\u305f\u4eba\u3092\u9078\u629e"
  },
  "ko": {
    "tabSplit": "\ub354\uce58\ud398\uc774",
    "splitH2": "\uc2a4\ub9c8\ud2b8 \ubc30\ub2ec & \ub354\uce58\ud398\uc774",
    "splitUseCase": "\uc2dd\ub2f9 \ubc0f \ubc30\ub2ec \uc694\uae08\uc744 \uc0ac\ub78c\ubcc4\ub85c \uacf5\uc815\ud558\uac8c \ubd84\ud560\ud558\uace0 \uba54\uc2dc\uc9c0\ub85c \uc27d\uac8c \uacf5\uc720\ud558\uc138\uc694.",
    "featSplitFast": "\ube60\ub978 \ud130\uce58 \ubd84\ud560",
    "featSplitTaxes": "\uc138\uae08 & \ubc30\ub2ec\ube44 \ud3ec\ud568",
    "featSplitOffline": "100% \uc624\ud504\ub77c\uc778",
    "splitPennyMatch": "\u2713 1\uc6d0 \ub2e8\uc704\uae4c\uc9c0 \uc815\ud655 \uc77c\uce58",
    "splitGrandLabel": "\ucd1d \uacb0\uc81c \uae08\uc561",
    "splitSubtotalLabel": "\uc74c\uc2dd \uae08\uc561:",
    "splitDiscountLabel": "\ud560\uc778:",
    "splitScLabel": "\ubcf5\uc0ac\ub8cc:",
    "splitVatLabel": "\ubd80\uac00\uc138:",
    "splitDeliveryLabel": "\ubc30\ub2ec\ube44:",
    "splitSettingsToggle": "\u2699\ufe0f \ud560\uc778 / \uc138\uae08 / \ubc30\ub2ec\ube44 \uc124\uc815",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \uc601\uc218\uc99d \ud560\uc778",
    "splitCurrencyFlat": "\uc815\uc561",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \uc11c\ube44\uc2a4 \ubcf5\uc0ac\ub8cc",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \ubd80\uac00\uac00\uce58\uc138 (VAT)",
    "splitSettingDelivery": "\ud83d\udef5 \ubc30\ub2ec \ud301",
    "splitDeliveryEqual": "N\ubd84\uc758 1",
    "splitDeliveryProp": "\ube44\ub840",
    "splitPeopleTitle": "\ucc38\uc5ec \uc778\uc6d0",
    "splitPeopleUnit": "\uba85",
    "splitAddPersonBtn": "+ \uce5c\uad6c \ucd94\uac00",
    "splitEntryTitle": "\uc74c\uc2dd \uba54\ub274 \ucd94\uac00",
    "splitItemNameLabel": "\uba54\ub274 \uc774\ub984 (\uc120\ud0dd)",
    "splitItemNamePlaceholder": "\uc608: \uce58\ud0a8, \ud53c\uc790",
    "splitItemPriceLabel": "\uac00\uaca9 *",
    "splitItemPricePlaceholder": "0 \ub610\ub294 50*2",
    "splitWhoAte": "\ub204\uac00 \uc774 \uba54\ub274\ub97c \uba39\uc5c8\ub098\uc694?",
    "splitEveryone": "\u2728 \ubaa8\ub450",
    "splitBtnConfirmAdd": "+ \uc774 \uba54\ub274 \ucd94\uac00",
    "splitItemsTitle": "\ub4f1\ub85d\ub41c \uba54\ub274",
    "splitItemsUnit": "\uac1c",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \ub4f1\ub85d\ub41c \uba54\ub274\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uae08\uc561\uc744 \uc785\ub825\ud558\uace0 \ucd94\uac00\ud558\uc138\uc694.",
    "splitBreakdownTitle": "\uac1c\uc778\ubcc4 \uc815\uc0b0 \ub0b4\uc5ed",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \uba54\ub274\ub97c \ucd94\uac00\ud558\uba74 1\uc778\ub2f9 \uc815\uc0b0 \uae08\uc561\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
    "splitBankLabel": "\uc785\uae08 \uc740\ud589 / \uc1a1\uae08 \uc218\ub2e8",
    "splitBankPlaceholder": "\uc740\ud589 \ub610\ub294 \uc1a1\uae08 \uc11c\ube44\uc2a4 \uc785\ub825",
    "splitAccountLabel": "\uacc4\uc88c\ubc88\ud638 \ub610\ub294 \ud734\ub300\ud3f0 \ubc88\ud638",
    "splitAccountPlaceholder": "\uc608: 010-xxxx-xxxx \ub610\ub294 \uacc4\uc88c\ubc88\ud638",
    "splitBtnCopyMessage": "\uc815\uc0b0 \uba54\uc2dc\uc9c0 \ubcf5\uc0ac",
    "splitOfflineGuarantee": "\ud83d\udd12 100% \uc624\ud504\ub77c\uc778 \ub3d9\uc791 \u2022 \uc678\ubd80 \uc804\uc1a1 \uc5c6\uc74c \u2022 \ucca0\uc800\ud55c \uac1c\uc778\uc815\ubcf4 \ubcf4\ud638",
    "splitModalAddTitle": "\ucc38\uc5ec\uc790 \ucd94\uac00",
    "splitModalAddSub": "\uc815\uc0b0\uc5d0 \ucc38\uc5ec\ud560 \uce5c\uad6c\ub97c \ucd94\uac00\ud558\uc138\uc694",
    "splitModalNameLabel": "\uce5c\uad6c \uc774\ub984",
    "splitModalNamePlaceholder": "\uc608: \ubbfc\uc218, \uc9c0\uc740",
    "splitModalColorLabel": "\ud504\ub85c\ud544 \uc0c9\uc0c1 \uc120\ud0dd",
    "splitModalConfirmBtn": "+ \ucd94\uac00\ud558\uae30",
    "splitModalEditTitle": "\uba54\ub274 \uc218\uc815",
    "splitModalEditSub": "\uc774\ub984, \uac00\uaca9, \ucc38\uc5ec\uc790 \uc218\uc815",
    "splitModalSaveBtn": "\uc218\uc815 \uc644\ub8cc",
    "splitModalClearTitle": "\uc815\uc0b0 \ub370\uc774\ud130 \ucd08\uae30\ud654",
    "splitModalClearDesc": "\ub4f1\ub85d\ub41c \ubaa8\ub4e0 \uba54\ub274\uc640 \uc815\uc0b0 \uc124\uc815\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
    "splitModalClearConfirmBtn": "\uc0ad\uc81c",
    "splitModalClearCancelBtn": "\ucde8\uc18c",
    "splitFriendDefault": "\uce5c\uad6c",
    "splitInvalidPrice": "\uc62c\ubc14\ub978 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",
    "splitShareTextEveryone": "\ubaa8\ub450 ({n}\uba85)",
    "splitShareTextSome": "{names} ({n}\uba85)",
    "splitDividedBy": "{n}\uba85 \ubd84\ud560",
    "splitDiscountReceived": "\ud560\uc778 \uc801\uc6a9",
    "splitDeliveryFee": "\ubc30\ub2ec\ube44",
    "splitItemDefault": "\ud56d\ubaa9",
    "splitBtnAddQuick": "\uba54\ub274 \ucd94\uac00",
    "splitPersonAdded": "{name} \ucd94\uac00 \uc644\ub8cc! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \uc2a4\ub9c8\ud2b8 \ub354\uce58\ud398\uc774 \uc601\uc218\uc99d",
    "splitLineGrand": "\ud83d\udcb0 \ucd1d \ud569\uacc4",
    "splitLineFood": "\ud83c\udf72 \uc74c\uc2dd \ud569\uacc4",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \ud560\uc778",
    "splitLineSc": "\ud83c\udf7d\ufe0f \ubcf5\uc0ac\ub8cc",
    "splitLineVat": "\ud83c\udfdb\ufe0f \ubd80\uac00\uc138",
    "splitLineDelivery": "\ud83d\udef5 \ubc30\ub2ec\ube44",
    "splitLinePayment": "\ud83d\udcb3 \uc785\uae08 \uacc4\uc88c \uc548\ub0b4",
    "splitLineEachPerson": "\ud83d\udc65 1\uc778\ub2f9 \uc815\uc0b0 \uae08\uc561",
    "splitLineFooter": "\u26a1 SmartSaver \ub85c \uacc4\uc0b0 (100% \uc624\ud504\ub77c\uc778 \u2022 1\uc6d0 \uc624\ucc28 \uc5c6\uc74c)",
    "toastMessageCopied": "\uc815\uc0b0 \uba54\uc2dc\uc9c0\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \ud83d\udccb",
    "splitSharedWord": "\uacf5\uc720:",
    "splitBankOther": "\uae30\ud0c0 (\uc9c1\uc811 \uc785\ub825)...",
    "splitSelectPayer": "\uba39\uc740 \uc0ac\ub78c \uc120\ud0dd"
  },
  "es": {
    "tabSplit": "Dividir Cuenta",
    "splitH2": "Divisor Inteligente de Cuentas",
    "splitUseCase": "Divide cuentas de restaurantes y pedidos a domicilio con impuestos y propinas de forma justa.",
    "featSplitFast": "R\u00e1pido y F\u00e1cil",
    "featSplitTaxes": "Impuestos y Env\u00edo",
    "featSplitOffline": "100% Sin Conexi\u00f3n",
    "splitPennyMatch": "\u2713 Coincidencia exacta de centavos",
    "splitGrandLabel": "Total General",
    "splitSubtotalLabel": "Subtotal Comida:",
    "splitDiscountLabel": "Descuento:",
    "splitScLabel": "Servicio:",
    "splitVatLabel": "IVA:",
    "splitDeliveryLabel": "Env\u00edo:",
    "splitSettingsToggle": "\u2699\ufe0f Descuentos / Impuestos / Env\u00edo",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f Descuento Total",
    "splitCurrencyFlat": "Fijo",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Cargo por Servicio",
    "splitSettingVat": "\ud83c\udfdb\ufe0f Impuesto (IVA)",
    "splitSettingDelivery": "\ud83d\udef5 Gastos de Env\u00edo",
    "splitDeliveryEqual": "Igual",
    "splitDeliveryProp": "Proporcional",
    "splitPeopleTitle": "Participantes",
    "splitPeopleUnit": "personas",
    "splitAddPersonBtn": "+ A\u00f1adir Amigo",
    "splitEntryTitle": "A\u00f1adir Plato",
    "splitItemNameLabel": "Nombre del Plato (opcional)",
    "splitItemNamePlaceholder": "ej. Pizza, Hamburguesa",
    "splitItemPriceLabel": "Precio *",
    "splitItemPricePlaceholder": "0 o 50*2",
    "splitWhoAte": "\u00bfQui\u00e9n comparti\u00f3 esto?",
    "splitEveryone": "\u2728 Todos",
    "splitBtnConfirmAdd": "+ A\u00f1adir Este Plato",
    "splitItemsTitle": "Platos Registrados",
    "splitItemsUnit": "\u00edtems",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f A\u00fan no hay platos. Introduce el precio arriba y pulsa a\u00f1adir.",
    "splitBreakdownTitle": "Desglose Individual",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f A\u00f1ade platos arriba para ver el desglose por persona.",
    "splitBankLabel": "Banco / Servicio de Pago",
    "splitBankPlaceholder": "Especificar banco o servicio",
    "splitAccountLabel": "N\u00famero de Cuenta o Tel\u00e9fono",
    "splitAccountPlaceholder": "ej. 081-xxx-xxxx / IBAN",
    "splitBtnCopyMessage": "Copiar Mensaje",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Sin Conexi\u00f3n \u2022 Cero Rastreo \u2022 M\u00e1xima Privacidad",
    "splitModalAddTitle": "A\u00f1adir Participante",
    "splitModalAddSub": "A\u00f1adir participante de la cuenta",
    "splitModalNameLabel": "Nombre",
    "splitModalNamePlaceholder": "ej. Carlos, Ana",
    "splitModalColorLabel": "Color de Avatar",
    "splitModalConfirmBtn": "+ A\u00f1adir",
    "splitModalEditTitle": "Editar Plato",
    "splitModalEditSub": "Modificar plato y participantes",
    "splitModalSaveBtn": "Guardar Cambios",
    "splitModalClearTitle": "Borrar Datos de Cuenta",
    "splitModalClearDesc": "\u00bfEst\u00e1s seguro de que deseas borrar todos los datos de la cuenta?",
    "splitModalClearConfirmBtn": "Borrar Todo",
    "splitModalClearCancelBtn": "Cancelar",
    "splitFriendDefault": "Amigo",
    "splitInvalidPrice": "Introduce un precio v\u00e1lido.",
    "splitShareTextEveryone": "Todos ({n} personas)",
    "splitShareTextSome": "{names} ({n} personas)",
    "splitDividedBy": "entre {n}",
    "splitDiscountReceived": "Descuento aplicado",
    "splitDeliveryFee": "Gastos de env\u00edo",
    "splitItemDefault": "Plato",
    "splitBtnAddQuick": "A\u00f1adir Plato",
    "splitPersonAdded": "\u00a1{name} a\u00f1adido! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe Resumen de Cuenta",
    "splitLineGrand": "\ud83d\udcb0 Total",
    "splitLineFood": "\ud83c\udf72 Subtotal Comida",
    "splitLineDiscount": "\ud83c\udff7\ufe0f Descuento",
    "splitLineSc": "\ud83c\udf7d\ufe0f Servicio",
    "splitLineVat": "\ud83c\udfdb\ufe0f IVA/Impuestos",
    "splitLineDelivery": "\ud83d\udef5 Env\u00edo",
    "splitLinePayment": "\ud83d\udcb3 Datos para Transferencia",
    "splitLineEachPerson": "\ud83d\udc65 Importe por Persona",
    "splitLineFooter": "\u26a1 Calculado con SmartSaver (100% Sin Conexi\u00f3n \u2022 Ajuste Exacto)",
    "toastMessageCopied": "\u00a1Mensaje copiado! \ud83d\udccb",
    "splitSharedWord": "Compartido:",
    "splitBankOther": "Otro (especificar)...",
    "splitSelectPayer": "Seleccionar comensales"
  },
  "fr": {
    "tabSplit": "Partager l'addition",
    "splitH2": "Partage de l'addition & Livraison",
    "splitUseCase": "Partagez les additions de restaurant et de livraison \u00e9quitablement avec taxes et envoyez un r\u00e9sum\u00e9 propre dans vos messages.",
    "featSplitFast": "Saisie Ultra-Rapide",
    "featSplitTaxes": "Taxes & Livraison",
    "featSplitOffline": "100% Hors Ligne",
    "splitPennyMatch": "\u2713 Montant Exact au Centime",
    "splitGrandLabel": "Total G\u00e9n\u00e9ral",
    "splitSubtotalLabel": "Sous-total Plats:",
    "splitDiscountLabel": "R\u00e9duction:",
    "splitScLabel": "Service:",
    "splitVatLabel": "TVA:",
    "splitDeliveryLabel": "Livraison:",
    "splitSettingsToggle": "\u2699\ufe0f R\u00e9glages R\u00e9duction / Taxes / Livraison",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f R\u00e9duction sur l'addition",
    "splitCurrencyFlat": "Fixe",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Frais de Service",
    "splitSettingVat": "\ud83c\udfdb\ufe0f TVA",
    "splitSettingDelivery": "\ud83d\udef5 Frais de Livraison",
    "splitDeliveryEqual": "\u00c9gal",
    "splitDeliveryProp": "Proportionnel",
    "splitPeopleTitle": "Participants",
    "splitPeopleUnit": "personnes",
    "splitAddPersonBtn": "+ Ajouter un Ami",
    "splitEntryTitle": "Ajouter un Plat",
    "splitItemNameLabel": "Nom du Plat (facultatif)",
    "splitItemNamePlaceholder": "ex: P\u00e2tes, Salade, Pizza",
    "splitItemPriceLabel": "Prix *",
    "splitItemPricePlaceholder": "0 ou 50*2",
    "splitWhoAte": "Qui a partag\u00e9 ce plat ?",
    "splitEveryone": "\u2728 Tout le monde",
    "splitBtnConfirmAdd": "+ Ajouter ce Plat",
    "splitItemsTitle": "Plats Ajout\u00e9s",
    "splitItemsUnit": "plats",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f Aucun plat ajout\u00e9. Entrez le prix ci-dessus et appuyez sur ajouter.",
    "splitBreakdownTitle": "R\u00e9partition Individuelle",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f Ajoutez des plats ci-dessus pour afficher le d\u00e9tail par personne.",
    "splitBankLabel": "Banque / Service de Paiement",
    "splitBankPlaceholder": "Pr\u00e9cisez la banque ou service",
    "splitAccountLabel": "Num\u00e9ro de Compte ou T\u00e9l\u00e9phone",
    "splitAccountPlaceholder": "ex: IBAN ou 06-xx-xx-xx-xx",
    "splitBtnCopyMessage": "Copier le R\u00e9sum\u00e9",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Hors Ligne \u2022 Z\u00e9ro Pistage \u2022 Confidentialit\u00e9 Totale",
    "splitModalAddTitle": "Ajouter un Ami",
    "splitModalAddSub": "Ajouter un Convive",
    "splitModalNameLabel": "Nom de l'Ami",
    "splitModalNamePlaceholder": "ex: Thomas, Sophie, Lucas",
    "splitModalColorLabel": "Choisir la Couleur",
    "splitModalConfirmBtn": "+ Ajouter",
    "splitModalEditTitle": "Modifier le Plat",
    "splitModalEditSub": "Modifier Nom, Prix et Convives",
    "splitModalSaveBtn": "Enregistrer",
    "splitModalClearTitle": "R\u00e9initialiser l'Addition",
    "splitModalClearDesc": "\u00cates-vous s\u00fbr de vouloir effacer tous les plats et param\u00e8tres de l'addition ?",
    "splitModalClearConfirmBtn": "Tout Effacer",
    "splitModalClearCancelBtn": "Annuler",
    "splitFriendDefault": "Ami",
    "splitInvalidPrice": "Veuillez entrer un prix valide.",
    "splitShareTextEveryone": "Tout le monde ({n} pers.)",
    "splitShareTextSome": "{names} ({n} pers.)",
    "splitDividedBy": "partag\u00e9 par {n}",
    "splitDiscountReceived": "R\u00e9duction appliqu\u00e9e",
    "splitDeliveryFee": "Frais de livraison",
    "splitItemDefault": "Plat",
    "splitBtnAddQuick": "Ajouter Plat",
    "splitPersonAdded": "{name} ajout\u00e9(e) ! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe R\u00e9sum\u00e9 de l'Addition",
    "splitLineGrand": "\ud83d\udcb0 Total G\u00e9n\u00e9ral",
    "splitLineFood": "\ud83c\udf72 Sous-total Plats",
    "splitLineDiscount": "\ud83c\udff7\ufe0f R\u00e9duction",
    "splitLineSc": "\ud83c\udf7d\ufe0f Service",
    "splitLineVat": "\ud83c\udfdb\ufe0f TVA",
    "splitLineDelivery": "\ud83d\udef5 Livraison",
    "splitLinePayment": "\ud83d\udcb3 Infos de Paiement",
    "splitLineEachPerson": "\ud83d\udc65 Part par Personne",
    "splitLineFooter": "\u26a1 Calcul\u00e9 avec SmartSaver (100% Hors Ligne \u2022 Montant Exact)",
    "toastMessageCopied": "R\u00e9sum\u00e9 copi\u00e9 dans le presse-papiers ! \ud83d\udccb",
    "splitSharedWord": "Partag\u00e9:",
    "splitBankOther": "Autre (sp\u00e9cifier)...",
    "splitSelectPayer": "Qui a mang\u00e9 ?"
  },
  "de": {
    "tabSplit": "Rechnung Teilen",
    "splitH2": "Rechnung & Lieferung Teilen",
    "splitUseCase": "Teilen Sie Restaurant- und Lieferrechnungen fair inklusive Steuern und kopieren Sie eine saubere Zusammenfassung f\u00fcr Chats.",
    "featSplitFast": "Blitzschnell",
    "featSplitTaxes": "Steuern & Lieferung",
    "featSplitOffline": "100% Offline",
    "splitPennyMatch": "\u2713 Cent-Genau Abgestimmt",
    "splitGrandLabel": "Gesamtsumme",
    "splitSubtotalLabel": "Zwischensumme:",
    "splitDiscountLabel": "Rabatt:",
    "splitScLabel": "Bedienung:",
    "splitVatLabel": "MwSt:",
    "splitDeliveryLabel": "Lieferung:",
    "splitSettingsToggle": "\u2699\ufe0f Rabatt / Steuer / Liefer-Einstellungen",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f Rechnungsrabatt",
    "splitCurrencyFlat": "Pauschal",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Servicegeb\u00fchr",
    "splitSettingVat": "\ud83c\udfdb\ufe0f MwSt",
    "splitSettingDelivery": "\ud83d\udef5 Liefergeb\u00fchr",
    "splitDeliveryEqual": "Gleich",
    "splitDeliveryProp": "Anteilig",
    "splitPeopleTitle": "Teilnehmer",
    "splitPeopleUnit": "Personen",
    "splitAddPersonBtn": "+ Freund Hinzuf\u00fcgen",
    "splitEntryTitle": "Gericht Hinzuf\u00fcgen",
    "splitItemNameLabel": "Name des Gerichts (optional)",
    "splitItemNamePlaceholder": "z.B. Pizza, Pasta, Salat",
    "splitItemPriceLabel": "Preis *",
    "splitItemPricePlaceholder": "0 oder 50*2",
    "splitWhoAte": "Wer hat mitgegessen?",
    "splitEveryone": "\u2728 Alle",
    "splitBtnConfirmAdd": "+ Gericht Hinzuf\u00fcgen",
    "splitItemsTitle": "Hinzugef\u00fcgte Gerichte",
    "splitItemsUnit": "Gerichte",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f Noch keine Gerichte hinzugef\u00fcgt. Preis eingeben und hinzuf\u00fcgen.",
    "splitBreakdownTitle": "Einzelabrechnung",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f F\u00fcgen Sie Gerichte hinzu, um die Aufteilung pro Person zu sehen.",
    "splitBankLabel": "Bank / Zahlungsdienst",
    "splitBankPlaceholder": "Bank oder Zahlungsdienst angeben",
    "splitAccountLabel": "Kontonummer oder Telefon",
    "splitAccountPlaceholder": "z.B. IBAN oder 017x-xxxxxxx",
    "splitBtnCopyMessage": "Nachricht Kopieren",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Offline \u2022 Kein Tracking \u2022 H\u00f6chste Privatsph\u00e4re",
    "splitModalAddTitle": "Teilnehmer Hinzuf\u00fcgen",
    "splitModalAddSub": "Neuen Teilnehmer Eintragen",
    "splitModalNameLabel": "Name des Freundes",
    "splitModalNamePlaceholder": "z.B. Max, Anna, Jonas",
    "splitModalColorLabel": "Farbe W\u00e4hlen",
    "splitModalConfirmBtn": "+ Hinzuf\u00fcgen",
    "splitModalEditTitle": "Gericht Bearbeiten",
    "splitModalEditSub": "Name, Preis & Teilnehmer \u00c4ndern",
    "splitModalSaveBtn": "\u00c4nderungen Speichern",
    "splitModalClearTitle": "Rechnungsdaten L\u00f6schen",
    "splitModalClearDesc": "M\u00f6chten Sie wirklich alle Rechnungsdaten und Einstellungen zur\u00fccksetzen?",
    "splitModalClearConfirmBtn": "Alles L\u00f6schen",
    "splitModalClearCancelBtn": "Abbrechen",
    "splitFriendDefault": "Freund",
    "splitInvalidPrice": "Bitte g\u00fcltigen Preis eingeben.",
    "splitShareTextEveryone": "Alle ({n} Pers.)",
    "splitShareTextSome": "{names} ({n} Pers.)",
    "splitDividedBy": "geteilt durch {n}",
    "splitDiscountReceived": "Erhaltene Erm\u00e4\u00dfigung",
    "splitDeliveryFee": "Liefergeb\u00fchr",
    "splitItemDefault": "Gericht",
    "splitBtnAddQuick": "Gericht Hinzuf\u00fcgen",
    "splitPersonAdded": "{name} hinzugef\u00fcgt! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe Rechnungsaufteilung",
    "splitLineGrand": "\ud83d\udcb0 Gesamtsumme",
    "splitLineFood": "\ud83c\udf72 Zwischensumme",
    "splitLineDiscount": "\ud83c\udff7\ufe0f Rabatt",
    "splitLineSc": "\ud83c\udf7d\ufe0f Servicegeb\u00fchr",
    "splitLineVat": "\ud83c\udfdb\ufe0f MwSt",
    "splitLineDelivery": "\ud83d\udef5 Lieferung",
    "splitLinePayment": "\ud83d\udcb3 Zahlungsdetails",
    "splitLineEachPerson": "\ud83d\udc65 Betrag pro Person",
    "splitLineFooter": "\u26a1 Berechnet mit SmartSaver (100% Offline \u2022 Exakt)",
    "toastMessageCopied": "Nachricht kopiert! \ud83d\udccb",
    "splitSharedWord": "Geteilt:",
    "splitBankOther": "Andere (angeben)...",
    "splitSelectPayer": "Wer hat mitgegessen?"
  },
  "pt": {
    "tabSplit": "Dividir Conta",
    "splitH2": "Divis\u00e3o de Conta & Entrega",
    "splitUseCase": "Divida contas de restaurante e pedidos com precis\u00e3o, taxas e envie um resumo claro para mensagens.",
    "featSplitFast": "Super R\u00e1pido",
    "featSplitTaxes": "Taxas & Entrega",
    "featSplitOffline": "100% Offline",
    "splitPennyMatch": "\u2713 Centavo Exato",
    "splitGrandLabel": "Total Geral",
    "splitSubtotalLabel": "Subtotal Itens:",
    "splitDiscountLabel": "Desconto:",
    "splitScLabel": "Servi\u00e7o:",
    "splitVatLabel": "Impostos:",
    "splitDeliveryLabel": "Entrega:",
    "splitSettingsToggle": "\u2699\ufe0f Configura\u00e7\u00f5es de Desconto / Taxas / Entrega",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f Desconto na Conta",
    "splitCurrencyFlat": "Fixo",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Taxa de Servi\u00e7o",
    "splitSettingVat": "\ud83c\udfdb\ufe0f Impostos",
    "splitSettingDelivery": "\ud83d\udef5 Taxa de Entrega",
    "splitDeliveryEqual": "Igual",
    "splitDeliveryProp": "Proporcional",
    "splitPeopleTitle": "Participantes",
    "splitPeopleUnit": "pessoas",
    "splitAddPersonBtn": "+ Adicionar Amigo",
    "splitEntryTitle": "Adicionar Item",
    "splitItemNameLabel": "Nome do Item (opcional)",
    "splitItemNamePlaceholder": "ex: Pizza, Hamb\u00farguer, Refrigerante",
    "splitItemPriceLabel": "Pre\u00e7o *",
    "splitItemPricePlaceholder": "0 ou 50*2",
    "splitWhoAte": "Quem dividiu este item?",
    "splitEveryone": "\u2728 Todos",
    "splitBtnConfirmAdd": "+ Adicionar Item",
    "splitItemsTitle": "Itens Adicionados",
    "splitItemsUnit": "itens",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f Nenhum item adicionado. Digite o pre\u00e7o acima e adicione.",
    "splitBreakdownTitle": "Divis\u00e3o por Pessoa",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f Adicione itens acima para ver os valores individuais.",
    "splitBankLabel": "Banco / Chave de Transfer\u00eancia",
    "splitBankPlaceholder": "Especifique o banco ou servi\u00e7o",
    "splitAccountLabel": "N\u00famero da Conta ou Chave Pix",
    "splitAccountPlaceholder": "ex: Chave Pix, CPF ou telefone",
    "splitBtnCopyMessage": "Copiar Resumo",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Offline \u2022 Sem Rastreamento \u2022 Privacidade Total",
    "splitModalAddTitle": "Adicionar Amigo",
    "splitModalAddSub": "Adicionar Participante",
    "splitModalNameLabel": "Nome do Amigo",
    "splitModalNamePlaceholder": "ex: Carlos, Mariana, Pedro",
    "splitModalColorLabel": "Escolher Cor",
    "splitModalConfirmBtn": "+ Adicionar",
    "splitModalEditTitle": "Editar Item",
    "splitModalEditSub": "Editar Nome, Pre\u00e7o e Participantes",
    "splitModalSaveBtn": "Salvar Altera\u00e7\u00f5es",
    "splitModalClearTitle": "Limpar Dados da Conta",
    "splitModalClearDesc": "Tem certeza de que deseja limpar todos os itens e configura\u00e7\u00f5es?",
    "splitModalClearConfirmBtn": "Limpar Tudo",
    "splitModalClearCancelBtn": "Cancelar",
    "splitFriendDefault": "Amigo",
    "splitInvalidPrice": "Por favor, insira um pre\u00e7o v\u00e1lido.",
    "splitShareTextEveryone": "Todos ({n} pessoas)",
    "splitShareTextSome": "{names} ({n} pessoas)",
    "splitDividedBy": "dividido por {n}",
    "splitDiscountReceived": "Desconto aplicado",
    "splitDeliveryFee": "Taxa de entrega",
    "splitItemDefault": "Item",
    "splitBtnAddQuick": "Adicionar Item",
    "splitPersonAdded": "{name} adicionado(a)! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe Resumo da Conta",
    "splitLineGrand": "\ud83d\udcb0 Total Geral",
    "splitLineFood": "\ud83c\udf72 Subtotal Itens",
    "splitLineDiscount": "\ud83c\udff7\ufe0f Desconto",
    "splitLineSc": "\ud83c\udf7d\ufe0f Servi\u00e7o",
    "splitLineVat": "\ud83c\udfdb\ufe0f Impostos",
    "splitLineDelivery": "\ud83d\udef5 Entrega",
    "splitLinePayment": "\ud83d\udcb3 Dados para Pagamento",
    "splitLineEachPerson": "\ud83d\udc65 Valor por Pessoa",
    "splitLineFooter": "\u26a1 Calculado pelo SmartSaver (100% Offline \u2022 Ajuste Exato)",
    "toastMessageCopied": "Mensagem copiada! \ud83d\udccb",
    "splitSharedWord": "Dividido:",
    "splitBankOther": "Outro (especificar)...",
    "splitSelectPayer": "Quem participou?"
  },
  "id": {
    "tabSplit": "Bagi Tagihan",
    "splitH2": "Bagi Tagihan & Pengiriman",
    "splitUseCase": "Bagi tagihan resto dan makanan online secara adil beserta pajak, lalu kirim ringkasan rapi ke chat.",
    "featSplitFast": "Sangat Cepat",
    "featSplitTaxes": "Pajak & Ongkir Lengkap",
    "featSplitOffline": "100% Offline",
    "splitPennyMatch": "\u2713 Pas Hingga Pecahan Terkecil",
    "splitGrandLabel": "Total Akhir",
    "splitSubtotalLabel": "Subtotal Makanan:",
    "splitDiscountLabel": "Diskon:",
    "splitScLabel": "Layanan:",
    "splitVatLabel": "PPN:",
    "splitDeliveryLabel": "Ongkir:",
    "splitSettingsToggle": "\u2699\ufe0f Pengaturan Diskon / Pajak / Ongkir",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f Diskon Tagihan",
    "splitCurrencyFlat": "Tetap",
    "splitSettingSc": "\ud83c\udf7d\ufe0f Biaya Layanan",
    "splitSettingVat": "\ud83c\udfdb\ufe0f PPN",
    "splitSettingDelivery": "\ud83d\udef5 Ongkos Kirim",
    "splitDeliveryEqual": "Rata",
    "splitDeliveryProp": "Proporsional",
    "splitPeopleTitle": "Daftar Teman",
    "splitPeopleUnit": "orang",
    "splitAddPersonBtn": "+ Tambah Teman",
    "splitEntryTitle": "Tambah Makanan",
    "splitItemNameLabel": "Nama Menu (opsional)",
    "splitItemNamePlaceholder": "contoh: Nasi Goreng, Pizza, Kopi",
    "splitItemPriceLabel": "Harga *",
    "splitItemPricePlaceholder": "0 atau 50*2",
    "splitWhoAte": "Siapa saja yang makan?",
    "splitEveryone": "\u2728 Semua Orang",
    "splitBtnConfirmAdd": "+ Tambah Menu Ini",
    "splitItemsTitle": "Menu yang Ditambahkan",
    "splitItemsUnit": "menu",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f Belum ada menu. Masukkan harga di atas dan tekan tambah.",
    "splitBreakdownTitle": "Rincian per Orang",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f Tambahkan menu di atas untuk melihat rincian per orang.",
    "splitBankLabel": "Bank / E-Wallet Pembayaran",
    "splitBankPlaceholder": "Pilih atau tulis bank / e-wallet",
    "splitAccountLabel": "Nomor Rekening atau HP (GoPay/OVO/Dana)",
    "splitAccountPlaceholder": "contoh: 0812-xxxx-xxxx atau nomor rekening",
    "splitBtnCopyMessage": "Salin Ringkasan Pesan",
    "splitOfflineGuarantee": "\ud83d\udd12 100% Offline \u2022 Tanpa Pelacakan \u2022 Privasi Terjamin",
    "splitModalAddTitle": "Tambah Teman",
    "splitModalAddSub": "Tambah Anggota Patungan",
    "splitModalNameLabel": "Nama Teman",
    "splitModalNamePlaceholder": "contoh: Budi, Siti, Andi",
    "splitModalColorLabel": "Pilih Warna Avatar",
    "splitModalConfirmBtn": "+ Tambah",
    "splitModalEditTitle": "Ubah Menu Makanan",
    "splitModalEditSub": "Ubah Nama, Harga & Anggota",
    "splitModalSaveBtn": "Simpan Perubahan",
    "splitModalClearTitle": "Hapus Data Tagihan",
    "splitModalClearDesc": "Yakin ingin menghapus semua data menu dan pengaturan patungan?",
    "splitModalClearConfirmBtn": "Hapus Semua",
    "splitModalClearCancelBtn": "Batal",
    "splitFriendDefault": "Teman",
    "splitInvalidPrice": "Masukkan harga yang valid.",
    "splitShareTextEveryone": "Semua ({n} orang)",
    "splitShareTextSome": "{names} ({n} orang)",
    "splitDividedBy": "dibagi {n}",
    "splitDiscountReceived": "Diskon didapat",
    "splitDeliveryFee": "Ongkos kirim",
    "splitItemDefault": "Menu",
    "splitBtnAddQuick": "Tambah Menu",
    "splitPersonAdded": "{name} berhasil ditambahkan! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe Ringkasan Patungan Tagihan",
    "splitLineGrand": "\ud83d\udcb0 Total Akhir",
    "splitLineFood": "\ud83c\udf72 Subtotal Makanan",
    "splitLineDiscount": "\ud83c\udff7\ufe0f Diskon",
    "splitLineSc": "\ud83c\udf7d\ufe0f Layanan",
    "splitLineVat": "\ud83c\udfdb\ufe0f PPN",
    "splitLineDelivery": "\ud83d\udef5 Ongkir",
    "splitLinePayment": "\ud83d\udcb3 Info Pembayaran / Transfer",
    "splitLineEachPerson": "\ud83d\udc65 Tagihan per Orang",
    "splitLineFooter": "\u26a1 Dihitung dengan SmartSaver (100% Offline \u2022 Pas & Akurat)",
    "toastMessageCopied": "Ringkasan pesan berhasil disalin! \ud83d\udccb",
    "splitSharedWord": "Bersama:",
    "splitBankOther": "Lainnya (tentukan)...",
    "splitSelectPayer": "Siapa yang makan?"
  },
  "hi": {
    "tabSplit": "\u092c\u093f\u0932 \u092c\u093e\u0902\u091f\u0947\u0902",
    "splitH2": "\u092c\u093f\u0932 \u0914\u0930 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0938\u094d\u092a\u094d\u0932\u093f\u091f",
    "splitUseCase": "\u0930\u0947\u0938\u094d\u091f\u094b\u0930\u0947\u0902\u091f \u0914\u0930 \u0911\u0928\u0932\u093e\u0907\u0928 \u0916\u093e\u0928\u0947 \u0915\u093e \u092c\u093f\u0932 \u091f\u0948\u0915\u094d\u0938 \u0938\u092e\u0947\u0924 \u0938\u0939\u0940 \u0938\u0947 \u092c\u093e\u0902\u091f\u0947\u0902\u0964",
    "featSplitFast": "\u0924\u0947\u091c\u093c \u0938\u094d\u092a\u094d\u0932\u093f\u091f",
    "featSplitTaxes": "\u091f\u0948\u0915\u094d\u0938 \u0914\u0930 \u0921\u093f\u0932\u0940\u0935\u0930\u0940",
    "featSplitOffline": "100% \u0911\u092b\u0932\u093e\u0907\u0928",
    "splitPennyMatch": "\u2713 \u092a\u0948\u0938\u0947-\u092a\u0948\u0938\u0947 \u0915\u093e \u0938\u091f\u0940\u0915 \u0939\u093f\u0938\u093e\u092c",
    "splitGrandLabel": "\u0915\u0941\u0932 \u0930\u093e\u0936\u093f",
    "splitSubtotalLabel": "\u0916\u093e\u0928\u0947 \u0915\u093e \u0909\u092a-\u092f\u094b\u0917:",
    "splitDiscountLabel": "\u091b\u0942\u091f:",
    "splitScLabel": "\u0938\u0947\u0935\u093e \u0936\u0941\u0932\u094d\u0915:",
    "splitVatLabel": "\u091c\u0940\u090f\u0938\u091f\u0940/\u091f\u0948\u0915\u094d\u0938:",
    "splitDeliveryLabel": "\u0921\u093f\u0932\u0940\u0935\u0930\u0940:",
    "splitSettingsToggle": "\u2699\ufe0f \u091b\u0942\u091f / \u091f\u0948\u0915\u094d\u0938 / \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u092c\u093f\u0932 \u091b\u0942\u091f",
    "splitCurrencyFlat": "\u0928\u093f\u0936\u094d\u091a\u093f\u0924",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u0938\u0930\u094d\u0935\u093f\u0938 \u091a\u093e\u0930\u094d\u091c",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u091c\u0940\u090f\u0938\u091f\u0940",
    "splitSettingDelivery": "\ud83d\udef5 \u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0936\u0941\u0932\u094d\u0915",
    "splitDeliveryEqual": "\u092c\u0930\u093e\u092c\u0930",
    "splitDeliveryProp": "\u0905\u0928\u0941\u092a\u093e\u0924\u093f\u0915",
    "splitPeopleTitle": "\u0932\u094b\u0917",
    "splitPeopleUnit": "\u0932\u094b\u0917",
    "splitAddPersonBtn": "+ \u0926\u094b\u0938\u094d\u0924 \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitEntryTitle": "\u0916\u093e\u0928\u093e \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitItemNameLabel": "\u0906\u0907\u091f\u092e \u0915\u093e \u0928\u093e\u092e (\u0935\u0948\u0915\u0932\u094d\u092a\u093f\u0915)",
    "splitItemNamePlaceholder": "\u0909\u0926\u093e. \u092a\u0928\u0940\u0930 \u091f\u093f\u0915\u094d\u0915\u093e, \u092a\u093f\u091c\u093c\u094d\u091c\u093c\u093e",
    "splitItemPriceLabel": "\u0915\u0940\u092e\u0924 *",
    "splitItemPricePlaceholder": "0 \u092f\u093e 50*2",
    "splitWhoAte": "\u0915\u093f\u0938\u0928\u0947 \u0916\u093e\u092f\u093e?",
    "splitEveryone": "\u2728 \u0938\u092d\u0940 \u0928\u0947",
    "splitBtnConfirmAdd": "+ \u092f\u0939 \u0906\u0907\u091f\u092e \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitItemsTitle": "\u091c\u094b\u0921\u093c\u0947 \u0917\u090f \u0906\u0907\u091f\u092e",
    "splitItemsUnit": "\u0906\u0907\u091f\u092e",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u0905\u092d\u0940 \u0915\u094b\u0908 \u0906\u0907\u091f\u092e \u0928\u0939\u0940\u0902 \u091c\u094b\u0921\u093c\u093e \u0917\u092f\u093e\u0964",
    "splitBreakdownTitle": "\u092a\u094d\u0930\u0924\u093f \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0935\u093f\u0935\u0930\u0923",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u092a\u094d\u0930\u0924\u093f \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0935\u093f\u0935\u0930\u0923 \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u090a\u092a\u0930 \u0906\u0907\u091f\u092e \u091c\u094b\u0921\u093c\u0947\u0902\u0964",
    "splitBankLabel": "\u092c\u0948\u0902\u0915 / \u092f\u0942\u092a\u0940\u0906\u0908 \u0938\u0947\u0935\u093e",
    "splitBankPlaceholder": "\u092c\u0948\u0902\u0915 \u092f\u093e \u092f\u0942\u092a\u0940\u0906\u0908 \u091a\u0941\u0928\u0947\u0902",
    "splitAccountLabel": "\u0916\u093e\u0924\u093e \u0928\u0902\u092c\u0930 \u092f\u093e \u092f\u0942\u092a\u0940\u0906\u0908 \u0906\u0908\u0921\u0940",
    "splitAccountPlaceholder": "\u0909\u0926\u093e. name@upi \u092f\u093e 9876543210",
    "splitBtnCopyMessage": "\u0938\u0902\u0926\u0947\u0936 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902",
    "splitOfflineGuarantee": "\ud83d\udd12 100% \u0911\u092b\u093c\u0932\u093e\u0907\u0928 \u2022 \u0915\u094b\u0908 \u091f\u094d\u0930\u0948\u0915\u093f\u0902\u0917 \u0928\u0939\u0940\u0902 \u2022 \u092a\u0942\u0930\u094d\u0923 \u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e",
    "splitModalAddTitle": "\u0926\u094b\u0938\u094d\u0924 \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitModalAddSub": "\u0928\u092f\u093e \u0938\u0926\u0938\u094d\u092f \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitModalNameLabel": "\u0926\u094b\u0938\u094d\u0924 \u0915\u093e \u0928\u093e\u092e",
    "splitModalNamePlaceholder": "\u0909\u0926\u093e. \u0930\u093e\u0939\u0941\u0932, \u092a\u094d\u0930\u093f\u092f\u093e, \u0905\u092e\u093f\u0924",
    "splitModalColorLabel": "\u0930\u0902\u0917 \u091a\u0941\u0928\u0947\u0902",
    "splitModalConfirmBtn": "+ \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitModalEditTitle": "\u0906\u0907\u091f\u092e \u0938\u0902\u092a\u093e\u0926\u093f\u0924 \u0915\u0930\u0947\u0902",
    "splitModalEditSub": "\u0928\u093e\u092e, \u0915\u0940\u092e\u0924 \u0914\u0930 \u0916\u093e\u0928\u0947 \u0935\u093e\u0932\u0947 \u092c\u0926\u0932\u0947\u0902",
    "splitModalSaveBtn": "\u092c\u0926\u0932\u093e\u0935 \u0938\u0939\u0947\u091c\u0947\u0902",
    "splitModalClearTitle": "\u092c\u093f\u0932 \u0921\u0947\u091f\u093e \u092e\u093f\u091f\u093e\u090f\u0902",
    "splitModalClearDesc": "\u0915\u094d\u092f\u093e \u0906\u092a \u0938\u092d\u0940 \u092c\u093f\u0932 \u0906\u0907\u091f\u092e \u0914\u0930 \u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938 \u092e\u093f\u091f\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902?",
    "splitModalClearConfirmBtn": "\u0938\u092c \u092e\u093f\u091f\u093e\u090f\u0902",
    "splitModalClearCancelBtn": "\u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902",
    "splitFriendDefault": "\u0926\u094b\u0938\u094d\u0924",
    "splitInvalidPrice": "\u0915\u0943\u092a\u092f\u093e \u0935\u0948\u0927 \u0915\u0940\u092e\u0924 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902\u0964",
    "splitShareTextEveryone": "\u0938\u092d\u0940 ({n} \u0932\u094b\u0917)",
    "splitShareTextSome": "{names} ({n} \u0932\u094b\u0917)",
    "splitDividedBy": "{n} \u092e\u0947\u0902 \u092c\u093e\u0902\u091f\u093e",
    "splitDiscountReceived": "\u092e\u093f\u0932\u0940 \u091b\u0942\u091f",
    "splitDeliveryFee": "\u0921\u093f\u0932\u0940\u0935\u0930\u0940 \u0936\u0941\u0932\u094d\u0915",
    "splitItemDefault": "\u0906\u0907\u091f\u092e",
    "splitBtnAddQuick": "\u0906\u0907\u091f\u092e \u091c\u094b\u0921\u093c\u0947\u0902",
    "splitPersonAdded": "{name} \u091c\u094b\u0921\u093c\u093e \u0917\u092f\u093e! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u092c\u093f\u0932 \u0938\u094d\u092a\u094d\u0932\u093f\u091f \u0938\u093e\u0930\u093e\u0902\u0936",
    "splitLineGrand": "\ud83d\udcb0 \u0915\u0941\u0932 \u0930\u093e\u0936\u093f",
    "splitLineFood": "\ud83c\udf72 \u0916\u093e\u0928\u0947 \u0915\u093e \u0915\u0941\u0932",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u091b\u0942\u091f",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u0938\u0947\u0935\u093e \u0936\u0941\u0932\u094d\u0915",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u091c\u0940\u090f\u0938\u091f\u0940",
    "splitLineDelivery": "\ud83d\udef5 \u0921\u093f\u0932\u0940\u0935\u0930\u0940",
    "splitLinePayment": "\ud83d\udcb3 \u092d\u0941\u0917\u0924\u093e\u0928 \u0935\u093f\u0935\u0930\u0923",
    "splitLineEachPerson": "\ud83d\udc65 \u092a\u094d\u0930\u0924\u093f \u0935\u094d\u092f\u0915\u094d\u0924\u093f \u0939\u093f\u0938\u094d\u0938\u093e",
    "splitLineFooter": "\u26a1 SmartSaver \u0910\u092a \u0926\u094d\u0935\u093e\u0930\u093e \u092a\u0930\u093f\u0915\u0932\u093f\u0924 (100% \u0911\u092b\u093c\u0932\u093e\u0907\u0928 \u2022 \u0938\u091f\u0940\u0915)",
    "toastMessageCopied": "\u0938\u093e\u0930\u093e\u0902\u0936 \u0915\u0949\u092a\u0940 \u0915\u093f\u092f\u093e \u0917\u092f\u093e! \ud83d\udccb",
    "splitSharedWord": "\u0938\u093e\u091d\u093e:",
    "splitBankOther": "\u0905\u0928\u094d\u092f (\u0928\u093f\u0930\u094d\u0926\u093f\u0937\u094d\u091f \u0915\u0930\u0947\u0902)...",
    "splitSelectPayer": "\u0915\u093f\u0938\u0928\u0947 \u0916\u093e\u092f\u093e?"
  },
  "ar": {
    "tabSplit": "\u062a\u0642\u0633\u064a\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
    "splitH2": "\u062a\u0642\u0633\u064a\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629 \u0648\u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "splitUseCase": "\u0642\u0633\u0651\u0645 \u0641\u0648\u0627\u062a\u064a\u0631 \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0648\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0628\u062f\u0642\u0629 \u0648\u0639\u062f\u0627\u0644\u0629 \u0645\u0639 \u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0634\u0627\u0631\u0643 \u0627\u0644\u0645\u0644\u062e\u0635.",
    "featSplitFast": "\u0641\u0627\u0626\u0642 \u0627\u0644\u0633\u0631\u0639\u0629",
    "featSplitTaxes": "\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "featSplitOffline": "100% \u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a",
    "splitPennyMatch": "\u2713 \u062d\u0633\u0627\u0628 \u062f\u0642\u064a\u0642 \u0628\u0627\u0644\u0647\u0644\u0644\u0629",
    "splitGrandLabel": "\u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0643\u0644\u064a",
    "splitSubtotalLabel": "\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0648\u062c\u0628\u0627\u062a:",
    "splitDiscountLabel": "\u0627\u0644\u062e\u0635\u0645:",
    "splitScLabel": "\u0627\u0644\u062e\u062f\u0645\u0629:",
    "splitVatLabel": "\u0627\u0644\u0636\u0631\u064a\u0628\u0629:",
    "splitDeliveryLabel": "\u0627\u0644\u062a\u0648\u0635\u064a\u0644:",
    "splitSettingsToggle": "\u2699\ufe0f \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062e\u0635\u0645 / \u0627\u0644\u0636\u0631\u0627\u0626\u0628 / \u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "splitSettingDiscount": "\ud83c\udff7\ufe0f \u062e\u0635\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
    "splitCurrencyFlat": "\u062b\u0627\u0628\u062a",
    "splitSettingSc": "\ud83c\udf7d\ufe0f \u0631\u0633\u0648\u0645 \u0627\u0644\u062e\u062f\u0645\u0629",
    "splitSettingVat": "\ud83c\udfdb\ufe0f \u0627\u0644\u0636\u0631\u064a\u0628\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629",
    "splitSettingDelivery": "\ud83d\udef5 \u0631\u0633\u0648\u0645 \u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "splitDeliveryEqual": "\u0628\u0627\u0644\u062a\u0633\u0627\u0648\u064a",
    "splitDeliveryProp": "\u062a\u0646\u0627\u0633\u0628\u064a",
    "splitPeopleTitle": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0648\u0646",
    "splitPeopleUnit": "\u0623\u0634\u062e\u0627\u0635",
    "splitAddPersonBtn": "+ \u0625\u0636\u0627\u0641\u0629 \u0635\u062f\u064a\u0642",
    "splitEntryTitle": "\u0625\u0636\u0627\u0641\u0629 \u0648\u062c\u0628\u0629",
    "splitItemNameLabel": "\u0627\u0633\u0645 \u0627\u0644\u0648\u062c\u0628\u0629 (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
    "splitItemNamePlaceholder": "\u0645\u062b\u0627\u0644: \u0628\u064a\u062a\u0632\u0627\u060c \u0634\u0627\u0648\u0631\u0645\u0627\u060c \u0639\u0635\u064a\u0631",
    "splitItemPriceLabel": "\u0627\u0644\u0633\u0639\u0631 *",
    "splitItemPricePlaceholder": "0 \u0623\u0648 50*2",
    "splitWhoAte": "\u0645\u0646 \u0634\u0627\u0631\u0643 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0648\u062c\u0628\u0629\u061f",
    "splitEveryone": "\u2728 \u0627\u0644\u062c\u0645\u064a\u0639",
    "splitBtnConfirmAdd": "+ \u0625\u0636\u0627\u0641\u0629 \u0647\u0630\u0647 \u0627\u0644\u0648\u062c\u0628\u0629",
    "splitItemsTitle": "\u0627\u0644\u0648\u062c\u0628\u0627\u062a \u0627\u0644\u0645\u0636\u0627\u0641\u0629",
    "splitItemsUnit": "\u0648\u062c\u0628\u0627\u062a",
    "splitItemsEmpty": "\ud83c\udf7d\ufe0f \u0644\u0645 \u064a\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0648\u062c\u0628\u0627\u062a \u0628\u0639\u062f\u0664",
    "splitBreakdownTitle": "\u062a\u0641\u0635\u064a\u0644 \u0643\u0644 \u0634\u062e\u0635",
    "splitBreakdownEmpty": "\ud83c\udf7d\ufe0f \u0623\u0636\u0641 \u0648\u062c\u0628\u0627\u062a \u0628\u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0639\u0631\u0636 \u0646\u0635\u064a\u0628 \u0643\u0644 \u0634\u062e\u0635\u0664",
    "splitBankLabel": "\u0627\u0644\u0628\u0646\u0643 / \u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644",
    "splitBankPlaceholder": "\u062d\u062f\u062f \u0627\u0644\u0628\u0646\u0643 \u0623\u0648 \u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u062d\u0648\u064a\u0644",
    "splitAccountLabel": "\u0631\u0642\u0645 \u0627\u0644\u062d\u0633\u0627\u0628 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
    "splitAccountPlaceholder": "\u0645\u062b\u0627\u0644: \u0627\u0644\u0622\u064a\u0628\u0627\u0646 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644",
    "splitBtnCopyMessage": "\u0646\u0633\u062e \u0645\u0644\u062e\u0635 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
    "splitOfflineGuarantee": "\ud83d\udd12 100% \u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a \u2022 \u0628\u0644\u0627 \u062a\u062a\u0628\u0639 \u2022 \u062e\u0635\u0648\u0635\u064a\u0629 \u0643\u0627\u0645\u0644\u0629",
    "splitModalAddTitle": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0627\u0631\u0643",
    "splitModalAddSub": "\u0625\u0636\u0627\u0641\u0629 \u0639\u0636\u0648 \u062c\u062f\u064a\u062f",
    "splitModalNameLabel": "\u0627\u0633\u0645 \u0627\u0644\u0635\u062f\u064a\u0642",
    "splitModalNamePlaceholder": "\u0645\u062b\u0627\u0644: \u0623\u062d\u0645\u062f\u060c \u0633\u0627\u0631\u0629\u060c \u0639\u0644\u064a",
    "splitModalColorLabel": "\u0627\u062e\u062a\u0631 \u0627\u0644\u0644\u0648\u0646",
    "splitModalConfirmBtn": "+ \u0625\u0636\u0627\u0641\u0629",
    "splitModalEditTitle": "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0648\u062c\u0628\u0629",
    "splitModalEditSub": "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0633\u0639\u0631 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064a\u0646",
    "splitModalSaveBtn": "\u062d\u0641\u0638 \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a",
    "splitModalClearTitle": "\u0645\u0633\u062d \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
    "splitModalClearDesc": "\u0647\u0644 \u0623\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u0645\u0633\u062d \u062c\u0645\u064a\u0639 \u0627\u0644\u0648\u062c\u0628\u0627\u062a \u0648\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a\u061f",
    "splitModalClearConfirmBtn": "\u0645\u0633\u062d \u0627\u0644\u0643\u0644",
    "splitModalClearCancelBtn": "\u0625\u0644\u063a\u0627\u0621",
    "splitFriendDefault": "\u0635\u062f\u064a\u0642",
    "splitInvalidPrice": "\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0633\u0639\u0631 \u0635\u062d\u064a\u062d\u0664",
    "splitShareTextEveryone": "\u0627\u0644\u062c\u0645\u064a\u0639 ({n} \u0623\u0634\u062e\u0627\u0635)",
    "splitShareTextSome": "{names} ({n} \u0623\u0634\u062e\u0627\u0635)",
    "splitDividedBy": "\u062a\u0642\u0633\u064a\u0645 \u0639\u0644\u0649 {n}",
    "splitDiscountReceived": "\u0627\u0644\u062e\u0635\u0645 \u0627\u0644\u0645\u062d\u0633\u0648\u0628",
    "splitDeliveryFee": "\u0631\u0633\u0648\u0645 \u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "splitItemDefault": "\u0648\u062c\u0628\u0629",
    "splitBtnAddQuick": "\u0625\u0636\u0627\u0641\u0629 \u0648\u062c\u0628\u0629",
    "splitPersonAdded": "\u062a\u0645\u062a \u0625\u0636\u0627\u0641\u0629 {name}! \ud83d\udc64",
    "splitLineHeader": "\ud83e\uddfe \u0645\u0644\u062e\u0635 \u062a\u0642\u0633\u064a\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629",
    "splitLineGrand": "\ud83d\udcb0 \u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0643\u0644\u064a",
    "splitLineFood": "\ud83c\udf72 \u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0648\u062c\u0628\u0627\u062a",
    "splitLineDiscount": "\ud83c\udff7\ufe0f \u0627\u0644\u062e\u0635\u0645",
    "splitLineSc": "\ud83c\udf7d\ufe0f \u0627\u0644\u062e\u062f\u0645\u0629",
    "splitLineVat": "\ud83c\udfdb\ufe0f \u0627\u0644\u0636\u0631\u064a\u0628\u0629",
    "splitLineDelivery": "\ud83d\udef5 \u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    "splitLinePayment": "\ud83d\udcb3 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u062d\u0648\u064a\u0644",
    "splitLineEachPerson": "\ud83d\udc65 \u0646\u0635\u064a\u0628 \u0643\u0644 \u0634\u062e\u0635",
    "splitLineFooter": "\u26a1 \u062d\u064f\u0633\u0628 \u0628\u0648\u0627\u0633\u0637\u0629 \u062a\u0637\u0628\u064a\u0642 SmartSaver (100% \u062f\u0648\u0646 \u0625\u0646\u062a\u0631\u0646\u062a \u2022 \u062f\u0642\u064a\u0642)",
    "toastMessageCopied": "\u062a\u0645 \u0646\u0633\u062e \u0645\u0644\u062e\u0635 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629! \ud83d\udccb",
    "splitSharedWord": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629:",
    "splitBankOther": "\u0623\u062e\u0631\u0649 (\u062d\u062f\u062f)...",
    "splitSelectPayer": "\u0645\u0646 \u0634\u0627\u0631\u0643\u061f"
  }
};


// Merge SPLIT_TRANSLATIONS into TRANSLATIONS if available
if (typeof TRANSLATIONS !== 'undefined') {
  Object.keys(SPLIT_TRANSLATIONS).forEach(lang => {
    if (TRANSLATIONS[lang]) {
      Object.assign(TRANSLATIONS[lang], SPLIT_TRANSLATIONS[lang]);
    }
  });
}

function getSplitTranslation(key) {
  const lang = (typeof state !== 'undefined' && state.lang) || (window.state && window.state.lang) || 'th';
  if (SPLIT_TRANSLATIONS[lang] && SPLIT_TRANSLATIONS[lang][key]) {
    return SPLIT_TRANSLATIONS[lang][key];
  }
  if (SPLIT_TRANSLATIONS['en'] && SPLIT_TRANSLATIONS['en'][key]) {
    return SPLIT_TRANSLATIONS['en'][key];
  }
  return '';
}

// ===== CURRENCY SYMBOLS (PER LANGUAGE) =====
const SPLIT_CURRENCIES = {
  th: '\u0e3f',
  en: '$',
  lo: '\u20ad',
  zh: '\u00a5',
  ja: '\u00a5',
  ko: '\u20a9',
  es: '\u20ac',
  fr: '\u20ac',
  de: '\u20ac',
  pt: 'R$',
  id: 'Rp',
  hi: '\u20b9',
  ar: '\u062f.\u0625'
};

function getSplitCurrency() {
  const lang = (typeof state !== 'undefined' && state.lang) || (window.state && window.state.lang) || 'th';
  return SPLIT_CURRENCIES[lang] || SPLIT_CURRENCIES['th'];
}

// ===== BANK PRESETS (PER LANGUAGE) =====
const BANK_PRESETS = {
  th: [
    { label: 'PromptPay (\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e1e\u0e22\u0e4c)', value: 'PromptPay' },
    { label: '\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e01\u0e2a\u0e34\u0e01\u0e23\u0e44\u0e17\u0e22 (KBank)', value: 'KBank' },
    { label: '\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e44\u0e17\u0e22\u0e1e\u0e32\u0e13\u0e34\u0e0a\u0e22\u0e4c (SCB)', value: 'SCB' },
    { label: '\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e01\u0e23\u0e38\u0e07\u0e44\u0e17\u0e22 (KTB)', value: 'KTB' },
    { label: '\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e (BBL)', value: 'BBL' },
    { label: 'TrueMoney Wallet', value: 'TrueMoney' }
  ],
  en: [
    { label: 'Zelle', value: 'Zelle' },
    { label: 'Venmo', value: 'Venmo' },
    { label: 'PayPal', value: 'PayPal' },
    { label: 'Cash App', value: 'Cash App' },
    { label: 'Bank Transfer (Wire/ACH)', value: 'Bank Transfer' }
  ],
  lo: [
    { label: 'BCEL One', value: 'BCEL One' },
    { label: 'JDB Yes Bank', value: 'JDB' },
    { label: 'LDB Trust', value: 'LDB' }
  ],
  zh: [
    { label: '\u652f\u4ed8\u5b9d (Alipay)', value: 'Alipay' },
    { label: '\u5fae\u4fe1\u652f\u4ed8 (WeChat Pay)', value: 'WeChat Pay' },
    { label: '\u4e2d\u56fd\u5de5\u5546\u94f6\u884c (ICBC)', value: 'ICBC' },
    { label: '\u4e2d\u56fd\u5efa\u8bbe\u94f6\u884c (CCB)', value: 'CCB' }
  ],
  ja: [
    { label: 'PayPay', value: 'PayPay' },
    { label: 'LINE Pay', value: 'LINE Pay' },
    { label: '\u3086\u3046\u3061\u3087\u9280\u884c (Japan Post Bank)', value: 'Japan Post Bank' },
    { label: '\u4e09\u83f1UFJ\u9280\u884c (MUFG)', value: 'MUFG' }
  ],
  ko: [
    { label: '\uce74\uce74\uc624\ud398\uc774 (KakaoPay)', value: 'KakaoPay' },
    { label: '\ud1a0\uc2a4 (Toss)', value: 'Toss' },
    { label: '\uad6d\ubbfc\uc740\ud589 (KB)', value: 'KB Bank' },
    { label: '\uc2e0\ud55c\uc740\ud589 (Shinhan)', value: 'Shinhan Bank' }
  ],
  es: [
    { label: 'Bizum', value: 'Bizum' },
    { label: 'PayPal', value: 'PayPal' },
    { label: 'Transferencia Bancaria (IBAN)', value: 'IBAN' },
    { label: 'BBVA / Santander', value: 'BBVA/Santander' }
  ],
  fr: [
    { label: 'Paylib / Wero', value: 'Paylib' },
    { label: 'Lydia', value: 'Lydia' },
    { label: 'PayPal', value: 'PayPal' },
    { label: 'Virement Bancaire (IBAN)', value: 'IBAN' }
  ],
  de: [
    { label: 'PayPal', value: 'PayPal' },
    { label: 'Bank\u00fcberweisung (IBAN)', value: 'IBAN' },
    { label: 'Sparkasse / Deutsche Bank', value: 'Sparkasse' }
  ],
  pt: [
    { label: 'Pix', value: 'Pix' },
    { label: 'PicPay', value: 'PicPay' },
    { label: 'Nubank / Ita\u00fa', value: 'Nubank' }
  ],
  id: [
    { label: 'GoPay', value: 'GoPay' },
    { label: 'OVO', value: 'OVO' },
    { label: 'DANA', value: 'DANA' },
    { label: 'BCA / Mandiri / BRI', value: 'BCA' }
  ],
  hi: [
    { label: 'Google Pay (UPI)', value: 'Google Pay' },
    { label: 'PhonePe (UPI)', value: 'PhonePe' },
    { label: 'Paytm (UPI)', value: 'Paytm' },
    { label: 'SBI / HDFC Bank', value: 'UPI/Bank' }
  ],
  ar: [
    { label: '\u062a\u062d\u0648\u064a\u0644 \u0628\u0646\u0643\u064a (IBAN)', value: 'IBAN' },
    { label: 'STC Pay', value: 'STC Pay' },
    { label: 'InstaPay', value: 'InstaPay' },
    { label: 'BenefitPay', value: 'BenefitPay' }
  ]
};

// ===== PAYMENT INFO STORAGE =====
const PAYMENT_STORAGE_KEY = 'smartsaver_payment_info';

function getSavedPaymentInfo() {
  try {
    const raw = localStorage.getItem(PAYMENT_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { bank: '', customBank: '', account: '' };
}

function savePaymentInfo(info) {
  try {
    localStorage.setItem(PAYMENT_STORAGE_KEY, JSON.stringify(info));
  } catch (e) {}
}

function populateBankOptions() {
  const bankSelect = document.getElementById('split-bank-select');
  const customInput = document.getElementById('split-bank-custom-input');
  if (!bankSelect) return;
  const currentSaved = getSavedPaymentInfo();
  const lang = (typeof state !== 'undefined' && state.lang) || (window.state && window.state.lang) || 'th';
  const presets = BANK_PRESETS[lang] || BANK_PRESETS['en'];
  const otherLabel = getSplitTranslation('splitBankOther') || 'Other / Specify...';
  const placeholderText = getSplitTranslation('splitBankLabel') || 'Select Bank / Service';

  let html = `<option value="">-- ${placeholderText} --</option>`;
  presets.forEach(p => {
    html += `<option value="${p.value}">${p.label}</option>`;
  });
  html += `<option value="__other__">${otherLabel}</option>`;
  bankSelect.innerHTML = html;

  if (currentSaved.bank === '__other__') {
    bankSelect.value = '__other__';
    if (customInput) {
      customInput.classList.remove('hidden');
      customInput.style.display = 'block';
      customInput.value = currentSaved.customBank || '';
    }
  } else if (currentSaved.bank) {
    const exists = Array.from(bankSelect.options).some(opt => opt.value === currentSaved.bank);
    if (exists) {
      bankSelect.value = currentSaved.bank;
    } else {
      bankSelect.value = '';
    }
    if (customInput) {
      customInput.classList.add('hidden');
      customInput.style.display = 'none';
      customInput.value = '';
    }
  } else {
    bankSelect.value = '';
    if (customInput) {
      customInput.classList.add('hidden');
      customInput.style.display = 'none';
      customInput.value = '';
    }
  }

  const accountInput = document.getElementById('split-account-input');
  if (accountInput && currentSaved.account) {
    accountInput.value = currentSaved.account;
  }
}


// ===== SMART BILL SPLITTER STATE & CONSTANTS =====
const SPLIT_STORAGE_KEY = 'smartsaver_split_data';
const AVATAR_COLORS = [
  '#EF4444', '#3B82F6', '#10B981', '#F59E0B',
  '#8B5CF6', '#EC4899', '#06B6D4', '#F97316',
  '#14B8A6', '#6366F1', '#84CC16', '#E11D48',
  '#0EA5E9', '#D946EF', '#F43F5E', '#22C55E'
];
const DEFAULT_AVATARS = AVATAR_COLORS.map(c => ({ bg: c + '22', color: c }));

const ANIMAL_EMOJIS = ["\uD83D\uDC36", "\uD83D\uDC31", "\uD83D\uDC30", "\uD83E\uDD8A", "\uD83D\uDC3B", "\uD83D\uDC3C", "\uD83D\uDC28", "\uD83D\uDC2F", "\uD83E\uDD81", "\uD83D\uDC2E", "\uD83D\uDC37", "\uD83D\uDC38", "\uD83D\uDC35", "\uD83D\uDC27", "\uD83E\uDD89", "\uD83E\uDD84", "\uD83D\uDC19", "\uD83D\uDC24", "\uD83D\uDC39", "\uD83E\uDDA4"];

function getPersonAvatar(person, index) {
  if (person && person.emoji) return person.emoji;
  const idx = typeof index === 'number' ? index : 0;
  return ANIMAL_EMOJIS[idx % ANIMAL_EMOJIS.length];
}

let splitData = {
  people: [
    { id: 'p1', name: '', isCustom: false, colorIndex: 0, emoji: '\uD83D\uDC36' }
  ],
  selectedParticipantIds: ['p1'],
  items: [],
  settings: {
    discountVal: 0,
    discountType: 'percent',
    scPercent: 0,
    vatPercent: 0,
    deliveryFee: 0,
    deliveryMethod: 'equal'
  }
};

let selectedAvatarColor = 0;

function loadSplitData() {
  try {
    const raw = localStorage.getItem(SPLIT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.people) && parsed.people.length > 0) {
        splitData = parsed;
        if (!Array.isArray(splitData.items)) splitData.items = [];
        if (!splitData.settings) {
          splitData.settings = {
            discountVal: 0,
            discountType: 'percent',
            scPercent: 0,
            vatPercent: 0,
            deliveryFee: 0,
            deliveryMethod: 'equal'
          };
        }
        if (!Array.isArray(splitData.selectedParticipantIds) || splitData.selectedParticipantIds.length === 0) {
          splitData.selectedParticipantIds = splitData.people.map(p => p.id);
        }
        splitData.people.forEach((p, idx) => {
          if (!p.emoji) {
            p.emoji = ANIMAL_EMOJIS[idx % ANIMAL_EMOJIS.length];
          }
        });
      }
    }
  } catch (e) {
    console.error('Failed to load split data:', e);
  }
}

function saveSplitData() {
  try {
    localStorage.setItem(SPLIT_STORAGE_KEY, JSON.stringify(splitData));
  } catch (e) {}
}

function getPersonDisplayName(person, index) {
  if (person && person.isCustom && person.name) {
    return person.name;
  }
  const defaultWord = getSplitTranslation('splitFriendDefault') || 'Friend';
  return `${defaultWord} ${index + 1}`;
}

function parseMathPrice(str) {
  if (!str) return 0;
  const clean = String(str).replace(/[^0-9\.\+\-\*\/\(\)\s]/g, '');
  try {
    const val = Function('"use strict"; return (' + clean + ')')();
    return typeof val === 'number' && !isNaN(val) && isFinite(val) ? Math.max(0, val) : 0;
  } catch (e) {
    return 0;
  }
}

// ===== IN-APP MODALS (LIQUID GLASS) =====
let isModalClosing = false;
let modalCloseTimeout = null;

function triggerModalClosingCooldown() {
  isModalClosing = true;
  if (modalCloseTimeout) clearTimeout(modalCloseTimeout);
  modalCloseTimeout = setTimeout(function() {
    isModalClosing = false;
  }, 400);
}

window.handleAndroidBack = function() {
  if (document.activeElement) {
    var tag = document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      document.activeElement.blur();
      hideMathAccessory();
      return true;
    }
  }
  var editModal = document.getElementById('edit-item-modal-backdrop');
  if (editModal) {
    if (!editModal.classList.contains('hidden')) {
      closeEditItemModal();
      return true;
    }
  }
  var addPersonModal = document.getElementById('add-person-modal-backdrop');
  if (addPersonModal) {
    if (!addPersonModal.classList.contains('hidden')) {
      closeAddPersonModal();
      return true;
    }
  }
  var clearModal = document.getElementById('clear-confirm-modal-backdrop');
  if (clearModal) {
    if (!clearModal.classList.contains('hidden')) {
      closeClearConfirmModal();
      return true;
    }
  }
  var supportModal = document.getElementById('support-modal-backdrop');
  if (supportModal) {
    if (!supportModal.classList.contains('hidden')) {
      closeSupportModal();
      return true;
    }
  }
  var langModal = document.getElementById('language-modal-backdrop');
  if (langModal) {
    if (!langModal.classList.contains('hidden')) {
      closeLanguageModal();
      return true;
    }
  }
  var mathBar = document.getElementById('floating-math-accessory');
  if (mathBar) {
    if (!mathBar.classList.contains('hidden')) {
      if (mathBar.style.display !== 'none') {
        hideMathAccessory();
        return true;
      }
    }
  }
  return false;
};

function openAddPersonModal() {
  hideMathAccessory();
  const modal = document.getElementById('add-person-modal-backdrop');
  if (!modal) return;
  const input = document.getElementById('add-person-name-input');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 150);
  }
  selectedAvatarColor = splitData.people.length % AVATAR_COLORS.length;
  renderAvatarColorPicker();
  modal.classList.remove('hidden');
}

function closeAddPersonModal() {
  triggerModalClosingCooldown();
  hideMathAccessory();
  const modal = document.getElementById('add-person-modal-backdrop');
  if (modal) modal.classList.add('hidden');
}

function renderAvatarColorPicker() {
  const container = document.getElementById('avatar-color-choices');
  if (!container) return;
  container.innerHTML = AVATAR_COLORS.map((color, idx) => `
    <button type="button" class="avatar-color-choice ${idx === selectedAvatarColor ? 'active' : ''}"
      data-color-idx="${idx}" style="background-color: ${color};" aria-label="Color ${idx + 1}">
      ${idx === selectedAvatarColor ? '&#x2713;' : ''}
    </button>
  `).join('');

  container.querySelectorAll('.avatar-color-choice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      selectedAvatarColor = parseInt(btn.dataset.colorIdx, 10);
      renderAvatarColorPicker();
    });
  });
}

function confirmAddPerson() {
  const input = document.getElementById('add-person-name-input');
  const name = input ? input.value.trim() : '';
  const isCustom = name.length > 0;
  const newIndex = splitData.people.length;

  // Automatically pick a random color not yet used by existing friends
  const usedColorIndices = new Set(splitData.people.map(p => p.colorIndex));
  const availableColorIndices = [];
  for (let i = 0; i < AVATAR_COLORS.length; i++) {
    if (!usedColorIndices.has(i)) {
      availableColorIndices.push(i);
    }
  }
  let chosenColorIndex = 0;
  if (availableColorIndices.length > 0) {
    const randIdx = Math.floor(Math.random() * availableColorIndices.length);
    chosenColorIndex = availableColorIndices[randIdx];
  } else {
    chosenColorIndex = Math.floor(Math.random() * AVATAR_COLORS.length);
  }

  // Automatically pick a distinct animal emoji not yet used
  const usedEmojis = new Set(splitData.people.map(p => p.emoji));
  const availableEmojis = ANIMAL_EMOJIS.filter(e => !usedEmojis.has(e));
  let chosenEmoji = ANIMAL_EMOJIS[0];
  if (availableEmojis.length > 0) {
    chosenEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
  } else {
    chosenEmoji = ANIMAL_EMOJIS[Math.floor(Math.random() * ANIMAL_EMOJIS.length)];
  }

  const person = {
    id: 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    name: name,
    isCustom: isCustom,
    colorIndex: chosenColorIndex,
    emoji: chosenEmoji
  };
  splitData.people.push(person);
  if (!splitData.selectedParticipantIds.includes(person.id)) {
    splitData.selectedParticipantIds.push(person.id);
  }
  saveSplitData();
  closeAddPersonModal();
  renderSplitter();
  const displayName = getPersonDisplayName(person, newIndex);
  const msg = (getSplitTranslation('splitPersonAdded') || 'Added {name}!').replace('{name}', displayName);
  showToast(msg);
}

let editItemPayerIds = [];

function openEditItemModal(itemId) {
  hideMathAccessory();
  const item = splitData.items.find(it => it.id === itemId);
  if (!item) return;
  const modal = document.getElementById('edit-item-modal-backdrop');
  if (!modal) return;

  const idEl = document.getElementById('edit-item-id-hidden') || document.getElementById('edit-item-id');
  if (idEl) idEl.value = item.id;
  const itemIndex = splitData.items.findIndex(it => it.id === itemId);
  const displayName = getItemDisplayName(item, itemIndex >= 0 ? itemIndex : 0);
  const nameEl = document.getElementById('edit-item-name-input') || document.getElementById('edit-item-name');
  if (nameEl) {
    nameEl.value = item.isCustomName ? (item.name || '') : '';
    nameEl.placeholder = displayName;
  }
  const priceEl = document.getElementById('edit-item-price-input') || document.getElementById('edit-item-price');
  if (priceEl) priceEl.value = item.price || '';

  editItemPayerIds = (item.payers && item.payers.length > 0)
    ? [...item.payers]
    : splitData.people.map(p => p.id);

  renderEditItemPayers();
  modal.classList.remove('hidden');
}

function closeEditItemModal() {
  triggerModalClosingCooldown();
  hideMathAccessory();
  const modal = document.getElementById('edit-item-modal-backdrop');
  if (modal) modal.classList.add('hidden');
}

function renderEditItemPayers() {
  const container = document.getElementById('edit-participant-chips') || document.getElementById('edit-item-payers-container');
  const allChip = document.getElementById('chip-edit-everyone');
  if (!container) return;

  const isAll = editItemPayerIds.length === splitData.people.length;
  if (allChip) {
    if (isAll) allChip.classList.add('active');
    else allChip.classList.remove('active');
  }

  let html = '';
  splitData.people.forEach((p, idx) => {
    const isChecked = editItemPayerIds.includes(p.id);
    const av = DEFAULT_AVATARS[p.colorIndex % DEFAULT_AVATARS.length] || DEFAULT_AVATARS[0];
    const name = getPersonDisplayName(p, idx);
    html += `
      <button type="button" class="participant-chip ${isChecked ? 'active' : ''}" data-person-id="${p.id}">
        <span class="chip-avatar" style="background:${av.bg};">${getPersonAvatar(p, idx)}</span>
        <span class="chip-name">${name}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.participant-chip[data-person-id]').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = chip.dataset.personId;
      if (editItemPayerIds.includes(id)) {
        if (editItemPayerIds.length > 1) {
          editItemPayerIds = editItemPayerIds.filter(x => x !== id);
        }
      } else {
        editItemPayerIds.push(id);
      }
      renderEditItemPayers();
    });
  });
}

function saveEditItem() {
  const idEl = document.getElementById('edit-item-id-hidden') || document.getElementById('edit-item-id');
  const id = idEl ? idEl.value : null;
  const item = splitData.items.find(it => it.id === id);
  if (!item) return;

  const nameEl = document.getElementById('edit-item-name-input') || document.getElementById('edit-item-name');
  const priceEl = document.getElementById('edit-item-price-input') || document.getElementById('edit-item-price');

  const nameInput = nameEl ? nameEl.value.trim() : '';
  const priceVal = parseMathPrice(priceEl ? priceEl.value : 0);

  if (priceVal <= 0) {
    showToast(getSplitTranslation('splitInvalidPrice') || 'Please enter a valid price.');
    return;
  }

  const finalPayers = editItemPayerIds.length > 0 ? [...editItemPayerIds] : splitData.people.map(p => p.id);

  if (nameInput) {
    item.name = nameInput;
    item.isCustomName = true;
  } else {
    item.isCustomName = false;
    const idx = splitData.items.indexOf(item);
    item.name = (getSplitTranslation('splitItemDefault') || 'Item') + ' ' + (idx >= 0 ? idx + 1 : 1);
  }
  item.price = priceVal;
  item.payers = finalPayers;

  saveSplitData();
  closeEditItemModal();
  renderSplitter();
  showToast((getSplitTranslation('splitModalSaveBtn') || 'Saved') + ' \u2713');
}

function openClearConfirmModal() {
  const modal = document.getElementById('clear-confirm-modal-backdrop');
  if (modal) modal.classList.remove('hidden');
}

function closeClearConfirmModal() {
  triggerModalClosingCooldown();
  const modal = document.getElementById('clear-confirm-modal-backdrop');
  if (modal) modal.classList.add('hidden');
}

function confirmClearSplit() {
  splitData = {
    people: [
      { id: 'p1', name: '', isCustom: false, colorIndex: 0 }
    ],
    selectedParticipantIds: ['p1'],
    items: [],
    settings: {
      discountVal: 0,
      discountType: 'percent',
      scPercent: 0,
      vatPercent: 0,
      deliveryFee: 0,
      deliveryMethod: 'equal'
    }
  };
  saveSplitData();
  closeClearConfirmModal();
  renderSplitter();
  showToast('\u2713 ' + (getSplitTranslation('splitModalClearConfirmBtn') || 'Cleared'));
}


// ===== BILL SPLIT CALCULATION & EXACT MATCH =====
function calculateBillSplit() {
  const curr = getSplitCurrency();
  const foodSubtotal = splitData.items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

  let discountAmount = 0;
  if (splitData.settings.discountType === 'percent') {
    discountAmount = (foodSubtotal * (Number(splitData.settings.discountVal) || 0)) / 100;
  } else {
    discountAmount = Math.min(foodSubtotal, Number(splitData.settings.discountVal) || 0);
  }
  discountAmount = Math.max(0, discountAmount);
  const afterDiscount = Math.max(0, foodSubtotal - discountAmount);

  const scAmount = (afterDiscount * (Number(splitData.settings.scPercent) || 0)) / 100;
  const taxable = afterDiscount + scAmount;
  const vatAmount = (taxable * (Number(splitData.settings.vatPercent) || 0)) / 100;
  const deliveryFee = Math.max(0, Number(splitData.settings.deliveryFee) || 0);

  const grandTotal = Math.round((taxable + vatAmount + deliveryFee) * 100) / 100;

  const personBreakdown = {};
  splitData.people.forEach((p, idx) => {
    personBreakdown[p.id] = {
      person: p,
      index: idx,
      foodBase: 0,
      discountShare: 0,
      scShare: 0,
      vatShare: 0,
      deliveryShare: 0,
      finalShare: 0,
      items: []
    };
  });

  splitData.items.forEach((item, itemIdx) => {
    const pIds = (item.payers && item.payers.length > 0) ? item.payers : splitData.people.map(p => p.id);
    const validPIds = pIds.filter(id => personBreakdown[id]);
    if (validPIds.length === 0) return;

    const perShare = item.price / validPIds.length;
    validPIds.forEach(id => {
      personBreakdown[id].foodBase += perShare;
      personBreakdown[id].items.push({
        name: getItemDisplayName(item, itemIdx),
        totalPrice: item.price,
        share: perShare,
        splitCount: validPIds.length
      });
    });
  });

  const totalFoodBase = Object.values(personBreakdown).reduce((s, pb) => s + pb.foodBase, 0);

  Object.values(personBreakdown).forEach(pb => {
    if (totalFoodBase > 0) {
      const prop = pb.foodBase / totalFoodBase;
      pb.discountShare = discountAmount * prop;
      pb.scShare = scAmount * prop;
      pb.vatShare = vatAmount * prop;
    }

    if (splitData.settings.deliveryMethod === 'equal') {
      const activePeople = Object.values(personBreakdown).filter(p => p.foodBase > 0);
      const count = activePeople.length > 0 ? activePeople.length : splitData.people.length;
      if (activePeople.length > 0) {
        if (pb.foodBase > 0) pb.deliveryShare = deliveryFee / count;
      } else {
        pb.deliveryShare = deliveryFee / count;
      }
    } else {
      if (totalFoodBase > 0) {
        pb.deliveryShare = deliveryFee * (pb.foodBase / totalFoodBase);
      }
    }

    pb.rawTotal = Math.max(0, pb.foodBase - pb.discountShare + pb.scShare + pb.vatShare + pb.deliveryShare);
    pb.finalShare = Math.round(pb.rawTotal * 100) / 100;
  });

  // Penny Match exact penny balance
  const sumShares = Object.values(personBreakdown).reduce((s, pb) => s + pb.finalShare, 0);
  const diffCents = Math.round((grandTotal - sumShares) * 100);

  if (diffCents !== 0 && Object.values(personBreakdown).length > 0) {
    const sorted = Object.values(personBreakdown).sort((a, b) => b.finalShare - a.finalShare);
    const step = diffCents > 0 ? 0.01 : -0.01;
    let remaining = Math.abs(diffCents);
    let i = 0;
    while (remaining > 0 && i < sorted.length) {
      sorted[i % sorted.length].finalShare = Math.round((sorted[i % sorted.length].finalShare + step) * 100) / 100;
      remaining--;
      i++;
    }
  }

  return {
    curr,
    foodSubtotal,
    discountAmount,
    afterDiscount,
    scAmount,
    vatAmount,
    deliveryFee,
    grandTotal,
    personBreakdown
  };
}

// ===== SUMMARY MESSAGE GENERATION & UNIVERSAL COPY =====
function generateMessageSummary(calcResult) {
  const t = (k) => getSplitTranslation(k);
  const curr = calcResult.curr;
  const payInfo = getSavedPaymentInfo();
  const lines = [];

  lines.push(t('splitLineHeader') || '🧾 สรุปค่าอาหาร');
  lines.push(`${t('splitLineGrand') || '\ud83d\udcb0 \u0e22\u0e2d\u0e14\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e34\u0e49\u0e19'}: ${curr} ${calcResult.grandTotal.toFixed(2)}`);

  const extras = [];
  if (calcResult.discountAmount > 0) {
    extras.push(`${t('splitLineDiscount') || '\ud83c\udff7\ufe0f \u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14'}: -${curr} ${calcResult.discountAmount.toFixed(2)}`);
  }
  if (calcResult.scAmount > 0) {
    extras.push(`${t('splitLineSc') || '\ud83c\udf7d\ufe0f \u0e04\u0e48\u0e32\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23'}: +${curr} ${calcResult.scAmount.toFixed(2)}`);
  }
  if (calcResult.vatAmount > 0) {
    extras.push(`${t('splitLineVat') || '\ud83c\udfdb\ufe0f VAT'}: +${curr} ${calcResult.vatAmount.toFixed(2)}`);
  }
  if (calcResult.deliveryFee > 0) {
    extras.push(`${t('splitLineDelivery') || '\ud83d\udef5 \u0e04\u0e48\u0e32\u0e2a\u0e48\u0e07'}: +${curr} ${calcResult.deliveryFee.toFixed(2)}`);
  }
  if (extras.length > 0) {
    lines.push(extras.join(' | '));
  }

  lines.push('');
  lines.push(`${t('splitLineEachPerson') || '\ud83d\udc65 \u0e22\u0e2d\u0e14\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e48\u0e32\u0e22\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e19'}:`);

  const peopleArray = Object.values(calcResult.personBreakdown);
  peopleArray.forEach(pb => {
    const name = getPersonDisplayName(pb.person, pb.index);
    const emoji = getPersonAvatar(pb.person, pb.index);
    lines.push(`${emoji} ${name}: ${curr} ${pb.finalShare.toFixed(2)}`);
  });

  const bankVal = payInfo.bank === '__other__' ? payInfo.customBank : payInfo.bank;
  if (bankVal || payInfo.account) {
    lines.push('');
    lines.push(`${t('splitLinePayment') || '\ud83d\udcb3 \u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e42\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19'}:`);
    if (bankVal) lines.push(bankVal);
    if (payInfo.account) lines.push(payInfo.account);
  }

  lines.push('');
  const curLang = (typeof state !== 'undefined' && state.lang) || 'th';
  const footerLine = (curLang === 'th') ? '\u0e04\u0e33\u0e19\u0e27\u0e13\u0e14\u0e49\u0e27\u0e22 SmartSaver App' : (t('splitLineFooter') || 'Calculated with SmartSaver App');
  lines.push(footerLine);

  return lines.join('\n');
}

function copyMessageSummary() {
  const calc = calculateBillSplit();
  const summaryText = generateMessageSummary(calc);

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summaryText).then(() => {
      showToast(getSplitTranslation('toastMessageCopied') || 'Summary message copied! \ud83d\udccb');
    }).catch(() => {
      fallbackCopyText(summaryText);
    });
  } else {
    fallbackCopyText(summaryText);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '-9999px';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(getSplitTranslation('toastMessageCopied') || 'Summary message copied! \ud83d\udccb');
  } catch (err) {
    console.error('Copy fallback failed:', err);
  }
  document.body.removeChild(textArea);
}


// ===== RENDERING & UI SYNC =====
function updatePerPersonPreview() {
  const previewEl = document.getElementById('split-preview-per-person');
  if (!previewEl) return;
  const priceInput = document.getElementById('split-item-price');
  const priceVal = parseMathPrice(priceInput ? priceInput.value : 0);
  const curr = getSplitCurrency();

  if (priceVal <= 0) {
    previewEl.textContent = '';
    return;
  }

  const selectedCount = splitData.selectedParticipantIds.length > 0
    ? splitData.selectedParticipantIds.length
    : splitData.people.length;

  const perShare = (priceVal / selectedCount).toFixed(2);
  const divText = (getSplitTranslation('splitDividedBy') || 'split {n}').replace('{n}', selectedCount);
  previewEl.textContent = `\u2248 ${curr} ${perShare} / pers. (${divText})`;
}


// ===== DYNAMIC ITEM DISPLAY NAME LOCALIZATION =====
function getItemDisplayName(item, index) {
  if (!item) return '';
  if (item.isCustomName === true && item.name && item.name.trim()) {
    return item.name.trim();
  }
  if (item.isCustomName === false) {
    const prefix = getSplitTranslation('splitItemDefault') || 'Item';
    return `${prefix} ${index + 1}`;
  }
  if (!item.name || /^(item|\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23|\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99|\u9910\u54c1|\u54c1\u76ee|\ud56d\ubaa9|plato|plat|gericht|menu|\u0906\u0907\u091f\u092e|\u0648\u062c\u0628\u0629)\s*\d+$/i.test(item.name.trim())) {
    const prefix = getSplitTranslation('splitItemDefault') || 'Item';
    return `${prefix} ${index + 1}`;
  }
  return item.name;
}

function renderSplitter() {
  const calc = calculateBillSplit();
  const curr = calc.curr;

  // Header / Totals
  const grandTotalEl = document.getElementById('split-grand-total');
  if (grandTotalEl) {
    const grandCurrEl = grandTotalEl.parentElement ? grandTotalEl.parentElement.querySelector('.currency-symbol') : null;
    if (grandCurrEl) grandCurrEl.textContent = curr;
    grandTotalEl.textContent = calc.grandTotal.toFixed(2);
  }

  const subtotalEl = document.getElementById('split-subtotal-val');
  if (subtotalEl) subtotalEl.textContent = `${curr} ${calc.foodSubtotal.toFixed(2)}`;

  const discountEl = document.getElementById('split-discount-val');
  if (discountEl) discountEl.textContent = `-${curr} ${calc.discountAmount.toFixed(2)}`;

  const scEl = document.getElementById('split-sc-val');
  if (scEl) scEl.textContent = `+${curr} ${calc.scAmount.toFixed(2)}`;

  const vatEl = document.getElementById('split-vat-val');
  if (vatEl) vatEl.textContent = `+${curr} ${calc.vatAmount.toFixed(2)}`;

  const deliveryEl = document.getElementById('split-delivery-val');
  if (deliveryEl) deliveryEl.textContent = `+${curr} ${calc.deliveryFee.toFixed(2)}`;

  // People Count & List
  const peopleCountEl = document.getElementById('split-people-count');
  if (peopleCountEl) peopleCountEl.textContent = splitData.people.length;

  renderPeopleList();
  renderParticipantChips();
  renderItemsList(calc);
  renderBreakdownList(calc);
  updatePerPersonPreview();
}

function renderPeopleList() {
  const listEl = document.getElementById('split-people-list');
  if (!listEl) return;

  let html = '';
  splitData.people.forEach((p, idx) => {
    const color = AVATAR_COLORS[p.colorIndex % AVATAR_COLORS.length] || AVATAR_COLORS[0];
    const name = getPersonDisplayName(p, idx);
    const canDelete = splitData.people.length > 1;

    html += `
      <div class="person-avatar-pill" data-id="${p.id}">
        <div class="avatar-circle" style="background:${color}22; border:1px solid ${color}44;">
          ${getPersonAvatar(p, idx)}
        </div>
        <span class="person-name">${name}</span>
        ${canDelete ? `<button type="button" class="person-remove-btn" data-id="${p.id}" title="Remove">&times;</button>` : ''}
      </div>
    `;
  });

  const rawAddText = getSplitTranslation('splitAddPersonBtn') || '+ Add Friend';
  const cleanAddText = rawAddText.replace(/^\+\s*/, '');

  html += `
    <button type="button" class="btn-add-person" id="add-person-btn">
      <span class="plus-icon">+</span>
      <span class="btn-text">${cleanAddText}</span>
    </button>
  `;

  listEl.innerHTML = html;

  const addBtn = listEl.querySelector('#add-person-btn');
  if (addBtn) addBtn.onclick = openAddPersonModal;

  listEl.querySelectorAll('.person-remove-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const pId = btn.dataset.id;
      if (splitData.people.length <= 1) return;
      splitData.people = splitData.people.filter(p => p.id !== pId);
      splitData.selectedParticipantIds = splitData.selectedParticipantIds.filter(id => id !== pId);
      if (splitData.selectedParticipantIds.length === 0) {
        splitData.selectedParticipantIds = [splitData.people[0].id];
      }
      splitData.items.forEach(it => {
        if (it.payers) it.payers = it.payers.filter(id => id !== pId);
      });
      saveSplitData();
      renderSplitter();
    };
  });
}

function renderParticipantChips() {
  const container = document.getElementById('split-participant-chips');
  const allBtn = document.getElementById('chip-participant-all');
  if (!container) return;

  const isAll = splitData.selectedParticipantIds.length === splitData.people.length;
  if (allBtn) {
    if (isAll) allBtn.classList.add('active');
    else allBtn.classList.remove('active');
  }

  let html = '';
  splitData.people.forEach((p, idx) => {
    const isSelected = splitData.selectedParticipantIds.includes(p.id);
    const av = DEFAULT_AVATARS[p.colorIndex % DEFAULT_AVATARS.length] || DEFAULT_AVATARS[0];
    const name = getPersonDisplayName(p, idx);

    html += `
      <button type="button" class="participant-chip ${isSelected ? 'active' : ''}" data-id="${p.id}">
        <span class="chip-avatar" style="background:${av.bg};">${getPersonAvatar(p, idx)}</span>
        <span class="chip-name">${name}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.participant-chip[data-id]').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = chip.dataset.id;
      if (splitData.selectedParticipantIds.includes(id)) {
        if (splitData.selectedParticipantIds.length > 1) {
          splitData.selectedParticipantIds = splitData.selectedParticipantIds.filter(x => x !== id);
        }
      } else {
        splitData.selectedParticipantIds.push(id);
      }
      renderParticipantChips();
      updatePerPersonPreview();
    });
  });
}

function renderItemsList(calc) {
  const listEl = document.getElementById('split-items-list');
  const countEl = document.getElementById('split-items-count');
  if (countEl) countEl.textContent = splitData.items.length;
  if (!listEl) return;

  if (splitData.items.length === 0) {
    const emptyText = getSplitTranslation('splitItemsEmpty') || 'No items added yet. Enter price above and tap add.';
    listEl.innerHTML = `<div class="split-empty-state">${emptyText}</div>`;
    return;
  }

  const curr = calc.curr;

  let html = '';
  splitData.items.forEach((item, idx) => {
    const pIds = (item.payers && item.payers.length > 0) ? item.payers : splitData.people.map(p => p.id);
    const itemName = getItemDisplayName(item, idx);
    const isEveryone = pIds.length === splitData.people.length;

    let bubblesHtml = '';
    if (isEveryone) {
      const rawEveryone = getSplitTranslation('splitEveryone') || 'Everyone';
      const everyoneLabel = rawEveryone.replace(/^[✨\s*]+/g, '').trim();
      bubblesHtml = `<span class="dish-participant-badge badge-everyone">&#10024; ${everyoneLabel}</span>`;
    } else {
      bubblesHtml = pIds.map(id => {
        const pIndex = splitData.people.findIndex(p => p.id === id);
        if (pIndex === -1) return '';
        const person = splitData.people[pIndex];
        const pName = getPersonDisplayName(person, pIndex);
        const pEmoji = getPersonAvatar(person, pIndex);
        return `<span class="dish-participant-badge">${pEmoji} ${pName}</span>`;
      }).filter(Boolean).join('');
    }

    const perPrice = (item.price / pIds.length).toFixed(2);
    const curLang = (typeof state !== 'undefined' && state.lang) || 'th';
    const perPersonWord = (curLang === 'th') ? '\u0e17\u0e48\u0e32\u0e19' : 'pers.';

    html += `
      <div class="split-item-row" data-item-id="${item.id}" role="button" tabindex="0" title="Tap to edit">
        <div class="item-left">
          <div class="item-name">${itemName}</div>
          <div class="dish-shared-row">
            <div class="dish-participants-bubbles">${bubblesHtml}</div>
            <span class="dish-per-person">(${curr} ${perPrice} / ${perPersonWord})</span>
          </div>
        </div>
        <div class="item-right">
          <div class="item-price">${curr} ${Number(item.price).toFixed(2)}</div>
          <button type="button" class="btn-item-delete" data-id="${item.id}" title="Delete" aria-label="Delete">&times;</button>
        </div>
      </div>
    `;
  });

  listEl.innerHTML = html;

  var deleteGestureStartX = 0;
  var deleteGestureStartY = 0;

  listEl.querySelectorAll('.btn-item-delete').forEach(function(btn) {
    btn.addEventListener('pointerdown', function(e) {
      deleteGestureStartX = e.clientX;
      deleteGestureStartY = e.clientY;
    }, { passive: true });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isModalClosing) {
        e.preventDefault();
        return;
      }
      var screenW = window.innerWidth;
      if (deleteGestureStartX >= screenW - 45 || deleteGestureStartX <= 45) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.clientX - deleteGestureStartX) > 8 || Math.abs(e.clientY - deleteGestureStartY) > 8) {
        e.preventDefault();
        return;
      }
      var id = btn.dataset.id;
      deleteSplitItem(id);
    });
  });

  listEl.querySelectorAll('.split-item-row').forEach(function(row) {
    var rowStartX = 0;
    var rowStartY = 0;
    row.addEventListener('pointerdown', function(e) {
      rowStartX = e.clientX;
      rowStartY = e.clientY;
    }, { passive: true });

    row.addEventListener('click', function(e) {
      if (isModalClosing) return;
      if (rowStartX >= window.innerWidth - 45 || rowStartX <= 45) return;
      if (Math.abs(e.clientX - rowStartX) > 10 || Math.abs(e.clientY - rowStartY) > 10) return;
      openEditItemModal(row.dataset.itemId);
    });
  });
}

function deleteSplitItem(id) {
  var item = splitData.items.find(function(it) { return it.id === id; });
  if (!item) return;
  var idx = splitData.items.indexOf(item);
  var itemName = getItemDisplayName(item, idx >= 0 ? idx : 0);
  splitData.items = splitData.items.filter(function(it) { return it.id !== id; });
  saveSplitData();
  renderSplitter();
  var curLang = (typeof state !== 'undefined' && state.lang) || 'th';
  var msg = (curLang === 'th') ? ('ลบรายการ ' + itemName + ' เรียบร้อย') : ('Deleted ' + itemName);
  showToast(msg);
}

function renderBreakdownList(calc) {
  const listEl = document.getElementById('split-breakdown-list');
  if (!listEl) return;

  if (splitData.items.length === 0) {
    const emptyText = getSplitTranslation('splitBreakdownEmpty') || 'Add food items above to see per-person breakdown.';
    listEl.innerHTML = '<div class="split-empty-state">' + emptyText + '</div>';
    return;
  }

  const curr = calc.curr;
  let html = '';

  Object.values(calc.personBreakdown).forEach(pb => {
    const color = AVATAR_COLORS[pb.person.colorIndex % AVATAR_COLORS.length] || AVATAR_COLORS[0];
    const name = getPersonDisplayName(pb.person, pb.index);
    const emoji = getPersonAvatar(pb.person, pb.index);
    const itemsCount = pb.items.length;
    const itemsWord = getSplitTranslation('splitItemsUnit') || 'รายการ';

    let detailsHtml = '';
    if (itemsCount > 0) {
      detailsHtml = pb.items.map(it => {
        return '<div class="breakdown-detail-line">' +
          '<span class="detail-label">' + it.name + ' <span class="detail-fraction">(1/' + it.splitCount + ')</span></span>' +
          '<span class="detail-price">' + curr + ' ' + it.share.toFixed(2) + '</span>' +
        '</div>';
      }).join('');
    }

    let extraHtml = '';
    if (pb.discountShare > 0) {
      const discLabel = getSplitTranslation('splitDiscountReceived') || 'ส่วนลด';
      extraHtml += '<div class="breakdown-detail-line discount"><span class="detail-label">' + discLabel + ':</span><span class="detail-price">-' + curr + ' ' + pb.discountShare.toFixed(2) + '</span></div>';
    }
    if (pb.scShare > 0) {
      extraHtml += '<div class="breakdown-detail-line"><span class="detail-label">ค่าบริการ (SC):</span><span class="detail-price">+' + curr + ' ' + pb.scShare.toFixed(2) + '</span></div>';
    }
    if (pb.vatShare > 0) {
      extraHtml += '<div class="breakdown-detail-line"><span class="detail-label">ภาษี (VAT):</span><span class="detail-price">+' + curr + ' ' + pb.vatShare.toFixed(2) + '</span></div>';
    }
    if (pb.deliveryShare > 0) {
      const delLabel = getSplitTranslation('splitDeliveryFee') || 'ค่าส่ง';
      extraHtml += '<div class="breakdown-detail-line"><span class="detail-label">' + delLabel + ':</span><span class="detail-price">+' + curr + ' ' + pb.deliveryShare.toFixed(2) + '</span></div>';
    }

    // Expand color card to cover each person's entire section
    const cardStyle = 'background: ' + color + '12; border-color: ' + color + '40; box-shadow: 0 4px 16px ' + color + '14;';
    const avatarStyle = 'background: ' + color + '26; border: 1.5px solid ' + color + '66;';

    html += '<div class="breakdown-person-card" style="' + cardStyle + '">' +
      '<div class="breakdown-header-row">' +
        '<div class="breakdown-person-info">' +
          '<span class="person-avatar" style="' + avatarStyle + '">' + emoji + '</span>' +
          '<div class="breakdown-name-box">' +
            '<span class="breakdown-person-title">' + name + '</span>' +
            '<span class="breakdown-items-badge">: ' + itemsCount + ' ' + itemsWord + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="breakdown-person-total" style="color: ' + color + ';">' + curr + ' ' + pb.finalShare.toFixed(2) + '</div>' +
      '</div>' +
      '<div class="breakdown-details-list">' +
        detailsHtml +
        extraHtml +
      '</div>' +
    '</div>';
  });

  listEl.innerHTML = html;
}

// ===== ADD DISH LOGIC =====
function addSplitItem() {
  const nameInput = document.getElementById('split-item-name');
  const priceInput = document.getElementById('split-item-price');

  const priceVal = parseMathPrice(priceInput ? priceInput.value : 0);
  if (priceVal <= 0) {
    showToast(getSplitTranslation('splitInvalidPrice') || 'Please enter a valid price.');
    if (priceInput) priceInput.focus();
    return;
  }

  const nameVal = nameInput ? nameInput.value.trim() : '';
  const isCustomName = Boolean(nameVal);
  const defaultDishName = (getSplitTranslation('splitItemDefault') || 'Item') + ' ' + (splitData.items.length + 1);
  const finalName = nameVal || defaultDishName;

  const payers = splitData.selectedParticipantIds.length > 0
    ? [...splitData.selectedParticipantIds]
    : splitData.people.map(p => p.id);

  const newItem = {
    id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    name: finalName,
    isCustomName: isCustomName,
    price: priceVal,
    payers: payers
  };

  splitData.items.push(newItem);
  saveSplitData();

  if (nameInput) nameInput.value = '';
  if (priceInput) priceInput.value = '';

  renderSplitter();
  showToast(`\u2728 ${finalName} (${getSplitCurrency()} ${priceVal.toFixed(2)})`);
}

// ===== APPLY SPLIT BILL TRANSLATIONS TO DOM =====
function applySplitLang() {
  const t = (k) => getSplitTranslation(k);

  const tabSplitLabel = document.querySelector('.tab-label[data-tab="split"]');
  if (tabSplitLabel) tabSplitLabel.textContent = t('tabSplit');

  const h2 = document.getElementById('split-h2');
  if (h2) h2.textContent = t('splitH2');
  const usecase = document.getElementById('split-usecase-desc');
  if (usecase) usecase.textContent = t('splitUseCase');
  const fast = document.getElementById('feat-split-fast');
  if (fast) fast.textContent = t('featSplitFast');
  const taxes = document.getElementById('feat-split-taxes');
  if (taxes) taxes.textContent = t('featSplitTaxes');
  const offline = document.getElementById('feat-split-offline');
  if (offline) offline.textContent = t('featSplitOffline');

  const grandLabel = document.getElementById('split-grand-label');
  if (grandLabel) grandLabel.textContent = t('splitGrandLabel');
  const pennyBadge = document.getElementById('split-penny-badge');
  if (pennyBadge) pennyBadge.textContent = t('splitPennyMatch');
  const subtotalLabel = document.getElementById('split-subtotal-label');
  if (subtotalLabel) subtotalLabel.textContent = t('splitSubtotalLabel');
  const discountLabel = document.getElementById('split-discount-label');
  if (discountLabel) discountLabel.textContent = t('splitDiscountLabel');
  const scLabel = document.getElementById('split-sc-label');
  if (scLabel) scLabel.textContent = t('splitScLabel');
  const vatLabel = document.getElementById('split-vat-label');
  if (vatLabel) vatLabel.textContent = t('splitVatLabel');
  const deliveryLabel = document.getElementById('split-delivery-label');
  if (deliveryLabel) deliveryLabel.textContent = t('splitDeliveryLabel');

  const settingsToggle = document.getElementById('split-settings-toggle-text');
  if (settingsToggle) settingsToggle.textContent = t('splitSettingsToggle');
  const settingDiscount = document.getElementById('split-setting-discount-label');
  if (settingDiscount) settingDiscount.textContent = t('splitSettingDiscount');
  const settingSc = document.getElementById('split-setting-sc-label');
  if (settingSc) settingSc.textContent = t('splitSettingSc');
  const settingVat = document.getElementById('split-setting-vat-label');
  if (settingVat) settingVat.textContent = t('splitSettingVat');
  const settingDelivery = document.getElementById('split-setting-delivery-label');
  if (settingDelivery) settingDelivery.textContent = t('splitSettingDelivery');

  const peopleTitle = document.getElementById('split-people-title');
  if (peopleTitle) peopleTitle.textContent = t('splitPeopleTitle');
  const peopleUnit = document.getElementById('split-people-unit');
  if (peopleUnit) peopleUnit.textContent = t('splitPeopleUnit');

  const entryTitle = document.getElementById('split-entry-title');
  if (entryTitle) entryTitle.textContent = t('splitEntryTitle');
  const labelItemName = document.getElementById('label-split-item-name');
  if (labelItemName) labelItemName.textContent = t('splitItemNameLabel');
  const inputItemName = document.getElementById('split-item-name');
  if (inputItemName) inputItemName.placeholder = t('splitItemNamePlaceholder');
  const labelItemPrice = document.getElementById('label-split-item-price');
  if (labelItemPrice) labelItemPrice.textContent = t('splitItemPriceLabel');
  const inputItemPrice = document.getElementById('split-item-price');
  if (inputItemPrice) inputItemPrice.placeholder = t('splitItemPricePlaceholder');
  const curr = getSplitCurrency();
  const labelWhoAte = document.getElementById('label-split-who-ate');
  if (labelWhoAte) labelWhoAte.textContent = t('splitWhoAte');

  const chipAllText = document.getElementById('chip-all-text');
  if (chipAllText) chipAllText.textContent = '\u2728 ' + (t('splitEveryone') || 'Everyone');

  const btnAddPersonText = document.getElementById('btn-add-person-text');
  if (btnAddPersonText) btnAddPersonText.textContent = '+ ' + (t('splitAddPersonBtn') || 'Add Friend').replace(/^\+\s*/, '');

  const btnConfirmAddText = document.getElementById('btn-confirm-add-text');
  if (btnConfirmAddText) btnConfirmAddText.textContent = '+ ' + (t('splitBtnConfirmAdd') || 'Add Dish').replace(/^\+\s*/, '');

  const btnAddSplitText = document.getElementById('btn-add-split-text');
  if (btnAddSplitText) {
    const raw = t('splitBtnConfirmAdd') || 'Add Dish';
    btnAddSplitText.textContent = raw.replace(/^\+\s*/, '');
  }

  const btnDeliveryEqualText = document.getElementById('btn-delivery-equal-text');
  if (btnDeliveryEqualText) btnDeliveryEqualText.textContent = t('splitDeliveryEqual');
  const btnDeliveryPropText = document.getElementById('btn-delivery-prop-text');
  if (btnDeliveryPropText) btnDeliveryPropText.textContent = t('splitDeliveryProp');

  const btnDiscountFlatText = document.getElementById('btn-discount-flat-text');
  if (btnDiscountFlatText) btnDiscountFlatText.textContent = (t('splitCurrencyFlat') || 'Flat') + ' (' + curr + ')';

  const deliveryInput = document.getElementById('split-delivery-input');
  if (deliveryInput) deliveryInput.placeholder = '0 ' + curr;

  const previewPerPerson = document.getElementById('split-preview-per-person');
  if (previewPerPerson && (!previewPerPerson.textContent || previewPerPerson.textContent.includes('\u0e40\u0e25\u0e37\u0e2d\u0e01') || previewPerPerson.textContent.includes('Select'))) {
    previewPerPerson.textContent = t('splitSelectPayer') || 'Select Who Ate';
  }

  const itemsTitle = document.getElementById('split-items-title');
  if (itemsTitle) itemsTitle.textContent = t('splitItemsTitle');
  const itemsUnit = document.getElementById('split-items-unit');
  if (itemsUnit) itemsUnit.textContent = t('splitItemsUnit');
  const breakdownTitle = document.getElementById('split-breakdown-title');
  if (breakdownTitle) breakdownTitle.textContent = t('splitBreakdownTitle');

  const labelBank = document.getElementById('label-split-bank');
  if (labelBank) labelBank.textContent = t('splitBankLabel');
  const customBankInput = document.getElementById('split-bank-custom-input');
  if (customBankInput) customBankInput.placeholder = t('splitBankPlaceholder');
  const labelAccount = document.getElementById('label-split-account');
  if (labelAccount) labelAccount.textContent = t('splitAccountLabel');
  const accountInput = document.getElementById('split-account-input');
  if (accountInput) accountInput.placeholder = t('splitAccountPlaceholder');
  const copyBtnText = document.getElementById('btn-copy-message-text');
  if (copyBtnText) copyBtnText.textContent = t('splitBtnCopyMessage');
  const offlineGuar = document.getElementById('split-offline-guarantee');
  if (offlineGuar) offlineGuar.textContent = t('splitOfflineGuarantee');

  const quickAddText = document.getElementById('btn-add-split-quick-text');
  if (quickAddText) quickAddText.textContent = t('splitBtnAddQuick');
  const clearText = document.getElementById('btn-clear-split-text');
  if (clearText) clearText.textContent = t('splitModalClearConfirmBtn');

  // Add Person Modal
  const mAddTitle = document.getElementById('modal-add-person-title');
  if (mAddTitle) mAddTitle.textContent = t('splitModalAddTitle');
  const mAddSub = document.getElementById('modal-add-person-sub');
  if (mAddSub) mAddSub.textContent = t('splitModalAddSub');
  const mLabelName = document.getElementById('label-modal-person-name');
  if (mLabelName) mLabelName.textContent = t('splitModalNameLabel');
  const mInputName = document.getElementById('add-person-name-input') || document.getElementById('modal-person-name-input');
  if (mInputName) mInputName.placeholder = t('splitModalNamePlaceholder');
  const mLabelColor = document.getElementById('label-modal-person-color');
  if (mLabelColor) mLabelColor.textContent = t('splitModalColorLabel');
  const mBtnAdd = document.getElementById('btn-modal-confirm-person-text');
  if (mBtnAdd) mBtnAdd.textContent = t('splitModalConfirmBtn');

  // Edit Item Modal
  const mEditTitle = document.getElementById('modal-edit-item-title');
  if (mEditTitle) mEditTitle.textContent = t('splitModalEditTitle');
  const mEditSub = document.getElementById('modal-edit-item-sub');
  if (mEditSub) mEditSub.textContent = t('splitModalEditSub');
  const mLabelEditName = document.getElementById('label-modal-edit-name');
  if (mLabelEditName) mLabelEditName.textContent = t('splitModalEditNameLabel');
  const mLabelEditPrice = document.getElementById('label-modal-edit-price');
  if (mLabelEditPrice) mLabelEditPrice.textContent = t('splitModalEditPriceLabel');
  const mLabelEditWho = document.getElementById('label-modal-edit-who');
  if (mLabelEditWho) mLabelEditWho.textContent = t('splitModalEditWhoLabel');
  const chipEditEveryoneText = document.getElementById('chip-edit-everyone-text');
  if (chipEditEveryoneText) chipEditEveryoneText.textContent = '\u2728 ' + (t('splitEveryone') || 'Everyone');
  const mBtnSave = document.getElementById('btn-modal-save-item-text');
  if (mBtnSave) mBtnSave.textContent = t('splitModalSaveBtn');

  // Clear Modal
  const mClearTitle = document.getElementById('modal-clear-title');
  if (mClearTitle) mClearTitle.textContent = t('splitModalClearTitle');
  const mClearDesc = document.getElementById('modal-clear-desc');
  if (mClearDesc) mClearDesc.textContent = t('splitModalClearDesc');
  const mBtnConfirmClear = document.getElementById('btn-clear-confirm-text') || document.getElementById('btn-modal-confirm-clear');
  if (mBtnConfirmClear) mBtnConfirmClear.textContent = t('splitModalClearConfirmBtn');
  const mBtnCancelClear = document.getElementById('btn-clear-cancel-text') || document.getElementById('btn-modal-cancel-clear');
  if (mBtnCancelClear) mBtnCancelClear.textContent = t('splitModalClearCancelBtn');

  populateBankOptions();
  renderSplitter();
}

// ===== INITIALIZATION =====
function initSplitter() {
  loadSplitData();

  const toggleBtn = document.getElementById('toggle-split-settings-btn');
  const settingsBody = document.getElementById('split-settings-body');
  const settingsArrow = document.getElementById('split-settings-arrow');
  if (toggleBtn && settingsBody) {
    toggleBtn.addEventListener('click', () => {
      const isClosed = settingsBody.classList.contains('hidden');
      if (isClosed) {
        settingsBody.classList.remove('hidden');
        if (settingsArrow) settingsArrow.textContent = '\u25b2';
      } else {
        settingsBody.classList.add('hidden');
        if (settingsArrow) settingsArrow.textContent = '\u25bc';
      }
    });
  }

  const discPercentBtn = document.getElementById('btn-discount-pct');
  const discFlatBtn = document.getElementById('btn-discount-flat');
  const discInput = document.getElementById('split-discount-input');

  if (discPercentBtn && discFlatBtn) {
    if (splitData.settings.discountType === 'flat') {
      discFlatBtn.classList.add('active');
      discPercentBtn.classList.remove('active');
    } else {
      discPercentBtn.classList.add('active');
      discFlatBtn.classList.remove('active');
    }
    discPercentBtn.addEventListener('click', () => {
      splitData.settings.discountType = 'percent';
      discPercentBtn.classList.add('active');
      discFlatBtn.classList.remove('active');
      saveSplitData();
      renderSplitter();
    });
    discFlatBtn.addEventListener('click', () => {
      splitData.settings.discountType = 'flat';
      discFlatBtn.classList.add('active');
      discPercentBtn.classList.remove('active');
      saveSplitData();
      renderSplitter();
    });
  }

  if (discInput) {
    discInput.value = splitData.settings.discountVal || '';
    discInput.addEventListener('input', () => {
      splitData.settings.discountVal = parseMathPrice(discInput.value);
      saveSplitData();
      renderSplitter();
    });
  }

  const scBtn10 = document.getElementById('btn-toggle-sc10');
  const scCustom = document.getElementById('split-sc-custom');
  if (scCustom) {
    scCustom.value = splitData.settings.scPercent ? splitData.settings.scPercent : '';
    scCustom.addEventListener('input', () => {
      const val = parseMathPrice(scCustom.value);
      splitData.settings.scPercent = val;
      if (scBtn10) {
        if (Math.abs(val - 10) < 0.001) scBtn10.classList.add('active');
        else scBtn10.classList.remove('active');
      }
      saveSplitData();
      renderSplitter();
    });
  }
  if (scBtn10) {
    if (Math.abs((splitData.settings.scPercent || 0) - 10) < 0.001) {
      scBtn10.classList.add('active');
    }
    let lastScTap = 0;
    const toggleSc10 = (e) => {
      const now = Date.now();
      if (now - lastScTap < 180) return;
      lastScTap = now;
      const isCurrently10 = Math.abs((splitData.settings.scPercent || 0) - 10) < 0.001;
      if (isCurrently10) {
        splitData.settings.scPercent = 0;
        scBtn10.classList.remove('active');
        if (scCustom) scCustom.value = '';
      } else {
        splitData.settings.scPercent = 10;
        scBtn10.classList.add('active');
        if (scCustom) scCustom.value = '10';
      }
      saveSplitData();
      renderSplitter();
    };
    scBtn10.addEventListener('click', toggleSc10);
    scBtn10.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        e.preventDefault();
        toggleSc10(e);
      }
    });
  }

  const vatBtn7 = document.getElementById('btn-toggle-vat7');
  const vatCustom = document.getElementById('split-vat-custom');
  if (vatCustom) {
    vatCustom.value = splitData.settings.vatPercent ? splitData.settings.vatPercent : '';
    vatCustom.addEventListener('input', () => {
      const val = parseMathPrice(vatCustom.value);
      splitData.settings.vatPercent = val;
      if (vatBtn7) {
        if (Math.abs(val - 7) < 0.001) vatBtn7.classList.add('active');
        else vatBtn7.classList.remove('active');
      }
      saveSplitData();
      renderSplitter();
    });
  }
  if (vatBtn7) {
    if (Math.abs((splitData.settings.vatPercent || 0) - 7) < 0.001) {
      vatBtn7.classList.add('active');
    }
    let lastVatTap = 0;
    const toggleVat7 = (e) => {
      const now = Date.now();
      if (now - lastVatTap < 180) return;
      lastVatTap = now;
      const isCurrently7 = Math.abs((splitData.settings.vatPercent || 0) - 7) < 0.001;
      if (isCurrently7) {
        splitData.settings.vatPercent = 0;
        vatBtn7.classList.remove('active');
        if (vatCustom) vatCustom.value = '';
      } else {
        splitData.settings.vatPercent = 7;
        vatBtn7.classList.add('active');
        if (vatCustom) vatCustom.value = '7';
      }
      saveSplitData();
      renderSplitter();
    };
    vatBtn7.addEventListener('click', toggleVat7);
    vatBtn7.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        e.preventDefault();
        toggleVat7(e);
      }
    });
  }

  const delInput = document.getElementById('split-delivery-input');
  if (delInput) {
    delInput.value = splitData.settings.deliveryFee || '';
    delInput.addEventListener('input', () => {
      splitData.settings.deliveryFee = parseMathPrice(delInput.value);
      saveSplitData();
      renderSplitter();
    });
  }
  const delEqualBtn = document.getElementById('btn-delivery-equal');
  const delPropBtn = document.getElementById('btn-delivery-prop');
  if (delEqualBtn && delPropBtn) {
    if (splitData.settings.deliveryMethod === 'proportional') {
      delPropBtn.classList.add('active');
      delEqualBtn.classList.remove('active');
    } else {
      delEqualBtn.classList.add('active');
      delPropBtn.classList.remove('active');
    }
    delEqualBtn.addEventListener('click', () => {
      splitData.settings.deliveryMethod = 'equal';
      delEqualBtn.classList.add('active');
      delPropBtn.classList.remove('active');
      saveSplitData();
      renderSplitter();
    });
    delPropBtn.addEventListener('click', () => {
      splitData.settings.deliveryMethod = 'proportional';
      delPropBtn.classList.add('active');
      delEqualBtn.classList.remove('active');
      saveSplitData();
      renderSplitter();
    });
  }

  const priceInput = document.getElementById('split-item-price');
  if (priceInput) {
    priceInput.addEventListener('input', updatePerPersonPreview);
    priceInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addSplitItem();
    });
  }

  const nameInput = document.getElementById('split-item-name');
  if (nameInput) {
    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (priceInput) priceInput.focus();
      }
    });
  }

  const allParticipantBtn = document.getElementById('chip-participant-all');
  if (allParticipantBtn) {
    allParticipantBtn.addEventListener('click', () => {
      if (splitData.selectedParticipantIds.length === splitData.people.length) {
        splitData.selectedParticipantIds = [splitData.people[0].id];
      } else {
        splitData.selectedParticipantIds = splitData.people.map(p => p.id);
      }
      renderParticipantChips();
      updatePerPersonPreview();
    });
  }

  const addPersonHeaderBtn = document.getElementById('btn-add-person');
  if (addPersonHeaderBtn) addPersonHeaderBtn.addEventListener('click', openAddPersonModal);

  const confirmAddDishBtn = document.getElementById('btn-confirm-add-item');
  if (confirmAddDishBtn) confirmAddDishBtn.addEventListener('click', addSplitItem);

  const btnAddItem = document.getElementById('btn-add-split-item');
  if (btnAddItem) btnAddItem.addEventListener('click', addSplitItem);
  const btnQuickAdd = document.getElementById('add-split-item-quick-btn');
  if (btnQuickAdd) {
    btnQuickAdd.addEventListener('click', () => {
      const pInput = document.getElementById('split-item-price');
      const val = parseMathPrice(pInput ? pInput.value : 0);
      if (val > 0) {
        addSplitItem();
      } else {
        const entryCard = document.getElementById('split-entry-card');
        if (entryCard) entryCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (pInput) setTimeout(() => pInput.focus(), 250);
      }
    });
  }

  const btnClear = document.getElementById('clear-split-btn');
  if (btnClear) btnClear.addEventListener('click', openClearConfirmModal);

  const bankSelect = document.getElementById('split-bank-select');
  const customBankInput = document.getElementById('split-bank-custom-input');
  const accountInput = document.getElementById('split-account-input');

  if (bankSelect) {
    bankSelect.addEventListener('change', () => {
      const info = getSavedPaymentInfo();
      info.bank = bankSelect.value;
      if (bankSelect.value === '__other__') {
        if (customBankInput) {
          customBankInput.classList.remove('hidden');
          customBankInput.style.display = 'block';
          customBankInput.focus();
        }
      } else {
        if (customBankInput) {
          customBankInput.classList.add('hidden');
          customBankInput.style.display = 'none';
          customBankInput.value = '';
        }
        info.customBank = '';
      }
      savePaymentInfo(info);
    });
  }

  if (customBankInput) {
    customBankInput.addEventListener('input', () => {
      const info = getSavedPaymentInfo();
      info.customBank = customBankInput.value.trim();
      savePaymentInfo(info);
    });
  }

  if (accountInput) {
    accountInput.addEventListener('input', () => {
      const info = getSavedPaymentInfo();
      info.account = accountInput.value.trim();
      savePaymentInfo(info);
    });
  }

  const copyBtn = document.getElementById('btn-copy-message');
  if (copyBtn) copyBtn.addEventListener('click', copyMessageSummary);

  const closeAddPersonBtn = document.getElementById('add-person-modal-close-btn');
  if (closeAddPersonBtn) closeAddPersonBtn.addEventListener('click', closeAddPersonModal);
  const confirmAddPersonBtn = document.getElementById('btn-modal-confirm-add-person');
  if (confirmAddPersonBtn) confirmAddPersonBtn.addEventListener('click', confirmAddPerson);
  const addPersonModalBackdrop = document.getElementById('add-person-modal-backdrop');
  if (addPersonModalBackdrop) {
    addPersonModalBackdrop.addEventListener('click', (e) => {
      if (e.target === addPersonModalBackdrop) closeAddPersonModal();
    });
  }

  const chipEditEveryone = document.getElementById('chip-edit-everyone');
  if (chipEditEveryone) {
    chipEditEveryone.addEventListener('click', () => {
      if (editItemPayerIds.length === splitData.people.length) {
        editItemPayerIds = [splitData.people[0].id];
      } else {
        editItemPayerIds = splitData.people.map(p => p.id);
      }
      renderEditItemPayers();
    });
  }

  const closeEditItemBtn = document.getElementById('edit-item-modal-close-btn');
  if (closeEditItemBtn) closeEditItemBtn.addEventListener('click', closeEditItemModal);
  const saveEditItemBtn = document.getElementById('btn-modal-save-item');
  if (saveEditItemBtn) saveEditItemBtn.addEventListener('click', saveEditItem);
  const editItemModalBackdrop = document.getElementById('edit-item-modal-backdrop');
  if (editItemModalBackdrop) {
    editItemModalBackdrop.addEventListener('click', (e) => {
      if (e.target === editItemModalBackdrop) closeEditItemModal();
    });
  }

  const cancelClearBtn = document.getElementById('btn-clear-cancel') || document.getElementById('btn-modal-cancel-clear');
  if (cancelClearBtn) cancelClearBtn.addEventListener('click', closeClearConfirmModal);
  const confirmClearBtn = document.getElementById('btn-clear-confirm') || document.getElementById('btn-modal-confirm-clear');
  if (confirmClearBtn) confirmClearBtn.addEventListener('click', confirmClearSplit);
  const clearModalBackdrop = document.getElementById('clear-confirm-modal-backdrop');
  if (clearModalBackdrop) {
    clearModalBackdrop.addEventListener('click', (e) => {
      if (e.target === clearModalBackdrop) closeClearConfirmModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAddPersonModal();
      closeEditItemModal();
      closeClearConfirmModal();
    }
  });

  applySplitLang();
  renderSplitter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSplitter);
} else {
  initSplitter();
}


// ===== QUICK MATH OPERATORS HANDLER (+, -, *, /) & FLOATING KEYBOARD ACCESSORY =====
let activeMathInput = null;

function isPriceOrMathInput(el) {
  if (!el || el.tagName !== 'INPUT') return false;
  return el.matches('.price-input, #split-item-price, #edit-item-price-input, [data-field="price"]');
}

function updateMathAccessoryPosition() {
  const bar = document.getElementById('floating-math-accessory');
  if (!bar || bar.classList.contains('hidden')) return;

  if (window.visualViewport) {
    const vv = window.visualViewport;
    const bottomInset = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
    bar.style.bottom = `${bottomInset + 10}px`;
  } else {
    bar.style.bottom = '10px';
  }
}

function showMathAccessory(inputEl) {
  activeMathInput = inputEl;
  const bar = document.getElementById('floating-math-accessory');
  if (!bar) return;
  bar.style.display = 'flex';
  bar.classList.remove('hidden');
  updateMathAccessoryPosition();
  setTimeout(updateMathAccessoryPosition, 100);
  setTimeout(updateMathAccessoryPosition, 300);
  setTimeout(updateMathAccessoryPosition, 500);
}

function hideMathAccessory() {
  const bar = document.getElementById('floating-math-accessory');
  if (bar) {
    bar.classList.add('hidden');
    bar.style.display = 'none';
  }
  activeMathInput = null;
}

document.addEventListener('focus', (e) => {
  if (isPriceOrMathInput(e.target)) {
    showMathAccessory(e.target);
  }
}, true);

document.addEventListener('blur', (e) => {
  if (isPriceOrMathInput(e.target)) {
    setTimeout(() => {
      if (!isPriceOrMathInput(document.activeElement)) {
        hideMathAccessory();
      }
    }, 120);
  }
}, true);

document.addEventListener('focusin', (e) => {
  if (isPriceOrMathInput(e.target)) {
    showMathAccessory(e.target);
  }
});

document.addEventListener('focusout', (e) => {
  if (isPriceOrMathInput(e.target)) {
    setTimeout(() => {
      if (!isPriceOrMathInput(document.activeElement)) {
        hideMathAccessory();
      }
    }, 120);
  }
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', updateMathAccessoryPosition);
  window.visualViewport.addEventListener('scroll', updateMathAccessoryPosition);
}
window.addEventListener('resize', updateMathAccessoryPosition);

function insertMathOpToInput(targetInput, op) {
  if (!targetInput) return;
  const start = (targetInput.selectionStart !== null && targetInput.selectionStart !== undefined) ? targetInput.selectionStart : targetInput.value.length;
  const end = (targetInput.selectionEnd !== null && targetInput.selectionEnd !== undefined) ? targetInput.selectionEnd : targetInput.value.length;
  const currentVal = targetInput.value || '';

  if (!currentVal && (op === '*' || op === '/' || op === '+')) {
    return;
  }

  const newVal = currentVal.substring(0, start) + op + currentVal.substring(end);
  targetInput.value = newVal;
  const newPos = start + op.length;
  try {
    targetInput.setSelectionRange(newPos, newPos);
  } catch (e) {}

  targetInput.dispatchEvent(new Event('input', { bubbles: true }));
  targetInput.focus();
}

document.addEventListener('pointerdown', (e) => {
  const btn = e.target.closest('.btn-math-acc, .btn-math-op');
  if (!btn) return;
  e.preventDefault(); // Prevents input blur and keyboard dismissal!
  const op = btn.getAttribute('data-op');
  let targetInput = activeMathInput;
  if (!targetInput || !document.body.contains(targetInput)) {
    if (isPriceOrMathInput(document.activeElement)) {
      targetInput = document.activeElement;
    }
  }
  if (!targetInput) {
    const container = btn.closest('.input-group') || btn.closest('.entry-field-item') || btn.closest('.modal-field-group');
    targetInput = container ? container.querySelector('input') : null;
  }
  if (targetInput) {
    insertMathOpToInput(targetInput, op);
  }
}, { passive: false });
