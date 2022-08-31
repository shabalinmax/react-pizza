import React from "react";
let categoryArray = [`Все`,`Мясные`,`Гриль`,`Острые`,`Закрытые`,`Вегетарианская`, ]

function Categories ({categoryId,setCategoryId}) {
    const onClickCategory = (i) => {
        setCategoryId(i)
    }
    React.useEffect(() => {
        console.log(categoryId)

    },[categoryId])
    return (
        <div className="categories">
            <ul>
                {categoryArray.map((categoryArray, index, ) =>
                    <li key={index} onClick={() => onClickCategory(index)} className={categoryId === index ? 'active'  : ``}>
                        {categoryArray}
                    </li>)
                }
            {/*вот эта хуйня рендерит категории пицц. Инфа берется из categoryArray и дает возможность выбрать визуально категори**/}
            </ul>
    </div>)
}

export default Categories;