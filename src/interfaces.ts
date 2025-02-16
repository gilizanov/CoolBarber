export interface IReview {
  id: number
  imageUrl: string
  name: string
  txt: string
}

export interface IPriceListItem {
  id: number
  imageUrl: string
  title: string
  services: TypePriceListServices[]
}

type TypePriceListServices = {
  name: string
  time: number
  price: number
}

export interface ITeamItem {
  id: number
  imageUrl: string
  name: string
  descr: string
  images: string[]
}
