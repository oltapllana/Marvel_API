<template lang="html">
    <div>
        <h3>Hello comicssasas</h3>
    
        <ul>
            <li v-for="marvelComic in marvelComics" :key="marvelComic.id">
            <router-link :to="{name: 'marvel-comic', params: {id: marvelComic.id}}">            {{ marvelComic.title }}
</router-link>

            </li>
        </ul>
    </div>
</template>

<script>
import { public_key } from '@/views/marvelCharacters';
export default{
    name: 'marvel-comics',
    data() {
        return {
            marvelComics: [],
        };
    },
    mounted() {
        this.getMarvelComics();
    },
    methods:{
        getMarvelComics: function(){
            fetch(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
                .then(response => response.json())
                .then((result) => {
                console.log(result);
                result.data.results.forEach((item) => {
                    console.log(item);
                    this.marvelComics.push(item);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>