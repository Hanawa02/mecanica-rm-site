export function useGraphqlRequest(query: string, locale: string = "en") {
  return {
    url: import.meta.env.PUBLIC_API_URL,
    config: {
      method: "Post",
      headers: { "Content-Type": "application/json", "gcms-locales": locale },
      body: JSON.stringify({
        query,
      }),
    },
  };
}
