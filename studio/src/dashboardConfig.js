export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2aed6e77c0080142934650',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p75dysvv',
                  apiId: '976cbcc7-8839-4222-9837-bb2f6973def1'
                },
                {
                  buildHookId: '5f2aed6e21ee8b010c76edd2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6kro1pjx',
                  apiId: '88024e8e-0cd8-40a0-852f-0742d8bf4631'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ibnahmadCoded/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6kro1pjx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
