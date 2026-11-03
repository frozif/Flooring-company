
function LocalApi({contact}){
localStorage.setItem('emailInfo', JSON.stringify(contact))
  return Promise.resolve();
}


export default LocalApi