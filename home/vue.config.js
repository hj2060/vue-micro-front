module.exports = {
    baseUrl: 'home',
    configureWebpack: {
        resolve: {
            alias: {
                vendor: __dirname + '/src/vendor'
            }
        }
    }
}