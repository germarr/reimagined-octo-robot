import { Link, useLoaderData } from "@remix-run/react"
import { getPosts, simplefetch } from "~/api/getArticle";
import type {MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node"
import tailwin from "~/styles/tailwind.css"
import {marked} from "marked"
import hljs from 'highlight.js';
import styles from "highlight.js/styles/github-dark-dimmed.css"
import { useEffect } from "react";

//npm i --save-dev @types/marked

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

export const meta: MetaFunction = () => {

  return { 
    title: `Analyzing my TikTok data.`,
    description:`This article explores my tikoto usage.` ,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };

};

export const loader:LoaderFunction = async({params}) =>{
    let article_name = params.part

    const articleList = await simplefetch()
    const datapublish = await articleList[0].json()

    let titleList = datapublish.map((m,i)=>({
        id:m.base_post_en[0].id,
        slug:m.slug
    }))
    

    let getId = titleList.find(n => n.slug === article_name )
    
    let simpleUrl = await simplefetch()
    const datatopublish = await fetch(`${simpleUrl[1]}${getId.id}`)
    
    return datatopublish.json()
  }

export default function Index() {
    let dataTitle = useLoaderData()
    const body = marked.parse(`${dataTitle.base_post_en[0].body}`)
    
    useEffect(() => {
        hljs.initHighlighting();
    }, [])

  return (
    <div className="flex justify-center items-center">
        {/* <pre>
        {JSON.stringify(dataTitle, null, 4)}
        </pre> */}
        <div className="prose py-10" dangerouslySetInnerHTML={{__html:body}}></div>
    </div>
  );
}
