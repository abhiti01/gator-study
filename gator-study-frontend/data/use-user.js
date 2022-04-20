import useSWR from "swr";

const fetcher = async url => await fetch(url,{credentials:'include'}).then(r => r.json())
export default function useUser() {
  const { data, error,mutate } = useSWR("http://localhost:8000/api/User", fetcher, {
      revalidateOnFocus: true,
      revalidateOnReconnect: true
  });
var loggedOut = error && error.status === 403;
if (data!== undefined && data.Id!==undefined){
    loggedOut = false;
}
console.log(loggedOut);
  return {
    loggedOut,
    mutate,
    user: data
  };
}