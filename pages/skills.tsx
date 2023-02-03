import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'


<<<<<<< HEAD
export default function Skills() {
    return (
        <div className={styles.container}>

            <Link href="/"><a className={styles.cardhome}><h2>Home</h2></a></Link>
            <div className={styles.grid}>
                <h2 className={styles.title}>Skills</h2>
                <p className={styles.description}>
                    HTML, CSS, SASS, JS, React, Redux, Next.js, Firebase, NPM, Gulp, Git, MySQL, Wordpress.
                </p>
            </div>
=======
export default function Skills(){
    return(
	<div className={styles.container}>
		    
     
	     
	     <Link href="/"><a className={styles.cardhome}><h2>home</h2></a></Link>
	 <div className={styles.grid}>
            <h2 className={styles.title}>Skills</h2>
            <p className={styles.description}>
             HTML, CSS, SASS, JS, React, Redux, Next.js, Firebase, NPM, Gulp, Git, MySQL, Wordpress.
            </p>
>>>>>>> 2c3400167a245eb1b99d45bec151c27cd6dffea7
        </div>
    )
}
