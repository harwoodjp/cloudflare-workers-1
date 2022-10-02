const view = "resource_readable"
const url =  `https://lnijcvacewqydytrkjiu.supabase.co/rest/v1/${view}?select=*`

async function handleRequest() {
  const response = await fetch(url, {
    headers: {
      "apikey": API_KEY,
      "Authorization": `Bearer ${API_KEY}`
    }
  })
  const results = await response.json()
  console.log(results)
  return new Response(JSON.stringify(results), {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Access-Control-Allow-Headers": "*"
    }
  })
}

addEventListener('fetch', event => event.respondWith(handleRequest()))