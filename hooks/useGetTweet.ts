import { useEffect, useMemo, useState } from "react";
import { twitterServices } from "@/service/twitterServices";

export function useGetTweet(id : string) {
  const [tweet, setTweet] = useState<any>(null);

  const getTweet = async () => {
    if (!id) return;
    const response = await twitterServices.getTweets(id);
    setTweet(response.data);
  };

  useEffect(() => {
    getTweet();
  }, [id]);

  return useMemo(() => {
    return {
      tweet,getTweet
    };
  }, [tweet]);
}