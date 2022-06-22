module.exports = ({ env })=> ({
        // CLOUDINARY_URL=cloudinary://842755312754361:BMO579r1fQKABRKoV3bHRbmd7e4@ivhfizons
     upload:{
         config:{
             provider:'cloudinary',
             providerOptions:{
                 cloud_name:env('CLOUDINARY_NAME'),
                 api_key: env('CLOUDINARY_KEY'),
                 api_secret: env('CLOUDINARY_SECRET'),
                 upload_preset: env('CLOUDINARY_UPLOAD_PRESET'),
             },
             actionOptions:{
                 upload:{},
                 uploadStream: {
                    folder: "BUNGGLEKICKS",
                 },
                 delete:{},
                 
             },
         },
     },
    
    

})