const  { createProxyMiddleware }  =  require ( 'http-proxy-middleware' ) ;

module.exports = function addProxyMiddleware(app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://localhost:44415' ,
        changeOrigin :true




    }));

    app.use(appProxy);
};