<template>
  <v-data-table :headers="headers" :items="items" density="compact" item-key="name" :items-per-page="itemsPerPage"
    @update:itemsPerPage="updateItemsPerPage" @update:page="updatePage"></v-data-table>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Plant', align: 'start', sortable: false, key: 'name' },
  { title: 'Light', align: 'end', key: 'light' },
  { title: 'Height', align: 'end', key: 'height' },
  { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
  { title: 'Price ($)', align: 'end', key: 'price' },
]
const itemsPerPage = ref(5)
const items = ref([{
  name: 'Fern',
  light: 'Low',
  height: '20cm',
  petFriendly: 'Yes',
  price: 20,
},
{
  name: 'Snake Plant',
  light: 'Low',
  height: '50cm',
  petFriendly: 'No',
  price: 35,
},
{
  name: 'Monstera',
  light: 'Medium',
  height: '60cm',
  petFriendly: 'No',
  price: 50,
},
{
  name: 'Pothos',
  light: 'Low to medium',
  height: '40cm',
  petFriendly: 'Yes',
  price: 25,
},
{
  name: 'ZZ Plant',
  light: 'Low to medium',
  height: '90cm',
  petFriendly: 'Yes',
  price: 30,
},
{
  name: 'ZZ Plant213',
  light: 'Low to medium',
  height: '90cm',
  petFriendly: 'Yes',
  price: 30,
},])
const updatePage = (page: number) => {
  console.log(page)
}
const updateItemsPerPage = (itemsPerPage: number) => {
  console.log(itemsPerPage)
}

</script>
