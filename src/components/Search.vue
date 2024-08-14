<template>
  <div class="search-wrapper">
    <FloatLabel>
      <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search"
        fluid>
        <template #option="slotProps">
          <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
              :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
          </div>
        </template>
      </AutoComplete>
      <label for="ac">search</label>
    </FloatLabel>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import AutoComplete from 'primevue/autocomplete'
import { useFetch } from '@vueuse/core'
import FloatLabel from 'primevue/floatlabel'

// import { CountryService } from "@/service/CountryService";

// onMounted(() => {
//     CountryService.getCountries().then((data) => (countries.value = data));
// });

// const countries = ref();
// const selectedCountry = ref();
// const filteredCountries = ref();


// const search = (event) => {
//     setTimeout(() => {
//         if (!event.query.trim().length) {
//             filteredCountries.value = [...countries.value];
//         } else {
//             filteredCountries.value = countries.value.filter((country) => {
//                 return country.name.toLowerCase().startsWith(event.query.toLowerCase());
//             });
//         }
//     }, 250);
// }
//

</script>

<style scoped>
/* .input[type="text"] {
  font-weight: 400;
  font-size: 14px;
} 

.search-wrapper {
  width: 100%;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 2px solid var(--orange-color);
  display: flex;
  align-items: center;
  padding: 0 12px 0 11px;
  position: relative;
}

.input {
  width: 100%;
  height: 100%;
  padding-left: 25px;
}

.input[type="text"] {
  font-weight: 400;
  font-size: 15px;
}

.icon {
  width: 19px;
  position: absolute;
  color: var(--orange-color);
}

.input:focus + .search_container {
  box-shadow: 0 0 8px #ddd;
}

.IoCloseSharp {
  width: 22px;
  padding-top: 5px;
  color: var(--green-color);
}

.input:focus + .IoCloseSharp {
  color: var(--orange-color);
}

.results-list {
  width: 100%;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 0 8px #ddd;
  max-height: 300px;
  overflow-y: auto;

  position: absolute;
  top: 50px;
  left: 0;
  z-index: 3;
}

.results-list-item {
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  font-weight: 300;
  font-size: 15px;
}

.results-list-item:hover {
  background-color: #ddd;
  cursor: pointer;
} */

</style>

