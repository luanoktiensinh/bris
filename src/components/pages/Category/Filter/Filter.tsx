import { CategoryFilterProps } from "@/components/pages/Category/Filter/Filter.type";
import { CategoryFilterItem } from "@/components/pages/Category/Filter/Item";
import { useRef } from "react";

export const CategoryFilter = ({
  facets,
  filter,
  setFilters,
}: CategoryFilterProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef}>
      {facets.map((facet, index) => (
        <CategoryFilterItem
          key={facet.attribute_code}
          facet={facet}
          value={filter[facet.attribute_code] ?? []}
          setValue={value => setFilters({
            ...filter,
            [facet.attribute_code]: value,
          })}
		  defaultExpanded={index < 3}
        />
      ))}
    </form>
  );
};
