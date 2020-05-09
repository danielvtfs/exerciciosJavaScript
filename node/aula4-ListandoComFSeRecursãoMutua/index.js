const fs = require('fs').promises;
const path = require('path')

/* fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e)) */

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath) // stat para saber se é um arquivo ou pasta

        if (/\.git/g.test(fileFullPath)) continue; //ignora arquivos da pasta .git
        if (/node_modules/g.test(fileFullPath)) continue; //ignora arquivos da pasta node_modules

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if (!/\.css$/g.test(fileFullPath)) continue; // para encontrar somente arquivos .css

        console.log(fileFullPath);
    }
}


readdir('C:/Users/PC-Casa/Documents/Curso Javascript moderno basico ao avancado 2020/exerciciosJavaScript');