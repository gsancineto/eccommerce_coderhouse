export default function Loading(){
    return(
        <>
            <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
            </div>
            <span className="sr-only">Cargando...</span>
        </>
    )
}