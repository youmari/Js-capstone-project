const url = 'https://api.tvmaze.com/shows'

export const getData = () => {
  const response = fetch(url)
    .then(res => res.json())
  return response
}