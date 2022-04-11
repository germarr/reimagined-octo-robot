const url_path = "http://52.188.204.100:1337"

export async function getPosts() {
    const response = await fetch(`${url_path}/posts`)
    const articleList = await response.json()
    
    return articleList;
} 

export async function getArticledata(dataId:any) {
    const response = await fetch(`${url_path}/posts/${dataId}`)
    const articleData = await response.json()
    
    return articleData;
} 

export async function simplefetch(){
    const respo_tiktok = await fetch(`${url_path}/tiktoks/`)
    const simple_url:string = `${url_path}/tiktoks/`

    return [respo_tiktok, simple_url]
}

