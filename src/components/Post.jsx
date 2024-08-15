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
                    <img
                        className={styles.avatar}
                        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=50&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
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