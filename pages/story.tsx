import Link from 'next/link'

import styles from '@/styles/Home.module.css'


export default function Story() {
    return (
        <div className={styles.container}>
            <Link href="/"><a className={styles.cardhome}><h2>Home</h2></a></Link>
            <div className={styles.grid}>
                <h2 className={styles.title}>Story</h2>
                <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}
