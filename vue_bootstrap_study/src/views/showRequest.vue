<template>
  <div class="showRequest">
    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
  export default {
    name: 'showRequest',
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, name: '전현빈', contents: '나는 전현빈이다' },
          { id: 2, name: '황영준', contents: '이거 잘 못만들었다' },
          { id: 3, name: '김훈민', contents: '!이거 잘 못만들었다' },
          { id: 4, name: '박주현', contents: '#이거 잘 못만들었다' },
          { id: 5, name: '박종인', contents: '@이거 잘 못만들었다' },
          { id: 6, name: '송성규', contents: '^이거 잘 못만들었다' },
          { id: 7, name: '최혁중', contents: '&이거 잘 못만들었다' },
          { id: 8, name: '조재균', contents: '*이거 잘 못만들었다' },
          { id: 9, name: '강현구', contents: '(이거 잘 못만들었다' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>