import React from 'react'


export type Props = {title: string; children?: React.ReactNode;}

export const Main = ({title='My photo album', children}: Props) => {

    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Main;