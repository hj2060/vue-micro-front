module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://localhost:8811/app1/dist' : '',
    configureWebpack: {
        resolve: {
            alias: {
                vendor: __dirname + '/src/vendor'
            }
        }
    }
}