const initialMsg = [
    {
        id:0,
        projectName:"Sathya",
        projectStatus:false
    },
    {
        id:1,
        projectName:"Hello App",
        projectStatus:true
    },
    
]

const ProjectReducer = (state = initialMsg, action) => {
    const newState = [...state]
   
    switch (action.type){
        
        case "ADD_PROJECT":
           return [...newState.concat(action.payload)];
        case "REMOVE_PROJECT":
            return  newState.filter((product) => {
                return product.id !== action.payload;
            });
        case "EDIT_PROJECT":  
        var data = newState.map(item => {
                return item.id === action.payload.id ? action.payload : item;

            })
            return data
            // return [...newState]
             // replace matched item and returns the array 
     
        case "SEARCH_PROJECT":
            const serachArray = [...initialMsg]
            console.log(action.payload)
        if(action.payload){

         return serachArray.filter(product => 
            product.projectName.includes(action.payload.toUpperCase()))


        }else{
             return serachArray
            }
        case "FILTER_PROJECT":
            const filterArray = [...initialMsg]
            if(action.payload){
                return filterArray.filter( (product) => {
                    if(product.projectStatus !== action.payload ){
                        return product
                    
                    }else{
                        return null ;
                    }
                })
            }else{
                return filterArray
            }
           
        default:
            return newState;
    }
};

export default ProjectReducer;