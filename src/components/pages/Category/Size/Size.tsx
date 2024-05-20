import {CategorySizeProps} from "@/components/pages/Category/Size/Size.type";

const default_page_sizes = [24, 35, 48];
export const CategoryPageSize = ({ pageSize, setPageSize }: CategorySizeProps) => {
    return <select className="select" value={pageSize} onChange={e => setPageSize(+e.target.value)}>
        {
            default_page_sizes.map(size => {
                return <option key={size} value={size}>Items Per Page: {size}</option>;
            })
        }
    </select>;
};