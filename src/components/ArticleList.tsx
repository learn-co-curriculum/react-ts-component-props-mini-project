import Article from './Article';

interface Props {
  posts: {
    id: number;
    title: string;
    date?: string;
    preview: string;
    minutes?: number;
  }[];
}

function ArticleList({ posts }: Props) {
  const postElements = posts.map(post => {
    return (<Article 
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />)
  })

  return (
    <main>
      {postElements}
    </main>
  )
}

export default ArticleList;