const smartGrid = require('smart-grid');

const options = {    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    mobileFirst: true,
    container: {
        maxWidth: '1370px',
        fields: '20px'
    },
    breakPoints: {
        lg: {
            width: '1200px',
        },
        md: {
            width: '992px',
            fields: '10px'
        },
        sm: {
            width: '720px'
        },
        xs: {
            width: '576px'
        }
    },
}

smartGrid('src/assets/scss/vendor', options);
