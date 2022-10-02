import { AwsClient } from "aws4fetch"

const aws = new AwsClient({
    "accessKeyId": AWS_ACCESS_KEY_ID,
    "secretAccessKey": AWS_SECRET_ACCESS_KEY,
    "region": AWS_DEFAULT_REGION
})
const bucket = "harwoodjp-private-music"

async function handleRequest(request) {
    const url = new URL(request.url)
    url.hostname = `${bucket}.s3.amazonaws.com`
    const signedRequest = await aws.sign(url)
    return await fetch(signedRequest, { "cf": { "cacheEverything": true } })
}

// addEventListener('fetch', event => event.respondWith(handleRequest()))
addEventListener('fetch', event => event.respondWith(handleRequest(event.request)))
