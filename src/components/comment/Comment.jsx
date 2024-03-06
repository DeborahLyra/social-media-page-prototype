import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.autorAndTime}>
                            <strong>Suspicious Pug</strong>
                            <time title='05 de março as 12h' dateTime="2024-03-05 12:00:00">Há cerca de 20min</time>
                        </div>
                        <button title='trash'>
                            <Trash size={20}/>
                        </button>

                        
                    </header>
                    <p>Muito bom!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Gostei <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
