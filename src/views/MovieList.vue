<template>

  <VCard>
    <VCardText>
      <VRow justify="end">
        <VCol cols="12" md="3" lg="3">
          <VueDatePicker v-model.range="selectedDateRange" range :enable-time-picker="false" />
        </VCol>
      </VRow>
    </VCardText>

    <VCardText>
      <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="items"
        :items-length="totalCount" @update:options="loadItems"></v-data-table-server>
    </VCardText>
  </VCard>


</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/useMovieStore';
import { Pagination } from './typed';
import { SortOrder } from '@/stores/constants';
import { useGlobalSnackbarStore } from '@/stores/useGlobalSnackbarStore';
import { VCard, VCardText } from 'vuetify/components';

const movieStore = useMovieStore()
const globalSnackbarStore = useGlobalSnackbarStore()
const headers = [
  { title: '영화명', align: 'start', sortable: false, key: 'movieName' },
  // { title: '감독명', align: 'end', key: 'director' },
  { title: '장르', align: 'end', key: 'genre' },
  { title: '개봉날짜', align: 'end', sortable: false, key: 'openAt' },
  { title: '생성날짜', align: 'end', key: 'createdAt' },
] as const

const selectedDateRange = ref()
const items = ref([])
const totalCount = ref(0)
const itemsPerPage = ref(5)

const loadItems = (pagination: Pagination) => {
  const sort = pagination.sortBy ?? []
  const query = movieStore.createSearchRequest({
    page: pagination.page,
    pageSize: pagination.itemsPerPage,
    sortBy: sort.length > 0 ? sort[0].key : '',
    sortOrder: sort.length > 0 ? sort[0].order : SortOrder.Desc
  })

  movieStore.getMovies(query).then((res) => {
    items.value = res.data.contents?.items ?? []
    totalCount.value = res.data.contents?.totalCount ?? 0
  }).catch((error) => {
    if (error.data?.message) {
      globalSnackbarStore.show(error.data.message)
    } else {
      globalSnackbarStore.showUnknown()
    }
  })
}
watch(selectedDateRange, () => {
  console.log(selectedDateRange.value)
})
</script>
