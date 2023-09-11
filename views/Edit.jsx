const React = require('react')
const DefaultLayout = require('./default/default')

const Edit = (props) => {
    const { log } = props
    return(
        <DefaultLayout title="Edit Log">
            <form className="w-1/4 mt-8" action={`/api/logs/${log._id}?_method=PUT`} method="POST">
                <div className="my-2">
                    <label className="block text-md font-medium leading-6 text-gray-900">Title</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input 
                            type="text" 
                            name="title" 
                            defaultValue={log.title}
                            placeholder="Enter title"
                            className="block w-full flex-1 shadow-sm border-0 bg-transparent rounded-md ring-1 ring-inset ring-gray-300 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />  
                    </div>
                </div>
                
                <div className="my-2">
                    <label className="block text-md font-medium leading-6 text-gray-900">Entry</label>
                    
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <textarea 
                            name="entry" 
                            defaultValue={log.entry}
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >

                        </textarea>
                    </div>
                    
                </div>
                
                <label>Is Ship Broken? </label>
                <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken}/>
                
                <div>
                    <input 
                        className="rounded-md bg-blue-900 px-2.5 py-1.5 text-sm font-semibold text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-700"
                        type="submit" 
                        value="Edit Log"
                    />
                </div>
            </form>
        </DefaultLayout>
    )
}

module.exports = Edit