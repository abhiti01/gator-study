import useSWR from "swr";

const fetcher = async url => await fetch(url,{credentials:'include'}).then(r => r.json())
export default function useUser() {
  const { data, error,mutate } = useSWR("http://localhost:8000/api/User", fetcher);
  console.log(error);
  const loggedOut = error && error.status === 401;
  return {
    loggedOut,
    mutate,
    user: data
  };
}