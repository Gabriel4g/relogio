setInterval(() => {
    const containerHours = document.querySelector(".horas");
    const containerMinutes = document.querySelector(".minutes");
    const containerSeconds = document.querySelector(".seconds");

    const date = new Date;

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    Relogio(containerHours, containerMinutes, containerSeconds)

    function Relogio(ParamHours, ParamMinutes, ParamSeconds) {
        ParamHours.innerHTML = `${hours}`;
        ParamMinutes.innerHTML = `${minutes}`;
        ParamSeconds.innerHTML = `${seconds}`;
    }
}, 1000)