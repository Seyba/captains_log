const React = require('react')
const DefaultLayout = require('./default/default')

const Index = (props) => {
    const { logs } = props
    return(
        <DefaultLayout title="Captains Log">
            
            <a 
                className="mt-8 font-medium text-lg text-blue-700 hover:text-blue-400"
                href="/logs/new"
            >
                Create a New Log
            </a>
            <ul className="divide-y divide-gray-100">
                {
                    logs.map(log => {
                        return(
                            
                            <li className="flex justify-between gap-x-6 py-5" key={log._id}>
                                
                                <form method="POST" action={`/api/logs/${log._id}?_method=DELETE`}>
                                    <input 
                                        type="submit" 
                                        value="Delete Log"
                                        className="rounded-md bg-blue-900 px-2.5 py-1.5 text-sm font-semibold text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700"
                                    />
                                </form>
                                <div className="min-w-0 flex-auto">
                                    <a  className="text-md font-semibold leading-6 text-gray-900" href={`/logs/${log._id}`}>{log.title}</a>
                                </div>
                                
                                <a 
                                    href={`/logs/${log._id}/edit`}
                                    className="rounded-md bg-blue-900 px-2.5 py-1.5 text-sm font-semibold text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700"
                                >
                                    Edit log
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </DefaultLayout>
    )
}
module.exports = Index