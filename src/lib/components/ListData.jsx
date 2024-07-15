export const ListData = (props) => {
    let database = props.database;

    console.log(database);

    database = database.map((object) => {
        return <h3 key={object.id}>{object.id} - {object.nome} ({object.username}) | +{object.tlf}</h3>
    })
    return (
        <>
            <div>
                {database}
            </div>
        </>
    )
}