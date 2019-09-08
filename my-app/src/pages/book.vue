<template>
    <div>
        <router-link-nav></router-link-nav>
        <book-top></book-top>
        <book-paper-books></book-paper-books>
        <find-book></find-book>
        <book-con></book-con>
        <movie-bot></movie-bot>
    </div>
</template>
<script>
import routerLinkNav from '../components/routerLinkNav'
import BookTop from './book/BookTop'
import BookPaperBooks from './book/BookPaperBooks'
import FindBook from './book/FindBook'
import BookCon from './book/BookCon'
import MovieBot from './movie/MovieBot'
export default {
    components:{
        routerLinkNav,
        BookTop,
        BookPaperBooks,
        FindBook,
        BookCon,
        MovieBot
    }
}
</script>
<style scoped>
    
</style>