<template>
  <div class="container">
    <div>
      <div v-if="$fetchState.pending"><Loading /></div>
      <p v-else-if="$fetchState.error">Bir şeyler oldu :(</p>
      <div v-else>
        <div class="filter">
          <input
            v-model="search"
            class="search-input"
            type="text"
            placeholder="Search.."
          />
          <select v-model="city" class="city-select" name="city">
            <option value="">Şehir Seç</option>
            <option v-for="job in jobs.joblists" :key="job.jobId">
              {{ job.cityName }}
            </option>
          </select>
        </div>
        <template v-if="filterJobs.length">
          <ul>
            <li v-for="job in filterJobs" :key="job.jobId">
              <nuxt-link :to="`/jobdetail/${job.jobId}`,">
                <div class="title">{{ job.positionName }}</div>
                <div class="company">{{ job.companyName }}</div>
                <div class="bottom">
                  <div class="city">
                    {{ job.cityName }} - {{ job.townName }}
                  </div>
                  <div class="distance">{{ job.distance }}</div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </template>

        <div v-else class="empty">
          <b>{{ search }}</b> ait sonuç bulunamadı.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.jobs = await fetch('/api/joblist').then((res) => res.json())
  },
  data() {
    return {
      search: '',
      city: '',
      jobs: [],
    }
  },

  computed: {
    filterJobs() {
      return this.filterJobsByCity(this.filterJobsBySearch(this.jobs.joblists))
    },
  },

  methods: {
    filterJobsByCity(jobs) {
      return jobs.filter((job) => !job.cityName.indexOf(this.city))
    },

    filterJobsBySearch(jobs) {
      return jobs.filter((job) => {
        return job.positionName
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    },
  },
  fetchOnServer: false,
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    background-color: #ffffff;
    margin-bottom: 15px;
    padding: 10px 12px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px rgb(27 27 27 / 5%);
    transition: 200ms;
    cursor: pointer;
    .title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .company {
      margin-bottom: 8px;
    }

    .city {
      margin-bottom: 8px;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
    }
    &:hover {
      background-color: rgb(229, 229, 233);
      box-shadow: none;
    }
    a {
      padding: 8px 10px;
      display: block;
      color: black;
      text-decoration: none;
    }
  }
}
.filter {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  .search-input,
  .city-select {
    border: none;
    background-color: #ffffff;
    padding: 8px 10px;
    box-shadow: 2px 2px 3px rgb(27 27 27 / 5%);
  }
}
.empty {
  padding: 10px;
  text-align: center;
}
</style>
