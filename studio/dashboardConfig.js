export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e6ab86854336468685f16aa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aq17gx1a',
                  apiId: '48842226-fa0a-46f2-ac1d-b9d141316440'
                },
                {
                  buildHookId: '5e6ab8684820efae75e5e924',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o9bkwxfe',
                  apiId: 'c35412e4-7f13-4185-b5d0-49853472f0b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmitchell-au/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o9bkwxfe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
