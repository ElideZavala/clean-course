import localPosts from './../data/local-database.json';
import {Post} from "./05-dependency-b";

export abstract class PostProvider {
    abstract getPost(): Promise<Post[]>
}


export class LocalDataBaseService extends PostProvider {

    constructor() {
        super();
    }

    async getPost() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}

export class JsonDataBaseService extends PostProvider{
    async getPost() {
        return localPosts;
    }
}

export class WebApiPostService extends PostProvider {
    async getPost() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

