import React from 'react'

const Search = (props) => {
    const {submitHandler, searchTerms, changeHandler} = props
    return (
        
        <form className="row pt-5" onSubmit={ submitHandler }>
            <div className="col-sm-6 form-group">
                <label htmlfor = "category" className="col-sm-4">serach for: </label>
                <select name="category" className="col-sm-8 form-control" onChange={changeHandler}>{/*/passes entire event  */}
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                </div>
                <div className="col-sm-6 form-group">
                    <div className="form-group col-sm-5">
                        <label htmlFor="id" className="col-sm-4">Id: </label>
                        <input type="number" name="id" className="col-sm-8 form-control" onChange={ changeHandler} value={searchTerms.id}/>
                    </div>
                    <div className="form-group col-sm-7">
                        <input type="submit" value="search"  className="col-sm btn btn-primary"/>
                    </div>
                </div>
        </form>
        
    )
}

export default Search
