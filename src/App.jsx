import { Header } from './components/header/Header'
import { Posts } from './components/posts/Posts'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Posts
            author={'Ana'}
            content={'um post ai'}
          />
          <Posts
            author={'José'}
            content={'um outro post'}
          />
        </main>
      </div>
    </>
  )
}

export default App
