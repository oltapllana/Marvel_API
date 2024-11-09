<template lang="html">
    <div>
        <h2>Welcome to Marvel Characters</h2>
        <input type="text" v-model="search" placeholder="Type marvel character">
        <hr>
        <div class="parent ">
            <ul>
                <li v-for="marvelcharacter in filteredCharacters" :key="marvelcharacter.id">
                    <router-link :to="{ name: 'marvel-character', params: { id: marvelcharacter.id } }"><img
                            :src="`${marvelcharacter.thumbnail.path}.${marvelcharacter.thumbnail.extension}`"
                            :alt="marvelcharacter.name" class="character-img" />
                        {{ marvelcharacter.name }}
                        <button>Show more</button>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
li a {
    color: black;
    font-size: larger;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

li {
    margin-top: 10px;
}

input {
    padding: 15px 30px;
    margin-bottom: 30px;
}
.character-img{
    width: 300px;
    height: 300px;
    object-fit: contain;
}
</style>
<script>
import { public_key } from '@/views/marvelCharacters';
export default {
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
                        console.log('item', item);
                        this.marvelCharacters.push(item);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {
        filteredCharacters: function () {
            return this.marvelCharacters.filter((marvelcharacter) => {
                if (marvelcharacter.name[0].toLowerCase() == this.search[0]) {
                    return marvelcharacter.name.toLowerCase().match(this.search.toLowerCase());
                }
                else if (this.search == "") {
                    return marvelcharacter.name
                }
                else {
                    return ""
                }
            })
        }
    }
}

</script>

<style lang="css">
.parent ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    color: white;
}

button {
    background: white;
    color: black;
    border: 1px black solid;
    padding: 10px;
    border-radius: 20px;
}

img {
    margin: 10px;
}

@media (max-width: 767px) {
    .parent ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        color: white;
    }
}

@media (min-width:768px)and (max-width: 1024px) {
    .parent ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>