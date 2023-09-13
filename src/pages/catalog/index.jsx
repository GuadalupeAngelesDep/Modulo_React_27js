import CardMascota from "../../componets/CardMascota/Index";
import React, { useState, useEffect } from "react";
import mascotasApi from "../../lib/mascotasApi"
import { Link, Outlet } from "react-router-dom";

const Catalog = () => {
    const [filter, setFilter] = useState("especie");
    const [especieValue, setEspecieValue] = useState("");
    const [razaValue, setRazaValue] = useState("");
    const [mascotas, setMascotas] = useState([]);
    const [especies, setEspecies] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const filterHandler = (event) => {
        setFilter(event.target.value);
    };

    const filterDataHandler = (event) => {
        const value = event.target.value;
        switch (filter) {
            case "especie":
                const filterDataEspecie = () => {
                    return mascotas.filter((mascota) => {
                        return mascota[1].especie == value;
                    })
                }
                const dataEspecie = filterDataEspecie();
                setFilterData(dataEspecie);
                break;
            case "raza":
                const filterDataRaza = () => {
                    return mascotas.filter((mascota) => {
                        return mascota[1].raza.includes(value);
                    })
                }
                const dataRaza = filterDataRaza();
                setFilterData(dataRaza);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const getAllMascotas = async () => {
            const mascotasData = await mascotasApi.getAllMascotas();
            setMascotas(Object.entries(mascotasData));
            setEspecies(
                Object.values(mascotasData).reduce((accum, current) => {
                    return accum.includes(current.especie)
                        ? [...accum]
                        : [...accum, current.especie];
                }, [])
            );
        };
        getAllMascotas();
    }, []);


    return (
        <>
            <div className="bg-dark text-white ">
                <div className=" align-items-center">
                    <div className="d-flex gap-3 justify-content-center">
                        <img src="https://images.ctfassets.net/1sv59kqumaqp/2ADoT6m1c84hnTZ2VD4YH/e581bb87c9896c7f953c97cb34b4ee7f/mascotas.png" style={{ width: "100px" }} />
                        <h1 className="fs-1 fw-bold">Mascota Adopta</h1>
                    </div>
                    <div className="">
                        <button className="btn btn-light">
                            <Link to="create">Poner en adopcion</Link>
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-sm-around align-items-center mt-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="specie" value="especie" checked={filter == "especie"}
                            onChange={(event) => filterHandler(event)} />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Especie
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="race" value="raza"
                            checked={filter == "raza"}
                            onChange={(event) => filterHandler(event)} />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Raza
                        </label>
                    </div>
                    {filter == "especie" && (
                        <select className="form-select bg-dark text-white  w-50" aria-label="Default select example" onChange={(event) => filterDataHandler(event)}>
                            <option defaultValue=""> Especies </option>
                            {especies && especies.map((especie) => {
                                return (
                                    <option key={especie} value={especie}>{especie}</option>
                                )
                            })}
                        </select>
                    )}
                    {filter == "raza" && (
                        <div className="form-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                id="raza"
                                placeholder="Filtro por raza"
                                onChange={(event) => filterDataHandler(event)}
                            />
                        </div>
                    )}
                </div>

                <div className="row row-cols-4 g-3 mt-5">
                    {filterData && filterData.length > 0 ? (
                        filterData.map((mascota) => {
                            return (
                                <CardMascota key={mascota[0]} mascotaObject={mascota[1]} id={mascota[0]} />
                            );
                        })
                    ) : mascotas ? (
                        mascotas.map((mascota) => {
                            return (
                                <CardMascota key={mascota[0]} mascotaObject={mascota[1]} id={mascota[0]}  />
                            );
                        })
                    ) : (
                        <p className="text-danger">No se encontro ninguna mascota</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Catalog;