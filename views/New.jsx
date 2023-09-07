const React = require('react')

const New = () => {
    return(
        <main>
            <h2>New</h2>
            <form action="/logs" method="POST">
                <label>Title: </label>
                <input type="text" name="title"/>
                <labe>Entry:</labe>
                <textarea name="entry"></textarea>
                <label>Is Ship Broken? </label>
                <input type="checkbox" name="shipIsBroken"/>
                <input type="submit" value="Submit Log"/>
            </form>
        </main>
    )
}

module.exports = New