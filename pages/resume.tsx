import {useEffect, useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'


export default function Resume() {
    
	 const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: 'webviewer/lib',
            initialDoc: '/files/resume.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);

	
	return (
            
			<div className="MyComponent">
		<div className={styles.containerhome}>	
        <Link href="/"><a className={styles.cardhome}><h2>Home</h2></a></Link>
		</div>
        <div className="webviewer" ref={viewer} style={{height: "90vh"}}></div>

		 <div className="py-2 px-400">
		  
		</div>


        </div>
    )
}
