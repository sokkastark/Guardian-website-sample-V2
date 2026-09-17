import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const TARGET_DIR = path.resolve('public/images/product-ui');
const PAGES_DIR = path.resolve('public/images/product-ui-pages');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Bounding boxes in 1836 x 2376 space for the 12 UI screens
const crops = [
  // Page 1
  {
    name: 'ui-dashboard-main.png',
    page: 'page-1.png',
    crop: { left: 918, top: 422, width: 774, height: 456 }
  },
  // Page 2
  {
    name: 'ui-patient-360.png',
    page: 'page-2.png',
    crop: { left: 1320, top: 210, width: 450, height: 285 }
  },
  {
    name: 'ui-risk-stratification.png',
    page: 'page-2.png',
    crop: { left: 110, top: 745, width: 485, height: 310 }
  },
  {
    name: 'ui-care-management.png',
    page: 'page-2.png',
    crop: { left: 1330, top: 1400, width: 450, height: 280 }
  },
  {
    name: 'ui-care-plan-builder.png',
    page: 'page-2.png',
    crop: { left: 1330, top: 1895, width: 450, height: 280 }
  },
  // Page 3
  {
    name: 'ui-adt-notifications.png',
    page: 'page-3.png',
    crop: { left: 95, top: 235, width: 490, height: 350 }
  },
  {
    name: 'ui-transitions-of-care.png',
    page: 'page-3.png',
    crop: { left: 1210, top: 745, width: 530, height: 370 }
  },
  {
    name: 'ui-telemedicine.png',
    page: 'page-3.png',
    crop: { left: 1120, top: 1290, width: 640, height: 330 }
  },
  {
    name: 'ui-quality-manager.png',
    page: 'page-3.png',
    crop: { left: 95, top: 1800, width: 550, height: 360 }
  },
  // Page 4
  {
    name: 'ui-pop-health-analytics.png',
    page: 'page-4.png',
    crop: { left: 1210, top: 235, width: 520, height: 350 }
  },
  {
    name: 'ui-referral-manager.png',
    page: 'page-4.png',
    crop: { left: 65, top: 765, width: 490, height: 330 }
  },
  {
    name: 'ui-er-rpm-triage.png',
    page: 'page-4.png',
    crop: { left: 1210, top: 1290, width: 520, height: 330 }
  },
  {
    name: 'ui-cardiometabolic-care.png',
    page: 'page-4.png',
    crop: { left: 75, top: 1800, width: 450, height: 310 }
  }
];

async function cropAll() {
  console.log('Cropping 13 Product Profile UI screens...');
  for (const item of crops) {
    const src = path.join(PAGES_DIR, item.page);
    const dest = path.join(TARGET_DIR, item.name);
    await sharp(src)
      .extract(item.crop)
      .toFile(dest);
    console.log(`Cropped ${item.name}`);
  }
  console.log('Cropping complete.');
}

cropAll().catch(console.error);
