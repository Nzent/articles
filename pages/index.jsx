
import Layout from '../components/Layout'
import ActionCard from '../components/ActionCard'
import ArticleCard from '../components/ArticleCard'
import FriendsCard from '../components/FriendsCard'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import PlaceholderCard from '../components/PlaceholderCard';
import 'react-virtualized/styles.css'




function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {

    fetchData();
  }, [])

  const fetchData = () => {

    if (!navigator.onLine) {
      alert("You are Offline")
      return
    }

    // Unsplash 
    
    // axios.get(`${process.env.API_ROOT}/pphotos/random?client_id=${process.env.ACCESS_KEY}&count=10`)
    //   .then(res =>
    //     setArticles([...articles, ...res.data])
    //   )

    // GraphCMS api
    
    axios.get(``)
      .then(res =>
        setArticles([...articles, ...res.data])
      )
  }
  console.log('articles', articles)
  return (
    <>
      <Layout title="Home">
        <section>
          {/* Flex */}
          <div className='flex'>
            {/* Left */}
            <div className="flex-1 hidden sm:block">
              <ActionCard />
            </div>
            {/* Mid */}
            <div className="flex-initial mr-2 ml-2 mx-auto">
              <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<PlaceholderCard />}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div>
                  {articles.map((article) => (
                    <ArticleCard
                      articleAvatar={article.user.profile_image.medium}
                      articleDate="2020"
                      articleDescription={article.alt_description}
                      articleImage={article.urls.regular}
                      articleUserName={article.user.first_name + article.user.last_name}
                      key={article.id}
                    />
                  ))}
                </div>
              </InfiniteScroll>
            </div>
            {/* Right */}
            <div className="flex-1 hidden sm:block">
              <FriendsCard />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}





export default Home;