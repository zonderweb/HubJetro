const smartgrid = require('smart-grid');

const settings = {
		filename: "_smartgrid",
		outputStyle: "scss",
    columns: 12,
    offset: '20px', // Межколоночный отступ
    container: {
        maxWidth: '960px',
        fields: '10px' // Внутренние отступы
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid ('./app/scss', settings);