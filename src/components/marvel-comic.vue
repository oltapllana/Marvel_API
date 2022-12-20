<template lang="html">
        <div class="v-popup">
            <div class="v-popup__header">
                <span>Popup span</span>
                <span>
                    <i class="material-icons"></i>
                </span>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button class="close" >Close</button>
                <button class="submit">Add</button>
            </div>
        </div>
        <!-- <img :src="url" alt=""> -->
    </template>
    <script>
    // import { public_key } from '@/views/marvelCharacters';

    export default{
        name: 'marvel-comic'
    }
    // data(){
    //     return{
    //         marvelComics: [],
    //         url: '',
    //         size: 'portrait_uncanny.jpg'
    //     }
    // },
    // mounted(){
    //     this.getMarvelComics()
    // },
       
    // methods: {
    //     getMarvelComics: function () {
    //         var characterID = this.$route.params.id
    //         fetch(`http://gateway.marvel.com/v1/public/comics/${characterID}?apikey=${public_key}`)
    //             .then(response => response.json())
    //             .then((result) => {
    //             result.data.results.forEach((item)=>{
    //                 this.marvelComics.push(item)
    //                 this.url = `${item.thumbnail.path}`
    //                 console.log(this.url);

    //             })
    //         })
    //             .catch((error) => {
    //             console.log(error);
    //         });
    //     }
    // }
    // }
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