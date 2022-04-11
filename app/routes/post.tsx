import { Outlet } from "@remix-run/react"
import hljs from 'highlight.js';
import styles from "highlight.js/styles/github-dark-dimmed.css"
import { useEffect } from "react";

export default function Post(){
   
    useEffect(() => {
        hljs.initHighlighting();
    }, [])
    
    return(
        <div>
            <Outlet/>
        </div>
    )
}