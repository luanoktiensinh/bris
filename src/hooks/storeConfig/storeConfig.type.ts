export interface IStoreConfigData {
    storeConfig: IStoreConfig,
    currency: ICurrency
}
interface ICurrency {
    base_currency_code: string
}
interface IStoreConfig {
    store_code: string,
    locale: string,
    header_logo_src: string
}