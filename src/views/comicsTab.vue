<template lang="html">
    <div>
        
        <Comics/>
        <marvelCom
       />
    </div>
</template>
<script>
import Comics from '@/components/marvel-comics';
import marvelCom from '@/components/marvel-comic.vue';
// import {isInfoPopupVisible} from '@/components/marvel-comics'
    export default{
        name: 'marvel-comics',
        components:{
            Comics,
            marvelCom
        }
    
    
}
    
</script>

<style lang="css">

</style>