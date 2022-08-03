import axios from "axios";

export const startAddNote=(data)=>{
    return(dispatch)=>{
        axios.post(`http://dct-user-auth.herokuapp.com/api/notes` , data , {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result = res.data
             dispatch(addNotes(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const addNotes=(data)=>{
    return {
        type : 'ADD_NOTE',
        payload : data
    }
}


export const startGetNote=()=>{
    return(dispatch)=>{
    axios.get(`http://dct-user-auth.herokuapp.com/api/notes` , {
        headers : {
            'x-auth' : localStorage.getItem('token')
        }
    })
    .then((res)=>{
        const result=res.data
         dispatch(getNote(result))
    })
    .catch((err)=>{
        alert(err.message)
    })
     
    }
}

export const getNote=(data)=>{
    return {
        type : 'GET_NOTE' ,
        payload : data
    }
}


export const startDelete =(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}` , {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((res)=>{
         const result = res.data 
          if(result.hasOwnProperty('errors')){
            alert(result.errors)
          } else {
             dispatch(deleteNote(id))
          }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const deleteNote=(id)=>{
     return {
        type : 'DELETE_NOTE' ,
        payload : id
     }
}