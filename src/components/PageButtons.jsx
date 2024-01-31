import { useEffect, useRef, useState } from 'react'


const PageButtons = ({ productsLength, limit, setPageNumber }) => {

    const [pages, setPages] = useState(1)

    useEffect(() => {

        let numOfPages = productsLength / limit
        setPages(Math.ceil(numOfPages))

    }, [productsLength])


    return (
        <>
            <span>
                <button>Back</button>

                {[...Array(pages)].map((_, i) =>
                    <button key={i} onClick={() => setPageNumber(i + 1)}>{i + 1}</button>
                )}

                <button>Next</button>
            </span>
        </>
    )

}

export default PageButtons;