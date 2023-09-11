const React = require('react')
const DefaultLayout = require('./default/default')

const Index = (props) => {
    const { logs } = props
    return(
        <DefaultLayout title="Captains Log">
            
            <a href="/logs/new">Create a New Log</a>
            <ul className="divide-y divide-gray-100">
                {
                    logs.map(log => {
                        return(
                            
                            <li className="flex justify-between gap-x-6 py-5" key={log._id}>
                                
                                <form method="POST" action={`/api/logs/${log._id}?_method=DELETE`}>
                                    <input type="submit" value="Delete Log"/>
                                </form>
                                <div className="min-w-0 flex-auto">
                                    <a  className="text-md font-semibold leading-6 text-gray-900" href={`/logs/${log._id}`}>{log.title}</a>
                                </div>
                                
                                <a href={`/logs/${log._id}/edit`}>Edit log</a>
                            </li>
                        )
                    })
                }
            </ul>
        </DefaultLayout>
    )
}
module.exports = Index