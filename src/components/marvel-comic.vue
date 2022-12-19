<template lang="html">
    <div>
        <h3>hello character</h3>
        <p>{{ this.$route.params.id }}</p>
        <ul>
            <li v-for="char in marvelComics" :key="char.id">
            {{ char.name }}
            {{ char.description }}
        </li>
        </ul>
        <img :src="url" alt="">
    </div> 
    </template>
    <script>
    import { public_key } from '@/views/marvelCharacters';
    export default{
        name: 'marvel-comic',
        data(){
            return{
                marvelComics: [],
                url: '',
                size: 'portrait_uncanny.jpg'
            }
        },
        mounted(){
            this.getMarvelComics()
        },
        methods: {
            getMarvelComics: function () {
                var characterID = this.$route.params.id
                fetch(`http://gateway.marvel.com/v1/public/comics/${characterID}?apikey=${public_key}`)
                    .then(response => response.json())
                    .then((result) => {
                    result.data.results.forEach((item)=>{
                        this.marvelComics.push(item)
                        this.url = `${item.thumbnail.path}/${this.size}`
                        console.log(this.url);
    
                    })
                })
                    .catch((error) => {
                    console.log(error);
                });
            }
        }
       
     
    
    }
    </script>
    <style lang="css">
    </style>