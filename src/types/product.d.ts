type ProductGallery = {
    label?: string
    url?: string,
    disabled?: boolean
    position?: number
}
type ConfigurableAttributeOption = {
    uid: string
    code?: string
    value_index:? number
    label?: string
}
type ProductCategory = {
	uid: string,
	name: string,
	url_path: string,
	breadcrumbs?: Breadcrumb[]
}
type SwatchData = {
	value: string,
	thumbnail?: string,
}
type ConfigurableProductOptionsValue = {
	label: string,
	swatch_data: SwatchData
}
type ConfigurableProductOption = {
	attribute_code: string,
	values: ConfigurableProductOptionsValue[]
}