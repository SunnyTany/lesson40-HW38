const API_URL:string = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}