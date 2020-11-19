export default {
  widgets: [
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
                  buildHookId: '5fb5bb65e73ced00c55eb9df',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gsss1mou',
                  apiId: 'f142d728-9ae4-4a4b-81a9-aed3e8d154bb'
                },
                {
                  buildHookId: '5fb5bb6506a7c90f0af6d2d5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-28hmmb1u',
                  apiId: 'c47c0db8-04cf-4c25-ae02-af4912100345'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/small-basic/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-28hmmb1u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
