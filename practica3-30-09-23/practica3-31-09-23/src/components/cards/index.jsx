const CardTeam = ({ name, photo, add,id }) => {

    return (
        <>
            <div className="card bg-dark bg-gradient text-center shadow" style={{ width: "210px" }} >
                <img src={photo} className="mx-auto rounded-circle w-50 h-50" />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-white" key={id}>{name}</h5>
                    <button href="#" className="btn btn-primary" onClick={ev => add(ev,id,name)}>Add Team</button>
                </div>
            </div>
        </>
    )
}
export default CardTeam;