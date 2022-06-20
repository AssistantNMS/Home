const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function generateFullJson() {

    const siteDataContents = await readFile('./seo/data/site.json', 'utf8');
    const liveDataContents = await readFile('./seo/data/live.json', 'utf8');
    const poweredByDataContents = await readFile('./seo/data/poweredBy.json', 'utf8');

    const siteData = JSON.parse(siteDataContents);
    const liveData = JSON.parse(liveDataContents);
    const poweredByData = JSON.parse(poweredByDataContents);

    const cspContents = await readFile('./seo/data/csp.json', 'utf8');
    const cspContent = JSON.parse(cspContents);
    const headerList = cspContent.options.map(opt =>
        opt.name +
        ((opt.values != null && opt.values.length > 0) ? ' ' : '') +
        opt.values.join(' ')
    );
    const header = headerList.join('; ') + ';';

    const siteDataFull = {
        ...siteData,
        ...liveData,
        poweredBy: poweredByData,
        headers: [
            // Enable the line below to get CSP
            // ...cspContent.headers.map(csp => ({ "name": csp, "value": header })),
            ...siteData.headers,
        ]
    };

    fs.writeFile(`./seo/data/project.json`, JSON.stringify(siteDataFull), ['utf8'], () => { });
}


generateFullJson();
