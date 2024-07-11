import React from 'react'
import { parseDataForSubcontentType } from '../../../utility';
import SubContentType from '../../ContentArea/SubContentType';
import TopResultSection from './TopResultsSection'

interface SearchDataSectionProps {
    data: any
}

const SearchDataSection = (props: SearchDataSectionProps) => {
    console.log({data: props?.data})
  return (
    <div className="relative mt-[2vh]">
      <div className="z-60 !bg-red grid grid-cols-12 gap-x-4">
        <TopResultSection data={props?.data?.tracks?.items} />
      </div>
      <div className="mt-10">
        <SubContentType
          listData={
            props?.data
              ? [
                  ...parseDataForSubcontentType({
                    dataList: props?.data?.artists?.items,
                    type: "artist",
                  }),
                ].slice(0, 5)
              : []
          }
          style={{
            parentClassName: "grid-cols-10",
            cardClassName: "aspect-[10/13]",
          }}
          type={"artist"}
          navigatingRoute={"artists"}
        />
      </div>
      <div className="mt-10">
        <SubContentType
          listData={
            props?.data
              ? [
                  ...parseDataForSubcontentType({
                    dataList: props?.data?.tracks?.items,
                    type: "playlist",
                  }),
                ].slice(0, 5)
              : []
          }
          style={{
            parentClassName: "grid-cols-10",
            cardClassName: "aspect-[10/13]",
          }}
          navigatingRoute={"featured-playlist"}
        />
      </div>
      <div className="mt-10">
        <SubContentType
          listData={
            props?.data
              ? [
                  ...parseDataForSubcontentType({
                    dataList: props?.data?.playlists?.items,
                    type: "playlist",
                  }),
                ].slice(0, 5)
              : []
          }
          style={{
            parentClassName: "grid-cols-10",
            cardClassName: "aspect-[10/13]",
          }}
          navigatingRoute={"featured-playlist"}
        />
      </div>
      <div className="mt-10">
        <SubContentType
          listData={
            props?.data
              ? [
                  ...parseDataForSubcontentType({
                    dataList: props?.data?.albums?.items,
                    type: "playlist",
                  }),
                ].slice(0, 5)
              : []
          }
          style={{
            parentClassName: "grid-cols-10",
            cardClassName: "aspect-[10/14]",
          }}
          navigatingRoute={"featured-playlist"}
        />
      </div>
    </div>
  );
};

export default SearchDataSection