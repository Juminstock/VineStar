async function getData() {
    const res = await fetch('https://api.apillon.io')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function page() {
    const data = await getData()
   
    return <main></main>
  }