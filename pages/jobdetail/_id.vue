<template>
  <div class="container">
    <div v-if="$fetchState.pending"><Loading /></div>
    <p v-else-if="$fetchState.error">Bir şeyler oldu :(</p>
    <nuxt-link to="/" class="back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-left"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    </nuxt-link>
    <div v-if="result.jobdetail" class="detail-page">
      <h1>{{ result.jobdetail['positionName'] }}</h1>
      <h2>{{ result.jobdetail['companyName'] }}</h2>
      <p>{{ result.jobdetail['description'] }}</p>
      <p>{{ result.jobdetail['cityName'] }}</p>
      <p>{{ result.jobdetail['townName'] }}</p>
      <p>{{ result.jobdetail['address'] }}</p>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.result = await fetch(
      `/api/jobdetail/${this.$route.params.id}`
    ).then((res) => res.json())
  },

  data() {
    return {
      result: [],
    }
  },

  fetchOnServer: false,
}
</script>
<style lang="scss">
.back {
  display: inline-flex;
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  box-shadow: 2px 2px 3px rgb(27 27 27 / 5%);
  border-radius: 50%;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 200ms;
  &:hover {
    transform: translateX(-2px);
  }
}
.detail-page {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 2px 2px 3px rgb(27 27 27 / 5%);

  h1,
  h2 {
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
  }
}
</style>
