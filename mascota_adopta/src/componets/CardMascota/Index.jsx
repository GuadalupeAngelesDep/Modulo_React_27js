import { Link, Outlet } from "react-router-dom";
const CardMascota = ({ mascotaObject , id}) => {
   
    const { foto, raza, especie, nombre } = mascotaObject;
    return (
        <>

            <div class="col">
                <div className="card  bg-black bg-gradient text-white text-center align-items-center"  >
                    <img src={foto} className="card-img-top" alt="..." style={{ width: "300px", height: "250px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{raza}</p>
                        <p className="card-text">{especie}</p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary">Adoptame</button>
                            <button className="btn btn-light"><Link to={`/edit/${id}`}>Editar</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardMascota