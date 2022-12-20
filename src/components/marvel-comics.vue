<template lang="html">
    <div>
        
        <h3>Hello comicssasas</h3>
        <ul>
            <li v-for="marvelComic in marvelComics" :key="marvelComic.id">
            <router-link :to="{name: 'marvel-comic', params: {id: marvelComic.id}}">{{ marvelComic.title }}
            <button  @click="showPopupInfo()">
                Show
            </button>
</router-link>

            </li>
        </ul>
        
    </div>
</template>

<script>
import { public_key } from '@/views/marvelCharacters';
// import marvelCom from '@/components/marvel-comic.vue'
export default{
    name: 'marvel-comics',
    components: {
        
    },
    data() {
        return {
            marvelComics: [],
            isInfoPopupVisible: false
        };
    },
    mounted() {
        this.getMarvelComics();
    },
    methods:{
        showPopupInfo(){
            this.isInfoPopupVisible=true
            console.log(
                this.isInfoPopupVisible
            );
            // this.isInfoPopupVisible = true;
        },
        // close(){
        //     this.isInfoPopupVisible = false
        // },
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