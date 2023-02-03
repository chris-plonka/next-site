import {useEffect, useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'


<<<<<<< HEAD
export default function Resume() {
    
	 const viewer = useRef(null);
=======
export default function Resume(){
    
	       const viewer = useRef(null);
>>>>>>> 2c3400167a245eb1b99d45bec151c27cd6dffea7

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
<<<<<<< HEAD
            path: 'webviewer/lib',
=======
            path: '/webviewer/lib',
>>>>>>> 2c3400167a245eb1b99d45bec151c27cd6dffea7
            initialDoc: '/files/resume.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);

<<<<<<< HEAD
	
	return (
            
			<div className="MyComponent">
		<div className={styles.containerhome}>	
        <Link href="/"><a className={styles.cardhome}><h2>Home</h2></a></Link>
		</div>
        <div className="webviewer" ref={viewer} style={{height: "90vh"}}></div>

		 <div className="py-2 px-400">
		  
		</div>


        </div>
=======

    return (
      return(
	<div className={styles.container}>
		  <Link href="/"><a className={styles.cardhome}><h2>home</h2></a></Link>
     <div className={styles.grid}>    
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
		    </div>
		    </div>
    );
>>>>>>> 2c3400167a245eb1b99d45bec151c27cd6dffea7
    )
}
