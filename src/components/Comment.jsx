import { ThumbsUp, Trash } from '@phosphor-icons/react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=50&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Micael Vitor</strong>
                            <time
                                title="14 de agosto de 2024"
                                dateTime="2024-08-14" >
                                    Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}