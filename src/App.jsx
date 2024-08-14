import './global.css'

import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Micael Vitor"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ducimus, quas, vel eaque facere voluptatibus consequatur quidem fuga consequuntur a asperiores consectetur excepturi accusantium quae, maxime iure exercitationem nisi sint."
          />
          <Post
            author="Autor 2"
            content="Esse é um conteúdo"
          />
        </main>

      </div>
    </div>
  )
}

export default App
