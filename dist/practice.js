"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};
const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = await fetchData(url);
        posts.map((pos) => console.log(pos.title));
    }
    catch (error) {
        console.error('Try Again this is the error that happened', error);
    }
};
getPost();
//# sourceMappingURL=practice.js.map