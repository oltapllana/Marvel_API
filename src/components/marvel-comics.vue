<template lang="html">
    <div>
        
        <h3>Hello comicssasas</h3>
        <!-- <div v-if="isInfoPopupVisible"><marvelCom/></div>
        <div v-else> -->
            <ul>
            <li v-for="marvelComic in marvelComics" :key="marvelComic.id" >
            <a href="#"  type="button" ><img src="../assets/comic.jpg" alt="">
                {{ marvelComic.title }}<button :key="marvelComic.id"  @click="() => {TogglePopup('buttonTrigger')}">Show</button>
                
                <Popup 
                v-if="popupTriggers.buttonTrigger"
                :TogglePopup="() => TogglePopup('buttonTrigger')">
            <p>{{ marvelComic.description }}</p>
            <p>{{ }}</p>
            <img :src="url" alt="">
            </Popup>
            </a>
            </li>
        </ul>
		
           
            
       
        
    <!-- </div> -->
</div>
</template>

<script>
import { public_key } from '@/views/marvelCharacters';
import { ref } from 'vue';
import Popup from '@/components/Popup';
// import marvelCom from '@/components/marvel-comic.vue'
export default{
    name: 'marvel-comics',
    components: {
        // marvelCom
        Popup
    },
    data() {
        return {
            marvelComics: [],
            marvelComic: [],
            url: '',
            size: 'portrait_uncanny.jpg'
        };
    },
    mounted() {
        this.getMarvelComics();
        this.getMarvelComic(this.marvelComics.id)
    },
    methods:{
        setId(id){
            return this.marvelComics.id = id
        },
        getId(){
            return this.marvelComics.id
        },
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
        },
        getMarvelComic: function (id) {
           
            fetch(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=${public_key}`)
                .then(response => response.json())
                .then((result) => {
                result.data.results.forEach((item)=>{
                    this.marvelComic.push(item)
                    this.url = `${item.thumbnail.path}/${this.size}`
                    console.log(this.url);

                })
            })
                .catch((error) => {
                console.log(error);
            });
        }
    },
    setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
		
		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	}
}
</script>
<style lang="css">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	color: #2c3e50;
	margin-top: 60px;
}
Popup{
    background: #000;
}
ul  {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
ul li a{
    font-size: medium;
    text-align: center;
}
button{
    padding: 10px;
    margin: 10px;
}

</style>
