note over browser:
browser sends JSON data to the server
and redirects to the address defined in the header
end note

browser->server: HTTP PUT https://fullstack-exampleapp.herokuapp.com/new_note [{ note: "HTML is easy" }]
server-->browser: redirect to https://fullstack-exampleapp.herokuapp.com/notes

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note