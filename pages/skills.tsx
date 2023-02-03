import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'


export default function Skills(){
    return(
	<div className={styles.container}>
		    
     <div className={styles.grid}>
	     
	     <Link href="/"><a className={styles.cardhome}><h2>home</h2></a></Link>
	    <br />
            <h2 className={styles.title}>Skills</h2>
            <p className={styles.description}>
             HTML, CSS, SASS, JS, React, Redux, Next.js, Firebase, NPM, Gulp, Git, MySQL, Wordpress.
            </p>
        </div>
		</div>
    )
}
