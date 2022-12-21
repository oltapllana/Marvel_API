<template lang="html">
       <div>
        <h2 v-for="details in marvelCharacter" :key="details.id">{{ details.name }}</h2>
            <p v-for="details in marvelCharacter" :key="details.name">{{ details.description }}</p>

       </div>
        <!-- <img :src="url" alt=""> -->
    </template>
    <script>
    import { public_key } from '@/views/marvelCharacters';
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
<style>
.v-popup{
    padding: 16px;
    position: fixed;
    top:50px ;
    right: 0;
    left: 0;
    width: 400px;
    background: #ffffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;

}
.v-popup__header, .v-popup__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.v-popup__content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.submit{
    padding: 10px;
    color: #ffffff;
    background: #26ae68;
}
.close{
    padding: 10px;
    color: #ffffff;
    background: red;
}
</style>