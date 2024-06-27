import React, { useEffect, useState } from "react";
import { getCategories } from "../../API/api";
import CategoryCard from "./CategoryCard";

interface SearchSectionProps {

}

const SearchSection: React.FC<SearchSectionProps> = () => {

    const [categoriesList, setCategoriesList] = useState<Array<any>>([])

    useEffect(() => {
        if(categoriesList?.length === 0) {
            getCategories()?.then(data => {
                setCategoriesList([...data?.data?.categories?.items])
            })
        }
    }, [categoriesList])

    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 bg-[#121212] text-white p-[20px]">
          {categoriesList?.length &&
            categoriesList?.map((category) => {
              return (
                <CategoryCard
                  name={category?.name}
                  imageUrl={
                    category?.icons?.length ? category?.icons[0]?.url : ""
                  }
                />
              );
            })}
        </div>
    );
}

export default SearchSection