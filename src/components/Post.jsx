import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png" />
                    
                    <div className={styles.authorInfo}>
                        <strong>Micael Vitor</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time
                    title="14 de agosto de 2024"
                    dateTime="2024-08-14" >
                        Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="http://jane.design/doctorcare" target="_blank" rel="noopener noreferrer">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <strong>Deixe um comentário</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}