const config = ({ env }: { env: (key: string) => string }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, 
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials:{
            accessKeyId: env("S3_ACCESS_KEYID"),
            secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
          },
          endpoint:env("S3_BUCKET_ENDPOINT"),
          region:env("S3_REGION"),
          params: {
            Bucket: env("S3_BUCKET_NAME"),
            ACL:'public-read'
          },
          generateThumbnails: true,
        },
        baseUrl:`${env("SUPABASE_OBJECT_BASEURL")}/${env("S3_BUCKET_NAME")}`,
      },
      actionOptions: {
        upload: {
        },
        uploadStream: {
        },
      }
    },
  },
  // 'qb-preview':{
  //   enabled:true,
  //   resolve:'./src/plugins/qb_preview'
  // }
});

export default config;