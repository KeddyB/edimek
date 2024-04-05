// schema.js

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the article'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'The main content of the article'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The name of the author'
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      description: 'The date when the article was published'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags associated with the article'
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'URL to the image associated with the article'
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'author', title: 'Author', type: 'string' },
            { name: 'content', title: 'Content', type: 'text' },
            { name: 'date', title: 'Date', type: 'datetime' }
          ]
        }
      ],
      description: 'Comments associated with the article'
    }
  ]
}