import React, { useEffect, useState } from "react";
import { getCategories, searchTracks } from "../../API/api";
import CategoryCard from "./CategoryCard";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "../../assets/SearchIcon.svg"
import { useNavigate, createSearchParams, useParams, useLocation } from "react-router-dom";
import debounce from "debounce";
import SearchDataSection from "./SearchDataSection/SearchDataSection";

interface SearchSectionProps {

}

const SearchSection: React.FC<SearchSectionProps> = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentSearchValue = location?.search ? location?.search?.split("=")[1] : "";

    const [categoriesList, setCategoriesList] = useState<Array<any>>([])
    const [searchData, setSearchData] = useState<any>(null)
    const [searchValue, setSearchValue] = useState<string>(currentSearchValue);


    console.log({ location });

    useEffect(() => {
        if(categoriesList?.length === 0) {
            getCategories()?.then(data => {
                setCategoriesList([...data?.data?.categories?.items])
            })
        }
    }, [categoriesList])

    // useEffect(() => {
    //     const dt = searchTracks("")?.then(data => {
    //         console.log({data})
    //     })
    // }, [])

    const getSearchData = (e: any) => {
        console.log(e?.target?.value)
        if (e?.target?.value) {
          searchTracks(e?.target?.value)?.then((data: any) => {
            setSearchData(data?.data);
          });
        }
    }

    const handleSearch = (e:any) => {
        setSearchValue(e?.target?.value);
        navigate({
          search: createSearchParams({
            query: e?.target?.value,
          }).toString(),
        });
        debounce(() => getSearchData(e), 1200)();
    };
    console.log({currentSearchValue, searchValue})

    useEffect(() => {
      console.log("in");
      if (currentSearchValue && !searchData) {
        searchTracks(currentSearchValue)?.then((data) => {
          setSearchData(data?.data);
        });
      }
    }, []);

    return (
      <div className="relative top-20 px-6">
        <div className="w-full p-[20px]">
          {" "}
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={SearchIcon} />
                </InputAdornment>
              ),
            }}
            inputProps={{
              style: {
                color: "#FFF",
                width: "20vw",
              },
            }}
            style={{ border: "2px solid #fff", borderRadius: "40px" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
            placeholder="What would you like to listen today?"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        {!currentSearchValue ? (
          <div className="grid grid-cols-12 gap-x-6 gap-y-6 bg-[#121212] text-white p-[20px]">
            {categoriesList?.length &&
              categoriesList?.map((category) => {
                return (
                  <CategoryCard
                    name={category?.name}
                    imageUrl={
                      category?.icons?.length ? category?.icons[0]?.url : ""
                    }
                    onClick={() => navigate(`/genre/${category?.id}`)}
                  />
                );
              })}
          </div>
        ) : (
          <SearchDataSection data={searchData} />
        )}
      </div>
    );
}

export default SearchSection