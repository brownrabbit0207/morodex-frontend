import { SWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { NotFound } from '@pancakeswap/uikit'
import SingleArticle from 'views/Blog/components/Article/SingleArticle'
import { InferGetServerSidePropsType } from 'next'
import { getArticle, getSingleArticle } from 'views/Blog/hooks/getArticle'
import PageMeta from 'components/PageMeta'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

          $not: params,
        },
        categories: {
          $or: article.categories.map((category) => ({
            name: {
              $eq: category,
            },
          })),
        },
      },
    },
  })

  return {
    props: {
      fallback: {
        '/article': article,
        '/similarArticles': similarArticles.data,
      },
    },
    revalidate: 60,
  }
}

const ArticlePage: React.FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({ fallback }) => {
  const router = useRouter()
  if (!router.isFallback && !fallback?.['/article']?.title) {
    return <NotFound />
  }

  const { title, description, imgUrl } = fallback['/article']

  return (
    <div>
      <PageMeta title={title} description={description} imgUrl={imgUrl} />
      <SWRConfig value={{ fallback }}>
        <SingleArticle />
      </SWRConfig>
    </div>
  )
}

export default ArticlePage
