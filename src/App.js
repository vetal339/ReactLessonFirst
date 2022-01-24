import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'aaaa', body: '123'},
        {id: 2, title: 'vvvv 2', body: '666'},
        {id: 3, title: 'bbbb 3', body: '12222222'}
    ])
  const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() =>{
        console.log('ФУНКЦИЯ СОРТЕД ПОСТ ОТРАБОТАЛА')
        if (filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query,sortedPosts])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }



  return (
    <div className="App">
        <PostForm create={createPost} />
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {
            sortedAndSearchedPosts.length
            ?<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'} />
                : <h1 style={{textAlign: 'center'}}>Post notFound</h1>
        }

    </div>
  );
}

export default App;
