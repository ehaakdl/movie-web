<template>

  <VRow justify="end">
    <VCol cols="12">
      <div
        class="d-flex flex-wrap ga-0 ga-sm-2 ga-md-2 ga-lg-2 ga-xl-2 align-end justify-md-center justify-lg-center justify-start">
        <div class="flex-grow-1">
          <VLabel>등록날짜</VLabel>
          <VueDatePicker :model-value="selectedCreatedAtRange" range :enable-time-picker="false"
            @update:model-value="handleCreatedAt" />
        </div>
        <div class="flex-grow-1">
          <VLabel>개봉날짜</VLabel>
          <VueDatePicker :model-value="selectedOpenAtRange" range :enable-time-picker="false"
            @update:model-value="handleOpenAt" />
        </div>
        <div class="flex-grow-1">
          <v-text-field v-model="movieName" style=" min-width: 10rem;" clearable placeholder="영화제목"
            append-inner-icon="mdi-magnify" @keyup.enter="onClickSearch" @click:clear="onClearSearchField"
            @click:append-inner="onClickSearch" variant="outlined" hide-details="auto"></v-text-field>
        </div>
      </div>
    </VCol>

  </VRow>
  <v-data-table-server :loading=loading :page="page" :items-per-page="itemsPerPage" :headers="headers"
    :items="items" :items-length="totalCount" @update:options="handleOptions">
    <template v-slot:item.createdAt="{ item }">
      {{ formatDate(convertToLocalTime(item.createdAt), 'YYYY-MM-DD') }}
    </template>
    <template v-slot:item.openAt="{ item }">
      {{ formatDate(convertToLocalTime(item.openAt), 'YYYY-MM-DD') }}
    </template>
  </v-data-table-server>



</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/useMovieStore';
import { Pagination } from './typed';
import { getSortOrder, SortOrder } from '@/stores/constants';
import { useGlobalSnackbarStore } from '@/stores/useGlobalSnackbarStore';
import { convertToLocalTime, formatDate, getBeginningOfDay, getEndOfDayTime } from '@/utils/dateUtils';

const movieStore = useMovieStore()
const globalSnackbarStore = useGlobalSnackbarStore()

const defaultPage = 1
const defaultItemPerPage = 5

const headers = [
  { title: '영화명', align: 'start', sortable: false, key: 'movieName' },
  // { title: '감독명', align: 'end', key: 'director' },
  { title: '장르', align: 'end', key: 'genre' },
  { title: '개봉날짜', align: 'end', key: 'openAt' },
  { title: '생성날짜', align: 'end', key: 'createdAt' },
] as const

const movieName = ref('')
const loading = ref(false)
const selectedCreatedAtRange = ref<Date[]>()
const selectedOpenAtRange = ref<Date[]>()
const items = ref([])
const totalCount = ref(0)
const itemsPerPage = ref(5)
const page = ref(1)
const pagination = ref<Pagination>({
  itemsPerPage: itemsPerPage.value,
  page: page.value,
  sortBy: []
})


const onClickSearch = () => {
  resetPaginationAndLoadItems()
}
const onClearSearchField = () => {
  movieName.value = ''
  resetPaginationAndLoadItems()
}
const loadItems = (_pagination: Pagination) => {
  loading.value = true

  pagination.value = _pagination

  let startCreatedAt = undefined
  let endCreatedAt = undefined
  if (selectedCreatedAtRange.value) {
    startCreatedAt = getBeginningOfDay(selectedCreatedAtRange.value[0]).toISOString()
    endCreatedAt = getEndOfDayTime(selectedCreatedAtRange.value[1]).toISOString()
  }

  let startOpenAt = undefined
  let endOpenAt = undefined
  if (selectedOpenAtRange.value) {
    startOpenAt = getBeginningOfDay(selectedOpenAtRange.value[0]).toISOString()
    endOpenAt = getEndOfDayTime(selectedOpenAtRange.value[1]).toISOString()
  }

  const sort = pagination.value.sortBy ?? []
  const query = movieStore.createSearchRequest({
    ...pagination.value,
    pageSize: pagination.value.itemsPerPage,
    sortBy: sort.length > 0 ? sort[0].key : '',
    sortOrder: sort.length > 0 ? sort[0].order : SortOrder.Desc,
    startCreatedAt,
    endCreatedAt,
    startOpenAt,
    endOpenAt,
    movieName: movieName.value
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
  }).finally(() => {
    loading.value = false
  })
}
const isMounted = ref(false)
const handleOptions = (_pagination:Pagination) => {
  if(isMounted.value)
    loadItems(_pagination)
}
const handleCreatedAt = (date: Date[]) => {
  selectedCreatedAtRange.value = date
  resetPaginationAndLoadItems()
}
const handleOpenAt = (date: Date[]) => {
  selectedOpenAtRange.value = date
  resetPaginationAndLoadItems()
}

const resetPaginationAndLoadItems = () => {
  /**
   * v-model로 연결된 데이터가 이전 값과 동일할 경우,
   * @update:options로 연결된 loadItems가 호출되지 않으므로,
   * 이 경우에는 loadItems를 직접 호출해야 합니다.
   */
  if (page.value === defaultPage && itemsPerPage.value === defaultItemPerPage) {
    loadItems(pagination.value);
  }

  page.value = defaultPage;
  itemsPerPage.value = defaultItemPerPage;
};
const route = useRoute()

const parseSortQuery = (sortQueryParam: string) => {
  const [key, order] = sortQueryParam.split(',');

  return [{
    key: key || '',
    order: getSortOrder(order) || SortOrder.Desc,
  }];
}

// queryparam example
// http://localhost:3000/movie/search?startCreatedAt=2024-04-04T11:11:11&endCreatedAt=2024-05-14T11:11:11&page=10&pageSize=10&sort=openAt,asc&startOpenAt=2024-01-04T11:11:11&endOpenAt=2023-05-14T11:11:11
const setFetchParams = () => {
  /**
   * Vdatatableserver 컴포넌트에 바인딩된 변수중 하나만 업데이트해도
   * @update:options 이벤트가 호출되기 때문에 mounted 이벤트에서 API 호출해줄 필요가없다.
   */
  itemsPerPage.value = route.query?.pageSize ?? defaultItemPerPage
  pagination.value.itemsPerPage = itemsPerPage.value

  if (route.query?.sort) {
    pagination.value.sortBy = parseSortQuery(route.query.sort)
  }
  if (route.query?.startCreatedAt && route.query?.endCreatedAt) {
    selectedCreatedAtRange.value = [new Date(route.query.startCreatedAt), new Date(route.query.endCreatedAt)]
  }
  if (route.query?.startOpenAt && route.query?.endOpenAt) {
    selectedOpenAtRange.value = [new Date(route.query.startOpenAt), new Date(route.query.endOpenAt)]
  }
  if (route.query?.movieName) {
    movieName.value = route.query.movieName
  }
}
onMounted(() => {
  setFetchParams()
  isMounted.value = true
  // loadItems(pagination.value)
})
</script>
