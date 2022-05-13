{
    const script = document.createElement("script");
    script.src = new URL("./build1.js", import.meta.url);
    script.type = "application/javascript";
    document.appendChild(script);
}

console.log("build #2");
