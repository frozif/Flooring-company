
function ServerApi({contactInfo}){

return ( 
          fetch('http://localhost:3001/Contact', {
          method: 'POST', 
        headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(contactInfo)
        })
)
}


export default ServerApi