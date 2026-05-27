import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/App.tsx', 'utf8');

// Replace general section paddings
content = content.replace(/py-24/g, 'py-16 md:py-24');
content = content.replace(/py-20/g, 'py-12 md:py-20');

// Component specific margins
content = content.replace(/mb-24/g, 'mb-16 md:mb-24');
content = content.replace(/mb-16/g, 'mb-10 md:mb-16');
content = content.replace(/mt-16/g, 'mt-10 md:mt-16');
content = content.replace(/mb-12/g, 'mb-8 md:mb-12');
content = content.replace(/mt-12/g, 'mt-8 md:mt-12');

// Component paddings
content = content.replace(/p-8 md:p-12/g, 'p-6 md:p-10');
content = content.replace(/p-8/g, 'p-6 md:p-8');
content = content.replace(/py-16 md:py-24/g, 'py-16 md:py-24'); // dedupe if it matches twice somehow
// actually regex replacement is fine

writeFileSync('src/App.tsx', content);
