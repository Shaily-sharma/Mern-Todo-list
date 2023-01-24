import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const getData = (data) => {
  return {
    type: "GETDATA",
    payload: data,
  };
};

export const getDataApi = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/read`)
      .then((res) => {
        console.log(res.data);
        dispatch(getData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const postData = (data) => {
  return {
    type: "POSTDATA",
    payload: data,
  };
};

export const postTodo = (data) => async(dispatch)=>{
  console.log(data);
  try{
    const res =await axios.post(`${BASE_URL}/create`,{ data});
    console.log(data);
    dispatch(postData(res.data))
  }catch(error){
    console.log('error calling posttodo api',error.message);
  }
}

export const updateData = (edit) => {
  return {
    type: "UPDATEDATA",
    payload: edit,
  };
};

export const updateTodo = (id, data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .patch(`${BASE_URL}/${id}`, {data})
      .then((res) => {
        console.log(res.data, );
        dispatch(updateData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const deleteData = (dele) => {
  return {
    type: "DELETEDATA",
    payload: dele,
  };
};


export const deleteTodo = (id) => {
  console.log(id,"----id");
  return (dispatch) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
