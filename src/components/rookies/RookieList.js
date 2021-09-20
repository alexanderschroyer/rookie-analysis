import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllRookies } from "../APIManager"
import "./RookieList.css"

export const RookieList = () => {
    const [rookies, setRookies] = useState([])

    useEffect(
        () => {
            getAllRookies()
                .then((rookieData) => {
                    setRookies(rookieData)
                })
        },
        []
    )

    return (
        <>
            <div className="rookies">
                {
                    rookies.map(
                        (rookie) => {
                            return <div key={`rookie--${rookie.id}`}>
                                <Link to={`/rookies/${rookie.id}`}> <li className={`rookie`}> {rookie.name} </li> </Link>
                            </div>
                        }
                    )
                }
            </div>
        </>
    )
}