<template>
  <section class="container">

      <h2>{{ $t('profile_page') }}</h2>
       

     <nav class="navbar">
         <ol>
         <li><nuxt-link :to="localePath('profile')">{{ $t('profile_default_child') }}</nuxt-link></li>
         <li><nuxt-link :to="localePath('profile-other')">{{ $t('profile_other_child') }}</nuxt-link></li>
         </ol>
         <nuxt-child :key="$route.params.id"/>
      </nav>
  </section>


</template>

<script>

export default {
 
}
</script>
