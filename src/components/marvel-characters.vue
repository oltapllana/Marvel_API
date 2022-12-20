<template lang="html">
    <div>
        <h2>Welcome to Marvel Characters</h2>
        <input type="text" v-model="search" placeholder="Type marvel character">
        <hr>
        <ul>
            <li v-for="marvelcharacter in filteredCharacters"  :key="marvelcharacter.id">
                <router-link :to="{name: 'marvel-character', params: {id: marvelcharacter.id}}">{{ marvelcharacter.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<style>
li a{
    color: black;
}
li{
    margin-top: 10px;
} 
input{
    padding: 15px 30px;
    margin-bottom: 30px;
}
</style>
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
    computed:{
        filteredCharacters: function(){
            return this.marvelCharacters.filter((marvelcharacter)=>{
                return marvelcharacter.name.toLowerCase().match(this.search.toLowerCase());
            })
        }
    }
}
    
</script>

<style lang="css">

</style>