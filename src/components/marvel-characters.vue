<template lang="html">
    <div>
        <h3>helloksfjksf</h3>
        <input type="text" v-model="search" placeholder="Type marvel character">
        <ul>
            <li v-for="marvelcharacter in filteredCharacters"  :key="marvelcharacter.id">
                <router-link :to="{name: 'marvel-character', params: {id: marvelcharacter.id}}">{{ marvelcharacter.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { public_key } from '@/views/marvelCharacters';
    export default{
    name: "characters-marvel",
    data() {
        return {
            marvelCharacters: [],
            search: ""
        };
    },
    mounted() {
        this.getMarvelCharacters();
    },
    methods: {
        getMarvelCharacters: function () {
            fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
                .then(response => response.json())
                .then((result) => {
                console.log(result);
                result.data.results.forEach((item) => {
                    console.log(item);
                    this.marvelCharacters.push(item);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        }
    },
    created(){
       this.$http.get('http://gateway.marvel.com/v1/public/characters').then(function(data){
        this.marvelCharacters = data.body;
       })
    },
    computed:{
        filteredCharacters: function(){
            return this.marvelCharacters.filter((marvelcharacter)=>{
                return marvelcharacter.name.match(this.search);
            })
        }
    }
}
    
</script>

<style lang="css">

</style>