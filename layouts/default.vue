<template>
  <div> 
  <div>
    <nuxt-link  v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
  </div>
    <ul class="navbar">
        <li><nuxt-link :to="localePath('index')">{{ $t('index_page') }}</nuxt-link></li>
        <li><nuxt-link :to="localePath('profile')">{{ $t('profile_page') }}</nuxt-link></li>
      </ul>   

    <nuxt/>
  </div>
</template>

<style>
</style>
