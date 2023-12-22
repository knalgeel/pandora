const { exec } = require('child_process');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');

// Function to execute copyTypings.js, debounced
const runCopyTypings = debounce(() => {
    exec('node copyTypings.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
}, 5000); // Debounce time in milliseconds, adjust as needed

// Start the Angular build in watch mode
const ngBuild = exec('ng build pandora --watch');

ngBuild.stdout.on('data', (data) => {
    console.log(data);
});

ngBuild.stderr.on('data', (data) => {
    console.error(data);
});

// Watch for changes in the build output directory
const watcher = chokidar.watch('dist/pandora', { ignored: /^\./, persistent: true });

watcher.on('ready', () => console.log('Initial scan complete. Ready for changes'))
    .on('change', (path) => {
        console.log(`File ${path} has been changed`);
        runCopyTypings();
    });
