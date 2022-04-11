import { Link, useLoaderData } from "@remix-run/react"
import { getPosts } from "~/api/getArticle";
import type {MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node"
import tailwin from "~/styles/tailwind.css"

export const links: LinksFunction = () =>{
  return[
      {
          rel:"stylesheet",
          href:tailwin
      }
  ]
}

export const meta: MetaFunction = () => {

  return { 
    title: `Analyzing my TikTok data.`,
    description:`This article explores` ,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };

};

export const loader:LoaderFunction = async() =>{
  const articleList = await getPosts()
  let articleName = articleList.map((n)=>n.Title)
  let articleId = articleList.map((n)=>n.slug)

  return [articleName, articleId]
}

export default function Index() {
  let dataTitle = useLoaderData()[0]
  let dataids = useLoaderData()[1]

  return (
    <div>
      <ul>
        {dataTitle.map((title, i)=>(
          <div key={`name_${title}`}>
            <Link to={`./post/${dataids[i]}`} prefetch="intent">
              {title}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
