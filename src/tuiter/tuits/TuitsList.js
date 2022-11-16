import React, {useEffect} from "react";
import TuitListItem from "./TuitItem.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

// const selectAllTuits = (state) => state.tuits;

const TuitList = () => {
  // const tuits = useSelector(selectAllTuits);
  const {tuits, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])

  return (
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }

        {
          tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
        }
      </ul>
  )
}

export default TuitList