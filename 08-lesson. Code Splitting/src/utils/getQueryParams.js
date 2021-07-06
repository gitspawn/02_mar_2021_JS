import queryString from "query-string";

export default function getQueryParams(str) {
    return queryString.parse(str);
}
