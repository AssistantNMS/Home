const fs = require('fs');
const util = require('util');
const Handlebars = require('handlebars');
const readFile = util.promisify(fs.readFile);

async function buildTemplates() {
    process.env['NODE_ENV'] = require('../../package.json').version;
    Handlebars.registerHelper('date', require('../handlebar/helpers/date.helper.js'));
    Handlebars.registerHelper('loud', require('../handlebar/helpers/loud.helper.js'));
    Handlebars.registerHelper('urlref', require('../handlebar/helpers/urlref.helper.js'));
    Handlebars.registerHelper('version', require('../handlebar/helpers/version.helper.js'));
    Handlebars.registerHelper('urlrefescaped', require('../handlebar/helpers/urlrefescaped.helper.js'));

    Handlebars.registerPartial('components/documentHead', require('../handlebar/components/documentHead.hbs'));
    Handlebars.registerPartial('components/header', require('../handlebar/components/header.hbs'));
    Handlebars.registerPartial('components/footer', require('../handlebar/components/footer.hbs'));
    Handlebars.registerPartial('components/scripts', require('../handlebar/components/scripts.hbs'));

    const projectDataContents = await readFile('./seo/data/project.json', 'utf8');
    const projectData = JSON.parse(projectDataContents);

    const files = [
        { template: './seo/handlebar/index.html.hbs', dest: './index.html' },
        { template: './seo/handlebar/thankYou.html.hbs', dest: './ThankYou.html' },
        { template: './seo/handlebar/contributors.html.hbs', dest: './Contributors.html' },
        { template: './seo/handlebar/downloads.html.hbs', dest: './Downloads.html' },
        { template: './seo/handlebar/notFound.html.hbs', dest: './NotFound.html' },
        { template: './seo/handlebar/friendCodeError.html.hbs', dest: './FriendCodeError.html' },
        { template: './seo/handlebar/friendCodeSuccess.html.hbs', dest: './FriendCodeSuccess.html' },

        { template: './seo/handlebar/testimonials.js.hbs', dest: './assets/js/testimonials.js' },
        { template: './seo/handlebar/htaccess.hbs', dest: './.htaccess' },
        { template: './seo/handlebar/humans.txt.hbs', dest: './humans.txt' },
        { template: './seo/handlebar/opensearch.xml.hbs', dest: './opensearch.xml' },
        { template: './seo/handlebar/manifest.json.hbs', dest: './manifest.json' },
        { template: './seo/handlebar/site.webmanifest.hbs', dest: './site.webmanifest' },
        { template: './seo/handlebar/sitemap.xml.hbs', dest: './sitemap.xml' },
        { template: './seo/handlebar/serviceWorker.js.hbs', dest: './serviceWorker.js' },
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