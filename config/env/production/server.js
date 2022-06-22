module.exports = ({ env }) => ({
    url:env('https://bungglekicks.herokuapp.com/'),
    proxy:true,
    app:{
        key:env.array('APP_KEYS',['fGLVkbjc40shhzuh1BxFyA==','hrV7bDz3uLd1E+vFzgjAzA==','aN8sP58aW9j8Izzc8ZAXKA==','QeKCLltbkcVPqm1ZR8BdJA=='])
    }
});