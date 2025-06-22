function updateTimes() {
  const indiaTime = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const usaTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("indiaTime").textContent = indiaTime;
  document.getElementById("usaTime").textContent = usaTime;
}
setInterval(updateTimes, 1000);
updateTimes();
