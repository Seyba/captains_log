const React = require('react')
const DefaultLayout = require('./default/default')

const Show = (props) => {
    const { title, entry, shipIsBroken, createdAt} = props.log
    const formattedDate = createdAt.toISOString().slice(0, 16).replace('T', ' ')
    const boolValue = (shipIsBroken? 'Ship is broken' : 'Ship is not broken')
    return(
        <DefaultLayout title="Log Details">
            <h2>Logs</h2>
            <h3>{title}</h3>
            <h3>{entry}</h3>
            <h3>{boolValue}</h3>
            <h3>{formattedDate}</h3>
            <a href="/logs">Back</a>
        </DefaultLayout>
    )
}

module.exports = Show