import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'


export default function Projects(){
    return(
	<div className={styles.container}>
<<<<<<< HEAD
		  <Link href="/"><a className={styles.cardhome}><h2>Home</h2></a></Link>
=======
		  <Link href="/"><a className={styles.cardhome}><h2>home</h2></a></Link>
>>>>>>> 2c3400167a245eb1b99d45bec151c27cd6dffea7
     <div className={styles.grid}>
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
		</div>
    )
}
