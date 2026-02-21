const fetchData = async (url: string) : Promise<unknown>=>{
const response = await fetch(url)
return await response.json()
}

const getPost = async() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        
   const posts = await fetchData(url);
        
    (
        posts as {userId: number, id: number, title: string, body: string}[]
    ).map((pos)=>console.log(pos.title))

    } catch (error) {
       console.error ('Try Again this is the error that happened', error) 
    }
}
getPost()