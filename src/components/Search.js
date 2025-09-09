import React, { useEffect, useState } from 'react'
import { fetchData } from './redux/action/actionCreator.js'
import { useSelector, useDispatch } from 'react-redux'

export default function Search() {
    const [search, setSearch] = useState("")
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()
    const y = useSelector(x => x)

    const result = y?.data?.Search;
    let status = y?.data.Response;
    let Error = y?.data.Error;




    useEffect(() => {
        if (flag) {
            dispatch(fetchData(search))
            setFlag(false)
        }
    }, [flag])




    return (
        <div>
            <h1>Search Movie</h1>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => setFlag(true)}>Search</button>
            </div>
            <div>

                {status == "True" && result ? (
                    <>
                        <ul>
                            {result.map((v) => {
                                return <li>
                                    <h2>{v.Title}</h2>
                                    <img src={v.Poster} />
                                </li>
                            })}
                        </ul>
                    </>
                ) : (
                    <>
                        <p>{Error}</p>
                    </>
                )}





            </div>

        </div>
    )
}