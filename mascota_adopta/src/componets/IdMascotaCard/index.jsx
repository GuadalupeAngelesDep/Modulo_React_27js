const IdMascota =({mascota})=>{
        const { foto, raza, especie, nombre } = mascota;
        
        return (
            <>
                <div class="col">
                    <div className="card  bg-black bg-gradient text-white text-center align-items-center"  >
                        <img src={foto} className="card-img-top" alt="..." style={{ width: "300px", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{raza}</p>
                            <p className="card-text">{especie}</p>
                        </div>
                    </div>
                </div>
            </>
        )
}
export default IdMascota