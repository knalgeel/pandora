const fs = require('fs');
const path = require('path');

const srcDir = './projects/pandora/src/lib'; // Replace with your source directory path
const destDir = './dist/pandora/lib'; // Replace with your destination directory path

function copyTypings(src, dest) {
    fs.readdirSync(src, { withFileTypes: true }).forEach(dirent => {
        const srcPath = path.join(src, dirent.name);
        const destPath = path.join(dest, dirent.name);

        if (dirent.isDirectory()) {
            // Recursively copy typings in subdirectories
            copyTypings(srcPath, destPath);
        } else if (dirent.isFile() && srcPath.endsWith('.d.ts')) {
            // Ensure destination directory exists
            fs.mkdirSync(path.dirname(destPath), { recursive: true });
            // Copy .d.ts file
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${srcPath} -> ${destPath}`);
        }
    });
}

// Start the copying process
copyTypings(srcDir, destDir);