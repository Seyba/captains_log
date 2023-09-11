const React = require('react')
const DefaultLayout = require('./default/default')

const Show = (props) => {
    const { title, entry, shipIsBroken, createdAt} = props.log
    const formattedDate = createdAt.toISOString().slice(0, 16).replace('T', ' ')
    const boolValue = (shipIsBroken? 'Ship is broken' : 'Ship is not broken')
    return(
        <DefaultLayout title="Log Details">

                <div className="p-2 w-1/4">
                    <div className="mt-6 border-t border-gray-300">
                        <dl className="divide-y divide-gray-350">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-md font-medium leading-6 text-gray-900">Log Title</dt>
                                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{title}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-md font-medium leading-6 text-gray-900">Log Entry</dt>
                                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{entry}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-md font-medium leading-6 text-gray-900">Ship is broken?</dt>
                                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{boolValue}</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-md font-medium leading-6 text-gray-900">Log Date</dt>
                                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{formattedDate}</dd>
                            </div>
                        </dl>
                        <div className=" flex-shrink-0">
                            <a href="/logs" className="font-medium text-blue-700 hover:text-blue-500">
                                Back
                            </a>
                        </div>
                    </div>
                
                </div>
            
            
        </DefaultLayout>
    )
}

module.exports = Show