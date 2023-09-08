const React = require('react')

const Edit = (props) => {
    const { log } = props
    return(
        <main>
            <h2>Edit</h2>
            <form action={`/api/logs/${log._id}?_method=PUT`} method="POST">
                <label>Title: </label>
                <input type="text" name="title" defaultValue={log.title}/>
                <labe>Entry:</labe>
                <textarea name="entry" defaultValue={log.entry}></textarea>
                <label>Is Ship Broken? </label>
                <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken}/>
                <input type="submit" value="Submit Log"/>
            </form>
        </main>
    )
}

module.exports = Edit