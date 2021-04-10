export interface IHotelList {
  img: string,
  adress: string,
  phone: string,
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  },
  social_info: {
    title: string,
    img: string,
    folowers: number,
    following: number
  },
  type: string
}

export const hotelList: IHotelList[] = [
  {
    img: '/assets/img/Turkey/Alanya/white_gold/1.jpg',
    adress: 'Gol Mah, Dadaşlar Cd. 2/1, 07460',
    phone: '+90 242 255 05 41',
    weather: {
      title: 'Alanya',
      icon: 'cloud',
      water: 18,
      temperature: 14
    },
    social_info: {
      title: 'WHITE GOLD HOTEL & SPA',
      img: '/assets/img/Turkey/Alanya/white_gold/2.jpg',
      folowers: 2850,
      following: 675
    },
    type: 'Turkey'
  },
  {
    img: '/assets/img/Turkey/Antalya/sherwood_exclusive/1.jpg',
    adress: 'Kemerağzı Kopak Çay Mevkii Kemerağzı Mahalles, Lara Cd., 07112 Aksu',
    phone: '+90 242 352 28 00',
    weather: {
      title: 'Antalya',
      icon: 'sun',
      water: 20,
      temperature: 20
    },
    social_info: {
      title: 'SHERWOOD EXCLUSIVE LARA',
      img: '/assets/img/Turkey/Antalya/sherwood_exclusive/2.jpg',
      folowers: 3000,
      following: 500
    },
    type: 'Turkey'
  },
  {
    img: '/assets/img/Greece/Rodos/semiramis/1.jpg',
    adress: 'I. Metaxa 18, Rodos 851 31',
    phone: '+30 2241 020741',
    weather: {
      title: 'Rodos',
      icon: 'sun',
      water: 22,
      temperature: 25
    },
    social_info: {
      title: 'SEMIRAMIS CITY HOTEL',
      img: '/assets/img/Greece/Rodos/semiramis/2.jpg',
      folowers: 3454,
      following: 488
    },
    type: 'Greece'
  },
]

function getTypes() {
  const types = new Set();
  types.add("All");
  hotelList.forEach((hotel) => types.add(hotel.type));
  return types;
}

export const typesArr = Array.from(getTypes());




