import React from 'react'
import { MusicCard } from '../../components';
import { useNavigate } from "react-router-dom";


interface SubContentTypeProps {
  listData: any;
  type?: any;
  navigatingRoute?: any | false;
  style?: {
    parentClassName?: string;
    cardClassName?: string
  }
}

const SubContentType:React.FC<SubContentTypeProps> = (props) => {

    const navigate = useNavigate();

    return (
      <div className={`grid grid-cols-12 gap-x-1 ${props?.style?.parentClassName}`}>
        {props?.listData?.slice(0, 6)?.map((item: any) => {
          return (
            <MusicCard
              style={{ backgroundColor: "#ccc", background: "transparent" }}
              className={`col-span-2 aspect-[10/16] ${props?.style?.cardClassName}`}
              data={{
                name: item?.name,
                image: item?.images ? item?.images[0]?.url : "",
                date: item?.date,
                description: item?.description,
              }}
              type={props?.type}
              onClick={props?.navigatingRoute ? () => navigate(`/${props?.navigatingRoute}/${item?.id}`) : () => null}
            />
          );
        })}
      </div>
    );
}

export default SubContentType