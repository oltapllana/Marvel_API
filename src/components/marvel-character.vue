<template lang="html">
<div class="container">
    <div class="marvel">
        <div class="marvel__data">
            <!-- <p>{{ this.$route.params.id }}</p> -->
            <h2 v-for="details in marvelCharacter" :key="details.id" :class="data__name">{{ details.name }}</h2>
            <p v-for="details in marvelCharacter" :key="details.id" :class="description">{{ details.description }}</p>

        </div>
        <div class="marvel__image"><img :src="url" alt=""></div>
    </div>
</div>
</template>
<style>
*{
    outline: 1px solid red;
}
.container{
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
}
.marvel{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.marvel__image{
    display: flex;
    justify-content: center;
}
.marvel__data{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
}
h2{
    font-weight: bolder;
    margin-bottom: 20px;
}
    
</style>
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