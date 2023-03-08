const header = (req_headers) => {
    return {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Your-IP": req_headers.get("cf-connecting-ip"),
        "Your-Country": req_headers.get("CF-IPCountry"),
        "Host": req_headers.get("host"),
        "Made-By": atob('TmlybWFseWEgTXVraGVyamVlICwgaHR0cHM6Ly9naXRodWIuY29tL05pcm1hbHlhNjE=')
    }
}

export default header