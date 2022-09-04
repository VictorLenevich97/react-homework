export const formFetch = (user, setIsFormsubmit, setIsErrorCatch) => {
    fetch('https://studapi.teachmeskills.by/auth/users/', {
           method: 'POST',
           body: JSON.stringify(user),
           headers: {
               'Content-Type': 'application/json'
           }
       }).then(response => {
           if (response.ok) {
               setIsFormsubmit(true)
               return response.json()
           }
           return response.json().then(error => {
               setIsErrorCatch(true)
               const e = new Error('Что-то пошло не так')
               e.data = error
               throw e
           })
       }).then(data => console.log(data)).catch(err => console.log(err))

}