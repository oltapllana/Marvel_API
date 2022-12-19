<template lang="html">
<div>
    <h3>hello character</h3>
    <p>{{ this.$route.params.id }}</p>
    <ul>
        <li v-for="char in marvelCharacter" :key="char.name">
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
    name: 'marvel-character',
    data(){
        return{
            marvelCharacter: [],
            url: '',
            size: 'portrait_uncanny.jpg'
        }
    },
    mounted(){
        this.getMarvelCharacters()
    },
    methods: {
        getMarvelCharacters: function () {
            var characterID = this.$route.params.id
            fetch(`http://gateway.marvel.com/v1/public/characters/${characterID}?apikey=${public_key}`)
                .then(response => response.json())
                .then((result) => {
                result.data.results.forEach((item)=>{
                    this.marvelCharacter.push(item)
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