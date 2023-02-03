import {useEffect, useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'



export default function Resume(){
    
	       const viewer = useRef(null);


    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {

            path: '/webviewer/lib',

            initialDoc: '/files/resume.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


	

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
    )
}
