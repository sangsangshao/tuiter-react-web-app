import {useDispatch, useSelector} from "react-redux";
import {
  deleteTuit,
  addTuit,
  likeTuit,
  unlikeTuit,
  updateTuit
} from "./tuits-reducer";
import {useState} from "react";

const Tuits = () => {
  const [tuitBeingEdited, setTuitBeingEdited] = useState(null)
  const [tuitString, setTuitString] = useState('New Tuit')
  const tuits = useSelector(state => state.tuits)
  const dispatch = useDispatch();

  const deleteTuitHandler = (tuit) => {
    dispatch(deleteTuit(tuit))
  }

  const addTuitHandler = () => {
    dispatch(addTuit(tuitString))
  }

  const likeTuitHandler = (tuit) => {
    dispatch(likeTuit(tuit))
  }
  const unlikeTuitHandler = (tuit) => {
    dispatch(unlikeTuit(tuit))
  }

  const updateTuitHandler =(tuit, newTuitText) => {
    setTuitBeingEdited({...tuitBeingEdited, tuit: newTuitText})
  }

  return (
      <>
      <h3>Tuits</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <input
                onChange={(e) => setTuitString(e.target.value)}
                value={tuitString}/>
            <button
                onClick={addTuitHandler}
                className="btn btn-primary rounded-pill float-end">Tuit</button>
          </li>
          {
            tuits.map(tuit =>
            <li className="list-group-item">
              {
                tuit !== tuitBeingEdited &&
                  <button
                      onClick={() => setTuitBeingEdited(tuit)}
                      className="btn btn-success float-end ms-2">Edit</button>
              }
              {
                tuit === tuitBeingEdited &&
                  <button
                      onClick={() => setTuitBeingEdited(null)}
                      className="btn btn-primary float-end">
                    Done
                  </button>
              }
              <button
                  onClick={() => deleteTuitHandler(tuit)}
                  className="btn btn-danger float-end ms-2">
                  Delete</button>
              {
                !tuit.liked &&
                  <button
                      onClick={() => likeTuitHandler(tuit)}
                      className="btn float-end">
                    Like ({tuit.likes})
                  </button>
              }
              {
                  tuit.liked &&
                  <button
                      onClick={() => unlikeTuitHandler(tuit)}
                      className="btn btn-danger float-end">
                    liked ({tuit.likes})
                  </button>
              }
              {
                tuit !== tuitBeingEdited &&
                  <span>{tuit.tuit}</span>
              }
              {
                tuit === tuitBeingEdited &&
                  <input
                      onChange={(e) => updateTuitHandler(tuit, e.target.value)}
                      value={tuit.tuit}/>
              }
            </li>
            )
          }
        </ul>
      </>
  )
}
export default Tuits;