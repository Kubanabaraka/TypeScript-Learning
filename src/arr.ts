// let arr:(number|string)[];
// arr = [2,3,4.4,'Baraka','Kubana']
// console.log(arr)

// unknown type
// let value : unknown;
// value = [3,2,4]

// const total = (value as number[]).reduce((a:number, b:number)=> a+b,0)
// console.log(total)
// fetching data in TypeScript

const fetchData = async (url: string): Promise<unknown> => {
    const response = await fetch(url)
    return await response.json()
}

const getData = async()=>{
const url = 'https://jsonplaceholder.typicode.com/posts';
try {
    const posts = await fetchData(url);
    (
        posts as {userid: number, id: number, title: string, body: string}[]
    ).map((post)=>console.log(post.title))

} catch (error) {
    console.log('Error Occurred',error)
}
}
getData()

