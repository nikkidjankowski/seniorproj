import weirfall from "../weirfall.png"
function Home() {
    return(
    <div >
        <div className={"grid-3-6-3"}>
            <span></span>
        <img src={weirfall} alt="" className={"w-100p"}/>
        </div>
        <p className={"text-blue font-strong"}>Home</p>
        <p className={"text-blue"}>Welcome To WeReserve!</p>
        <p className={"text-babyblue"}>The only app made to reserve rooms in Weir Hall at Ole Miss!</p>
    </div>
    )
}

export default Home;