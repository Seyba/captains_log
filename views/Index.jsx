const React = require('react')

const Index = (props) => {
    const { logs } = props
    return(
        <main>
            <h2>Captians Log</h2>
            <ul>
                {
                    logs.map(log => {
                        return(
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}
module.exports = Index