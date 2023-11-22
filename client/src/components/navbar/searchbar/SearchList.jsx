import './Searchlist.css';
import {FaSearch} from 'react-icons/fa';

function SearchList({TitleArray,setsearchQuery}) {
  return (
    <>
    <div className="Container_Searchlist">
        { TitleArray.map(m=>{
                return(
                    <p className="titleItem" key={m} onClick={e=>setsearchQuery(m)}>
                        <FaSearch/>
                        {m}
                    </p>
                )
            })
        }
    </div>
    </>
  )
}

export default SearchList