import {marked} from "marked"
import hljs from 'highlight.js';
import styles from "highlight.js/styles/github-dark-dimmed.css"
import tailwin from "~/styles/tailwind.css"
import type {MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useEffect } from "react";
import { getArticledata, getPosts } from "~/api/getArticle";

export const links: LinksFunction = () =>{
    return[
        {
            rel:"stylesheet",
            href:tailwin
        },
        {
            rel:"stylesheet",
            href:styles
        }
    ]
}

export const meta: MetaFunction = ({data}) => {

    const exportData:any = data

    return { 
      title: `${exportData.Title}`,
      description:`${exportData.small_desc}` 
    };

  };

export const loader:LoaderFunction = async({params}) =>{
    let urlParam = params.articleName
    let artNumber = await getPosts()
    
    let art_dict = artNumber.map((n)=>({slug:n.slug, id:n.id}))
    let getId = art_dict.find(sl => sl["slug"] === urlParam )

    const articleList = await getArticledata(getId["id"])

    return articleList
}

export default function Id(){
    const posts:any = useLoaderData()
    const body = marked.parse(`${posts.body}`)
    
    useEffect(() => {
        hljs.initHighlighting();
    }, [])

    return(
        <div className="flex items-center justify-center">
            <div className="prose py-10" dangerouslySetInnerHTML={{__html:body}}></div>
        </div>
    )
}