<template>
<div class='main'>
  <div class="main__header">Domino's pizza</div>
  <div class='logo'></div>
  <div class="main__content">
    <div class="hello">
      <div class='header'>{{ FullMessage }}</div>
      <div class='content' id='content' itemid="content">
        <div class='description' > 
          <p><span v-html="Description"></span></p>
        </div>
        <div class="buttons"> 
          <div class="button" @click="clicked">{{Button}}</div>
        </div>
      </div>
      <div class='sharing hide' id='share'>
        <div class="ya-share2" data-services="vkontakte,facebook,twitter,telegram"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Hello from '../ts/Hello'

export default Hello;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import url('../less/hello.less');
</style>
