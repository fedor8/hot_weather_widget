import {AtmosphereCondition, Resort} from '../../resort';

export const RESORTS: Resort[] = [
  {
    categories: ['HOTEL', 'WEATHER'],
    address: 'г. Комсомольск, ул. Ленина, 12б',
    phoneNumber: '+7901344224423',
    name: 'Пора отдохнуть!',
    picture: 'assets/images/1.jpg',
    weatherForcast: {
      airTemperature: 32,
      precipitation: AtmosphereCondition.Sun,
      waterTemperature: 26
    },
    socialMedia: {
      followers: 1023,
      following: 120546
    }
  },
  {
    categories: ['HOTEL'],
    address: '62 Yuya Rd, Jiyang Qu, Sanya Shi, Hainan Sheng, Китай, 572000',
    phoneNumber: '+86 898 3825 1888',
    name: 'The Best Hawaii Hotel in China',
    picture: 'assets/images/2.jpg',
    weatherForcast: {
      airTemperature: 22,
      precipitation: AtmosphereCondition.Cloudy,
      waterTemperature: 16
    },
    socialMedia: {
      followers: 1,
      following: 34240546
    }
  },
  {
    categories: ['HOTEL', 'WEATHER', 'TOURS'],
    address: 'Ninole Loop Rd, Naalehu, HI 96772, США',
    phoneNumber: '+1 808-961-8311',
    name: 'The Best Hawaii Hotel in the USA',
    picture: 'assets/images/3.jpg',
    weatherForcast: {
      airTemperature: 28,
      precipitation: AtmosphereCondition.Hurricane,
      waterTemperature: 28
    },
    socialMedia: {
      followers: 785,
      following: 32566
    }
  },
  {
    categories: ['FISHING', 'TOURS'],
    address: 'Lónsleira, Seyðisfjörður, Исландия',
    phoneNumber: '+1 808-961-8311',
    name: 'Lónsleira Apartments',
    picture: 'assets/images/4.jpg',
    weatherForcast: {
      airTemperature: 3,
      precipitation: AtmosphereCondition.Snow,
      waterTemperature: 1
    },
    socialMedia: {
      followers: 345345,
      following: 12345
    }
  },
  {
    categories: ['HOTEL', 'FISHING'],
    address: 'Ölüdeniz Mahallesi, 48340 Фетхие/Мугла, Турция',
    phoneNumber: '+90 252 617 04 03',
    name: 'Tonoz Beach Hotel',
    picture: 'assets/images/5.jpg',
    weatherForcast: {
      airTemperature: 33,
      precipitation: AtmosphereCondition.Sun,
      waterTemperature: 21
    },
    socialMedia: {
      followers: 345345,
      following: 12345
    }
  },
  {
    categories: ['FISHING'],
    address: 'Herdade dos Salgados, 8200-424 Albufeira, Португалия',
    phoneNumber: '+351 289 244 200',
    name: 'Hotel Salgados Palace',
    picture: 'assets/images/6.jpg',
    weatherForcast: {
      airTemperature: 13,
      precipitation: AtmosphereCondition.Rain,
      waterTemperature: 16
    },
    socialMedia: {
      followers: 3434,
      following: 112
    }
  }
];


