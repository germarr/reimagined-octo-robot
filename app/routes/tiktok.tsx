import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { getPosts, simplefetch } from "~/api/getArticle";
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
    description:`This article explores my tikoto usage.` ,
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };

};

export const loader:LoaderFunction = async() =>{
  const articleList = await simplefetch()
  const datapublish = await articleList[0].json()

  return datapublish
}

export default function Index() {
    let datamix = useLoaderData()
    let titleList = datamix.map((m,i)=>({
        title:m.base_post_en[0].title,
        slug:m.slug
    }))
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
        <div className="p-10 md:col-span-3">
            <div className="flex flex-row space-x-2 md:flex-col md:space-y-2">
                {titleList.map((m)=>(
                    <div key={m.slug} >
                    <Link prefetch="intent" to={`./${m.slug}`}>
                        <div className="bg-slate-800/40 hover:bg-slate-800/30 p-3 shadow-md shadow-slate-200 rounded-md">   
                            <p className="text-white font-semibold text-xs md:text-base">{m.title}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:col-span-7 md:overflow-auto">
            <div className="h-screen px-10 md:px-0">
                <Outlet/>
            </div>
        </div>
    </div>
  );
}
