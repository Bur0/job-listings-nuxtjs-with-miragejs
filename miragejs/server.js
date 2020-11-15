import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      joblist: Model,
      jobdetail: Model,
    },

    seeds(server) {
      server.create('joblist', {
        jobId: 'C71CD1954BA149BCAF42B25F775EA4FB1',
        positionName: 'Gerber Operatörü',
        companyName: 'Testoğlu Lahmacun Pide Ve Kebap',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl:
          'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
        distance: '8,53 km yakınında',
        latitude: 41.050968170166023,
        longitude: 29.062856674194339,
        cityName: 'İstanbul',
        townName: 'Çengelköy Mahallesi',
      })
      server.create('joblist', {
        jobId: 'C71CD1954BA149BCAF42B25F775EA4FB2',
        positionName: 'İngilizce Öğretmeni',
        companyName: 'Testoğlu Lahmacun Pide Ve Kebap',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl:
          'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
        distance: '8,53 km yakınında',
        latitude: 41.050968170166023,
        longitude: 29.062856674194339,
        cityName: 'Ankara',
        townName: 'Çengelköy Mahallesi',
      })
      server.create('jobdetail', {
        jobId: 'C71CD1954BA149BCAF42B25F775EA4FB1',
        positionName: 'Jandarma Bölge Komutanı',
        companyName: 'Vosyoyvsyvosyv',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl: 'https://localhost/bluecollar/company/job/Default/6.jpg',
        countryCode: 'TR',
        countryName: 'Turkey',
        cityName: 'İstanbul',
        townName: 'Ümraniye',
        address:
          'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
        postalCode: 34768,
        hasLatitude: true,
        hasLongitude: true,
        latitude: 41.0266502,
        longitude: 29.1157803,
        description: 'syovsvyosvyoyvsoby',
        status: 1,
        contactPhone: {
          countryCallingCode: '+90',
          areaCode: '879',
          number: '9797979',
        },
      })
      server.create('jobdetail', {
        jobId: 'C71CD1954BA149BCAF42B25F775EA4FB2',
        positionName: 'Jandarma 2 Bölge Komutanı',
        companyName: 'Vosyoyvsyvosyv',
        durationDay: 0,
        durationDayText: 'Taze çıktı!',
        imageUrl: 'https://localhost/bluecollar/company/job/Default/6.jpg',
        countryCode: 'TR',
        countryName: 'Turkey',
        cityName: 'İstanbul',
        townName: 'Ümraniye',
        address:
          'Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey',
        postalCode: 34768,
        hasLatitude: true,
        hasLongitude: true,
        latitude: 41.0266502,
        longitude: 29.1157803,
        description: 'syovsvyosvyoyvsoby',
        status: 1,
        contactPhone: {
          countryCallingCode: '+90',
          areaCode: '879',
          number: '9797979',
        },
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/joblist', (schema) => {
        return schema.joblists.all()
      })

      this.get('/jobdetail/:id', ({ jobdetails }, request) => {
        const { id } = request.params
        return jobdetails.findBy({ jobId: id })
      })
    },
  })

  return server
}
