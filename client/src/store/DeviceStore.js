import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'MSI'},
      {id: 4, name: 'Lenovo'},

    ]
    this._devices = [
      {id: 1, name: 'iph12', price: 25000, rating: 5, img: '1111', },
      {id: 2, name: 'iph12', price: 25000, rating: 5, img: '1111', },
      {id: 3, name: 'iph12', price: 25000, rating: 5, img: '1111', },
      {id: 4, name: 'iph12', price: 25000, rating: 5, img: '1111', },
      {id: 5, name: 'iph12', price: 25000, rating: 5, img: '1111', },
      {id: 6, name: 'iph12', price: 25000, rating: 5, img: '1111', },
    ]
    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    console.log(brand)
    this._selectedBrand = brand
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}