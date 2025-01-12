function getBrowser() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Firefox")) {
        return "firefox";
    } else if (userAgent.includes("Edg")) {
        return "edge";
    } else if (userAgent.includes("Chrome")) {
        return "chrome";
    } else if (userAgent.includes("Safari")) {
        return "safari";
    } else {
        return "browser";
    }
}

const browser = getBrowser();
const filePath = "/home/index.html";
document.getElementById("command").textContent = `${browser} ${filePath}`;