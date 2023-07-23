import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:'userManagement',
    initialState:{
        userDetails:[],
        adminDetails:[]
    },
    reducers:{
        //action
        postUser:(state,action)=>{
         
           
          console.log('current details ',state.userDetails)

           console.log('action details',action.payload)
           let data=action.payload
           if(state.length!==0)
           {
            console.log('current data poped');
            state.userDetails.pop()
           }
           state.userDetails.push(data)
           console.log('after pushing state status ');
           console.log(state)

        },
        postAdmin:(state,action)=>{
            console.log('current details ',state.adminDetails)

            console.log('action details',action.payload)
            let data=action.payload
            // if(state.length!==0)
            // {
            //  console.log('current data poped');
            //  state.admin.pop()
            // }
            state.adminDetails.push(data)
            console.log('after pushing state status ');
            console.log(state.adminDetails)

        }
    }
})

export const {postUser,postAdmin}=Slice.actions
export default Slice.reducer