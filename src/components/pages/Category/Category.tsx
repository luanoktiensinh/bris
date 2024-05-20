import {CategoryPageProps} from "@/components/pages/Category/Category.type";
import styles from './Category.module.scss';
import {CategoryContainer} from "@/components/pages/Category/Container";
import {useServerCategory} from "@/components/pages/Category/useCategory.server";
import {Category} from "@/mock/data";
export const CategoryPage = async ({
     data, searchParams, gridPerPage
 }: CategoryPageProps) => {
    const { variables, getCategory } = useServerCategory({uid: data.uid, searchParams, gridPerPage});
    const category = await getCategory();
	// const category = Category;
    return (<div className={"container " + styles.main}>
        <h1 className={styles.title}>{data.name}</h1>
        <CategoryContainer data={category}  uid={data.uid} filters={variables.variables} />
    </div>);
};