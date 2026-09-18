# 💎 SmartSaver (by Tian)

> **iOS Liquid Glass Price Compare & Pro-Rata Discount Calculator**  
> เว็บแอปพลิเคชันและแอปพลิเคชันมือถือดีไซน์กระจกเหลว (Liquid Glass) สไตล์ iOS สวยงาม ทันสมัย คำนวณแบบเรียลไทม์ รองรับ 2 ภาษา (ไทย/อังกฤษ) และใช้งานออฟไลน์ได้ 100%

---

## ✨ Features (ฟังก์ชันเด่น)

1. **🏆 เปรียบเทียบราคาสินค้า (Price Comparison):**
   - กรอกราคาและปริมาณของสินค้าแต่ละตัว ระบบจะคำนวณราคาต่อ 1 หน่วยโดยอัตโนมัติ
   - ไฮไลต์สินค้าที่คุ้มค่าที่สุด (Best Value) ด้วยแสงเรืองกระจกสีเขียวมรกต (Liquid Emerald Glow)
   - แสดงเปอร์เซ็นต์ส่วนต่างความประหยัดแบบชัดเจน เข้าใจง่าย
   - จัดเรียงแบบ 2 คอลัมน์ กระชับ สบายตา ใช้งานง่ายสำหรับทุกวัย

2. **🏷️ คำนวณแบ่งสัดส่วนส่วนลด (Pro-Rata Discount Allocation):**
   - กรอกราคาเต็มของสินค้าแต่ละชิ้น และกรอกยอดที่จ่ายจริงหลังหักส่วนลด
   - คำนวณราคาจ่ายจริงของสินค้าแต่ละชิ้นตามสัดส่วนของส่วนลดอย่างแม่นยำ

3. **🎨 การออกแบบธีม iOS Liquid Glass:**
   - ดีไซน์กระจกฝ้าซ้อนมิติ (Multi-layered Frosted Glass) ด้วย `backdrop-filter: blur(28px)`
   - ขอบสะท้อนแสงกระจกเงา (Specular Highlight Borders) และมุมโค้งนูนแบบ Squircle
   - แสงนีออนออโรร่า (Ambient Liquid Mesh) เคลื่อนไหวลอยเบาๆ ลื่นไหลระดับ 60fps ด้วย GPU Acceleration
   - เมนูนำทางด้านล่างแบบเกาะลอยทรงเม็ดยา (Floating Glass Island)

4. **🇹🇭 รองรับ 2 ภาษา (Dual-Language):**
   - สลับภาษา **ไทย ↔ English** ได้ทันทีด้วยปุ่มแก้ว Pill ที่มุมขวาบน

5. **☀️/🌙 รองรับ Dark & Light Mode:**
   - ปรับโทนสีได้ทันใจ พร้อมระบบปรับแถบสถานะ (Status Bar) แบบ Native บน Android (รองรับ Samsung Galaxy S25 และรุ่นอื่นๆ)

6. **⚡ ติดตั้งเป็นแอปบนมือถือได้ (PWA & Android):**
   - ติดตั้งบน iPhone / iPad ผ่านเมนู **"Add to Home Screen"** บน Safari ใช้งานได้เต็มหน้าจอเหมือนแอปจริง
   - ใช้งานได้แม้ไม่มีสัญญาณอินเทอร์เน็ต (Offline 100%)

---

## 🚀 วิธีเปิดใช้งานออนไลน์ฟรีผ่าน GitHub Pages (ใน 1 นาที)

หลังจากที่คุณอัปโหลดโฟลเดอร์นี้ขึ้น GitHub Repository ของคุณแล้ว:

1. ไปที่แท็บ **Settings** ของ Repository บน GitHub
2. ที่เมนูด้านซ้าย เลือก **Pages**
3. ในหัวข้อ **Build and deployment > Branch**:
   - เลือก Branch เป็น `main` (หรือ `master`)
   - เลือกโฟลเดอร์เป็น `/ (root)`
   - กด **Save**
4. รอประมาณ 1 นาที GitHub จะสร้างลิงก์เว็บไซต์ให้คุณ เช่น:  
   `https://<your-username>.github.io/<repo-name>/`
5. สามารถเปิดลิงก์นี้จากทั้งคอมพิวเตอร์, iPhone หรือมือถือ Android ได้ทันที!

---

## 📲 วิธีติดตั้งลงบนหน้าจอโฮม (iPhone / iPad)

1. เปิดลิงก์เว็บไซต์บน **Safari**
2. กดปุ่ม **Share (แชร์)** (ไอคอนสี่เหลี่ยมมีลูกศรชี้ขึ้น)
3. เลือก **"Add to Home Screen" (เพิ่มไปยังหน้าจอโฮม)**
4. กด **Add (เพิ่ม)** ไอคอน SmartSaver สวยหรูจะปรากฏบนหน้าจอโฮมและเปิดใช้งานแบบแอปเต็มหน้าจอได้ทันที

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
github-upload/
├── index.html           # โครงสร้างหน้าเว็บหลัก (HTML5 + Liquid Glass)
├── style.css            # ดีไซน์ระบบกระจกเหลว แอนิเมชัน และ CSS Tokens
├── app.js               # ตรรกะการคำนวณเรียลไทม์ และระบบแปลภาษา 2 ภาษา
├── manifest.json        # การตั้งค่า Progressive Web App (PWA)
├── sw.js                # Service Worker สำหรับการใช้งานออฟไลน์
├── favicon.png          # ไอคอน Favicon
├── icon-192.png         # ไอคอนแอปขนาด 192x192
├── icon-512.png         # ไอคอนแอปขนาด 512x512
├── apple-touch-icon.png # ไอคอนแอปสำหรับหน้าจอโฮมของ iOS
├── .gitignore           # กรองไฟล์ที่ไม่จำเป็นออกก่อนขึ้น GitHub
├── README.md            # คู่มือการใช้งานและเอกสารแนะนำโปรเจกต์
└── SmartSaver.apk       # ไฟล์แอป Android APK พร้อมติดตั้ง
```

---

## 👨‍💻 Created by
Developed with ❤️ by **Tian**

