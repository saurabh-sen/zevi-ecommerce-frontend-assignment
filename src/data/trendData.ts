import trend1 from '../assets/trend-1.jpg'
import trend2 from '../assets/trend-2.jpg'
import trend3 from '../assets/trend-3.jpg'
import trend4 from '../assets/trend-4.jpg'
import trend5 from '../assets/trend-5.jpg'

export interface ItrendData {
  _id: string;
  image: string;
  title: string;
}

export interface IpopularSuggestionsData {
  _id : string;
  title: string;
}

export const trendData: ItrendData[] = [
  {
    _id: "1",
    image: trend1,
    title: "Shirt with puffed sleeves",
  },
  {
    _id: "2",
    image: trend2,
    title: "Linen jumpsuit",
  },
  {
    _id: "3",
    image: trend3,
    title: "White formal suit",
  },
  {
    _id: "4",
    image: trend4,
    title: "Pattern dresses",
  },
  {
    _id: "5",
    image: trend5,
    title: "Leather shirt dress",
  },
];

export const popularSuggestionsData: IpopularSuggestionsData[] = [
  {
    _id: "1",
    title: 'Striped shirt dress'
  },
  {
    _id: "2",
    title: 'Satin shirts'
  },
  {
    _id: "3",
    title: 'Denim jumpsuit'
  },
  {
    _id: "4",
    title: 'Leather dresses'
  },
  {
    _id: "5",
    title: 'Solid tshirts'
  }
]