import moment from "moment";

interface parseDateProps {
    format?: string;
    date: Date
}

export const parseDate = (props: parseDateProps) => {
    return moment(props?.date)?.format(props?.format ? props?.format : "MMM Do YY");
}