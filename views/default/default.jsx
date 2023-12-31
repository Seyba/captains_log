const React = require('react')
function DefaultLayout({title, children}){
    return(
        <html>
            <head>
                <title>{title}</title>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                {children}
            </body>
        </html>
    )
}

module.exports = DefaultLayout