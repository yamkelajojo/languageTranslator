<template>
  <div id="main" class="flex-cnt">
    <form action="" class="flex-cnt" id="form">
      <div class="l-holder">
        <label>From</label>
      </div>
      <input type="text" v-model="userInput" class="inp" id="inpFrom" />
      <div class="l-holder">
        <label>To</label>
      </div>
      <input type="text" v-model="userInput" class="inp" id="inpTo" />
    </form>
    <div id="block" class="flex-cnt">
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import "/composables/LanguageTranslator";
// import "../composables/languageTranslatorController";

let userInput = ref("");
let result = ref("Dojo");
const translator = new LanguageTranslator();
console.log(result.value);
console.log("DojoMN in Main.vue");

result.value = await translator.getLanguages();
console.log(await translator.listLanguages(), "This is the main Page.");
</script>

<style scoped>
#main {
  flex: 1;
  flex-direction: column;
  gap: 4%;
}

#block {
  background-color: rgb(209, 208, 194);
  height: 350px;
  width: 350px;
  color: black;
  font-size: 30px;
}

.inp {
  background-color: transparent;
  caret-color: blue;
  /* height: 2rem; */
  font-size: 20px;
}

#form {
  flex-direction: column;
  text-align: start;
}

.l-holder {
  width: 100%;
}

/* * {
  border: 1px solid red;
} */
</style>
