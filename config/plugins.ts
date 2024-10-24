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
            accessKeyId: '735ca3009617cf622ebaa1ec17033683',
            secretAccessKey: "e46c44d9aae12b0839ad92b174bf45a241cf4ae5b4b624abda27a65bcfcbcd7a",
          },
          endpoint:"https://zragvlgzbensfgplfuey.supabase.co/storage/v1/s3",
          baseUrl:'https://zragvlgzbensfgplfuey.supabase.co/storage/v1/object/public',
          rootPath:'CMS',
          region:'ap-south-1',
          params: {
            Bucket: 'CMS',
            ACL:'public-read'
          },
        }
      },
      actionOptions: {
        upload: {
        },
        uploadStream: {
        },
      }
    },
  }
  
});

export default config;