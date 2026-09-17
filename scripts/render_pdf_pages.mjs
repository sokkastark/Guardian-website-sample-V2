import { pdf } from 'pdf-to-img';
import path from 'path';
import fs from 'fs';

async function main() {
  const pdfPath = path.resolve('public/Product Profile 5AUG2026 colored.pdf');
  const outputDir = path.resolve('public/images/product-ui-pages');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Rendering PDF pages at 3x resolution...');
  let counter = 1;
  const document = await pdf(pdfPath, { scale: 3.0 });
  
  for await (const image of document) {
    const pagePath = path.join(outputDir, `page-${counter}.png`);
    await fs.promises.writeFile(pagePath, image);
    console.log(`Saved page ${counter}`);
    counter++;
  }
  console.log('Finished rendering PDF pages.');
}

main().catch(console.error);
