import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

function App() {
  return (
    <div>
      <Header /> <br />

      <Post
        author="Micael Vitor"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ducimus, quas, vel eaque facere voluptatibus consequatur quidem fuga consequuntur a asperiores consectetur excepturi accusantium quae, maxime iure exercitationem nisi sint."
      />
      <Post
        author="Autor 2"
        content="Esse é um conteúdo"
      />
    </div>
  )
}

export default App
