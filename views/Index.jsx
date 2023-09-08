const React = require('react')

const Index = (props) => {
    const { logs } = props
    return(
        <main>
            <h2>Captians Log</h2>
            <a href="/logs/new">Create a New Log</a>
            <ul>
                {
                    logs.map(log => {
                        return(
                            
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                                <form method="POST" action={`/api/logs/${log._id}?_method=DELETE`}>
                                    <input type="submit" value="Delete Log"/>
                                </form>
                                <a href={`/logs/${log._id}/edit`}>Edit log</a>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}
module.exports = Index