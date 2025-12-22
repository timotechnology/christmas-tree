# 🎄 Christmas Tree

> A magical 3D interactive Christmas tree with AI-powered hand gesture recognition, stunning visual effects, and photo ornaments.

[English](#-features) | [简体中文](#-简体中文) | [繁體中文](#-繁體中文) | [日本語](#-日本語) | [한국어](#-한국어)

![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![Mobile](https://img.shields.io/badge/Mobile-iOS%20%7C%20Android-blue)
![China](https://img.shields.io/badge/China-Optimized-red)

<p align="center">
  <img src="https://img.shields.io/badge/Hand%20Gestures-AI%20Powered-orange" alt="AI Powered">
  <img src="https://img.shields.io/badge/3D-Three.js-black" alt="Three.js">
  <img src="https://img.shields.io/badge/MediaPipe-Gesture%20Recognition-red" alt="MediaPipe">
</p>

---

## 🌟 Highlights

| Feature | Description |
|---------|-------------|
| 📱 **Mobile Friendly** | Full support for iOS Safari & Android Chrome |
| 🇨🇳 **China Optimized** | All resources localized, no CDN dependency |
| 🖥️ **Responsive UI** | Adaptive layout for phones, tablets, and desktops |
| ✋ **AI Gestures** | Real-time hand gesture recognition via webcam |
| ⚡ **High Performance** | Optimized particle effects for smooth 60fps |
| 🎆 **Cool Effects** | Stunning visual effects with aurora, shockwaves & particles |

---

## ✨ Features

- 🌟 **3D Particle Christmas Tree** - Beautiful particle-based tree with glowing star on top
- 📷 **Photo Ornaments** - Display your photos as rotating ornaments on the tree
- ✋ **AI Hand Gesture Control** - Control the experience with natural hand gestures via webcam
- 🎮 **Multiple Control Modes** - Mouse, keyboard, and gesture controls
- 🔄 **Three View Modes** - Tree, Scatter, and Focus modes
- 🎆 **Gesture Effects** - Four unique color-coded effects:
  - 🤟 **ILoveYou** → ❤️ Pink heart explosion + Aurora
  - 👍 **Thumb Up** → 🌟 Golden rainbow shockwave + Particles
  - ✌️ **Victory** → 💎 Cyan energy beams + Stars
  - 👎 **Thumb Down** → ❄️ Ice snow storm + Aurora
- 🛡️ **Smart Fallback** - Automatically switches to mouse mode if camera access is denied or unavailable

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- Modern browser with WebGL support (Chrome, Firefox, Edge, Safari)
- Webcam (optional, for gesture control)

### Installation

```bash
# Clone the repository
git clone https://github.com/timotechnology/christmas-tree.git
cd christmas-tree

# Install dependencies
npm install
```

### Running

**Windows:**
```bash
start.bat
```

**Linux / macOS:**
```bash
chmod +x start.sh
./start.sh
```

**Or with npm:**
```bash
npm run dev
```

Then open **http://localhost:8080** in your browser.

---

## ☁️ Deploy to Cloudflare Pages (Recommended)

This repo is Cloudflare Pages friendly: **static site** deployment.

### 🚀 Quick Deploy

**Option 1: Deploy via Cloudflare Dashboard**
1. Fork this repository to your GitHub account
2. Go to [Cloudflare Dashboard → Pages → Create a project](https://dash.cloudflare.com/?to=/:account/pages/new/create)
3. Click **Connect to Git** and select your GitHub account
4. Choose the `christmas-tree` repository
5. Configure build settings (see Step 3 below)
6. Click **Save and Deploy**

**Option 2: Deploy via Wrangler CLI**
```bash
npm install -g wrangler
wrangler pages project create christmas-tree
wrangler pages deploy . --project-name=christmas-tree
```

### 📋 Manual Setup Guide

#### Step 1: Prepare Your Repository

1. **Fork or push this repository to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/christmas-tree.git
   git push -u origin main
   ```

2. **Ensure `photos.json` is in `.gitignore`** (it will be generated during build)

#### Step 2: Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Pages** → **Create a project**
2. Click **Connect to Git**
3. Select your GitHub account and choose the `christmas-tree` repository
4. Click **Begin setup**

#### Step 3: Configure Build Settings

Configure the following settings:

| Setting | Value |
|---------|-------|
| **Project name** | `christmas-tree` (or your preferred name) |
| **Production branch** | `main` (or `master`) |
| **Framework preset** | `None` |
| **Build command** | `npm run build:photos` |
| **Build output directory** | `.` |
| **Root directory** | `/` (leave empty) |

#### Step 4: Environment Variables (Optional)

No environment variables are required for basic deployment.

#### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project-name.pages.dev`

### 📝 Build Process

The build command `npm run build:photos` will:
- Generate `photos.json` from images in the `photos/` folder
- This file is automatically created during deployment (no need to commit it)

### 🔧 Configuration Files

- **`_headers`**: Custom caching headers for optimal performance
- **`wrangler.toml`**: Cloudflare Pages configuration (optional, for advanced features)
- **`sw.js`**: Service Worker for offline support and faster repeat loads

### 📸 Photo Loading

Photo list loading order:
1. Tries `GET /api/photos` (local dev server only)
2. Falls back to `GET /photos.json` (Cloudflare Pages / static hosting)

### 🌐 Custom Domain (Optional)

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the DNS configuration instructions

### 💡 Tips

- **Automatic deployments**: Every push to your main branch will trigger a new deployment
- **Preview deployments**: Pull requests get their own preview URLs
- **Build logs**: Check the **Deployments** tab for build logs if something goes wrong
- **Performance**: Cloudflare Pages automatically provides CDN, HTTPS, and global distribution

---

## 🎮 Controls

### ✋ Hand Gestures (via Webcam)

| Gesture | Mode | Description |
|---------|------|-------------|
| ✊ Closed Fist | **TREE** | Particles form a Christmas tree shape |
| 🖐️ Open Palm | **SCATTER** | Particles scatter into space |
| ☝️ Pointing Up | **FOCUS** | Zoom into the nearest photo |

### 🎆 Special Effects (with Color Theme)

| Gesture | Effect | Color |
|---------|--------|-------|
| 🤟 ILoveYou | Heart explosion + Aurora | 💗 Pink |
| 👍 Thumb Up | Rainbow shockwave + Particles | 🌟 Gold |
| ✌️ Victory | Energy beams + Stars | 💎 Cyan |
| 👎 Thumb Down | Snow storm + Aurora | ❄️ Ice |

### 🎁 Easter Eggs (Hidden Combos)

- **🤟 → ✌️ → 👍**: Santa flyby
- **👍👍👍**: Gift rain shower
- **✌️✌️🤟**: Cycle themes (Classic / Icy / Candy)

### 📱 Touch (Mobile / iPad)

| Action | Effect |
|--------|--------|
| **1 finger drag** | Rotate the tree/scene |
| **2 finger pinch** | Zoom in/out |
| **2 finger twist** | Gentle rotate |

### 🖱️ Mouse

| Action | Effect |
|--------|--------|
| **Drag** | Rotate the tree/scene |
| **Scroll wheel** | Cycle through modes (up/down) |
| **Double-click** | Switch to next mode |

### ⌨️ Keyboard

| Key | Action |
|-----|--------|
| `1` | Switch to TREE mode |
| `2` | Switch to SCATTER mode |
| `3` | Switch to FOCUS mode |
| `H` | Hide/show UI |
| `M` | Mute/unmute music |

---

## 📷 Adding Your Photos

Simply drop image files into the `photos/` folder:

```
christmas-tree/
└── photos/
    ├── family.jpg
    ├── vacation.png
    └── memories.webp
```

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

Refresh the page and your photos will appear as ornaments on the tree!

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Three.js](https://threejs.org/) | 3D rendering and WebGL |
| [MediaPipe](https://mediapipe.dev/) | Hand gesture recognition |
| [TypeScript](https://www.typescriptlang.org/) | Server-side code |
| [Node.js](https://nodejs.org/) | Local development server |

---

## 📱 Mobile Optimization

The application is fully optimized for mobile devices:

- **Responsive Camera**: Automatically adjusts FOV and distance based on screen aspect ratio
- **Reduced Particle Count**: Lower particle effects on mobile for smooth performance
- **Touch Controls**: Full touch support for rotation and mode switching
- **iOS Safari Compatible**: Tested on iOS 14+ with polyfills for older versions

---

## 🇨🇳 China Optimization

**All resources are localized** - no CDN dependencies that might be blocked:

- ✅ Three.js library (local)
- ✅ MediaPipe WASM & models (local)
- ✅ ES Module Shims polyfill (local)
- ✅ All assets and fonts (local)

Works perfectly for users in mainland China without VPN!

---

## 📁 Project Structure

```
christmas-tree/
├── index.html          # Main application (Three.js + MediaPipe)
├── server.ts           # TypeScript dev server with photo API
├── package.json        # npm configuration
├── libs/               # Local libraries (Three.js, MediaPipe)
├── photos/             # Your photos go here
└── hand_models/        # MediaPipe model files
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for the amazing 3D library
- [Google MediaPipe](https://mediapipe.dev/) for hand gesture recognition
- The open source community for inspiration

---

# 🇨🇳 简体中文

## 🌟 亮点

| 特性 | 描述 |
|------|------|
| 📱 **手机友好** | 完美支持 iOS Safari 和 Android Chrome |
| 🇨🇳 **国内可用** | 所有资源本地化，无需翻墙 |
| 🖥️ **自适应UI** | 适配手机、平板、电脑各种屏幕 |
| ✋ **AI手势** | 摄像头实时识别手势控制 |
| ⚡ **高性能** | 优化粒子效果，流畅60帧 |
| 🎆 **炫酷特效** | 极光、冲击波、粒子爆炸 |
| 🛡️ **智能降级** | 无摄像头或权限被拒自动切换鼠标模式 |

## 🎮 手势控制

| 手势 | 模式 | 效果 |
|------|------|------|
| ✊ 握拳 | 圣诞树 | 粒子聚合成树形 |
| 🖐️ 张开手 | 散开 | 粒子散开到空间 |
| ☝️ 向上指 | 聚焦 | 放大显示照片 |

## 🎆 特效

| 手势 | 特效 | 颜色 |
|------|------|------|
| 🤟 ILoveYou | 爱心爆炸 + 极光 | 💗 粉红 |
| 👍 点赞 | 彩虹冲击波 | 🌟 金橙 |
| ✌️ 比耶 | 能量光束 | 💎 青蓝 |
| 👎 倒赞 | 冰雪风暴 + 极光 | ❄️ 冰蓝 |

## 🎁 彩蛋连招（隐藏）

- **🤟 → ✌️ → 👍**：🎅 飞过
- **👍👍👍**：🎁 礼物雨
- **✌️✌️🤟**：🎨 主题切换（经典 / 冰雪 / 糖果）

## 📱 触控（手机 / iPad）

| 操作 | 效果 |
|------|------|
| **单指拖拽** | 旋转视角 |
| **双指捏合** | 缩放 |
| **双指扭转** | 轻微旋转 |

## 🖱️ 鼠标

| 操作 | 效果 |
|------|------|
| **拖拽** | 旋转视角 |
| **滚轮** | 切换模式（向上/向下滚动） |
| **双击** | 切换到下一个模式 |

## ⌨️ 键盘

| 按键 | 功能 |
|------|------|
| `1` | 切换到圣诞树模式 |
| `2` | 切换到散开模式 |
| `3` | 切换到聚焦模式 |
| `H` | 隐藏/显示界面 |
| `M` | 音乐开关 |

## 🚀 快速开始

```bash
git clone https://github.com/timotechnology/christmas-tree.git
cd christmas-tree
npm install
npm run dev
```

访问 http://localhost:8080

---

# 🇹🇼 繁體中文

## 🌟 亮點

| 特性 | 描述 |
|------|------|
| 📱 **手機友好** | 完美支援 iOS Safari 和 Android Chrome |
| 🇨🇳 **國內可用** | 所有資源本地化，無需翻牆 |
| 🖥️ **自適應UI** | 適配手機、平板、電腦各種螢幕 |
| ✋ **AI手勢** | 攝影機即時識別手勢控制 |
| ⚡ **高效能** | 優化粒子效果，流暢60幀 |
| 🎆 **炫酷特效** | 極光、衝擊波、粒子爆炸 |
| 🛡️ **智慧降級** | 無攝影機或權限被拒自動切換滑鼠模式 |

## 🎮 手勢控制

| 手勢 | 模式 | 效果 |
|------|------|------|
| ✊ 握拳 | 聖誕樹 | 粒子聚合成樹形 |
| 🖐️ 張開手 | 散開 | 粒子散開到空間 |
| ☝️ 向上指 | 聚焦 | 放大顯示照片 |

## 🎆 特效

| 手勢 | 特效 | 顏色 |
|------|------|------|
| 🤟 ILoveYou | 愛心爆炸 + 極光 | 💗 粉紅 |
| 👍 點讚 | 彩虹衝擊波 | 🌟 金橙 |
| ✌️ 比耶 | 能量光束 | 💎 青藍 |
| 👎 倒讚 | 冰雪風暴 + 極光 | ❄️ 冰藍 |

## 🎁 彩蛋連招（隱藏）

- **🤟 → ✌️ → 👍**：🎅 飛過
- **👍👍👍**：🎁 禮物雨
- **✌️✌️🤟**：🎨 主題切換（經典 / 冰雪 / 糖果）

## 📱 觸控（手機 / iPad）

| 操作 | 效果 |
|------|------|
| **單指拖拽** | 旋轉視角 |
| **雙指捏合** | 縮放 |
| **雙指扭轉** | 輕微旋轉 |

## 🖱️ 滑鼠

| 操作 | 效果 |
|------|------|
| **拖拽** | 旋轉視角 |
| **滾輪** | 切換模式（向上/向下滾動） |
| **雙擊** | 切換到下一個模式 |

## ⌨️ 鍵盤

| 按鍵 | 功能 |
|------|------|
| `1` | 切換到聖誕樹模式 |
| `2` | 切換到散開模式 |
| `3` | 切換到聚焦模式 |
| `H` | 隱藏/顯示界面 |
| `M` | 音樂開關 |

## 🚀 快速開始

```bash
git clone https://github.com/timotechnology/christmas-tree.git
cd christmas-tree
npm install
npm run dev
```

訪問 http://localhost:8080

---

# 🇯🇵 日本語

## 🌟 特徴

| 機能 | 説明 |
|------|------|
| 📱 **モバイル対応** | iOS Safari・Android Chrome 完全対応 |
| 🇨🇳 **中国最適化** | 全リソースローカル化、CDN不要 |
| 🖥️ **レスポンシブUI** | スマホ・タブレット・PC対応 |
| ✋ **AIジェスチャー** | カメラでリアルタイム手ジェスチャー認識 |
| ⚡ **高パフォーマンス** | 最適化されたパーティクル効果 |
| 🎆 **エフェクト** | オーロラ・衝撃波・パーティクル爆発 |
| 🛡️ **フォールバック** | カメラ使用不可時に自動でマウスモードへ |

## 🎮 ジェスチャー操作

| ジェスチャー | モード | 効果 |
|-------------|--------|------|
| ✊ グー | ツリー | パーティクルがツリー形に |
| 🖐️ パー | 散開 | パーティクルが散らばる |
| ☝️ 指差し | フォーカス | 写真をズーム |

## 🎆 エフェクト

| ジェスチャー | エフェクト | 色 |
|-------------|----------|-----|
| 🤟 ILoveYou | ハート爆発 + オーロラ | 💗 ピンク |
| 👍 親指上げ | 虹の衝撃波 | 🌟 ゴールド |
| ✌️ ピース | エネルギー光線 | 💎 シアン |
| 👎 親指下げ | 雪嵐 + オーロラ | ❄️ アイス |

## 🎁 イースターエッグ（隠しコンボ）

- **🤟 → ✌️ → 👍**：🎅 サンタが飛ぶ
- **👍👍👍**：🎁 プレゼントの雨
- **✌️✌️🤟**：🎨 テーマ切り替え（クラシック / アイス / キャンディ）

## 📱 タッチ（モバイル / iPad）

| 操作 | 効果 |
|------|------|
| **1本指ドラッグ** | シーンを回転 |
| **2本指ピンチ** | ズームイン/アウト |
| **2本指ツイスト** | 軽く回転 |

## 🖱️ マウス

| 操作 | 効果 |
|------|------|
| **ドラッグ** | シーンを回転 |
| **スクロールホイール** | モード切り替え（上下スクロール） |
| **ダブルクリック** | 次のモードに切り替え |

## ⌨️ キーボード

| キー | 機能 |
|------|------|
| `1` | ツリーモードに切り替え |
| `2` | 散開モードに切り替え |
| `3` | フォーカスモードに切り替え |
| `H` | UI表示/非表示 |
| `M` | 音楽オン/オフ |

## 🚀 クイックスタート

```bash
git clone https://github.com/timotechnology/christmas-tree.git
cd christmas-tree
npm install
npm run dev
```

http://localhost:8080 にアクセス

---

# 🇰🇷 한국어

## 🌟 특징

| 기능 | 설명 |
|------|------|
| 📱 **모바일 지원** | iOS Safari & Android Chrome 완벽 지원 |
| 🇨🇳 **중국 최적화** | 모든 리소스 로컬화, CDN 없음 |
| 🖥️ **반응형 UI** | 휴대폰, 태블릿, PC 화면 대응 |
| ✋ **AI 제스처** | 카메라로 실시간 손 제스처 인식 |
| ⚡ **고성능** | 최적화된 파티클 효과 |
| 🎆 **멋진 효과** | 오로라, 충격파, 파티클 폭발 |
| 🛡️ **스마트 폴백** | 카메라 거부 시 마우스 모드로 자동 전환 |

## 🎮 제스처 조작

| 제스처 | 모드 | 효과 |
|--------|------|------|
| ✊ 주먹 | 트리 | 파티클이 트리 모양으로 |
| 🖐️ 손바닥 | 흩어짐 | 파티클이 흩어짐 |
| ☝️ 가리키기 | 포커스 | 사진 확대 |

## 🎆 효과

| 제스처 | 효과 | 색상 |
|--------|------|------|
| 🤟 ILoveYou | 하트 폭발 + 오로라 | 💗 핑크 |
| 👍 엄지 올리기 | 무지개 충격파 | 🌟 골드 |
| ✌️ 피스 | 에너지 빔 | 💎 시안 |
| 👎 엄지 내리기 | 눈보라 + 오로라 | ❄️ 아이스 |

## 🎁 이스터 에그 (숨겨진 콤보)

- **🤟 → ✌️ → 👍**：🎅 산타가 날아감
- **👍👍👍**：🎁 선물 비
- **✌️✌️🤟**：🎨 테마 전환 (클래식 / 아이스 / 캔디)

## 📱 터치 (모바일 / iPad)

| 조작 | 효과 |
|------|------|
| **1손가락 드래그** | 트리/씬 회전 |
| **2손가락 핀치** | 확대/축소 |
| **2손가락 비틀기** | 부드러운 회전 |

## 🖱️ 마우스

| 조작 | 효과 |
|------|------|
| **드래그** | 트리/씬 회전 |
| **스크롤 휠** | 모드 전환 (위/아래 스크롤) |
| **더블 클릭** | 다음 모드로 전환 |

## ⌨️ 키보드

| 키 | 기능 |
|----|------|
| `1` | 트리 모드로 전환 |
| `2` | 흩어짐 모드로 전환 |
| `3` | 포커스 모드로 전환 |
| `H` | UI 표시/숨김 |
| `M` | 음악 켜기/끄기 |

## 🚀 빠른 시작

```bash
git clone https://github.com/timotechnology/christmas-tree.git
cd christmas-tree
npm install
npm run dev
```

http://localhost:8080 접속

---

<p align="center">
  Made with ❤️ for the holiday season
</p>

<p align="center">
  🎄 Merry Christmas! 🎄
</p>
