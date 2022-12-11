const Clock = ()=>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let status = "am";
    if(hours>=12){
        status = "pm"
    }
    if(hours>12){
        hours-=12;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    return (
        <div className="clock">
            <h1>{hours} : {minutes} {status}</h1>
        </div>
    );
}
export default Clock;