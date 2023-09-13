import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
const CreateMascota = () => {
    const { register, handleSubmit, reset} = useForm();

    const saveMascota = async (data) => await fetch(
        "https://mascota-67267-default-rtdb.firebaseio.com/mascotas/.json",
        {
            method: "POST",
            body: JSON.stringify(data),
        }
    );


    return (
        <>
            <div className="bg-dark text-white">
                <div className="d-flex gap-3 justify-content-center align-items-center">
                    <img src="https://images.ctfassets.net/1sv59kqumaqp/2ADoT6m1c84hnTZ2VD4YH/e581bb87c9896c7f953c97cb34b4ee7f/mascotas.png" style={{ width: "100px" }} />
                    <h1 className="fs-1 fw-bold">Mascota Adopta</h1>
                </div>
                <div className="mt-5 align-items-center text-center">
                    <h1> Da en Adopcion una mascota</h1>
                    <h2>Coloca sus datos</h2>
                </div>

                <div>
                    <form
                        onSubmit={handleSubmit(saveMascota)}
                        className="p-3 bg-dark text-white border rounded ">
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("nombre")}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Especie</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("especie")}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Raza</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("raza")}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="">Foto</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("foto")}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="">Genero</label>
                            <select className="form-control" {...register("genero")}>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Ubicacion</label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("ubicacion")}
                            />
                        </div>
                        <button type="submit" className="btn btn-secondary mt-3" >
                            Dar en adopcion
                        </button>
                    </form>
                </div>
                <button className="btn">
                    <Link to="/">Regresar</Link>
                </button>
            </div>

        </>
    )
}
export default CreateMascota