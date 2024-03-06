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
          <Posts />
          <Posts />
        </main>
      </div>
    </>
  )
}

export default App
