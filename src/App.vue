<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section content-title-group">
     <Passengers/>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
import Passengers from '@/components/passengers';

export default {
  name: 'App',
  components: { HeaderBar,Passengers },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
