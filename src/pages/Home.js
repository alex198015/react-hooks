import React, { Fragment,useContext } from 'react'
import { Search } from './../component/Search';
import { Card } from './../component/Card';
import { GithubContext } from './../context/github/githubContext';

export const Home = () => {
    const{loading, users} = useContext(GithubContext)
    // const cards = new Array(15)
    //     .fill('')
    //     .map((_, i) => i)        
    return (
        <Fragment>
            <Search />

            <div className="row">
                
                {
                loading ? <p className="text-center">Загрузка...</p> :
                users.map(user => (
                            <div className="col-sm-4 col-md-3 mb-4 col-lg-2" key={user.id}>
                        <Card user={user}/>
                    </div>
                        )
                    )
                
                }
                
                
            </div>
        </Fragment>
    )
}