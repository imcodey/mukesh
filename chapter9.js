// callback 
const loadScript = (src)=>{
    let script = document.createElement("script")
    script.src = src;
    document.body.appendChild(script)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")