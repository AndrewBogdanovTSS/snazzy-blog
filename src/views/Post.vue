<template>
  <template v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </template>
</template>

<script setup async>
import {useRoute} from 'vue-router'
import useItem from '../composables/useItem'

const route = useRoute()
const {item: post, fetchOne: fetchPost} = useItem('posts')
const {item: user, fetchOne: fetchUser} = useItem('users')

await fetchPost(route.params.id)
await fetchUser(post.value.userId)
</script>
