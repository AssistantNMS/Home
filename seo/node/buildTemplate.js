const fs = require('fs');
const util = require('util');
const Handlebars = require('handlebars');

const pjson = require('../../package.json');

const dateHelper = require('../handlebar/helpers/date.helper.js');
const loudHelper = require('../handlebar/helpers/loud.helper.js');
const urlrefHelper = require('../handlebar/helpers/urlref.helper.js');
const versionHelper = require('../handlebar/helpers/version.helper.js');

const readFile = util.promisify(fs.readFile);

async function buildTemplates() {
    process.env['NODE_ENV'] = pjson.version;
    Handlebars.registerHelper('date', dateHelper);
    Handlebars.registerHelper('loud', loudHelper);
    Handlebars.registerHelper('urlref', urlrefHelper);
    Handlebars.registerHelper('version', versionHelper);

    const projectDataContents = await readFile('./seo/data/project.json', 'utf8');
    const projectData = JSON.parse(projectDataContents);

    const publicFolder = '../public/';
    const files = [
        { template: './seo/handlebar/index.html.hbs', dest: './index.html' },
        { template: './seo/handlebar/humans.txt.hbs', dest: './humans.txt' },
        { template: './seo/handlebar/opensearch.xml.hbs', dest: './opensearch.xml' },
        { template: './seo/handlebar/manifest.json.hbs', dest: './manifest.json' },
        { template: './seo/handlebar/site.webmanifest.hbs', dest: './site.webmanifest' },
        { template: './seo/handlebar/sitemap.xml.hbs', dest: './sitemap.xml' },
        { template: './seo/handlebar/web.config.hbs', dest: './web.config' },
    ]

    for (const fileObj of files) {
        const template = await readFile(fileObj.template, 'utf8');
        const templateFunc = Handlebars.compile(template);
        const templateData = {
            ...projectData,
            allItems: []
        };
        const compiledTemplate = templateFunc(templateData);
        fs.writeFile(fileObj.dest, compiledTemplate, ['utf8'], () => { });
    }
}

buildTemplates()