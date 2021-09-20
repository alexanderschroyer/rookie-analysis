import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import { getAllRookies, getAllUsers, getCurrentUser } from "../APIManager"
import "./UserRankList.css"

export const UserRankList = () => {
    const [users, setUser] = useState({})
    const [rookie,] = useState([])
    const [rookies, setRookies] = useState([])
    const [id, setId] = useState({})
    const [list, setList] = useState([])
    const { userId } = useParams()
    const history = useHistory()
    // const currentUser = getCurrentUser()
    // const users = getAllUsers()

    useEffect(
        () => {
            getAllUsers()
            .then((userData) => {
                setUser(userData)
            })
        }, [userId]
    )

    useEffect(
        () => {
            getAllRookies()
                .then((rookieData) => {
                    setRookies(rookieData)
                })
        },
        []
    )

    const saveId = (event) => {
        event.preventDefault()

        const fetchOption = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: rookie.id
            })
        }

        return fetch(`http://localhost:8088/userRankList/${userId}?_expand=user`, fetchOption)
            .then(() => { history.push(`/rankings`) })
    }

    return (
        <>
            {/* <div className="user__list__top">
                {
                    users.map(
                        (user) => {
                        if (user.id === parseInt(currentUser)) {
                          return <div key={`user--${user.id}`}>
                              <h4 className="list__user">{user.name}'s Rankings</h4>
                              </div>
                        } else {
                            
                        }
                    })
                }
            </div> */}
            <div className="rookies">
                <select>
                    <option>{rookies.name}</option>
                </select>
                {
                    rookies.map(
                        (rookie) => {
                            return <div key={`rookie--${rookie.id}`}>
                                <Link to={`/rookies/${rookie.id}`}> <ol className={`rookie`}> {rookie.name} </ol> </Link>
                                <select>
                                 <option
                                //  onChange={
                                //      (event) => {
                                //          const copy = {...id}
                                //          copy.id = event.target.value
                                //          setId(copy)
                                //      }
                                //  } 
                                //  required autoFocus
                                //  type="text" 
                                //  defaultValue={rookie.id} 
                                //  id="inputId"
                                 >{rookie.name}</option>
                                </select>
                            </div>
                        }
                    )
                }
                <button id="" className="btn btn-primary" onClick={saveId}>Submit Rankings</button>
            </div>
        </>
        
    )
}