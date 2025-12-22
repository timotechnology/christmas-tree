// Netlify 构建脚本 - 生成 photos.json
const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = path.join(__dirname, 'photos');
const OUTPUT_FILE = path.join(__dirname, 'photos.json');

// 支持的图片格式
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp)$/i;

try {
    const files = fs.readdirSync(PHOTOS_DIR)
        .filter(file => IMAGE_EXTENSIONS.test(file))
        .map(file => `photos/${file}`);

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(files, null, 2));
    console.log(`✅ Generated photos.json with ${files.length} photos`);
} catch (err) {
    console.error('❌ Failed to generate photos.json:', err.message);
    // 创建空数组，避免构建失败
    fs.writeFileSync(OUTPUT_FILE, '[]');
}
