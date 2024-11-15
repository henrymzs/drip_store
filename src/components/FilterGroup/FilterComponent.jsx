import "./FilterComponent.css"

export default function FilterComponent({title, inputType, options}) {

    return(
    
        <div className="filterComponent">
            <h3 className="filterTitle">{title}</h3>
            <div className="filterOptions">
            {options.map((option, index) => (
               <label key={index}  className="filterLabel">
                <input type={inputType} value={option.value} name="Filters" className="filterInput"/>
                {option.text}
                <span className="customCheckmark"></span>
               </label>
                
            ))}
            </div>
        </div>
        
    )
    }